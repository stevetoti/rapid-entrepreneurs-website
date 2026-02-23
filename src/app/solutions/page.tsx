'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'

const solutions = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Tailored solutions for African businesses',
    description: 'We build custom software solutions designed specifically for the unique challenges and opportunities of African markets. From inventory management to customer relationship systems, we create tools that drive efficiency and growth.',
    features: [
      'Offline-first architecture for unreliable connectivity',
      'Multi-language support (English, French, local languages)',
      'Mobile money integration (MTN MoMo, Vodafone Cash)',
      'Scalable cloud infrastructure',
      'Custom reporting and analytics dashboards',
      'Integration with existing business systems',
    ],
    image: '/images/solutions/custom-software.jpg',
    imageAlt: 'Team collaborating on custom software development',
    icon: '💻',
    gradient: 'from-blue-600 to-indigo-700',
    iconBg: 'bg-blue-500',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform Development',
    tagline: 'Launch your own software product',
    description: 'Transform your business idea into a fully-featured SaaS platform. We help entrepreneurs and enterprises build subscription-based software products that generate recurring revenue and scale globally.',
    features: [
      'Multi-tenant architecture',
      'Subscription billing with African payment methods',
      'User authentication and role management',
      'API development for third-party integrations',
      'Admin dashboard and analytics',
      'Automated onboarding and support systems',
    ],
    image: '/images/solutions/saas-platform.jpg',
    imageAlt: 'SaaS platform dashboard interface',
    icon: '☁️',
    gradient: 'from-purple-600 to-pink-600',
    iconBg: 'bg-purple-500',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    tagline: 'Apps that work across Africa',
    description: 'Create mobile applications optimized for African users and infrastructure. We build apps that work on low-end devices, consume minimal data, and integrate with local payment systems.',
    features: [
      'iOS and Android development',
      'Cross-platform with React Native/Flutter',
      'Offline mode and data sync',
      'USSD and SMS fallback options',
      'Push notifications and real-time updates',
      'App store optimization and launch support',
    ],
    image: '/images/solutions/mobile-app.jpg',
    imageAlt: 'Person using mobile app on smartphone',
    icon: '📱',
    gradient: 'from-green-500 to-teal-600',
    iconBg: 'bg-green-500',
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    tagline: 'Connect your business systems',
    description: 'Seamlessly connect your existing tools, databases, and third-party services. We build robust APIs and integrations that unify your business operations and enable data flow across platforms.',
    features: [
      'RESTful and GraphQL API development',
      'Payment gateway integrations (Paystack, Flutterwave)',
      'Mobile money API integration',
      'ERP and CRM system connections',
      'Real-time data synchronization',
      'Secure authentication and authorization',
    ],
    image: '/images/solutions/api-integration.jpg',
    imageAlt: 'API integration and system connectivity',
    icon: '🔗',
    gradient: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-500',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Analytics',
    tagline: 'Data-driven decision making',
    description: 'Turn your business data into actionable insights. We build custom dashboards, reporting systems, and analytics platforms that help you understand your customers, optimize operations, and identify growth opportunities.',
    features: [
      'Custom analytics dashboards',
      'Automated reporting and alerts',
      'Sales and revenue forecasting',
      'Customer behavior analysis',
      'Inventory and supply chain analytics',
      'Executive KPI tracking',
    ],
    image: '/images/solutions/business-intelligence.jpg',
    imageAlt: 'Business intelligence dashboard with data visualizations',
    icon: '📊',
    gradient: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500',
  },
]

const industries = [
  { name: 'Fintech', icon: '💳', desc: 'Mobile money, lending, and payment solutions' },
  { name: 'E-Commerce', icon: '🛒', desc: 'Online stores and marketplace platforms' },
  { name: 'Healthcare', icon: '🏥', desc: 'Telemedicine and health management' },
  { name: 'Agriculture', icon: '🌾', desc: 'Farm management and supply chain' },
  { name: 'Education', icon: '📚', desc: 'E-learning and school management' },
  { name: 'Logistics', icon: '🚚', desc: 'Delivery and fleet management' },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-navy to-deep-blue">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(239, 94, 51, 0.4) 0%, transparent 60%)',
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
              Technology Solutions - Built for Africa
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-orange to-yellow-400">Solutions</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Innovative technology solutions designed for the unique needs of African businesses. 
              From startups to enterprises, we help you build, scale, and succeed.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Solutions List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-32">
          {solutions.map((solution, i) => (
            <div key={solution.id} id={solution.id} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Content */}
                <FadeIn direction={i % 2 === 0 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <motion.span
                        className={`text-4xl p-3 rounded-xl ${solution.iconBg} bg-opacity-20`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {solution.icon}
                      </motion.span>
                    </div>
                    <h2 className="heading-md text-deep-blue mb-2">{solution.title}</h2>
                    <p className="text-vibrant-orange font-semibold text-lg mb-4">{solution.tagline}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{solution.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {solution.features.map((feature, j) => (
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
                        Discuss Your Project
                      </Link>
                    </motion.div>
                  </div>
                </FadeIn>

                {/* Image with gradient overlay and icon badge */}
                <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <motion.div
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={solution.image}
                        alt={solution.imageAlt}
                        width={600}
                        height={450}
                        className="object-cover w-full h-[350px] md:h-[450px]"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${solution.gradient} opacity-30`} />
                      
                      {/* Icon badge */}
                      <div className="absolute top-6 right-6">
                        <motion.div 
                          className={`w-16 h-16 ${solution.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <span className="text-3xl">{solution.icon}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Decorative element */}
                    <div className={`absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br ${solution.gradient} opacity-20`} />
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-b from-light-blue to-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Built for Your Industry</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We understand the unique challenges of different sectors across Africa.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)' }}
                >
                  <motion.span
                    className="text-4xl mb-4 block"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {industry.icon}
                  </motion.span>
                  <h3 className="font-display font-bold text-deep-blue mb-2">{industry.name}</h3>
                  <p className="text-gray-500 text-sm">{industry.desc}</p>
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
              background: 'radial-gradient(circle at 80% 20%, rgba(239, 94, 51, 0.3) 0%, transparent 40%)',
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-6">Ready to Build Your Solution?</h2>
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
