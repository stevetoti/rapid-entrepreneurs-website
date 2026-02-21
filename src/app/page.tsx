'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'
import AnimatedCounter from '@/components/motion/AnimatedCounter'
import GlowingCard from '@/components/motion/GlowingCard'

const services = [
  {
    icon: '🤖',
    title: 'AI Business Automation',
    description: 'Streamline workflows, cut costs, and scale with smart automation solutions.',
    tags: ['Workflow Optimization', 'Cost Reduction', 'Scalable Solutions'],
    href: '/services#ai-solutions',
  },
  {
    icon: '💻',
    title: 'Website Development',
    description: 'Fast, secure, and mobile-first websites designed to convert and scale.',
    tags: ['Mobile-First', 'High Performance', 'Conversion Focused'],
    href: '/services#web-development',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Custom apps for iOS & Android with sleek design and seamless user experience.',
    tags: ['iOS & Android', 'User-Centric Design', 'Seamless UX'],
    href: '/services#mobile-apps',
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Grow your brand with data-driven campaigns, social ads, and content marketing.',
    tags: ['Data-Driven', 'Social Media Ads', 'Content Strategy'],
    href: '/services#digital-marketing',
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    description: 'Boost visibility with keyword research, on-page SEO, and technical fixes.',
    tags: ['Keyword Research', 'On-Page SEO', 'Technical SEO'],
    href: '/services#seo',
  },
  {
    icon: '🎨',
    title: 'Graphic & Video Design',
    description: 'Engage your audience with powerful designs and captivating video content.',
    tags: ['Visual Storytelling', 'Brand Identity', 'Engaging Content'],
    href: '/services#design',
  },
]

