import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Modern, responsive websites built for African businesses. From corporate sites to complex web applications.',
    href: '/services#web-development',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications optimized for the African mobile-first market.',
    href: '/services#mobile-apps',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with local payment gateways, mobile money, and delivery integration.',
    href: '/services#e-commerce',
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies tailored for West African audiences and markets.',
    href: '/services#digital-marketing',
  },
  {
    icon: '💳',
    title: 'Fintech & Mobile Money',
    description: 'Payment solutions integrating MTN MoMo, Vodafone Cash, and other local payment methods.',
    href: '/services#fintech',
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    description: 'Intelligent automation and AI-powered tools designed for African business challenges.',
    href: '/services#ai-solutions',
  },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Businesses Empowered' },
  { value: '5', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const testimonials = [
  {
    name: 'Kwame Asante',
    role: 'CEO, Accra Fresh Markets',
    text: 'Rapid Entrepreneurs transformed our traditional market business into a thriving online platform. Our mobile money integration alone increased sales by 40%.',
    image: '/images/business-handshake.jpg',
  },
  {
    name: 'Abena Osei-Mensah',
    role: 'Founder, GhanaStyle Fashion',
    text: 'The e-commerce solution they built for us was perfectly tailored for our Ghanaian customers. The mobile-first approach was exactly what we needed.',
    image: '/images/african-entrepreneur-woman.jpg',
  },
  {
    name: 'Kofi Boateng',
    role: 'Director, TechBridge Logistics',
    text: 'Their mobile app completely revolutionized our delivery operations. We now serve twice as many customers with the same team.',
    image: '/images/team-meeting.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-deep-blue overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-african-business.jpg"
            alt="African business professionals collaborating"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/95 to-deep-blue/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-vibrant-orange/20 text-vibrant-orange px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="mr-2">🇬🇭</span>
              Proudly Based in Accra, Ghana
            </div>
            <h1 className="heading-xl text-white mb-6 leading-tight">
              Empowering African{' '}
              <span className="text-vibrant-orange">Business Growth</span>{' '}
              Through Technology
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              We build digital solutions that help African entrepreneurs and businesses thrive.
              From mobile-first apps to fintech integration, we understand the unique needs of
              the West African market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-vibrant-orange mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">Digital Solutions for Africa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive digital services designed for the unique challenges and opportunities
              of the African market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-vibrant-orange/30 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-display font-bold text-xl text-deep-blue mb-3 group-hover:text-vibrant-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center text-vibrant-orange font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Akwaaba AI Feature Section */}
      <section className="section-padding bg-gradient-to-br from-deep-blue to-dark-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Featured Product</span>
              <h2 className="heading-lg text-white mt-3 mb-6">
                Meet <span className="text-vibrant-orange">Akwaaba AI</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our AI-powered business communication platform designed specifically for African businesses.
                Akwaaba AI understands local languages, integrates with mobile money, and helps you serve
                customers 24/7 — even when you sleep.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Multi-language support including Twi, Ga, Ewe, and Hausa',
                  'Mobile money payment integration (MTN MoMo, Vodafone Cash)',
                  'WhatsApp and SMS business automation',
                  'Smart customer analytics dashboard',
                  'Affordable pricing for small businesses',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-vibrant-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary">
                  Discover Akwaaba AI
                </Link>
                <a href="https://akwaabaai.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Visit akwaabaai.com
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ai-technology.jpg"
                  alt="Akwaaba AI - AI-powered business communication"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-vibrant-orange rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Akwaaba AI Assistant</p>
                        <p className="text-gray-300 text-xs">Handling 1,200+ customer queries today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile First Section */}
      <section className="section-padding bg-soft-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/african-woman-phone.jpg"
                alt="African woman using smartphone for business"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-vibrant-orange text-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold mb-1">80%</div>
                <div className="text-sm">of Africa&apos;s internet<br />access is mobile</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Mobile-First Approach</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-6">Built for How Africa Connects</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Africa is the world&apos;s most mobile-first continent. We design every solution with this
                reality at the center — fast-loading, data-efficient, and optimized for the devices
                your customers actually use.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From USSD integration for feature phones to progressive web apps that work offline,
                we ensure your business reaches every customer.
              </p>
              <Link href="/services" className="btn-outline">
                See Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">Trusted by African Businesses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from the entrepreneurs and businesses we have helped grow with our digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-deep-blue">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/success-stories" className="btn-outline">
              View All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-vibrant-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Grow Your Business Digitally?</h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Join over 50 African businesses that have transformed their operations with our
            digital solutions. Let us help you reach your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Get a Free Consultation
            </Link>
            <a href="tel:+233302745000" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vibrant-orange transition-all duration-300 text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +233 30 274 5000
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
