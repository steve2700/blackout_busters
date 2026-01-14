import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Randburg | Goshen Projects",
  description:
    "Reliable construction and maintenance services in Randburg. Serving Ferndale, Blairgowrie, Northcliff, Boskruin and all Randburg areas.",
}

export default function RandburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Randburg"
      description="Goshen Projects has been serving Randburg's residential and commercial properties with professional construction and maintenance services. Our experienced teams deliver reliable solutions for this established Johannesburg suburb."
      suburbs={[
        "Ferndale",
        "Blairgowrie",
        "Northcliff",
        "Boskruin",
        "Fairland",
        "Bordeaux",
        "Randpark Ridge",
        "Fontainebleau",
      ]}
      introduction="Randburg's mix of established family homes, townhouse complexes, and commercial areas creates diverse construction and maintenance needs. Goshen Projects has developed expertise in serving all property types in Randburg, from heritage home renovations to modern commercial fit-outs. Our familiarity with the area ensures efficient, high-quality service."
      servicesOffered={[
        "Home renovations and modernization",
        "Townhouse and complex maintenance",
        "Commercial property services",
        "Plumbing and electrical repairs",
        "Roofing and waterproofing",
        "Painting and decorating",
        "Paving and outdoor areas",
        "Security installations",
        "Air conditioning services",
        "General maintenance programs",
      ]}
      whyChooseUs={[
        "Long-standing presence in Randburg",
        "Understanding of diverse property types",
        "Experience with body corporate projects",
        "Reliable service at fair prices",
        "Local references available",
        "Quick response to Randburg clients",
      ]}
      nearbyAreas={[
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
      ]}
    />
  )
}
