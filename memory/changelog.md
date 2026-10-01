# Changelog — Rapid Entrepreneurs Website

## 2026-10-01 — [Claude Code] Form bot defence: contact form + project wizard (commit 2eff938, live)

Applied the `form-bot-defence` skill (`~/.claude/skills/form-bot-defence/`, playbook in
`_knowledge-base/procedures/BOT-SIGNUP-DEFENCE.md`) after automated spam hit the PWD
and stevetoti.com forms.

**What was actually broken before this:** the contact form was a simulated success
(1.5 s timer, nothing sent, nothing stored). The Get started wizard inserted into the
shared `project_submissions` table straight from the browser with the anon key — zero
rows ever landed for `site_id = 'rapid-entrepreneurs'` — and `/api/notify-submission`
was never called by anything, had no `RESEND_API_KEY` on Vercel, was unauthenticated
(anyone could mail the owners arbitrary content) and interpolated user input into HTML
unescaped.

- `src/app/api/submissions/route.ts` (new, the only write path for both forms): parse →
  honeypot + 3 s minimum fill time → content sanity (≥ 8 letters, not link-only) →
  server-verified Cloudflare Turnstile, fail-closed → durable limits via the shared
  project's `pwd_rate_limit` (5/hour per IP, 3/hour per email, hashed buckets prefixed
  `re:`) → service-role insert (`site_id = 'rapid-entrepreneurs'`, nested wizard objects
  sanitised to primitives) → owner email → `notification_status` sent/failed. Filled
  honeypot returns a silent `{ok:true}`.
- `src/lib/security/{bot-signals,turnstile,form-guard}.ts`,
  `src/components/security/{TurnstileWidget,FormBotFields}.tsx`: skill templates, unchanged.
- `src/lib/server/submission-email.ts`: HTML-escaped owner email (to steve@ + toti@,
  override `SUBMISSION_NOTIFICATION_EMAILS`), "Review signals" banner for soft flags
  (`generated_name`), reply-to the enquirer. `src/lib/server/supabase-admin.ts`:
  service-role client, server only.
- `src/app/contact/page.tsx`, `src/app/get-started/page.tsx`: real submit through the
  route, honeypot field, Turnstile widget (re-keyed after every attempt), submit disabled
  until a token exists, server error text shown inline.
- Removed `src/app/api/notify-submission/route.ts` (now 404).

**Vercel env (production):** `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`
(shared PWD Turnstile widget), `RESEND_API_KEY` = a NEW domain-restricted Resend key
("rapid-entrepreneurs-website (owner notifications)", sending access for
digiassistai.com only). Owner mail therefore sends from
`Rapid Entrepreneurs <noreply@digiassistai.com>` until pacificwavedigital.com or
rapidentrepreneurs.com is verified in Resend — then set `RESEND_FROM_EMAIL`.
Preview env vars were NOT added: `vercel env add … preview` only accepts the value via
`--value` (forbidden — process listings) or an interactive prompt.

**Verified live (deployment rapid-entrepreneurs-website-gj33wudwu):** honeypot → 200
swallow; fill < 3 s → 400 `too_fast`; digit-only message → 400 `content`; no token → 400
`captcha` (contact and project kinds); site key present in the /contact chunk;
`/api/notify-submission` → 404.

**2026-10-02 update:** the first shared Turnstile widget was at 9 of its 10-hostname cap, so
Stephen created a second widget ("PWD sites 2": rapidentrepreneurs.com, www.rapidentrepreneurs.com,
vanuway.com, www.vanuway.com). Its keys replaced the first widget's on this Vercel project
(production), redeployed `rapid-entrepreneurs-website-r0pdikmjn`; verified the new site key is
baked into the /contact chunk and the widget renders the "Verify you are human" checkbox with no
error. Local copy of the widget-2 keys: `TURNSTILE2_*` in the Digiassist AI `.env.local`.

**Superseded by the update above —** originally: Stephen must add `rapidentrepreneurs.com`, `www.rapidentrepreneurs.com` and
`rapid-entrepreneurs-website-git-main-pacificwaveprojects.vercel.app` to the shared
Turnstile widget (Cloudflare → Turnstile → "Digiassist AI signup") — until then the
widget shows an error and the server refuses every submission (fail-closed by design).
Then one real submission on each form to confirm the owner email arrives.

## 2026-09-21 — [Claude Code] SEO service pages for Ghana commercial keywords (branch seo/service-pages, PR to main)

Mirrors pacific-wave-website PR #3 pattern, adapted to this repo's design language.

