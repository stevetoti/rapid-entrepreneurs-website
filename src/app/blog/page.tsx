import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tips, and stories about digital innovation, African entrepreneurship, technology trends, and business growth in Ghana and West Africa.',
}

const featuredPost = {
  title: 'The Rise of Mobile Money in Ghana: What It Means for Your Business',
  excerpt: 'Mobile money transactions in Ghana exceeded GHS 1 trillion in 2024. Here is how your business can tap into this massive digital payment ecosystem and reach more customers than ever before.',
  image: '/images/fintech-mobile.jpg',
  category: 'Fintech',
  date: 'January 28, 2025',
  readTime: '8 min read',
  author: 'Stephen Toti',
}

const posts = [
  {
    title: '5 Reasons Why Your Ghanaian Business Needs a Mobile App in 2025',
    excerpt: 'With smartphone adoption growing rapidly across Ghana, a mobile app is no longer a luxury — it is a necessity for businesses wanting to stay competitive.',
    image: '/images/mobile-phone-africa.jpg',
    category: 'Mobile Development',
    date: 'January 22, 2025',
    readTime: '6 min read',
    author: 'Ama Mensah',
  },
  {
    title: 'How AI is Transforming Customer Service for African Businesses',
    excerpt: 'Discover how Akwaaba AI and similar tools are helping African businesses provide 24/7 customer support in local languages without breaking the bank.',
    image: '/images/ai-technology.jpg',
    category: 'AI & Technology',
    date: 'January 15, 2025',
    readTime: '7 min read',
    author: 'Kwesi Annan',
  },
  {
    title: 'Building an E-Commerce Store for the West African Market: A Complete Guide',
    excerpt: 'Everything you need to know about setting up an online store that works for West African customers — from payment integration to delivery logistics.',
    image: '/images/ecommerce.jpg',
    category: 'E-Commerce',
    date: 'January 8, 2025',
    readTime: '12 min read',
    author: 'Stephen Toti',
  },
  {
    title: 'Digital Marketing Strategies That Work in Ghana',
    excerpt: 'Forget generic marketing advice. Here are data-driven digital marketing strategies specifically tailored for the Ghanaian market and consumer behavior.',
    image: '/images/digital-marketing.jpg',
    category: 'Digital Marketing',
    date: 'December 30, 2024',
    readTime: '9 min read',
    author: 'Efua Darko',
  },
  {
    title: 'The Future of Fintech in West Africa: Trends to Watch',
    excerpt: 'From decentralized finance to AI-powered credit scoring, explore the fintech trends that are reshaping financial services across West Africa.',
    image: '/images/african-entrepreneur-woman.jpg',
    category: 'Fintech',
    date: 'December 20, 2024',
    readTime: '10 min read',
    author: 'Kwesi Annan',
  },
  {
    title: 'How We Built a Telemedicine Platform for Rural Ghana',
    excerpt: 'A behind-the-scenes look at how we designed and built MedConnect Ghana — a telemedicine platform that works on low-bandwidth connections.',
    image: '/images/office-modern.jpg',
    category: 'Case Study',
    date: 'December 12, 2024',
    readTime: '11 min read',
    author: 'Ama Mensah',
  },
]

const categories = ['All', 'Fintech', 'Mobile Development', 'AI & Technology', 'E-Commerce', 'Digital Marketing', 'Case Study']

export default function BlogPage() {
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
      <section className="bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-vibrant-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-vibrant-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="bg-light-blue text-deep-blue px-3 py-1 rounded-full font-medium">{featuredPost.category}</span>
                  <span>{featuredPost.date}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="heading-md text-deep-blue mb-4 hover:text-vibrant-orange transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">By {featuredPost.author}</span>
                  <span className="text-vibrant-orange font-semibold hover:underline cursor-pointer inline-flex items-center gap-1">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-deep-blue text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-deep-blue mb-3 group-hover:text-vibrant-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-500 text-sm">By {post.author}</span>
                    <span className="text-vibrant-orange font-semibold text-sm hover:underline cursor-pointer">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

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
