# Changelog — Rapid Entrepreneurs Website

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
