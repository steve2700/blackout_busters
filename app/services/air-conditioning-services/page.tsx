import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Snowflake } from "lucide-react"

export const metadata: Metadata = {
  title: "Air Conditioning Services | Goshen Projects Gauteng",
  description:
    "Professional air conditioning installation and maintenance in Gauteng. AC installation, servicing, and repairs in Pretoria & Johannesburg.",
  openGraph: {
    title: "Air Conditioning Services | Goshen Projects Gauteng",
    description: "Efficient and reliable climate control solutions for homes and businesses in Gauteng.",
  },
}

export default function AirConditioningServicesPage() {
  return (
    <ServicePageTemplate
      title="Air Conditioning Services"
      description="Our services ensure efficient and reliable climate control. We provide professional air conditioning installation, servicing, and maintenance for homes and businesses throughout Gauteng."
      icon={Snowflake}
      heroImage="/air-conditioning-technician-installing-ac-unit-in-.jpg"
      features={[
        "AC installation",
        "Split system installation",
        "Ducted systems",
        "AC servicing",
        "AC maintenance",
        "AC repairs",
        "Climate control systems",
        "Energy-efficient units",
        "Commercial HVAC",
      ]}
      benefits={[
        {
          title: "Comfort All Year",
          description: "Stay cool in summer and warm in winter with efficient climate control systems.",
        },
        {
          title: "Energy Efficiency",
          description: "We install and recommend energy-efficient units to minimize running costs.",
        },
        {
          title: "Professional Service",
          description: "Qualified technicians providing expert installation and repairs.",
        },
        {
          title: "All Brands",
          description: "We work with all major air conditioning brands and models.",
        },
        {
          title: "Regular Maintenance",
          description: "Scheduled servicing keeps your system running efficiently and extends its lifespan.",
        },
        {
          title: "Quick Response",
          description: "Prompt service for repairs and emergency breakdowns.",
        },
      ]}
      relatedServices={[
        { title: "Electrical Services", href: "/services/electrical-services" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Solar & Energy Solutions", href: "/services/solar-energy-solutions" },
      ]}
    />
  )
}