- `src/lib/service-pages.ts` (new): typed content model + 7 service page entries
  targeting DataForSEO-measured Ghana keywords — web-design ("Web Design in
  Ghana", 390/mo, + "website design Accra"), digital-marketing (50/mo),
  it-services ("IT Company in Accra", 90/mo), web-development,
  software-development, ecommerce, mobile-apps. 700–1000 words per page of
  Ghana-grounded copy (Accra context, MoMo payments, mobile-first users,
  SME/startup/church/school sectors). No invented clients/testimonials/stats;
  "fixed quote" language only for pricing.
- `src/app/services/[slug]/page.tsx` (new): statically generated
  (`generateStaticParams`, `dynamicParams = false`), unique metadata per page —
  title is the bare H1 (root layout template appends "| Rapid Entrepreneurs";
  avoided the doubled-suffix bug PWD had), meta description, canonical, OG.
  JSON-LD: `Service` schema (provider Rapid Entrepreneurs, areaServed Ghana,
  footer contact details) + 4-question `FAQPage` schema per page.
- `src/components/services/ServicePageContent.tsx` (new): shared template using
  this repo's own components (FadeIn, StaggerContainer, deep-blue/vibrant-orange
  palette, btn-primary/secondary, section-padding) — hero, intro, benefits grid,
  process steps, FAQ, related-services cross-link block (each page links the
  other 6), CTA.
- `src/app/services/page.tsx`: new "Our Services in Ghana" deep-dive card grid
  linking all 7 pages from the hub.
- `src/components/Navbar.tsx`: desktop Services hover dropdown (7 pages + All
  Services) + mobile sub-links under Services; mobile menu now scrolls.
- `src/components/Footer.tsx`: services column now links the 7 dedicated pages
  (kept AI Automation anchor).
- `src/app/sitemap.ts`: 7 `/services/<slug>` static entries (priority 0.9).
- Verified: `npx tsc --noEmit` clean, `npm run build` passes, all 7 routes SSG.
- Not deployed — PR only, per task instructions.

## 2026-08-30 — [Claude Code] SEO front door: GA4, Search Console verification, dynamic sitemap, article-generator rebrand

- `src/components/GoogleAnalytics.tsx` (new): env-driven GA4 loader via
  next/script (`afterInteractive`). Renders nothing unless
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. Rendered in root layout.
- `src/app/layout.tsx`: added `verification.google` metadata from
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (no-op until env set) and mounted
  `<GoogleAnalytics />`.
- `src/app/sitemap.ts`: now async — fetches published posts from the shared
  `blog_posts` table via `getPublishedPosts()` (`src/lib/blog.ts`,
  `site_id=rapidentrepreneurs`) and emits `/blog/<slug>` entries with
  `lastModified` from `published_at`. Static entries unchanged; falls back to
  static-only on fetch failure.
- `src/app/api/seo/generate-article/route.ts`: rebranded system prompt +
  fallback template from Pacific Wave Digital / Vanuatu to Rapid
  Entrepreneurs / Accra, Ghana, West Africa audience. Structure and JSON
  contract unchanged.
- Env vars Stephen must set in Vercel: `NEXT_PUBLIC_GA_MEASUREMENT_ID`,
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Typecheck + production build pass.

## 2026-07-12 — [Claude Code] Blog converted to database-driven

- **Commit:** `3487222` — Convert blog to database-driven from shared Supabase blog_posts table
- `src/lib/blog.ts` (new): PostgREST client for the shared agency blog DB
  (`https://rndegttgwtpkbjtvjgnc.supabase.co`, table `blog_posts`,
  `site_id=rapidentrepreneurs`, anon key baked in — public-safe, RLS limits
  reads to `published=true`). ISR revalidate 300s.
- `src/app/blog/page.tsx`: rewritten as async server component fetching from DB.
  Design preserved (hero, category pills, featured card, grid, newsletter CTA).
  Graceful "Fresh insights coming soon" empty state (table currently has 0 rows
  for this site_id). Hardcoded posts removed — DB is now the source of truth.
  Removed hardcoded post titles (never in DB, listed for reference): "The Rise of
  Mobile Money in Ghana…", "5 Reasons Why Your Ghanaian Business Needs a Mobile
  App in 2025", "How AI is Transforming Customer Service for African Businesses",
  "Building an E-Commerce Store for the West African Market…", "Digital Marketing
  Strategies That Work in Ghana", "The Future of Fintech in West Africa…",
  "How We Built a Telemedicine Platform for Rural Ghana".
- `src/app/blog/[slug]/page.tsx` (new): detail page — fetch by slug+site_id,
  react-markdown + remark-gfm with Tailwind overrides, hero image with alt,
  category/date/read_time, keywords chips, `generateMetadata()` with canonical
  `https://rapidentrepreneurs.com/blog/{slug}`, `notFound()` on miss.
- `next.config.js`: allow remote https images for blog hero/inline images.
- Installed `remark-gfm`.
- **Deployed to Vercel production:**
  https://rapid-entrepreneurs-website-frrgrz9qf-pacificwaveprojects.vercel.app
  (aliased to https://rapid-entrepreneurs-website.vercel.app). /blog = 200,
  unknown slug = 404. ✅
- **⚠️ Domain finding:** `rapidentrepreneurs.com` does NOT point to this Vercel
  project — DNS resolves to Hostinger (46.202.169.129, LiteSpeed) serving a
  WordPress site; the Vercel project only has `rapid-entrepreneurs-website.vercel.app`
  attached. `https://rapidentrepreneurs.com/blog` returns 200 but it is the
  WordPress blog, not this Next.js app. To cut over: add the domain to the
  Vercel project and update DNS at the registrar/Hostinger.
