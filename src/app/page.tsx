import { getPublishedPosts, formatDate } from '@/lib/blog'
import HomeClient, { HomeInsight } from '@/components/home/HomeClient'

export const revalidate = 300

export default async function HomePage() {
  const posts = await getPublishedPosts()
  const insights: HomeInsight[] = posts.slice(0, 3).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.category,
    imageUrl: post.image_url,
    imageAlt: post.image_alt ?? post.title,
    readTime: post.read_time,
    date: formatDate(post.published_at),
  }))

  return <HomeClient insights={insights} />
}
