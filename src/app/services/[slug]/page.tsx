import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageContent, { RelatedService } from '@/components/services/ServicePageContent'
import { getServicePage, servicePages } from '@/lib/service-pages'

const baseUrl = 'https://rapidentrepreneurs.com'

interface ServicePageProps {
  params: { slug: string }
}

// Statically generate all 7 service pages at build time.
export function generateStaticParams(): { slug: string }[] {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServicePage(params.slug)
  if (!service) {
    return {}
  }

  // The root layout's title template appends "| Rapid Entrepreneurs" —
  // pass only the H1 phrase here to avoid a doubled brand suffix.
  return {
    title: service.h1,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `${baseUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.h1} | Rapid Entrepreneurs`,
      description: service.metaDescription,
      type: 'website',
      url: `${baseUrl}/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServicePage(params.slug)
  if (!service) {
    notFound()
  }

  const relatedServices: RelatedService[] = servicePages
    .filter((other) => other.slug !== service.slug)
    .map(({ slug, label, icon, cardDescription }) => ({ slug, label, icon, cardDescription }))

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.h1,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: `${baseUrl}/services/${service.slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'Ghana',
    },
    provider: {
      '@type': 'Organization',
      name: 'Rapid Entrepreneurs',
      url: baseUrl,
      email: 'info@rapidentrepreneurs.com',
      telephone: '+233-55-430-3269',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Madina, Ritz Junction',
        addressLocality: 'Accra',
        addressCountry: 'GH',
      },
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicePageContent service={service} relatedServices={relatedServices} />
    </>
  )
}
