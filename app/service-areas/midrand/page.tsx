import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Midrand | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Midrand. Serving Carlswald, Halfway House, Vorna Valley, Kyalami, Waterfall and surrounding areas. Same day quotes available.",
}

export default function MidrandPage() {
  return (
    <ServiceAreaTemplate
      areaName="Midrand"
      description="Blackout Busters serves Midrand's growing residential and commercial communities with certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates. Dispatched from our Kempton Park base, we reach Midrand quickly for both new installations and urgent callouts."
      introImage="/inverter-battery-installation.png"
      suburbs={[
        "Carlswald",
        "Halfway House",
        "Vorna Valley",
        "Glen Austin",
        "Noordwyk",
        "Halfway Gardens",
        "Kyalami",
        "Waterfall",
      ]}
      introduction="Midrand's position between Pretoria and Johannesburg has made it one of Gauteng's fastest growing areas, with new office parks, estates, and commercial developments that all need reliable power and backup for load shedding from the day they open. Blackout Busters serves Midrand's mix of residential estates, office parks, and commercial sites with electrical installation, solar, backup power, and compliance work that holds up under an actual inspection. From a tripping board in a townhouse to a full solar and battery system for an office park, we respond properly, not just quickly."
      servicesOffered={[
        "Electrical installation and new wiring",
        "Electrical repairs and fault finding",
        "Solar panel system installation",
        "Inverter and battery backup power installation",
        "Generator installation and servicing",
        "DB board upgrades and replacements",
        "Compliance certificates (COC) for sales and audits",
        "Load shedding solutions and consultations",
        "Geyser installation and repairs",
        "CCTV and security system installation",
        "Prepaid meter installation",
        "Emergency 24 hour electrical callouts",
      ]}
      whyChooseUs={[
        "Certified electricians reaching Midrand quickly from Kempton Park",
        "Experience with security estates and office parks",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Pretoria", href: "/service-areas/pretoria" },
        { name: "Centurion", href: "/service-areas/centurion" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Fourways", href: "/service-areas/fourways" },
      ]}
    />
  )
}
