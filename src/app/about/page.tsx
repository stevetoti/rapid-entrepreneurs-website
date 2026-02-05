import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Rapid Entrepreneurs — a Ghana-based digital solutions company empowering African businesses with technology. Our mission, team, and story.',
}

const values = [
  {
    icon: '🌍',
    title: 'Africa First',
    description: 'Every solution we build starts with the African context. We understand the infrastructure, the culture, and the incredible potential of this continent.',
  },
  {
    icon: '🤝',
    title: 'Empowerment',
    description: 'We do not just build software — we empower entrepreneurs. Our goal is to give African businesses the digital tools they need to compete globally.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We embrace cutting-edge technology while keeping solutions practical and accessible for businesses of all sizes.',
  },
  {
    icon: '🔒',
    title: 'Trust & Integrity',
    description: 'We build lasting relationships through transparency, honest communication, and delivering on every promise we make.',
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    description: 'With Africa leading the world in mobile-first internet usage, every solution we design prioritizes the mobile experience.',
  },
  {
    icon: '🌱',
    title: 'Sustainable Growth',
    description: 'We build solutions that scale with your business, ensuring long-term success rather than quick fixes.',
  },
]

const team = [
  {
    name: 'Stephen Toti',
    role: 'Founder & CEO',
    bio: 'A visionary tech entrepreneur with a passion for empowering African businesses through digital innovation. Stephen brings global experience to local challenges.',
    image: '/images/team-meeting.jpg',
  },
  {
    name: 'Ama Mensah',
    role: 'Head of Engineering',
    bio: 'Full-stack developer with 8+ years building scalable applications for the African market. Expert in mobile money integrations.',
    image: '/images/coding-laptop.jpg',
  },
  {
    name: 'Kwesi Annan',
    role: 'Head of AI & Products',
    bio: 'AI researcher and product strategist leading the development of Akwaaba AI. Passionate about making AI accessible in African languages.',
    image: '/images/ai-technology.jpg',
  },
  {
    name: 'Efua Darko',
    role: 'Head of Marketing',
    bio: 'Digital marketing specialist with deep expertise in West African consumer behavior and social media strategy.',
    image: '/images/digital-marketing.jpg',
  },
]

const milestones = [
  { year: '2020', title: 'Founded in Accra', desc: 'Rapid Entrepreneurs was born with a mission to empower African businesses through technology.' },
  { year: '2021', title: 'First 20 Clients', desc: 'Delivered our first 20 projects across Ghana, establishing our reputation for quality.' },
  { year: '2022', title: 'Akwaaba AI Launch', desc: 'Launched our flagship AI product, Akwaaba AI, bringing intelligent communication to African businesses.' },
  { year: '2023', title: 'Regional Expansion', desc: 'Expanded services to Nigeria, Côte d\'Ivoire, and other West African markets.' },
  { year: '2024', title: 'Global Network', desc: 'Joined forces with Pacific Wave Digital and Global Digital Prime to form a worldwide digital ecosystem.' },
  { year: '2025', title: '150+ Projects', desc: 'Celebrating over 150 projects delivered and 50+ businesses empowered across Africa.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-deep-blue py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="/images/accra-city.jpg" alt="Accra city skyline" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-deep-blue/95 to-deep-blue"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="heading-xl text-white mt-4 mb-6">Empowering Africa&apos;s Digital Future</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of tech entrepreneurs, developers, and designers based in Accra, Ghana,
            dedicated to building digital solutions that drive African business growth.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="heading-lg text-deep-blue mt-3 mb-6">Born in Accra, Built for Africa</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Rapid Entrepreneurs was founded with a simple but powerful belief: African businesses
                deserve world-class digital tools designed specifically for their market. Too often, African
                entrepreneurs are forced to adapt solutions built for other markets — solutions that don&apos;t
                account for mobile money, local languages, or the realities of African infrastructure.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We changed that. Starting from a small office in East Legon, Accra, we began building
                digital solutions that put Africa first. From e-commerce platforms that integrate MTN MoMo
                to AI chatbots that speak Twi, every product we create is rooted in the African experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we are proud to serve over 50 businesses across West Africa, and through our global
                network — including Pacific Wave Digital in the Pacific and Global Digital Prime worldwide —
                we bring international best practices to African innovation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/office-modern.jpg"
                alt="Rapid Entrepreneurs office in Accra"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-vibrant-orange text-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm">Years Empowering<br />African Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light-blue">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="w-16 h-16 bg-vibrant-orange/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="heading-md text-deep-blue mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower African entrepreneurs and businesses with accessible, affordable, and
                powerful digital solutions that drive growth, create jobs, and transform communities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <div className="w-16 h-16 bg-vibrant-orange/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔭</span>
              </div>
              <h3 className="heading-md text-deep-blue mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A digitally empowered Africa where every entrepreneur, from market traders to tech startups,
                has access to the digital tools they need to compete on the global stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-display font-bold text-xl text-deep-blue mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-deep-blue to-dark-navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="heading-lg text-white mt-3 mb-4">Milestones That Matter</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-vibrant-orange/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div key={i} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 inline-block">
                      <span className="text-vibrant-orange font-display font-bold text-2xl">{milestone.year}</span>
                      <h4 className="text-white font-semibold text-lg mt-1">{milestone.title}</h4>
                      <p className="text-gray-400 mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-vibrant-orange rounded-full border-4 border-dark-navy transform -translate-x-1/2 mt-6"></div>
                  <div className="md:hidden pl-12">
                    <span className="text-vibrant-orange font-display font-bold text-xl">{milestone.year}</span>
                    <h4 className="text-white font-semibold text-lg mt-1">{milestone.title}</h4>
                    <p className="text-gray-400 mt-2">{milestone.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="heading-lg text-deep-blue mt-3 mb-4">The People Behind the Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A talented team of tech professionals passionate about Africa&apos;s digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white font-display font-bold text-lg">{member.name}</h4>
                    <p className="text-vibrant-orange text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-vibrant-orange">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Want to Work With Us?</h2>
          <p className="text-white/90 text-xl mb-10">
            Whether you are a startup looking to launch or an established business ready to go digital,
            we are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-vibrant-orange font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Start a Conversation
            </Link>
            <Link href="/success-stories" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vibrant-orange transition-all duration-300 text-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
