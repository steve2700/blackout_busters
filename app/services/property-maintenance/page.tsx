import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Property Maintenance Services | Goshen Projects Gauteng",
  description:
    "Comprehensive property maintenance services in Gauteng. Residential & commercial maintenance, preventative programs, repairs, and facility support in Pretoria & Johannesburg.",
  openGraph: {
    title: "Property Maintenance Services | Goshen Projects Gauteng",
    description:
      "Professional property maintenance for homes and businesses in Pretoria, Johannesburg & Gauteng. Scheduled and emergency maintenance.",
  },
}

export default function PropertyMaintenancePage() {
  return (
    <ServicePageTemplate
      title="Property Maintenance"
      description="Our maintenance teams are responsive and thorough, offering scheduled inspections, emergency repairs, and ongoing support for Gauteng properties. We help property owners maintain the value and functionality of their investments with comprehensive maintenance programs."
      icon={Wrench}
      heroImage="/property-maintenance-worker-repairing-fixtures-in-a.jpg"
      features={[
        "Residential maintenance",
        "Commercial maintenance",
        "Preventative maintenance programs",
        "General repairs & handyman services",
        "Facility maintenance support",
        "Emergency repair services",
        "Scheduled inspections",
        "Building condition assessments",
      ]}
      benefits={[
        {
          title: "Responsive Service",
          description:
            "Quick response times for both scheduled maintenance and emergency repairs to minimize disruption to your property.",
        },
        {
          title: "Preventative Approach",
          description:
            "Our preventative maintenance programs identify and address issues before they become costly problems.",
        },
        {
          title: "One-Stop Solution",
          description:
            "From plumbing to electrical, roofing to painting – we handle all aspects of property maintenance under one roof.",
        },
        {
          title: "Cost-Effective",
          description:
            "Regular maintenance extends the life of your property assets and prevents expensive emergency repairs.",
        },
        {
          title: "Detailed Reporting",
          description:
            "We provide comprehensive reports on work completed and recommendations for future maintenance needs.",
        },
        {
          title: "Flexible Contracts",
          description: "Customizable maintenance agreements tailored to your property's specific needs and budget.",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description: "We conduct a thorough assessment of your property to identify maintenance needs.",
        },
        {
          step: 2,
          title: "Maintenance Plan",
          description: "A customized maintenance schedule is created based on your property's requirements.",
        },
        {
          step: 3,
          title: "Execution",
          description: "Our skilled teams carry out all maintenance work efficiently and professionally.",
        },
        {
          step: 4,
          title: "Ongoing Support",
          description: "Regular check-ins and responsive service for any emerging maintenance needs.",
        },
      ]}
      relatedServices={[
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Plumbing Services", href: "/services/plumbing-services" },
        { title: "Electrical Services", href: "/services/electrical-services" },
        { title: "Painting, Tiling & Finishing", href: "/services/painting-tiling-finishing" },
      ]}
    />
  )
}
