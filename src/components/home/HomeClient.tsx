'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Bot,
  Code2,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  ArrowRight,
  ExternalLink,
  Star,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import FadeIn from '@/components/motion/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'
import AnimatedCounter from '@/components/motion/AnimatedCounter'

export interface HomeInsight {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string | null
  imageUrl: string | null
  imageAlt: string
  readTime: string | null
  date: string
}

const services = [
  {
    icon: Bot,
    title: 'AI Business Automation',
    description: 'Streamline workflows, cut costs, and scale with smart automation built for African businesses.',
    tags: ['Workflow Optimization', 'Cost Reduction', 'Scalable Solutions'],
    href: '/services#ai-solutions',
    image: '/images/ai-technology.jpg',
    imageAlt: 'AI technology powering business automation',
  },
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Fast, secure, and mobile-first websites designed to convert visitors into customers.',
    tags: ['Mobile-First', 'High Performance', 'Conversion Focused'],
    href: '/services#web-development',
    image: '/images/coding-laptop.jpg',
    imageAlt: 'Developer building a website on a laptop',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Custom apps for iOS & Android with sleek design and seamless user experience.',
    tags: ['iOS & Android', 'User-Centric Design', 'Seamless UX'],
    href: '/services#mobile-apps',
    image: '/images/mobile-phone-africa.jpg',
    imageAlt: 'Mobile app in use on a smartphone in Africa',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Grow your brand with data-driven campaigns, social ads, and content marketing.',
    tags: ['Data-Driven', 'Social Media Ads', 'Content Strategy'],
    href: '/services#digital-marketing',
    image: '/images/digital-marketing.jpg',
    imageAlt: 'Digital marketing campaign analytics',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost visibility on Google with keyword research, on-page SEO, and technical fixes.',
    tags: ['Keyword Research', 'On-Page SEO', 'Technical SEO'],
    href: '/services#seo',
    image: '/images/ecommerce.jpg',
    imageAlt: 'Online store gaining visibility through SEO',
  },
  {
    icon: Palette,
    title: 'Graphic & Video Design',
    description: 'Engage your audience with powerful brand designs and captivating video content.',
    tags: ['Visual Storytelling', 'Brand Identity', 'Engaging Content'],
    href: '/services#design',
    image: '/images/african-entrepreneur-woman.jpg',
    imageAlt: 'Creative professional working on brand design',
  },
]

