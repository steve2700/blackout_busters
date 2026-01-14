import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Building Construction & Renovations | Goshen Projects Gauteng",
  description:
    "Professional building construction and renovation services in Gauteng. New residential, commercial & industrial builds, renovations, refurbishments, and structural alterations in Pretoria & Johannesburg.",
  openGraph: {
    title: "Building Construction & Renovations | Goshen Projects Gauteng",
    description:
      "Expert construction and renovation services for residential, commercial & industrial projects in Pretoria, Johannesburg & Gauteng.",
  },
}

export default function BuildingConstructionPage() {
  return (
    <ServicePageTemplate
      title="Building Construction & Renovations"
      description="Our construction projects are managed from concept to completion, ensuring strict adherence to timelines, budgets, and quality standards. We provide expert guidance on design, materials, and compliance for residential, commercial, and industrial clients throughout Gauteng."
      icon={Building2}
      heroImage="/construction-workers-building-a-new-home-in-gauteng.jpg"
      features={[
        "New residential buildings",
        "Commercial & industrial construction",
        "Renovations & refurbishments",
        "Fit-outs & interior alterations",
        "Home extensions",
        "Structural alterations",
        "Office & retail space optimization",
        "Structural repairs & upgrades",
      ]}
      benefits={[
        {
          title: "End-to-End Project Management",
          description:
            "From initial concept and design to final completion, we manage every aspect of your construction project with precision and professionalism.",
        },
        {
          title: "Quality Workmanship",
          description:
            "We use high-quality materials and proven construction techniques to deliver lasting results that exceed your expectations.",
        },
        {
          title: "Compliance & Safety",
          description:
            "All our construction work adheres to South African building regulations, ensuring your project is safe and legally compliant.",
        },
        {
          title: "Transparent Pricing",
          description:
            "Detailed quotations with no hidden costs. We keep you informed of progress and any changes throughout the project.",
        },
        {
          title: "Skilled Professionals",
          description:
            "Our team of engineers, project managers, and skilled tradespeople bring years of experience to every project.",
        },
        {
          title: "Timely Delivery",
          description:
            "We understand the importance of deadlines and work efficiently to complete your project on schedule.",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Consultation",
          description: "We discuss your vision, requirements, and budget to understand your project needs.",
        },
        {
          step: 2,
          title: "Planning & Design",
          description: "Our team develops detailed plans, material specifications, and project timelines.",
        },
        {
          step: 3,
          title: "Construction",
          description: "Skilled professionals execute the build with regular progress updates and quality checks.",
        },
        {
          step: 4,
          title: "Completion & Handover",
          description: "Final inspections, touch-ups, and complete handover of your finished project.",
        },
      ]}
      relatedServices={[
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Carpentry Services", href: "/services/carpentry-services" },
        { title: "Painting, Tiling & Finishing", href: "/services/painting-tiling-finishing" },
        { title: "Electrical Services", href: "/services/electrical-services" },
      ]}
    />
  )
}
