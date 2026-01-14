import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "CCTV, Alarm & Surveillance Systems | Goshen Projects Gauteng",
  description:
    "Professional security system installation in Gauteng. CCTV cameras, alarm systems, remote monitoring in Pretoria & Johannesburg.",
  openGraph: {
    title: "CCTV, Alarm & Surveillance Systems | Goshen Projects Gauteng",
    description: "State-of-the-art surveillance systems tailored to residential and commercial needs in Gauteng.",
  },
}

export default function CCTVAlarmSurveillancePage() {
  return (
    <ServicePageTemplate
      title="CCTV, Alarm & Surveillance Systems"
      description="We implement state-of-the-art surveillance systems tailored to residential and commercial needs. From CCTV installations to complete alarm systems, we provide comprehensive security solutions across Gauteng."
      icon={Camera}
      heroImage="/cctv-camera-installation-on-commercial-building-in.jpg"
      features={[
        "CCTV camera installation",
        "HD & 4K cameras",
        "Alarm systems",
        "Remote monitoring",
        "Motion detection",
        "Night vision cameras",
        "Security system maintenance",
        "Mobile app integration",
        "Video recording & storage",
      ]}
      benefits={[
        {
          title: "24/7 Monitoring",
          description: "Keep an eye on your property around the clock with remote viewing capabilities.",
        },
        {
          title: "Deterrent Effect",
          description: "Visible cameras and alarm systems discourage criminal activity.",
        },
        {
          title: "Evidence Collection",
          description: "High-quality footage for incident review and legal purposes.",
        },
        {
          title: "Modern Technology",
          description: "Latest surveillance technology including HD cameras, smart detection, and mobile access.",
        },
        {
          title: "Custom Design",
          description: "Systems designed specifically for your property's layout and security requirements.",
        },
        {
          title: "Reliable Support",
          description: "Ongoing maintenance and technical support to keep your system operational.",
        },
      ]}
      relatedServices={[
        { title: "Fencing, Gates & Access Control", href: "/services/fencing-gates-access-control" },
        { title: "Electrical Services", href: "/services/electrical-services" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
      ]}
    />
  )
}
