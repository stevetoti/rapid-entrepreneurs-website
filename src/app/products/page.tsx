import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Discover Akwaaba AI and our custom digital solutions built for African businesses. AI-powered communication, mobile money integration, and more.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-blue py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="/images/ai-technology.jpg" alt="AI Technology" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-deep-blue/95 to-deep-blue"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h1 className="heading-xl text-white mt-4 mb-6">Technology Made for Africa</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Purpose-built digital products that solve real problems for African entrepreneurs and businesses.
          </p>
        </div>
      </section>

      {/* Akwaaba AI - Featured Product */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-deep-blue to-dark-navy rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16">
                <div className="inline-flex items-center bg-vibrant-orange/20 text-vibrant-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🇬🇭 Flagship Product
                </div>
                <h2 className="heading-lg text-white mb-4">Akwaaba AI</h2>
                <p className="text-vibrant-orange font-semibold text-lg mb-6">AI-Powered Business Communication for Africa</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Akwaaba — the Akan word for &ldquo;welcome&rdquo; — is at the heart of our AI platform. Akwaaba AI helps African
                  businesses welcome and serve their customers through intelligent, multilingual communication that
                  understands local context, languages, and business practices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { icon: '🗣️', title: 'Local Languages', desc: 'Twi, Ga, Ewe, Hausa, Pidgin and more' },
                    { icon: '💰', title: 'Mobile Money', desc: 'Accept payments via MoMo, Vodafone Cash' },
                    { icon: '📱', title: 'WhatsApp Ready', desc: 'Automate customer conversations' },
                    { icon: '📊', title: 'Smart Analytics', desc: 'Track customer insights in real-time' },
                    { icon: '🔒', title: 'Secure & Private', desc: 'Data protection compliant' },
                    { icon: '💡', title: 'Easy Setup', desc: 'Get started in under 30 minutes' },
                  ].map((feature, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <span className="text-2xl">{feature.icon}</span>
                      <h4 className="text-white font-semibold text-sm mt-2">{feature.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://akwaabaai.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Visit akwaabaai.com
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Request a Demo
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/images/african-entrepreneur-woman.jpg"
                  alt="African businesswoman using Akwaaba AI"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-navy to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Akwaaba AI Plans</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">Affordable for Every Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Pricing designed for African businesses — start small and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'GHS 99',
                period: '/month',
                desc: 'Perfect for small businesses just getting started with AI',
                features: ['500 AI conversations/month', '1 WhatsApp number', 'Basic analytics', 'English + 1 local language', 'Email support'],
                cta: 'Start Free Trial',
                featured: false,
              },
              {
                name: 'Growth',
                price: 'GHS 299',
                period: '/month',
                desc: 'For growing businesses that need more power and features',
                features: ['5,000 AI conversations/month', '3 WhatsApp numbers', 'Advanced analytics dashboard', 'All local languages', 'Mobile money integration', 'Priority support', 'Custom AI training'],
                cta: 'Start Free Trial',
                featured: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                desc: 'For large businesses with complex requirements',
                features: ['Unlimited conversations', 'Unlimited channels', 'White-label solution', 'Dedicated account manager', 'Custom integrations', 'SLA guarantee', 'On-site training'],
                cta: 'Contact Sales',
                featured: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? 'bg-deep-blue text-white shadow-2xl scale-105 border-2 border-vibrant-orange'
                    : 'bg-white shadow-lg border border-gray-200'
                }`}
              >
                {plan.featured && (
                  <div className="text-vibrant-orange text-xs font-bold uppercase tracking-wider mb-4">Most Popular</div>
                )}
                <h3 className={`font-display font-bold text-2xl mb-2 ${plan.featured ? 'text-white' : 'text-deep-blue'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-4xl font-bold ${plan.featured ? 'text-vibrant-orange' : 'text-deep-blue'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.featured ? 'text-gray-400' : 'text-gray-500'}>{plan.period}</span>
                </div>
                <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-vibrant-orange' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.featured ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-all duration-300 ${
                    plan.featured
                      ? 'bg-vibrant-orange text-white hover:bg-orange-600'
                      : 'bg-deep-blue text-white hover:bg-deep-blue/90'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Custom Solutions</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">Tailored for Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Beyond Akwaaba AI, we build custom digital products that solve your specific business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏪',
                title: 'Marketplace Platforms',
                desc: 'Custom marketplace solutions connecting buyers and sellers across West Africa, with integrated mobile money payments.',
              },
              {
                icon: '🚚',
                title: 'Logistics & Delivery',
                desc: 'Real-time tracking and delivery management platforms built for the African logistics landscape.',
              },
              {
                icon: '🏦',
                title: 'Agent Banking Systems',
                desc: 'Digital platforms for agent banking networks, enabling financial services in underserved communities.',
              },
              {
                icon: '📋',
                title: 'Business Management Tools',
                desc: 'ERP, CRM, and inventory management systems designed for the way African businesses operate.',
              },
              {
                icon: '🎓',
                title: 'EdTech Platforms',
                desc: 'Online learning and training platforms optimized for low-bandwidth environments.',
              },
              {
                icon: '🏥',
                title: 'HealthTech Solutions',
                desc: 'Digital health platforms connecting patients with healthcare providers across the region.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-vibrant-orange/30 hover:shadow-xl transition-all duration-300 group">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display font-bold text-xl text-deep-blue mb-3 group-hover:text-vibrant-orange transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-vibrant-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Have a Product Idea?</h2>
          <p className="text-white/90 text-xl mb-10">
            We love turning ideas into reality. Share your vision and we will help you build it.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
            Share Your Idea
          </Link>
        </div>
      </section>
    </>
  )
}
