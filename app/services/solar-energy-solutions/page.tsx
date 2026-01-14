import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Solar & Energy Solutions | Goshen Projects Gauteng",
  description:
    "Professional solar power installation in Gauteng. Solar panels, geysers, inverters, battery backup systems in Pretoria & Johannesburg.",
  openGraph: {
    title: "Solar & Energy Solutions | Goshen Projects Gauteng",
    description: "Reduce energy costs and promote sustainability with expert solar solutions in Gauteng.",
  },
}

export default function SolarEnergySolutionsPage() {
  return (
    <ServicePageTemplate
      title="Solar & Energy Solutions"
      description="We help reduce energy costs while promoting sustainable practices. Our solar energy solutions provide reliable power independence for homes and businesses across Gauteng."
      icon={Sun}
      heroImage="/solar-panel-installation-on-rooftop-in-gauteng-sout.jpg"
      features={[
        "Solar power installations",
        "Solar panel systems",
        "Solar geysers",
        "Inverter systems",
        "Battery backup systems",
        "Energy efficiency solutions",
        "Load shedding solutions",
        "Grid-tie systems",
        "Off-grid systems",
      ]}
      benefits={[
        {
          title: "Energy Independence",
          description: "Reduce reliance on the grid and protect against load shedding with solar power.",
        },
        {
          title: "Cost Savings",
          description: "Significantly reduce electricity bills with free energy from the sun.",
        },
        {
          title: "Sustainability",
          description: "Reduce your carbon footprint and contribute to a cleaner environment.",
        },
        {
          title: "Increased Property Value",
          description: "Solar installations add value to your home or commercial property.",
        },
        {
          title: "Reliable Backup",
          description: "Battery systems ensure power availability during outages and load shedding.",
        },
        {
          title: "Expert Installation",
          description: "Professional installation by certified technicians for optimal performance.",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Energy Assessment",
          description: "We analyze your energy consumption and requirements to design the right system.",
        },
        {
          step: 2,
          title: "System Design",
          description: "Custom solar system designed for your property and energy needs.",
        },
        {
          step: 3,
          title: "Installation",
          description: "Professional installation by certified technicians.",
        },
        {
          step: 4,
          title: "Commissioning",
          description: "System testing, handover, and training on operation and maintenance.",
        },
      ]}
      relatedServices={[
        { title: "Electrical Services", href: "/services/electrical-services" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Roofing & Roof Leak Repairs", href: "/services/roofing-services" },
      ]}
    />
  )
}
