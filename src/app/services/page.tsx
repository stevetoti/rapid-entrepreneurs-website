'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'

const services = [
  {
    id: 'ai-solutions',
    icon: '🤖',
    title: 'AI Business Automation',
    tagline: 'Smart automation for rapid growth',
    description: 'Streamline your workflows, reduce operational costs, and scale your business with intelligent automation solutions. We help you leverage AI to handle repetitive tasks, improve customer interactions, and make data-driven decisions faster.',
    features: [
      'Workflow automation and optimization',
      'AI-powered chatbots and customer service',
      'Predictive analytics for business intelligence',
      'Process automation with minimal human intervention',
      'Integration with existing business systems',
      'Custom AI solutions tailored to your needs',
    ],
    image: '/images/ai-technology.jpg',
    imageAlt: 'AI and automation technology',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'web-development',
    icon: '💻',
    title: 'Website Development',
    tagline: 'Modern websites that drive results',
    description: 'We build fast, secure, and mobile-first websites designed to convert visitors into customers. Our sites are optimized for performance on any device and network, ensuring your customers have a seamless experience.',
    features: [
      'Custom responsive website design',
      'E-commerce platforms with payment integration',
      'Progressive Web Apps (PWA) for offline access',
      'Content management systems',
      'SEO-optimized structure',
      'High performance and fast loading',
    ],
    image: '/images/coding-laptop.jpg',
    imageAlt: 'Web development and coding',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'mobile-apps',
    icon: '📱',
    title: 'Mobile App Development',
    tagline: 'Apps built for modern users',
    description: 'Custom mobile applications for iOS and Android with sleek design and seamless user experience. We create apps that your customers will love to use, with intuitive interfaces and powerful functionality.',
    features: [
      'Native iOS and Android development',
      'Cross-platform apps (React Native, Flutter)',
      'User-centric UI/UX design',
      'Backend API development',
      'Push notifications and real-time features',
      'App store optimization and launch support',
    ],
    image: '/images/mobile-phone-africa.jpg',
    imageAlt: 'Mobile app development',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'digital-marketing',
    icon: '📈',
    title: 'Digital Marketing',
    tagline: 'Grow your brand online',
    description: 'Data-driven marketing strategies that help you reach your target audience effectively. We create campaigns that connect with customers on the channels they use most, driving engagement and conversions.',
    features: [
      'Social media marketing (Facebook, Instagram, TikTok)',
      'Google Ads and paid advertising',
      'Content marketing and strategy',
      'Email marketing campaigns',
      'Influencer partnerships',
      'Analytics and performance reporting',
    ],
    image: '/images/digital-marketing.jpg',
    imageAlt: 'Digital marketing analytics',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'seo',
    icon: '🔍',
    title: 'SEO Optimization',
    tagline: 'Get found online',
    description: 'Boost your online visibility with comprehensive SEO services. We help your business rank higher in search results, driving organic traffic and establishing your authority in your industry.',
    features: [
      'Keyword research and strategy',
      'On-page SEO optimization',
      'Technical SEO audits and fixes',
      'Local SEO for businesses',
      'Link building and outreach',
      'Regular ranking reports and insights',
    ],
    image: '/images/tech-hub.jpg',
    imageAlt: 'SEO and search optimization',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'Graphic & Video Design',
    tagline: 'Visual storytelling that captivates',
    description: 'Engage your audience with powerful designs and captivating video content. From brand identity to marketing materials and video production, we create visuals that tell your story and resonate with your audience.',
    features: [
      'Brand identity and logo design',
      'Marketing materials and print design',
      'Social media graphics and templates',
      'Video production and editing',
      'Motion graphics and animation',
      'Presentation and pitch deck design',
    ],
    image: '/images/office-modern.jpg',
    imageAlt: 'Graphic design and video production',
    gradient: 'from-red-500 to-pink-600',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We learn about your business, goals, and target market through in-depth consultations.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'We create a customized digital strategy and project roadmap tailored to your needs.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Our team builds your solution with regular updates and milestones for your review.',
    icon: '⚙️',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    desc: 'We launch your solution and provide ongoing support to help your business grow.',
    icon: '🚀',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-navy to-deep-blue">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(239, 94, 51, 0.4) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <FadeIn>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md text-vibrant-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              Digital Solutions - Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-orange to-yellow-400">Services</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with digital, creative, and automation solutions that drive real growth.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Content */}
                <FadeIn direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div>
                    <motion.span
                      className="text-6xl mb-6 block"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.span>
                    <h2 className="heading-md text-deep-blue mb-2">{service.title}</h2>
                    <p className="text-vibrant-orange font-semibold text-lg mb-4">{service.tagline}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-vibrant-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-vibrant-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact" className="btn-primary">
                        Get Started
                      </Link>
                    </motion.div>
                  </div>
                </FadeIn>

                {/* Image */}
                <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <motion.div
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={600}
                        height={450}
                        className="object-cover w-full h-[350px] md:h-[450px]"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-20`} />
                    </motion.div>
                    
                    {/* Decorative element */}
                    <div className={`absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br ${service.gradient} opacity-20`} />
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-light-blue to-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">How We Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A proven process designed to deliver results efficiently and transparently.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center h-full"
                  whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-vibrant-orange to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Step {item.step}
                  </div>
                  
                  <motion.span
                    className="text-5xl mb-6 block mt-4"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="font-display font-bold text-xl text-deep-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-vibrant-orange/50 to-transparent" />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 20% 80%, rgba(239, 94, 51, 0.3) 0%, transparent 40%)',
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-xl mb-10">
              Tell us about your project and we&apos;ll create a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary text-lg">
                  Schedule a Free Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:+233554303269" className="btn-secondary text-lg">
                  Call 0554303269
                </a>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
