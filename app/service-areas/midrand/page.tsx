import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Midrand | Goshen Projects",
  description:
    "Professional construction and maintenance services in Midrand. Serving Carlswald, Halfway House, Vorna Valley, Glen Austin and surrounding areas.",
}

export default function MidrandPage() {
  return (
    <ServiceAreaTemplate
      areaName="Midrand"
      description="Goshen Projects serves Midrand's growing residential and commercial communities with comprehensive construction and maintenance solutions. Our central location makes us ideal for servicing this rapidly developing area."
      suburbs={[
        "Carlswald",
        "Halfway House",
        "Vorna Valley",
        "Glen Austin",
        "Noordwyk",
        "Halfway Gardens",
        "Kyalami",
        "Waterfall",
      ]}
      introduction="Midrand's strategic location between Pretoria and Johannesburg has made it one of Gauteng's fastest-growing areas. Goshen Projects is well-positioned to serve the construction and maintenance needs of Midrand's diverse mix of residential estates, commercial parks, and industrial developments. We provide the same quality service to new developments as we do to established properties."
      servicesOffered={[
        "New home construction in estates",
        "Commercial and industrial building services",
        "Property maintenance for complexes",
        "Electrical and plumbing services",
        "Paving and landscaping",
        "Security installations",
        "Roofing and waterproofing",
        "Air conditioning services",
        "Painting and renovations",
        "Civil works and infrastructure",
      ]}
      whyChooseUs={[
        "Centrally located for fast response to Midrand",
        "Experience with security estate requirements",
        "Strong relationships with estate management",
        "Understanding of newer construction standards",
        "Competitive rates for the area",
        "Proven track record in Midrand",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Pretoria", href: "/service-areas/pretoria" },
        { name: "Centurion", href: "/service-areas/centurion" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Fourways", href: "/service-areas/fourways" },
      ]}
    />
  )
}
