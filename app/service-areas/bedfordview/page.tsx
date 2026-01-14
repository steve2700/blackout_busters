import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Bedfordview | Goshen Projects",
  description:
    "Quality construction and maintenance services in Bedfordview. Expert solutions for Edenvale, Germiston, Kensington, Kempton Park and East Rand areas.",
}

export default function BedfordviewPage() {
  return (
    <ServiceAreaTemplate
      areaName="Bedfordview"
      description="Goshen Projects provides comprehensive construction and maintenance services to Bedfordview and the East Rand. We deliver quality workmanship for residential and commercial properties in this well-established area."
      suburbs={["Edenvale", "Germiston", "Kensington", "Kempton Park", "Boksburg", "Benoni", "East Rand Mall area"]}
      introduction="Bedfordview and the greater East Rand area features a diverse range of properties, from upmarket homes to industrial facilities. Goshen Projects serves this region with comprehensive construction and maintenance solutions, understanding the specific needs of East Rand property owners. Our commitment to quality and reliability has earned us a strong reputation in the area."
      servicesOffered={[
        "Residential construction and renovations",
        "Industrial facility maintenance",
        "Commercial building services",
        "Plumbing and electrical work",
        "Roofing and structural repairs",
        "Painting and finishing",
        "Security system installations",
        "Air conditioning services",
        "Paving and hardscaping",
        "Property maintenance contracts",
      ]}
      whyChooseUs={[
        "Experience across the East Rand",
        "Understanding of industrial property needs",
        "Strong track record in Bedfordview",
        "Competitive East Rand pricing",
        "Reliable and punctual service",
        "Multi-skilled teams available",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
