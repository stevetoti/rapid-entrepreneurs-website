import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://rapidentrepreneurs.com'),
  title: {
    default: 'Rapid Entrepreneurs — Empowering African Business Growth',
    template: '%s | Rapid Entrepreneurs',
  },
  description: 'Digital solutions company empowering African entrepreneurs and businesses with technology. Web development, mobile apps, e-commerce, fintech, and AI solutions in Ghana and West Africa.',
  keywords: ['digital solutions Ghana', 'web development Accra', 'African entrepreneurs', 'mobile apps Ghana', 'e-commerce Africa', 'fintech Ghana', 'mobile money integration', 'Akwaaba AI', 'digital marketing West Africa'],
  authors: [{ name: 'Rapid Entrepreneurs' }],
  creator: 'Rapid Entrepreneurs',
  publisher: 'Rapid Entrepreneurs',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://rapidentrepreneurs.com',
    siteName: 'Rapid Entrepreneurs',
    title: 'Rapid Entrepreneurs — Empowering African Business Growth',
    description: 'Digital solutions company empowering African entrepreneurs and businesses with technology in Ghana and West Africa.',
    images: [{ url: '/images/hero-african-business.jpg', width: 1920, height: 1080, alt: 'Rapid Entrepreneurs - Digital Solutions for Africa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapid Entrepreneurs — Empowering African Business Growth',
    description: 'Digital solutions for African entrepreneurs. Web, mobile, e-commerce, fintech & AI.',
    images: ['/images/hero-african-business.jpg'],
    creator: '@rapidghana',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://rapidentrepreneurs.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rapid Entrepreneurs',
  url: 'https://rapidentrepreneurs.com',
  logo: 'https://rapidentrepreneurs.com/images/hero-african-business.jpg',
  description: 'Digital solutions company empowering African entrepreneurs and businesses with technology in Ghana and West Africa.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 Independence Avenue, East Legon',
    addressLocality: 'Accra',
    addressCountry: 'GH',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+233-30-274-5000',
    contactType: 'customer service',
    areaServed: 'GH',
    availableLanguage: ['English', 'Twi'],
  },
  sameAs: [
    'https://twitter.com/rapidghana',
    'https://linkedin.com/company/rapid-entrepreneurs',
    'https://facebook.com/rapidghana',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
