'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'
import type { ServicePageData } from '@/lib/service-pages'

export type RelatedService = Pick<ServicePageData, 'slug' | 'label' | 'icon' | 'cardDescription'>

interface ServicePageContentProps {
  service: ServicePageData
  relatedServices: RelatedService[]
}

export default function ServicePageContent({ service, relatedServices }: ServicePageContentProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-navy to-deep-blue">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                'radial-gradient(circle at 70% 30%, rgba(239, 94, 51, 0.4) 0%, transparent 60%)',
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center bg-white/10 backdrop-blur-md text-vibrant-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <span className="text-xl mr-2">{service.icon}</span>
                {service.heroBadge}
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {service.h1}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-300 text-xl leading-relaxed mb-8">{service.heroSubtitle}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started" className="btn-primary text-lg">
                  Get a Free Consultation
                </Link>
                <Link href="/contact" className="btn-secondary text-lg">
                  Talk to Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {service.intro.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-b from-light-blue to-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                Why Rapid Entrepreneurs
              </span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">{service.benefitsHeading}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">{service.benefitsIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.title} className="h-full">
                <motion.div
                  className="h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-vibrant-orange/30 transition-colors shadow-lg"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-deep-blue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">How We Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">{service.processIntro}</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((item, i) => (
              <StaggerItem key={item.step} className="h-full">
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center h-full"
                  whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-vibrant-orange to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Step {item.step}
                  </div>
                  <h3 className="font-display font-bold text-xl text-deep-blue mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-vibrant-orange/50 to-transparent" />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-b from-light-blue to-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="heading-lg text-deep-blue mt-3">Frequently Asked Questions</h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-deep-blue mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                More From Rapid Entrepreneurs
              </span>
              <h2 className="heading-lg text-deep-blue mt-3">Related Services</h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <StaggerItem key={related.slug} className="h-full">
                <Link
                  href={`/services/${related.slug}`}
                  className="group block h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:border-vibrant-orange/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-3xl block mb-3">{related.icon}</span>
                  <h3 className="font-display font-bold text-lg text-deep-blue mb-2 group-hover:text-vibrant-orange transition-colors">
                    {related.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{related.cardDescription}</p>
                  <span className="inline-flex items-center text-vibrant-orange font-semibold text-sm mt-4">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
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
              background:
                'radial-gradient(circle at 20% 80%, rgba(239, 94, 51, 0.3) 0%, transparent 40%)',
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-xl mb-10">
              Tell us about your project and we&apos;ll scope it with you and give you a fixed
              quote — no surprises, no jargon.
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
