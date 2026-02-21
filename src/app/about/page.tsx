'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'
import AnimatedCounter from '@/components/motion/AnimatedCounter'

const values = [
  {
    icon: '🚀',
    title: 'Rapid Results',
    description: 'We deliver fast without compromising quality. Agile methodologies mean your business grows faster.',
  },
  {
    icon: '💡',
    title: 'Innovation First',
    description: 'We stay ahead of trends, bringing cutting-edge solutions that give you a competitive edge.',
  },
  {
    icon: '🤝',
    title: 'Partnership Approach',
    description: 'We see ourselves as an extension of your team, invested in your success as much as you are.',
  },
  {
    icon: '📊',
    title: 'Data-Driven',
    description: 'Every decision is backed by data. We measure, analyze, and optimize for maximum ROI.',
  },
]

const team = [
  {
    name: 'CEO',
    role: 'Founder & Director',
    image: '/images/team-meeting.jpg',
  },
]

const milestones = [
  { year: '2015', title: 'Founded', description: 'Started with a vision to empower African businesses digitally' },
  { year: '2017', title: '50+ Projects', description: 'Reached our first major milestone in project deliveries' },
  { year: '2020', title: 'AI Integration', description: 'Expanded into AI and automation solutions' },
  { year: '2023', title: 'Regional Growth', description: 'Serving clients across multiple African countries' },
  { year: '2025', title: '150+ Projects', description: 'Continuing to grow and innovate for our clients' },
]

export default function AboutPage() {
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
              About Us
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Your Growth Partner For <span className="text-vibrant-orange">Rapid Results</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just another agency; we are your dedicated growth team specializing in 
              high-impact digital solutions built for speed and scale.
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/hero-african-business.jpg"
                    alt="Rapid Entrepreneurs Team"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[400px] lg:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent" />
                </motion.div>
                
                {/* Stats overlay */}
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-vibrant-orange">
                        <AnimatedCounter value={10} suffix="+" />
                      </div>
                      <div className="text-gray-600 text-sm">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-vibrant-orange">
                        <AnimatedCounter value={150} suffix="+" />
                      </div>
                      <div className="text-gray-600 text-sm">Projects</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div>
                <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="heading-lg text-deep-blue mt-3 mb-6">
                  Building Digital Success Stories Since 2015
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Rapid Entrepreneurs was founded with a simple mission: to help businesses 
                  connect with their audience and achieve remarkable growth through digital solutions.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  What started as a small team in Accra has grown into a full-service digital agency 
                  serving clients across Ghana and beyond. We&apos;ve built everything from simple websites 
                  to complex AI-powered business systems.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our approach is different. We don&apos;t just build websites or run campaigns—we become 
                  partners in your success, invested in your growth every step of the way.
                </p>
                <Link href="/contact" className="btn-primary">
                  Work With Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-light-blue to-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">What Drives Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full text-center"
                  whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                >
                  <motion.span
                    className="text-5xl block mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.span>
                  <h3 className="font-display font-bold text-xl text-deep-blue mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-deep-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="heading-lg text-white mt-3 mb-4">Milestones That Define Us</h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-vibrant-orange/30 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <span className="text-vibrant-orange font-bold text-2xl">{milestone.year}</span>
                        <h3 className="text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="relative">
                      <motion.div
                        className="w-6 h-6 bg-vibrant-orange rounded-full border-4 border-deep-blue shadow-lg"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    </div>
                    
                    <div className="flex-1" />
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Team</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Team Members</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                A dedicated team of professionals committed to delivering excellence.
              </p>
            </div>
          </FadeIn>

          <div className="flex justify-center">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 max-w-sm"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-display font-bold text-xl">{member.name}</h3>
                      <p className="text-gray-300 text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-vibrant-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business achieve rapid digital growth.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg">
                Get Started Today
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
