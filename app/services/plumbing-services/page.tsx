import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Plumbing Services | Goshen Projects Gauteng",
  description:
    "Professional plumbing services in Gauteng. Installations, repairs, leak detection, burst pipes, drain cleaning, geyser services in Pretoria & Johannesburg.",
  openGraph: {
    title: "Plumbing Services | Goshen Projects Gauteng",
    description:
      "Expert plumbing installations and repairs for homes and businesses in Pretoria, Johannesburg & Gauteng.",
  },
}

export default function PlumbingServicesPage() {
  return (
    <ServicePageTemplate
      title="Plumbing Services"
      description="We use modern tools and techniques to ensure plumbing systems are functional, efficient, and compliant with South African standards. Our experienced plumbers handle everything from routine maintenance to complex installations across Gauteng."
      icon={Droplets}
      heroImage="/professional-plumber-working-on-pipes-in-a-gauteng-.jpg"
      features={[
        "Plumbing installations",
        "Plumbing repairs",
        "Leak detection & repairs",
        "Burst pipe repairs",
        "Drain cleaning & unblocking",
        "Geyser installation",
        "Geyser maintenance & repairs",
        "Bathroom plumbing",
        "Kitchen plumbing",
      ]}
      benefits={[
        {
          title: "Experienced Plumbers",
          description: "Our licensed plumbers have years of experience handling all types of plumbing challenges.",
        },
        {
          title: "Modern Equipment",
          description: "We use the latest tools and technology for accurate leak detection and efficient repairs.",
        },
        {
          title: "Compliance Guaranteed",
          description: "All work meets South African plumbing standards and regulations for your peace of mind.",
        },
        {
          title: "Emergency Services",
          description:
            "Burst pipes or major leaks? We offer responsive emergency plumbing services when you need them most.",
        },
        {
          title: "Quality Materials",
          description: "We use only high-quality, durable plumbing materials to ensure long-lasting results.",
        },
        {
          title: "Transparent Pricing",
          description: "Clear quotes with no hidden fees. You'll know exactly what to expect before work begins.",
        },
      ]}
      process={[
        {
          step: 1,
          title: "Diagnosis",
          description: "We assess the plumbing issue and provide a detailed explanation of the problem.",
        },
        {
          step: 2,
          title: "Quotation",
          description: "You receive a transparent quote for the required work before we proceed.",
        },
        {
          step: 3,
          title: "Repair/Installation",
          description: "Our plumbers complete the work efficiently using quality materials.",
        },
        {
          step: 4,
          title: "Testing & Cleanup",
          description: "We test the system thoroughly and leave your space clean and tidy.",
        },
      ]}
      relatedServices={[
        { title: "Waterproofing Services", href: "/services/waterproofing-services" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Kitchen & Bathroom Cupboards", href: "/services/kitchen-bathroom-cupboards" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
      ]}
    />
  )
}
