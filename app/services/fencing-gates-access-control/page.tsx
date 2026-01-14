import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Fence } from "lucide-react"

export const metadata: Metadata = {
  title: "Fencing, Gates & Access Control | Goshen Projects Gauteng",
  description:
    "Professional fencing and gate solutions in Gauteng. Palisade fencing, electric gates, garage doors, intercoms in Pretoria & Johannesburg.",
  openGraph: {
    title: "Fencing, Gates & Access Control | Goshen Projects Gauteng",
    description: "Customizable and reliable security fencing and access control solutions for Gauteng properties.",
  },
}

export default function FencingGatesAccessControlPage() {
  return (
    <ServicePageTemplate
      title="Fencing, Gates & Access Control"
      description="Our security solutions are customizable and reliable, ensuring peace of mind. We provide comprehensive fencing, gate, and access control solutions for homes and businesses throughout Gauteng."
      icon={Fence}
      heroImage="/electric-gate-installation-at-residential-property.jpg"
      features={[
        "Palisade fencing",
        "Electric fencing",
        "Electric gates",
        "Gate automation",
        "Garage doors",
        "Intercom systems",
        "Access control systems",
        "Security barriers",
        "Driveway gates",
      ]}
      benefits={[
        {
          title: "Enhanced Security",
          description: "Effective deterrents against intruders and unauthorized access to your property.",
        },
        {
          title: "Custom Solutions",
          description: "Fencing and gates designed to suit your property's specific security needs and aesthetics.",
        },
        {
          title: "Automation",
          description: "Convenient automated gates with remote controls and smartphone integration.",
        },
        {
          title: "Quality Materials",
          description: "Durable materials built to withstand South African conditions and potential threats.",
        },
        {
          title: "Professional Installation",
          description: "Expert installation ensuring proper operation and maximum security.",
        },
        {
          title: "Maintenance Support",
          description: "Ongoing maintenance and repair services to keep your systems operational.",
        },
      ]}
      relatedServices={[
        { title: "CCTV, Alarm & Surveillance", href: "/services/cctv-alarm-surveillance" },
        { title: "Electrical Services", href: "/services/electrical-services" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
      ]}
    />
  )
}