const stats = [
  { value: 50, suffix: '+', label: 'Completed Projects' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Combined Experience' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
]

const portfolio = [
  {
    title: 'Opal Trust GH',
    description: 'Banking & financial services website',
    url: 'https://opaltrustgh.com',
    image: '/images/portfolio/opal-trust.jpg',
  },
  {
    title: 'Quick Consult GH',
    description: 'Business growth consultancy website',
    url: 'https://quickconsultgh.com/',
    image: '/images/portfolio/quick-consult.jpg',
  },
  {
    title: 'Ghana Reading Icon',
    description: 'Literacy organisation website',
    url: 'http://ghanareadingicon.com/',
    image: '/images/portfolio/ghana-reading.jpg',
  },
  {
    title: 'Nyarkotey University',
    description: 'University website & admissions portal',
    url: '#',
    image: '/images/portfolio/nyarkotey.jpg',
  },
  {
    title: 'Godan Foundation',
    description: 'Non-profit foundation website',
    url: 'https://godanfoundation.org/',
    image: '/images/portfolio/godan.jpg',
  },
  {
    title: 'AyyLlash Studio',
    description: 'Beauty studio website & booking',
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
  },
  {
    name: 'Daniel Tetteh Kudji',
    role: 'CEO, Godan Foundation',
    text: 'Our redesigned website now inspires action — donations and volunteer sign-ups have grown significantly since the launch.',
    rating: 4,
  },
  {
    name: 'Mr. James Nii Ashie',
    role: 'CEO, Quick Time Consult',
    text: 'They created a sleek, professional website that not only boosted my credibility but also attracts a steady flow of quality leads.',
    rating: 5,
  },
]

const aboutPoints = [
  'Rapid lead generation campaigns',
  'Scalable customer acquisition funnels',
  'Data-driven strategy and execution',
  'Conversion rate optimization for maximum ROI',
  'Agile marketing sprints for fast results',
  'Transparent reporting and analytics',
]

const missionItems = [
  { label: 'Creative Designs', value: 95, desc: 'Our creative solutions are tailored to elevate your brand above the noise.' },
  { label: 'Solutions', value: 90, desc: 'We go beyond aesthetics to develop data-driven strategies that perform.' },
  { label: 'Client Success', value: 96, desc: 'We are committed to building strong, long-term partnerships.' },
]

export default function HomeClient({ insights }: { insights: HomeInsight[] }) {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-deep-blue via-dark-navy to-deep-blue">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(239, 94, 51, 0.28) 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-[40rem] h-[40rem] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245, 166, 35, 0.16) 0%, transparent 65%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles — deterministic positions derived from index */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-vibrant-orange/25 rounded-full"
              style={{ left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%` }}
              animate={{ y: [-16, 16, -16], opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 3 + (i % 5) * 0.7, repeat: Infinity, delay: (i % 4) * 0.6 }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium mb-7 border border-white/20 tracking-wide">
                  <Sparkles className="w-4 h-4 text-vibrant-orange" />
                  Web Development · AI Automation · Digital Marketing — Ghana & West Africa
                </div>
              </FadeIn>

              <FadeIn delay={0.12}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.08]">
                  Digital Solutions That{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-orange to-yellow-400">
                    Grow African Businesses
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-300 mb-9 leading-relaxed max-w-xl">
                  From high-converting websites and mobile apps to AI automation and
                  digital marketing — we craft experiences that connect, convert, and scale
                  your brand across Ghana and beyond.
                </p>
              </FadeIn>

              <FadeIn delay={0.28}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/get-started" className="btn-primary text-lg group">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="btn-secondary text-lg">
                    Explore Services
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.36}>
                <div className="mt-10 inline-flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vibrant-orange to-yellow-400 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Free Consultation</p>
                    <a href="tel:+233554303269" className="text-sm text-gray-400 hover:text-vibrant-orange transition-colors">
                      Call: 055 430 3269
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: hero image */}
            <FadeIn delay={0.2} direction="left">
              <div className="relative max-w-xl mx-auto lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-vibrant-orange/50 via-transparent to-yellow-400/30 blur-lg" aria-hidden="true" />
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <Image
                    src="/images/hero-team-accra.jpg"
                    alt="Rapid Entrepreneurs team of African digital professionals collaborating in a modern Accra office"
                    width={1280}
                    height={720}
                    priority
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 via-transparent to-transparent" aria-hidden="true" />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl border border-gray-100 flex items-center gap-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-lg">🇬🇭</span>
                  <span className="text-sm font-semibold text-deep-blue">Proudly Ghanaian</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -right-2 sm:-right-5 bg-deep-blue/95 backdrop-blur-md rounded-xl px-5 py-3 shadow-xl border border-white/15"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-2xl font-display font-bold text-vibrant-orange leading-none">50+</p>
                  <p className="text-xs text-gray-300 mt-1">Projects Delivered</p>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
      </section>

      {/* ── Impact Stats ───────────────────────────────────────── */}
      <section className="relative -mt-14 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-vibrant-orange mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section className="section-padding bg-soft-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/team-meeting.jpg"
                    alt="Rapid Entrepreneurs team in a strategy meeting"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[400px] lg:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" aria-hidden="true" />
                </div>

                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-vibrant-orange text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-bold mb-1">5+</div>
                  <div className="text-sm font-medium leading-tight">YEARS COMBINED<br />EXPERIENCE</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div>
                <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h2 className="heading-lg text-deep-blue mt-3 mb-6">
                  Your Growth Partner For <span className="text-vibrant-orange">Rapid Results</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We&apos;re not just another agency — we are your dedicated growth team. We specialize
                  in cutting through the noise to deliver high-impact digital strategies that
                  are built for speed and scale.
                </p>
                <ul className="space-y-4 mb-8">
                  {aboutPoints.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-vibrant-orange flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
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

      {/* ── Mission ────────────────────────────────────────────── */}
      <section className="section-padding bg-deep-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Goal</span>
              <h2 className="heading-lg text-white mt-3 mb-4">A Mission Built Around You</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                We empower businesses to connect with their audience and achieve remarkable growth.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {missionItems.map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 h-full">
                  <div className="text-5xl font-bold text-vibrant-orange mb-2">
                    <AnimatedCounter value={item.value} suffix="%" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.label}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-vibrant-orange to-yellow-400 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Empowering businesses with digital, creative, and automation solutions that drive real growth.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.title} className="h-full">
                  <motion.div
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg h-full flex flex-col"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 to-transparent" aria-hidden="true" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-vibrant-orange flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-xl text-deep-blue mb-3 group-hover:text-vibrant-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-vibrant-orange/10 text-vibrant-orange px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={service.href}
                        className="mt-auto inline-flex items-center text-vibrant-orange font-semibold text-sm group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────────────────────── */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">Activities We Completed</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Real projects delivered for real clients across Ghana — take a quick glance.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {portfolio.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} — ${item.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    {item.url !== '#' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-vibrant-orange text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-600 transition-colors"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-deep-blue mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="text-center mt-12">
              <Link href="/success-stories" className="btn-outline">
                View More Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our clients&apos; success stories speak louder than anything we could say.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name} className="h-full">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Star
                        key={j}
                        className={`w-5 h-5 ${j < testimonial.rating ? 'fill-current' : 'fill-gray-200 text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic flex-1">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-orange to-yellow-400 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name.replace('Dr. ', '').replace('Mr. ', '')[0]}</span>
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

      {/* ── Latest Insights (DB-driven blog) ───────────────────── */}
      {insights.length > 0 && (
        <section className="section-padding bg-soft-cream">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">From The Blog</span>
                <h2 className="heading-lg text-deep-blue mt-3 mb-4">Latest Insights</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Practical tips on web, marketing, and business growth for African entrepreneurs.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
              {insights.map((post) => (
                <StaggerItem key={post.id} className="h-full">
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <motion.article
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        {post.imageUrl ? (
                          <Image
                            src={post.imageUrl}
                            alt={post.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-deep-blue to-dark-navy flex items-center justify-center">
                            <span className="font-display font-bold text-3xl text-vibrant-orange">RE</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          {post.category && (
                            <span className="bg-vibrant-orange/10 text-vibrant-orange px-3 py-1 rounded-full font-medium">
                              {post.category}
                            </span>
                          )}
                          {post.date && <span>{post.date}</span>}
                          {post.readTime && <span>{post.readTime}</span>}
                        </div>
                        <h3 className="font-display font-bold text-lg text-deep-blue mb-2 group-hover:text-vibrant-orange transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                        )}
                        <span className="mt-auto pt-4 inline-flex items-center text-vibrant-orange font-semibold text-sm">
                          Read Article
                          <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </motion.article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.2}>
              <div className="text-center mt-12">
                <Link href="/blog" className="btn-outline">
                  View All Articles
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Newsletter ─────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-r from-deep-blue to-dark-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Subscribe</span>
            <h2 className="heading-lg text-white mt-3 mb-4">Get The Latest Updates From Us</h2>
            <p className="text-gray-300 text-lg mb-8">
              Stay ahead with the latest trends in web design, digital marketing, and business growth —
              expert tips, success stories, and exclusive updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-vibrant-orange transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section className="section-padding bg-vibrant-orange relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="heading-lg text-white mb-6">Contact &amp; Let&apos;s Begin</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Whether you&apos;re ready to start your next project, have questions about our services, or
              just want to explore how we can help your business grow — our team is here to assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg hover:scale-105"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:+233554303269"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vibrant-orange transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 055 430 3269
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