const stats = [
  { value: 150, suffix: '+', label: 'Completed Projects' },
  { value: 50, suffix: 'k+', label: 'Happy Customers' },
  { value: 15, suffix: '+', label: 'Awards Won' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
]

const portfolio = [
  {
    title: 'Opal Trust GH',
    description: 'A bank website',
    url: 'https://opaltrustgh.com',
    image: '/images/portfolio/opal-trust.jpg',
  },
  {
    title: 'Quick Consult GH',
    description: 'Business growth consultant website',
    url: 'https://quickconsultgh.com/',
    image: '/images/portfolio/quick-consult.jpg',
  },
  {
    title: 'Ghana Reading Icon',
    description: 'Organisation website',
    url: 'http://ghanareadingicon.com/',
    image: '/images/portfolio/ghana-reading.jpg',
  },
  {
    title: 'Nyarkotey University',
    description: 'School website',
    url: '#',
    image: '/images/portfolio/nyarkotey.jpg',
  },
  {
    title: 'Godan Foundation',
    description: 'Organisation website',
    url: 'https://godanfoundation.org/',
    image: '/images/portfolio/godan.jpg',
  },
  {
    title: 'AyyLlash Studio',
    description: 'Beauty studio website',
    url: 'https://ayyllashbeauty.com',
    image: '/images/portfolio/ayyllash.jpg',
  },
]

const testimonials = [
  {
    name: 'Dr. Raphael Nyarkotey',
    role: 'Nyarkotey University',
    text: 'Rapid Entrepreneurs delivered a modern, user-friendly website that perfectly showcases our programs and makes the admissions process seamless.',
    rating: 5,
    image: '/images/testimonials/user1.jpg',
  },
  {
    name: 'Daniel Tetteh Kudji',
    role: 'CEO, Godan Foundation',
    text: 'Our redesigned website now inspires action—donations and volunteer sign-ups have grown significantly since the launch.',
    rating: 4,
    image: '/images/testimonials/user2.jpg',
  },
  {
    name: 'Mr. James Nii Ashie',
    role: 'CEO, Quick Time Consult',
    text: "They created a sleek, professional website that not only boosted my credibility but also attracts a steady flow of quality leads.",
    rating: 5,
    image: '/images/testimonials/user3.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Animated Gradient */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-navy to-deep-blue">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 30% 40%, rgba(239, 94, 51, 0.4) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 70% 60%, rgba(35, 60, 111, 0.6) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-vibrant-orange/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <motion.div 
                className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="mr-2">🇬🇭</span>
                Digital Solutions That Grows Your Brand
              </motion.div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
                Let&apos;s{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-vibrant-orange to-yellow-400">
                    Elevate
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-vibrant-orange/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>{' '}
                Your Business
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                From stunning websites and graphics to engaging videos and high-converting 
                campaigns — we craft experiences that connect and convert.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className="btn-primary text-lg group">
                    Start Your Project
                    <motion.svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services" className="btn-secondary text-lg">
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            </FadeIn>

            {/* Consultation Badge */}
            <FadeIn delay={0.6}>
              <div className="mt-12 inline-flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-vibrant-orange to-yellow-400 border-2 border-deep-blue flex items-center justify-center text-white font-bold text-sm">
                      {['👨‍💼', '👩‍💻', '👨‍🎨', '👩‍💼'][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <p className="font-semibold">Free Consultation</p>
                  <p className="text-sm text-gray-400">Call: 0554303269</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Impact Stats with Glassmorphism */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div 
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
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

      {/* About Section */}
      <section className="section-padding bg-soft-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/team-meeting.jpg"
                    alt="Rapid Entrepreneurs Team"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[400px] lg:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
                </div>
                
                {/* Experience badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-vibrant-orange text-white rounded-2xl p-6 shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="text-4xl font-bold mb-1">10</div>
                  <div className="text-sm font-medium">YEARS<br />OF EXPERIENCE</div>
                </motion.div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div>
                <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h2 className="heading-lg text-deep-blue mt-3 mb-6">
                  Your Growth Partner For <span className="text-vibrant-orange">Rapid Results</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We&apos;re not just another agency; we are your dedicated growth team. We specialize in 
                  cutting through the noise to deliver high-impact digital marketing strategies that 
                  are built for speed and scale.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Rapid lead generation campaigns',
                    'Scalable customer acquisition funnels',
                    'Data-driven strategy and execution',
                    'Conversion rate optimization for maximum ROI',
                    'Agile marketing sprints for fast results',
                    'Transparent reporting and analytics',
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-vibrant-orange/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-vibrant-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/about" className="btn-outline">
                  Learn More About Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section with Progress Bars */}
      <section className="section-padding bg-deep-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Goal</span>
              <h2 className="heading-lg text-white mt-3 mb-4">Mission We Aim For You!</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                We empower businesses to connect with their audience and achieve remarkable growth.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Creative Designs', value: 95, desc: 'Our creative solutions are tailored to elevate your brand' },
              { label: 'Solutions', value: 90, desc: 'We go beyond aesthetics to develop data-driven strategies' },
              { label: 'Client Success', value: 96, desc: 'We are committed to building strong partnerships' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <div className="text-5xl font-bold text-vibrant-orange mb-2">
                    <AnimatedCounter value={item.value} suffix="%" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.label}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-vibrant-orange to-yellow-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + i * 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Digital Solutions - Our Services</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Empowering businesses with digital, creative, and automation solutions that drive real growth.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <GlowingCard>
                  <span className="text-5xl mb-6 block">{service.icon}</span>
                  <h3 className="font-display font-bold text-xl text-deep-blue mb-3 group-hover:text-vibrant-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-xs bg-vibrant-orange/10 text-vibrant-orange px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={service.href} className="inline-flex items-center text-vibrant-orange font-semibold text-sm group/link">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </GlowingCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Activities We Completed</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Take a quick glance through our professional services rendered
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.url !== '#' && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-vibrant-orange text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-600 transition-colors"
                        >
                          View Project
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-deep-blue mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/success-stories" className="btn-outline">
                View More Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Review&apos;s Of Clients</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our clients&apos; success stories speak louder than anything we could say. Here&apos;s what 
                they have to say about working with Rapid Entrepreneurs.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className={`w-5 h-5 ${j < testimonial.rating ? 'fill-current' : 'fill-gray-200'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-vibrant-orange to-yellow-400 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-deep-blue">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-deep-blue to-dark-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Subscribe</span>
            <h2 className="heading-lg text-white mt-3 mb-4">Subscribe To Get Latest Update From Us</h2>
            <p className="text-gray-300 text-lg mb-8">
              Stay ahead with the latest trends in web design, digital marketing, and business growth. 
              Subscribe to our newsletter for expert tips, success stories, and exclusive updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-vibrant-orange transition-colors"
              />
              <motion.button
                type="submit"
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-vibrant-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-6">Contact & Let&apos;s Begin</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Whether you&apos;re ready to start your next project, have questions about our services, or just 
              want to explore how we can help your business grow, our team is here to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg">
                  Get a Free Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:+233554303269" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vibrant-orange transition-all duration-300 text-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
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
