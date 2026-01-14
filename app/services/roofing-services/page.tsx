import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Roofing & Roof Leak Repairs | Goshen Projects Gauteng",
  description:
    "Professional roofing services in Gauteng. Leak repairs, tile roofing, IBR, waterproofing, and gutter installation in Pretoria & Johannesburg.",
  openGraph: {
    title: "Roofing & Roof Leak Repairs | Goshen Projects Gauteng",
    description:
      "Expert roofing solutions for homes and businesses in Pretoria, Johannesburg & Gauteng. Quality materials and workmanship.",
  },
}

export default function RoofingServicesPage() {
  return (
    <ServicePageTemplate
      title="Roofing & Roof Leak Repairs"
      description="We use high-quality roofing materials and expert techniques to prevent leaks and prolong roof lifespan. Our roofing specialists handle everything from minor leak repairs to complete roof replacements across Gauteng."
      icon={Home}
      heroImage="/roofer-installing-tiles-on-a-house-in-gauteng-south.jpg"
      features={[
        "Roof leak detection",
        "Roof leak repairs",
        "Tile roofing",
        "IBR roofing",
        "Corrugated roofing",
        "Roof waterproofing",
        "Roof sealing",
        "Gutter installation",
        "Gutter repairs",
        "Complete roof replacements",
      ]}
      benefits={[
        {
          title: "Quality Materials",
          description: "We use only high-quality roofing materials that withstand South African weather conditions.",
        },
        {
          title: "Expert Leak Detection",
          description: "Our specialists accurately identify the source of leaks to ensure effective, lasting repairs.",
        },
        {
          title: "Extended Roof Life",
          description: "Proper maintenance and quality repairs significantly extend the lifespan of your roof.",
        },
        {
          title: "All Roof Types",
          description:
            "We work with tile, IBR, corrugated, and other roofing types for residential and commercial properties.",
        },
        {
          title: "Weather Protection",
          description:
            "Comprehensive waterproofing and sealing to protect your property from rain and moisture damage.",
        },
        {
          title: "Warranty Included",
          description: "We stand behind our work with warranties on materials and workmanship.",
        },
      ]}
      relatedServices={[
        { title: "Waterproofing Services", href: "/services/waterproofing-services" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Painting, Tiling & Finishing", href: "/services/painting-tiling-finishing" },
      ]}
    />
  )
}
