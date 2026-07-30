import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Pretoria | ZECO Construction",
  description:
    "Professional construction, renovation, plumbing, electrical, and maintenance services in Pretoria. Serving Montana, Hatfield, Menlyn, Brooklyn, Waterkloof, Centurion & more.",
  openGraph: {
    title: "Construction & Maintenance Services in Pretoria",
    description:
      "Expert building, renovation, and property maintenance solutions for residential and commercial properties in Pretoria and surrounding suburbs.",
  },
}

export default function PretoriaPage() {
  return (
    <ServiceAreaTemplate
      areaName="Pretoria"
      description="ZECO Construction is your trusted partner for comprehensive construction, renovation, and maintenance services throughout Pretoria and the greater Tshwane Metropolitan area. From residential homes to commercial buildings, we deliver quality workmanship with every project."
      suburbs={[
        "Montana",
        "Hatfield",
        "Menlyn",
        "Brooklyn",
        "Waterkloof",
        "Centurion",
        "Lynnwood",
        "Faerie Glen",
        "Garsfontein",
        "Moreleta Park",
        "Pretoria East",
        "Pretoria North",
        "Pretoria West",
        "Arcadia",
        "Sunnyside",
      ]}
      introduction="As Pretoria's capital city continues to grow and develop, property owners require reliable, professional services for construction, renovations, and ongoing maintenance. ZECO Construction has established a strong presence in Pretoria, serving homeowners, businesses, and institutions with a complete range of building and infrastructure solutions. Our local teams understand the unique architectural styles and building requirements of Pretoria properties, from historic homes in the older suburbs to modern developments in areas like Menlyn and Moreleta Park."
      servicesOffered={[
        "New residential construction and home building",
        "Commercial building construction and fit-outs",
        "Home renovations and extensions",
        "Kitchen and bathroom remodeling",
        "Plumbing installations and repairs",
        "Electrical services and installations",
        "Roofing and roof leak repairs",
        "Waterproofing and damp proofing",
        "Painting and decorating",
        "Paving and driveway construction",
        "Carpentry and custom cupboards",
        "Concrete works and bricklaying",
      ]}
      whyChooseUs={[
        "Local teams based in Pretoria for fast response times",
        "Deep understanding of Pretoria's building codes and regulations",
        "Experience with both heritage properties and modern developments",
        "Strong relationships with local suppliers for quality materials",
        "24/7 emergency services for urgent repairs",
        "Free on-site consultations throughout Pretoria",
      ]}
      nearbyAreas={[
        { name: "Centurion", href: "/service-areas/centurion" },
        { name: "Midrand", href: "/service-areas/midrand" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
      ]}
    />
  )
}
