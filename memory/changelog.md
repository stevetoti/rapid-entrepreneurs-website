# Changelog — Rapid Entrepreneurs Website

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
