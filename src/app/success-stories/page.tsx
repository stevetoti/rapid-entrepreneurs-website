'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'
import AnimatedCounter from '@/components/motion/AnimatedCounter'

const caseStudies = [
  {
    title: 'Accra Fresh Markets',
    subtitle: 'E-Commerce & Mobile Money Integration',
    category: 'E-Commerce',
    image: '/images/african-market.jpg',
    challenge: 'Accra Fresh Markets, a network of 15 fresh produce vendors in Accra, had no online presence and relied entirely on foot traffic. They were losing customers to modern supermarkets and needed a digital solution that worked with their existing mobile money workflow.',
    solution: 'We built a mobile-first e-commerce platform with integrated MTN MoMo and Vodafone Cash payments. The platform includes a vendor management system, real-time inventory tracking, and a delivery scheduling tool optimized for Accra neighborhoods.',
    results: [
      { metric: '40%', label: 'Increase in Sales' },
      { metric: '2,500+', label: 'Monthly Online Orders' },
      { metric: '60%', label: 'Customers Pay via MoMo' },
      { metric: '3x', label: 'Customer Reach' },
    ],
    testimonial: {
      text: 'Rapid Entrepreneurs transformed our traditional market business into a thriving online platform. Our mobile money integration alone increased sales by 40%.',
      name: 'Kwame Asante',
      role: 'CEO, Accra Fresh Markets',
    },
  },
  {
    title: 'GhanaStyle Fashion',
    subtitle: 'Custom E-Commerce Platform',
    category: 'Fashion & Retail',
    image: '/images/ecommerce.jpg',
    challenge: 'GhanaStyle Fashion, a premium African fashion brand, needed an e-commerce platform that showcased their designs beautifully while supporting international orders and local mobile money payments. Existing platforms like Shopify lacked adequate mobile money integration.',
    solution: 'We designed and built a custom e-commerce platform with stunning product photography displays, multi-currency support (GHS, USD, EUR), integrated mobile money payments, and international shipping calculations. The site loads fast even on 3G connections.',
    results: [
      { metric: '300%', label: 'Growth in Online Sales' },
      { metric: '25', label: 'Countries Reached' },
      { metric: '4.2s', label: 'Avg Load Time on 3G' },
      { metric: '85%', label: 'Mobile Conversions' },
    ],
    testimonial: {
      text: 'The e-commerce solution they built for us was perfectly tailored for our Ghanaian customers. The mobile-first approach was exactly what we needed.',
      name: 'Abena Osei-Mensah',
      role: 'Founder, GhanaStyle Fashion',
    },
  },
  {
    title: 'TechBridge Logistics',
    subtitle: 'Mobile App & Fleet Management',
    category: 'Logistics',
    image: '/images/mobile-phone-africa.jpg',
    challenge: 'TechBridge Logistics managed their entire delivery fleet through phone calls and WhatsApp messages. With 50+ drivers and hundreds of daily deliveries across Greater Accra, they needed a digital solution to manage operations efficiently.',
    solution: 'We built a comprehensive mobile app (Android + iOS) with real-time GPS tracking, automated dispatch, customer notifications via SMS/WhatsApp, digital proof of delivery, and a management dashboard. The app works offline for areas with poor connectivity.',
    results: [
      { metric: '2x', label: 'Deliveries Per Driver' },
      { metric: '35%', label: 'Reduction in Fuel Costs' },
      { metric: '95%', label: 'On-Time Delivery Rate' },
      { metric: '4.7★', label: 'App Store Rating' },
    ],
    testimonial: {
      text: 'Their mobile app completely revolutionized our delivery operations. We now serve twice as many customers with the same team.',
      name: 'Kofi Boateng',
      role: 'Director, TechBridge Logistics',
    },
  },
  {
    title: 'MedConnect Ghana',
    subtitle: 'Telemedicine Platform',
    category: 'HealthTech',
    image: '/images/office-modern.jpg',
    challenge: 'MedConnect Ghana wanted to connect patients in rural communities with doctors in Accra and Kumasi. They needed a platform that worked on low-bandwidth connections and allowed patients to pay for consultations via mobile money.',
    solution: 'We built a telemedicine platform with video consultations optimized for low bandwidth, an audio-only fallback mode, electronic prescriptions, mobile money payment integration, and appointment scheduling. The platform also includes a health records system.',
    results: [
      { metric: '10,000+', label: 'Consultations Facilitated' },
      { metric: '45', label: 'Rural Communities Served' },
      { metric: '92%', label: 'Patient Satisfaction' },
      { metric: '70%', label: 'Reduction in Travel Costs' },
    ],
    testimonial: {
      text: 'The platform has literally saved lives by connecting rural patients with specialist doctors they could never have accessed before.',
      name: 'Dr. Yaa Amoako',
      role: 'CEO, MedConnect Ghana',
    },
  },
  {
    title: 'PayEasy Ghana',
    subtitle: 'Fintech Payment Aggregator',
    category: 'Fintech',
    image: '/images/fintech-mobile.jpg',
    challenge: 'PayEasy Ghana needed a unified payment platform that aggregated all major mobile money providers, bank transfers, and card payments into a single API for merchants across Ghana.',
    solution: 'We developed a robust payment aggregation platform with APIs for MTN MoMo, Vodafone Cash, AirtelTigo Money, and major banks. The platform includes a merchant dashboard, automated reconciliation, and fraud detection systems.',
    results: [
      { metric: 'GHS 2M+', label: 'Monthly Transaction Volume' },
      { metric: '500+', label: 'Merchant Partners' },
      { metric: '99.9%', label: 'Platform Uptime' },
      { metric: '< 3s', label: 'Average Transaction Time' },
    ],
    testimonial: {
      text: 'Rapid Entrepreneurs built us a payment platform that rivals anything in the global fintech space, but designed specifically for the Ghanaian market.',
      name: 'Nana Agyemang',
      role: 'CTO, PayEasy Ghana',
    },
  },
]

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-navy to-deep-blue">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 30% 70%, rgba(239, 94, 51, 0.4) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
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
              🏆 Success Stories
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-orange to-yellow-400">African</span> Businesses
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how we&apos;ve helped African entrepreneurs and businesses achieve remarkable 
              growth through innovative digital solutions.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Summary */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div 
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 150, suffix: '+', label: 'Projects Delivered' },
                { value: 50, suffix: '+', label: 'Businesses Empowered' },
                { value: 5, suffix: '', label: 'Countries Served' },
                { value: 98, suffix: '%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-vibrant-orange mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </FadeIn>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Case Studies</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">How We&apos;ve Helped Businesses Grow</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Real stories of transformation from entrepreneurs across Ghana and Africa.
              </p>
            </div>
          </FadeIn>
          
          <div className="space-y-20">
            {caseStudies.map((study, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div 
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-72 lg:h-auto">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-deep-blue/80 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <motion.span 
                          className="bg-vibrant-orange text-white text-xs font-bold px-4 py-2 rounded-full uppercase inline-flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span>🏷️</span> {study.category}
                        </motion.span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12">
                      <h2 className="heading-md text-deep-blue mb-2">{study.title}</h2>
                      <p className="text-vibrant-orange font-semibold mb-6">{study.subtitle}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-deep-blue mb-2 flex items-center gap-2">
                          <span className="text-vibrant-orange">💡</span> The Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-deep-blue mb-2 flex items-center gap-2">
                          <span className="text-vibrant-orange">🚀</span> Our Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {study.results.map((result, j) => (
                          <motion.div 
                            key={j} 
                            className="bg-gradient-to-br from-light-blue to-white rounded-xl p-4 text-center border border-gray-100"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.1 }}
                          >
                            <div className="text-xl font-bold text-vibrant-orange">{result.metric}</div>
                            <div className="text-gray-600 text-xs mt-1">{result.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gradient-to-br from-soft-cream to-white rounded-xl p-6 border border-orange-100">
                        <p className="text-gray-700 italic mb-3">&ldquo;{study.testimonial.text}&rdquo;</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vibrant-orange to-yellow-400 flex items-center justify-center text-white font-bold">
                            {study.testimonial.name[0]}
                          </div>
                          <div>
                            <span className="font-semibold text-deep-blue block">{study.testimonial.name}</span>
                            <span className="text-gray-500 text-sm">{study.testimonial.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-vibrant-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-5xl mb-4 block">🚀</span>
              <h2 className="heading-lg text-white mb-6">Ready to Be Our Next Success Story?</h2>
              <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
                Join the growing list of African businesses that have transformed their operations with our digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg">
                    Start Your Project Today
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="tel:+233554303269" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vibrant-orange transition-all duration-300 text-lg">
                    📞 Call 0554303269
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
