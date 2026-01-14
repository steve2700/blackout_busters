import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Electrical Repairs & Installations | Goshen Projects Gauteng",
  description:
    "Professional electrical services in Gauteng. Installations, rewiring, fault finding, lighting, and electrical maintenance in Pretoria & Johannesburg.",
  openGraph: {
    title: "Electrical Repairs & Installations | Goshen Projects Gauteng",
    description:
      "Licensed electricians providing safe, compliant electrical services for homes and businesses in Gauteng.",
  },
}

export default function ElectricalServicesPage() {
  return (
    <ServicePageTemplate
      title="Electrical Repairs & Installations"
      description="Our electricians are trained to handle complex electrical projects while prioritizing safety, compliance, and energy efficiency. From simple repairs to complete rewiring, we provide professional electrical services across Gauteng."
      icon={Zap}
      heroImage="/electrician-working-on-electrical-panel-in-gauteng.jpg"
      features={[
        "Electrical installations",
        "Complete rewiring",
        "Fault finding & repairs",
        "Interior lighting installations",
        "Exterior lighting installations",
        "Power point installations",
        "Electrical maintenance",
        "Electrical compliance certificates",
        "Energy-efficient solutions",
      ]}
      benefits={[
        {
          title: "Licensed Electricians",
          description:
            "All our electricians are fully licensed and certified to work on electrical systems in South Africa.",
        },
        {
          title: "Safety First",
          description: "Electrical safety is our top priority. We follow strict safety protocols on every job.",
        },
        {
          title: "Compliance Certificates",
          description:
            "We issue proper electrical compliance certificates for all installation work as required by law.",
        },
        {
          title: "Energy Efficiency",
          description: "We advise on and install energy-efficient solutions to help reduce your electricity costs.",
        },
        {
          title: "Reliable Service",
          description: "Prompt, professional service with clear communication throughout your electrical project.",
        },
        {
          title: "Full Range of Services",
          description:
            "From minor repairs to major installations, we handle all residential and commercial electrical work.",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Assessment",
          description: "We evaluate your electrical needs and identify any issues or hazards.",
        },
        {
          step: 2,
          title: "Quotation",
          description: "Detailed quote provided including materials, labor, and timeline.",
        },
        {
          step: 3,
          title: "Installation/Repair",
          description: "Work completed by licensed electricians following safety protocols.",
        },
        {
          step: 4,
          title: "Testing & Certification",
          description: "Thorough testing and issuing of compliance certificates where required.",
        },
      ]}
      relatedServices={[
        { title: "Solar & Energy Solutions", href: "/services/solar-energy-solutions" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "CCTV, Alarm & Surveillance", href: "/services/cctv-alarm-surveillance" },
      ]}
    />
  )
}
