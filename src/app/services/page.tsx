import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital solutions for African businesses: Web Development, Mobile Apps, E-Commerce, Digital Marketing, Fintech/Mobile Money, and AI Solutions.',
}

const services = [
  {
    id: 'web-development',
    icon: '💻',
    title: 'Web Development',
    tagline: 'Modern websites that drive business results',
    description: 'We build fast, responsive, and visually stunning websites tailored for African businesses. Our sites are optimized for low-bandwidth connections and load quickly on any device, ensuring your customers have a seamless experience regardless of their internet speed.',
    features: [
      'Custom business websites and landing pages',
      'Progressive Web Apps (PWA) for offline access',
      'Content management systems (WordPress, custom CMS)',
      'API development and integration',
      'Performance optimization for African networks',
      'Multilingual support for local languages',
    ],
    image: '/images/coding-laptop.jpg',
    imageAlt: 'Web development and coding',
  },
  {
    id: 'mobile-apps',
    icon: '📱',
    title: 'Mobile Applications',
    tagline: 'Apps built for Africa\'s mobile-first market',
    description: 'With over 80% of internet access in Africa coming from mobile devices, we specialize in building lightweight, powerful mobile applications that work flawlessly on the devices your customers actually use — from flagship smartphones to entry-level Android devices.',
    features: [
      'Native Android and iOS development',
      'Cross-platform apps (React Native, Flutter)',
      'USSD integration for feature phones',
      'Offline-first architecture',
      'Push notifications and real-time features',
      'App store optimization and launch support',
    ],
    image: '/images/mobile-phone-africa.jpg',
    imageAlt: 'Mobile app development for African market',
  },
  {
    id: 'e-commerce',
    icon: '🛒',
    title: 'E-Commerce Solutions',
    tagline: 'Sell online with local payment integration',
    description: 'We build complete e-commerce platforms designed for the African market. Our solutions integrate seamlessly with local payment methods including mobile money, bank transfers, and cash-on-delivery — making it easy for your customers to buy from you.',
    features: [
      'Custom e-commerce platforms and Shopify stores',
      'Mobile money integration (MTN MoMo, Vodafone Cash, AirtelTigo)',
      'Multi-currency support (GHS, NGN, USD)',
      'Inventory and order management systems',
      'Delivery and logistics integration',
      'WhatsApp commerce integration',
    ],
    image: '/images/ecommerce.jpg',
    imageAlt: 'E-commerce solutions',
  },
  {
    id: 'digital-marketing',
    icon: '📈',
    title: 'Digital Marketing',
    tagline: 'Reach your audience where they are',
    description: 'Our digital marketing strategies are built specifically for the West African market. We understand local platforms, consumer behavior, and cultural nuances that make marketing in Ghana and West Africa unique. We help you connect with customers on the channels they use most.',
    features: [
      'Social media marketing (Facebook, Instagram, TikTok)',
      'Search engine optimization (SEO) for local search',
      'Google Ads and Facebook Ads management',
      'WhatsApp marketing campaigns',
      'Content creation in local languages',
      'Analytics and performance reporting',
    ],
    image: '/images/digital-marketing.jpg',
    imageAlt: 'Digital marketing analytics',
  },
  {
    id: 'fintech',
    icon: '💳',
    title: 'Fintech & Mobile Money',
    tagline: 'Payment solutions for the unbanked and underbanked',
    description: 'Mobile money is the backbone of digital payments in Ghana and West Africa. We specialize in building fintech solutions that bridge the gap between traditional banking and mobile money, enabling businesses to accept payments from anyone, anywhere.',
    features: [
      'Mobile money API integration (MTN, Vodafone, AirtelTigo)',
      'Payment gateway development',
      'Digital wallet solutions',
      'Remittance and transfer platforms',
      'Agent banking applications',
      'Regulatory compliance (Bank of Ghana)',
    ],
    image: '/images/fintech-mobile.jpg',
    imageAlt: 'Fintech and mobile money solutions',
  },
  {
    id: 'ai-solutions',
    icon: '🤖',
    title: 'AI Solutions',
    tagline: 'Intelligent technology for African businesses',
    description: 'We bring the power of artificial intelligence to African businesses, making sophisticated technology accessible and affordable. Our AI solutions are designed with African languages, contexts, and business challenges in mind.',
    features: [
      'AI-powered chatbots in local languages',
      'Customer service automation',
      'Predictive analytics for business intelligence',
      'Natural language processing for Ghanaian languages',
      'Computer vision solutions',
      'Akwaaba AI integration and customization',
    ],
    image: '/images/ai-technology.jpg',
    imageAlt: 'AI and machine learning technology',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-blue py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/tech-hub.jpg"
            alt="Modern tech hub"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-deep-blue/95 to-deep-blue"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="heading-xl text-white mt-4 mb-6">Digital Solutions Built for Africa</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From mobile-first websites to AI-powered business tools, we provide comprehensive
            digital services designed for the unique needs and opportunities of the African market.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-5xl mb-4 block">{service.icon}</span>
                  <h2 className="heading-md text-deep-blue mb-2">{service.title}</h2>
                  <p className="text-vibrant-orange font-semibold mb-4">{service.tagline}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-vibrant-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Get Started
                  </Link>
                </div>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[300px] md:h-[400px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A proven process designed to deliver results efficiently and transparently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target market through in-depth consultations.' },
              { step: '02', title: 'Strategy', desc: 'We create a customized digital strategy and project roadmap tailored to your needs.' },
              { step: '03', title: 'Development', desc: 'Our team builds your solution with regular updates and milestones for your review.' },
              { step: '04', title: 'Launch & Grow', desc: 'We launch your solution and provide ongoing support to help your business grow.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-vibrant-orange font-display font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-deep-blue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 text-xl mb-10">
            Tell us about your project and we will create a customized solution for your business.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
