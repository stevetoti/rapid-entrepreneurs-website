# AGENTS.md — Rapid Entrepreneurs Website

## Project Overview

| Field | Value |
|-------|-------|
| **Name** | Rapid Entrepreneurs Website |
| **Purpose** | Corporate website for Rapid Entrepreneurs (Ghana) |
| **Company** | Rapid Entrepreneurs |
| **Status** | Production |
| **Market** | Ghana / West Africa |

## Tech Stack

- **Framework:** Next.js 14 + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase (CMS features)
- **Rich Text:** Tiptap editor (full-featured)
- **Animation:** Framer Motion
- **AI:** OpenAI (content features)
- **Icons:** Lucide React
- **Syntax Highlighting:** Lowlight
- **Hosting:** Vercel

## Deployment

- **Platform:** Vercel
- **Deploy Token:** `$VERCEL_TOKEN`
- **Deploy:** Push to `main` auto-deploys

## Key Directories

```
src/
├── app/            # Next.js App Router pages
├── components/     # React components
├── lib/            # Utilities
└── styles/         # CSS

public/             # Static assets (images, logos)
```

## Key Features

- Corporate homepage
- Services showcase
- About/Team pages
- Portfolio
- Contact forms
- Blog/News with rich CMS
- Responsive design
- Animated sections

## Tiptap Editor (Full-Featured)

Rich text CMS with:
- Code blocks (lowlight syntax highlighting)
- Text colors & styles
- Image embedding
- Links
- Text alignment
- Underline

Extensions used:
- `@tiptap/extension-code-block-lowlight`
- `@tiptap/extension-color`
- `@tiptap/extension-image`
- `@tiptap/extension-link`
- `@tiptap/extension-text-align`
- `@tiptap/extension-text-style`
- `@tiptap/extension-underline`

## Key Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration |
| `tailwind.config.ts` | Tailwind theme |
| `src/app/page.tsx` | Homepage |
| `.npmrc` | npm configuration |

## Special Instructions

1. **Ghana Market:** Content should resonate with Ghanaian entrepreneurs
2. **Performance:** Optimize for varying internet speeds
3. **Mobile-First:** Ghana has high mobile usage
4. **SEO:** Optimize for Ghana/Africa search terms
5. **Currency:** Use GHS (Ghana Cedi) where applicable

---

*Last updated: March 2026*
