import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Fourways | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Fourways. Serving Lonehill, Dainfern, Broadacres, Cedar Lakes, Douglasdale and surrounding areas. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Fourways | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Fourways estates, homes, and businesses.",
  },
}

export default function FourwaysPage() {
  return (
    <ServiceAreaTemplate
      areaName="Fourways"
      description="Blackout Busters delivers certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates across Fourways' residential estates and commercial developments. From luxury homes to shopping centres and offices, we keep the power on and the certificates current."
      introImage="/blackout-busters-team-gauteng.png"
      suburbs={[
        "Lonehill",
        "Dainfern",
        "Broadacres",
        "Cedar Lakes",
        "Chartwell",
        "Pineslopes",
        "Douglasdale",
        "Magaliesig",
      ]}
      introduction="Fourways has grown into one of Johannesburg's most sought after areas, with premier residential estates, modern shopping centres, and busy commercial developments that all need reliable power and solid backup for load shedding. Blackout Busters provides the electrical, solar, backup power, and compliance work that Fourways property owners and body corporates actually need, from a repair in an estate home to a full solar and battery system for a shopping centre. Our electricians understand estate access requirements and work efficiently to get systems installed, tested, and certified."
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
        "Certified electricians reaching Fourways quickly for same day quotes",
        "Experience working within security estates and their access rules",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
