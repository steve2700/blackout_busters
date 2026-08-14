import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/service-page-template"
import { services, getService, getRelatedServices, SITE } from "@/lib/services"

export const dynamicParams = false

const SERVICE_AREAS = [
  "Johannesburg",
  "Pretoria",
  "Kempton Park",
  "Midrand",
  "Sandton",
  "Centurion",
  "Randburg",
  "Roodepoort",
]

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  const canonical = `${SITE.url}/${service.slug}`

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: canonical,
      siteName: SITE.name,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${service.title} by ${SITE.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/og-image.png"],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const related = getRelatedServices(slug).map((s) => ({
    title: s.title,
    href: `/${s.slug}`,
    icon: s.icon,
  }))

  const canonical = `${SITE.url}/${service.slug}`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} in Gauteng`,
    description: service.metaDescription,
    url: canonical,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phoneSchema,
      email: SITE.email,
      url: SITE.url,
      areaServed: SERVICE_AREAS,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Gauteng, South Africa" },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: canonical },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageTemplate
        title={service.title}
        description={service.description}
        icon={service.icon}
        heroImage={service.image}
        heroImageAlt={service.imageAlt}
        features={service.features}
        benefits={service.benefits}
        process={service.process}
        faqs={service.faqs}
        relatedServices={related}
        serviceAreas={SERVICE_AREAS}
        priceRange={service.priceRange}
        responseTime={service.responseTime}
      />
    </>
  )
}
