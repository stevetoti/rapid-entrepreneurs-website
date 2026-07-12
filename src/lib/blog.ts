// Shared agency blog database (Supabase).
// This is intentionally separate from the site's own Supabase project (src/lib/supabase.ts):
// blog content is served from the shared multi-site blog_posts table.
// The anon key is public-safe (RLS restricts reads to published rows).

const BLOG_SUPABASE_URL = 'https://rndegttgwtpkbjtvjgnc.supabase.co'
const BLOG_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZGVndHRnd3Rwa2JqdHZqZ25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MzIxMjAsImV4cCI6MjA4NDAwODEyMH0.0j4_x-CmkDlIAUC07N9zMs3i7iTN5468_liR7B4Mx2Y'

export const BLOG_SITE_ID = 'rapidentrepreneurs'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  category: string | null
  image_url: string | null
  image_alt: string | null
  keywords: string[] | null
  read_time: string | null
  published: boolean
  published_at: string | null
  site_id: string
  focus_keyword: string | null
}

async function blogFetch(query: string): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${BLOG_SUPABASE_URL}/rest/v1/blog_posts?${query}`, {
      headers: {
        apikey: BLOG_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${BLOG_SUPABASE_ANON_KEY}`,
      },
      next: { revalidate: 300 },
    })
    if (!res.ok) return []
    return (await res.json()) as BlogPost[]
  } catch {
    return []
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return blogFetch(
    `site_id=eq.${BLOG_SITE_ID}&published=eq.true&order=published_at.desc`
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const rows = await blogFetch(
    `site_id=eq.${BLOG_SITE_ID}&published=eq.true&slug=eq.${encodeURIComponent(slug)}&limit=1`
  )
  return rows[0] ?? null
}

export function formatDate(iso: string | null): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
