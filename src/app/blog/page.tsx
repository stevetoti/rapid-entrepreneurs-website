import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPublishedPosts, formatDate, type BlogPost } from '@/lib/blog'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tips, and stories about digital innovation, African entrepreneurship, technology trends, and business growth in Ghana and West Africa.',
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {post.image_url && (
            <Image
              src={post.image_url}
              alt={post.image_alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-deep-blue text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>{formatDate(post.published_at)}</span>
            {post.read_time && (
              <>
                <span>·</span>
                <span>{post.read_time}</span>
              </>
            )}
          </div>
          <h3 className="font-display font-bold text-lg text-deep-blue mb-3 group-hover:text-vibrant-orange transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
            <span className="text-vibrant-orange font-semibold text-sm hover:underline">
              Read →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const [featuredPost, ...restPosts] = posts
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category).filter((c): c is string => Boolean(c))))]

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Blog</span>
          <h1 className="heading-xl text-white mt-4 mb-6">Insights & Innovation</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Thoughts on digital transformation, African entrepreneurship, and the technology
            shaping the future of business in West Africa.
          </p>
        </div>
      </section>

      {/* Categories */}
      {posts.length > 0 && (
        <section className="bg-white border-b sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === 'All'
                      ? 'bg-vibrant-orange text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {posts.length === 0 && (
        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h2 className="heading-md text-deep-blue mb-4">Fresh insights coming soon</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We&apos;re working on new articles about digital innovation, entrepreneurship,
              and technology in Ghana and West Africa. Check back shortly!
            </p>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto bg-gray-100">
                    {featuredPost.image_url && (
                      <Image
                        src={featuredPost.image_url}
                        alt={featuredPost.image_alt || featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-vibrant-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      {featuredPost.category && (
                        <span className="bg-light-blue text-deep-blue px-3 py-1 rounded-full font-medium">{featuredPost.category}</span>
                      )}
                      <span>{formatDate(featuredPost.published_at)}</span>
                      {featuredPost.read_time && (
                        <>
                          <span>·</span>
                          <span>{featuredPost.read_time}</span>
                        </>
                      )}
                    </div>
                    <h2 className="heading-md text-deep-blue mb-4 hover:text-vibrant-orange transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-end">
                      <span className="text-vibrant-orange font-semibold hover:underline inline-flex items-center gap-1">
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          {restPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-deep-blue to-dark-navy rounded-2xl p-8 md:p-12 text-center">
            <h3 className="heading-md text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights on African digital innovation delivered straight to your inbox.
              No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-vibrant-orange outline-none"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
