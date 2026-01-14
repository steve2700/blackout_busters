import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Waterproofing Services | Goshen Projects Gauteng",
  description:
    "Professional waterproofing services in Gauteng. Roof, balcony, bathroom, foundation, and damp proofing solutions in Pretoria & Johannesburg.",
  openGraph: {
    title: "Waterproofing Services | Goshen Projects Gauteng",
    description: "Protect your property from water damage with expert waterproofing solutions in Gauteng.",
  },
}

export default function WaterproofingServicesPage() {
  return (
    <ServicePageTemplate
      title="Waterproofing Services"
      description="Our waterproofing methods protect against moisture and water damage, enhancing property longevity. We provide comprehensive waterproofing solutions for roofs, balconies, bathrooms, foundations, and walls across Gauteng."
      icon={Shield}
      heroImage="/waterproofing-specialist-applying-sealant-on-a-roof.jpg"
      features={[
        "Roof waterproofing",
        "Balcony waterproofing",
        "Bathroom waterproofing",
        "Foundation waterproofing",
        "Wall waterproofing",
        "Damp proofing",
        "Basement waterproofing",
        "Swimming pool waterproofing",
      ]}
      benefits={[
        {
          title: "Moisture Protection",
          description: "Effective barriers against water ingress that cause structural damage and health issues.",
        },
        {
          title: "Property Longevity",
          description: "Proper waterproofing extends the life of your building and prevents costly repairs.",
        },
        {
          title: "Health Benefits",
          description: "Prevent mold and mildew growth that can cause respiratory issues and allergies.",
        },
        {
          title: "Quality Products",
          description: "We use premium waterproofing products designed for South African conditions.",
        },
        {
          title: "Expert Application",
          description: "Correct application is crucial - our specialists ensure proper coverage and curing.",
        },
        {
          title: "Long-Term Warranty",
          description: "Our waterproofing solutions come with comprehensive warranties for peace of mind.",
        },
      ]}
      relatedServices={[
        { title: "Roofing & Roof Leak Repairs", href: "/services/roofing-services" },
        { title: "Plumbing Services", href: "/services/plumbing-services" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
      ]}
    />
  )
}
