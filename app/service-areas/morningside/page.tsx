import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Morningside | ZECO Construction",
  description:
    "Exclusive construction and maintenance services in Morningside. Premium solutions for Sandton Central, Atholl, Inanda and surrounding upmarket areas.",
}

export default function MorningsidePage() {
  return (
    <ServiceAreaTemplate
      areaName="Morningside"
      description="ZECO Construction provides exclusive construction and maintenance services to Morningside's prestigious residential community. We deliver the premium quality that this upmarket area demands."
      suburbs={["Sandton Central", "Atholl", "Inanda", "Sandown", "Benmore", "Strathavon"]}
      introduction="Morningside is one of Johannesburg's most exclusive residential areas, featuring luxury homes with high-end finishes and sophisticated requirements. ZECO Construction specializes in serving Morningside's discerning homeowners with premium construction and maintenance services that match the area's prestige. Our attention to detail and commitment to excellence ensures every project meets the highest standards."
      servicesOffered={[
        "Luxury home renovations",
        "Designer kitchen installations",
        "Premium bathroom remodeling",
        "Smart home technology integration",
        "Waterproofing services",
        "Pool and outdoor entertainment areas",
        "Landscape architecture implementation",
        "Premium finishes and materials",
        "Bespoke carpentry and joinery",
        "Comprehensive property maintenance",
      ]}
      whyChooseUs={[
        "Specialization in luxury properties",
        "Premium materials and finishes",
        "Discrete professional service",
        "Attention to finest details",
        "Excellent Morningside references",
        "Understanding of premium property requirements",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
      ]}
    />
  )
} 
