import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, formatDate } from '@/lib/blog'

export const revalidate = 300

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    keywords: post.keywords ?? undefined,
    alternates: {
      canonical: `https://rapidentrepreneurs.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      url: `https://rapidentrepreneurs.com/blog/${post.slug}`,
      images: post.image_url ? [{ url: post.image_url, alt: post.image_alt ?? post.title }] : undefined,
      publishedTime: post.published_at ?? undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-gray-300 hover:text-vibrant-orange transition-colors text-sm font-medium inline-flex items-center gap-1 mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-4">
            {post.category && (
              <span className="bg-vibrant-orange text-white px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wide">
                {post.category}
              </span>
            )}
            {post.published_at && <span>{formatDate(post.published_at)}</span>}
            {post.read_time && (
              <>
                <span>·</span>
                <span>{post.read_time}</span>
              </>
            )}
          </div>
          <h1 className="heading-lg text-white mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-gray-300 text-lg leading-relaxed">{post.excerpt}</p>
          )}
        </div>
      </section>

      {/* Hero image */}
      {post.image_url && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
            <Image
              src={post.image_url}
              alt={post.image_alt || post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="article-content text-gray-700 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => <h2 className="heading-md text-deep-blue mt-10 mb-4">{children}</h2>,
              h2: ({ children }) => <h2 className="heading-md text-deep-blue mt-10 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="font-display font-bold text-xl text-deep-blue mt-8 mb-3">{children}</h3>,
              h4: ({ children }) => <h4 className="font-display font-bold text-lg text-deep-blue mt-6 mb-2">{children}</h4>,
              p: ({ children }) => <p className="mb-5 text-lg leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-lg">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-lg">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              a: ({ href, children }) => (
                <a href={href} className="text-vibrant-orange font-medium hover:underline" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-vibrant-orange bg-orange-50 pl-5 pr-4 py-3 my-6 rounded-r-lg text-gray-700 italic">
                  {children}
                </blockquote>
              ),
              strong: ({ children }) => <strong className="font-semibold text-deep-blue">{children}</strong>,
              code: ({ children }) => <code className="bg-gray-100 text-deep-blue px-1.5 py-0.5 rounded text-base font-mono">{children}</code>,
              pre: ({ children }) => <pre className="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto my-6 text-sm">{children}</pre>,
              hr: () => <hr className="my-10 border-gray-200" />,
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 rounded-lg text-base">{children}</table>
                </div>
              ),
              th: ({ children }) => <th className="bg-gray-50 text-deep-blue font-semibold text-left px-4 py-3 border-b border-gray-200">{children}</th>,
              td: ({ children }) => <td className="px-4 py-3 border-b border-gray-100">{children}</td>,
              img: ({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={typeof src === 'string' ? src : undefined} alt={alt ?? ''} className="rounded-xl my-6 w-full" />
              ),
            }}
          >
            {post.content ?? ''}
          </ReactMarkdown>
        </div>

        {/* Keywords */}
        {post.keywords && post.keywords.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span key={kw} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                {kw}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-deep-blue to-dark-navy rounded-2xl p-8 md:p-10 text-center">
          <h3 className="heading-md text-white mb-4">Ready to Grow Your Business?</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let&apos;s talk about how digital innovation can transform your business in Ghana and West Africa.
          </p>
          <Link href="/get-started" className="btn-primary px-8 py-3">
            Get Started
          </Link>
        </div>
      </article>
    </>
  )
}
