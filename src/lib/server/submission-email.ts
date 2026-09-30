/**
 * Owner notification for Rapid Entrepreneurs enquiries (contact form + project wizard).
 * Sent ONLY after the bot guard, rate limits and the database insert have passed —
 * nothing reaches the inbox before the checks. All user text is HTML-escaped.
 */

export type SubmissionKind = 'contact' | 'project';

export interface SubmissionEmailData {
  id: string;
  kind: SubmissionKind;
  contact_name: string;
  contact_email: string;
  contact_phone?: string | null;
  company_name?: string | null;
  project_type: string;
  budget_range?: string | null;
  timeline?: string | null;
  subject?: string | null;
  message?: string | null;
  flags: string[];
}

const PROJECT_TYPE_LABELS: Record<string, string> = {
  website: 'Website',
  webapp: 'Web Application',
  mobile: 'Mobile App',
  ai: 'AI Automation',
  social: 'Social Media',
  'full-package': 'Full Digital Package',
  contact: 'General enquiry',
};
const BUDGET_LABELS: Record<string, string> = {
  '1000-3000': '$1,000 - $3,000',
  '3000-5000': '$3,000 - $5,000',
  '5000-10000': '$5,000 - $10,000',
  '10000-20000': '$10,000 - $20,000',
  '20000+': '$20,000+',
  unsure: 'Not sure - needs quote',
};
const TIMELINE_LABELS: Record<string, string> = {
  asap: 'ASAP (Rush)',
  '1-2weeks': '1-2 weeks',
  '1month': '1 month',
  '2-3months': '2-3 months',
  '3months+': '3+ months',
  flexible: 'Flexible',
};

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function recipients(): string[] {
  const extra = (process.env.SUBMISSION_NOTIFICATION_EMAILS || 'toti@pacificwavedigital.com')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
  return Array.from(new Set(['steve@pacificwavedigital.com', ...extra]));
}

export function buildSubmissionEmail(data: SubmissionEmailData): { subject: string; html: string; text: string } {
  const typeLabel = PROJECT_TYPE_LABELS[data.project_type] || data.project_type;
  const isContact = data.kind === 'contact';
  const subject = isContact
    ? `✉️ New message: ${data.contact_name}${data.subject ? ` - ${data.subject}` : ''}`
    : `🎯 New Project Inquiry: ${data.contact_name} - ${typeLabel}`;

  const row = (label: string, value: string | null | undefined) =>
    value ? `<p style="margin:6px 0"><strong>${label}:</strong> ${esc(value)}</p>` : '';
  const reviewBanner = data.flags.length
    ? `<div style="background:#fff7ed;border:1px solid #fdba74;border-radius:10px;padding:12px 16px;margin-bottom:20px;color:#9a3412;font-size:14px"><strong>Review signals:</strong> ${esc(data.flags.join(', '))} - passed the bot checks but looks unusual; verify before replying.</div>`
    : '';

  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #233C6F 0%, #1a2d52 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">${isContact ? '✉️ New Contact Message' : '🎯 New Project Inquiry'}</h1>
          <p style="color:#c7d2fe;margin:8px 0 0;font-size:13px">rapidentrepreneurs.com</p>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          ${reviewBanner}
          <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #EF5E33; margin-top: 0;">Contact Information</h2>
            ${row('Name', data.contact_name)}
            <p style="margin:6px 0"><strong>Email:</strong> <a href="mailto:${esc(data.contact_email)}">${esc(data.contact_email)}</a></p>
            ${row('Phone', data.contact_phone)}
            ${row('Company', data.company_name)}
          </div>
          <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #EF5E33; margin-top: 0;">${isContact ? 'Message' : 'Project Details'}</h2>
            ${isContact ? row('Subject', data.subject) : row('Type', typeLabel)}
            ${isContact ? '' : row('Budget', BUDGET_LABELS[data.budget_range || ''] || data.budget_range || 'Not specified')}
            ${isContact ? '' : row('Timeline', TIMELINE_LABELS[data.timeline || ''] || data.timeline || 'Not specified')}
            ${data.message ? `<p style="margin:12px 0 0;white-space:pre-wrap">${esc(data.message)}</p>` : ''}
          </div>
          <p style="color:#6b7280;font-size:12px;text-align:center">Submission ${esc(data.id)} - stored in project_submissions (site rapid-entrepreneurs). Reply to this email to answer ${esc(data.contact_name)} directly.</p>
        </div>
        <div style="background: #233C6F; padding: 20px; text-align: center;">
          <p style="color: white; margin: 0; font-size: 14px;">Rapid Entrepreneurs - Digital growth for Ghanaian businesses</p>
        </div>
      </div>`;

  const text = [
    isContact ? 'New contact message' : 'New project inquiry',
    data.flags.length ? `Review signals: ${data.flags.join(', ')}` : '',
    `Name: ${data.contact_name}`,
    `Email: ${data.contact_email}`,
    data.contact_phone ? `Phone: ${data.contact_phone}` : '',
    data.company_name ? `Company: ${data.company_name}` : '',
    isContact ? (data.subject ? `Subject: ${data.subject}` : '') : `Type: ${typeLabel}`,
    isContact ? '' : `Budget: ${BUDGET_LABELS[data.budget_range || ''] || data.budget_range || 'Not specified'}`,
    isContact ? '' : `Timeline: ${TIMELINE_LABELS[data.timeline || ''] || data.timeline || 'Not specified'}`,
    '',
    data.message || '',
    '',
    `Submission ${data.id}`,
  ]
    .filter((line, i, arr) => line !== '' || (i > 0 && arr[i - 1] !== ''))
    .join('\n');

  return { subject, html, text };
}

export async function sendSubmissionEmail(data: SubmissionEmailData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error('Email service is not configured');
  const { subject, html, text } = buildSubmissionEmail(data);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `re-submission-${data.id}`,
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || 'Rapid Entrepreneurs <noreply@digiassistai.com>',
      to: recipients(),
      reply_to: data.contact_email,
      subject,
      html,
      text,
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
}
