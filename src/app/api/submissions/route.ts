/**
 * POST /api/submissions - the only write path for the public contact form and the
 * "Get started" project wizard (form-bot-defence, 2026-10-01).
 *
 * Order: parse -> bot signals + content sanity -> Turnstile (fail-closed) -> durable
 * per-IP / per-email limits -> service-role insert -> owner email. Nothing reaches
 * the database or the inbox before the checks pass. Replaces the browser-side anon
 * insert into project_submissions and the unauthenticated /api/notify-submission
 * route (which any script could use to send mail to the owners).
 */
import { NextResponse } from 'next/server';
import { createHash } from 'node:crypto';
import { guardPublicForm } from '@/lib/security/form-guard';
import { clientIpFromHeaders } from '@/lib/security/turnstile';
import { getServiceClient } from '@/lib/server/supabase-admin';
import { sendSubmissionEmail } from '@/lib/server/submission-email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SITE_ID = 'rapid-entrepreneurs';
const PROJECT_TYPES = new Set(['website', 'webapp', 'mobile', 'ai', 'social', 'full-package']);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Body = Record<string, unknown>;
type JsonPrimitive = string | number | boolean | null;
type JsonDetails = Record<string, JsonPrimitive | string[]>;

const str = (v: unknown, max: number): string => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const orNull = (s: string): string | null => (s ? s : null);
const sha = (s: string) => createHash('sha256').update(s).digest('hex');

/** Keep only primitive values / string arrays from a client-built details object. */
function details(v: unknown): JsonDetails | null {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  const out: JsonDetails = {};
  for (const [key, value] of Object.entries(v as Record<string, unknown>).slice(0, 20)) {
    const k = key.slice(0, 40);
    if (typeof value === 'string') out[k] = value.trim().slice(0, 500);
    else if (typeof value === 'boolean' || (typeof value === 'number' && Number.isFinite(value))) out[k] = value;
    else if (value === null) out[k] = null;
    else if (Array.isArray(value))
      out[k] = value.filter((x): x is string => typeof x === 'string').map((x) => x.trim().slice(0, 60)).slice(0, 20);
  }
  return out;
}

const refuse = (detail: string, status = 400, reason?: string) =>
  NextResponse.json({ ok: false, reason, detail }, { status });

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Body | null;
  if (!body) return refuse('Please check the form and try again.');
  const kind = body.kind === 'contact' ? 'contact' : body.kind === 'project' ? 'project' : null;
  if (!kind) return refuse('Please check the form and try again.');

  const name = str(body.name, 120);
  const email = str(body.email, 254).toLowerCase();
  const phone = str(body.phone, 40);
  const company = str(body.company, 160);
  const subject = str(body.subject, 200);
  const message = kind === 'contact' ? str(body.message, 5000) : str(body.project_description, 5000);
  const projectType = kind === 'contact' ? 'contact' : str(body.project_type, 40);

  if (name.length < 2 || !EMAIL.test(email)) return refuse('Please enter your name and a valid email address.');
  if (kind === 'contact' && !message) return refuse('Please write a short message.');
  if (kind === 'project' && !PROJECT_TYPES.has(projectType)) return refuse('Please choose a project type.');

  const ip = clientIpFromHeaders(req.headers);
  const guard = await guardPublicForm({
    honeypot: str(body.website, 200) || str(body.honeypot, 200),
    formStartedAt: typeof body.form_started_at === 'number' ? body.form_started_at : null,
    turnstileToken: str(body.turnstile_token, 2048) || null,
    ip,
    message: message || null,
    name,
  });
  if (!guard.ok) {
    // A filled honeypot is a bot: pretend it worked so it does not adapt.
    if (guard.reason === 'honeypot') return NextResponse.json({ ok: true });
    return refuse(guard.message, 400, guard.reason);
  }

  let db;
  try {
    db = getServiceClient();
  } catch (err) {
    console.error('[submissions] service client', err);
    return refuse('This form is temporarily unavailable. Please email us directly.', 503);
  }

  const within = async (bucket: string, limit: number, seconds: number): Promise<boolean> => {
    const { data, error } = await db.rpc('pwd_rate_limit', {
      bucket_key: `re:${sha(bucket)}`,
      max_requests: limit,
      window_seconds: seconds,
    });
    if (error) throw new Error(`Rate limiter unavailable: ${error.message}`);
    return data === true;
  };
  try {
    if (!(await within(`ip:${ip ?? 'unknown'}`, 5, 3600)) || !(await within(`email:${email}`, 3, 3600))) {
      return NextResponse.json(
        { ok: false, reason: 'rate_limited', detail: 'Too many messages from this connection. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '3600' } },
      );
    }
  } catch (err) {
    console.error('[submissions] rate limit', err);
    return refuse('This form is temporarily unavailable. Please email us directly.', 503);
  }

  const flags = guard.flags;
  const row = {
    site_id: SITE_ID,
    project_type: projectType,
    project_description: orNull(message),
    website_details: kind === 'project' ? details(body.website_details) : null,
    ai_automation: kind === 'project' ? details(body.ai_automation) : null,
    social_media: kind === 'project' ? details(body.social_media) : null,
    budget_range: kind === 'project' ? orNull(str(body.budget_range, 40)) : null,
    timeline: kind === 'project' ? orNull(str(body.timeline, 40)) : null,
    urgency: kind === 'project' ? orNull(str(body.urgency, 40)) : null,
    contact_name: name,
    contact_email: email,
    contact_phone: orNull(phone),
    company_name: orNull(company),
    preferred_contact: kind === 'project' ? orNull(str(body.preferred_contact, 40)) : 'email',
    best_time_to_call: kind === 'project' ? orNull(str(body.best_time_to_call, 80)) : null,
    additional_notes: kind === 'contact' ? (subject ? `Subject: ${subject}` : null) : orNull(str(body.additional_notes, 5000)),
    ai_summary: kind === 'project' ? orNull(str(body.ai_summary, 20000)) : null,
    status: 'new',
    notification_status: 'pending',
    notes: flags.length ? `Review signals: ${flags.join(', ')}` : null,
  };

  const { data: inserted, error: insertError } = await db.from('project_submissions').insert(row).select('id').single();
  if (insertError || !inserted) {
    console.error('[submissions] insert', insertError);
    return refuse('Something went wrong saving your details. Please try again or email us directly.', 500);
  }
  const id = String(inserted.id);

  // Notify AFTER the checks and the save. A mail failure never loses the enquiry.
  let notified = false;
  try {
    await sendSubmissionEmail({
      id,
      kind,
      contact_name: name,
      contact_email: email,
      contact_phone: orNull(phone),
      company_name: orNull(company),
      project_type: projectType,
      budget_range: row.budget_range,
      timeline: row.timeline,
      subject: orNull(subject),
      message: orNull(message),
      flags,
    });
    notified = true;
  } catch (err) {
    console.error('[submissions] notify', err);
  }
  await db
    .from('project_submissions')
    .update({ notification_status: notified ? 'sent' : 'failed' })
    .eq('id', id);

  return NextResponse.json({ ok: true, id, flags });
}
