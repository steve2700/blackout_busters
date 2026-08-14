import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Pretoria | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Pretoria. Serving Montana, Hatfield, Menlyn, Brooklyn, Waterkloof, Moreleta Park and surrounding suburbs. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Pretoria | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for homes and businesses across Pretoria.",
  },
}

export default function PretoriaPage() {
  return (
    <ServiceAreaTemplate
      areaName="Pretoria"
      description="Blackout Busters is your certified team for electrical installation and repairs, solar, inverter and battery backup, and compliance certificates throughout Pretoria and the greater Tshwane area. From homes to businesses, we keep the power reliable and every certificate current."
      introImage="/solar-panel-roof-installation.png"
      suburbs={[
        "Montana",
        "Hatfield",
        "Menlyn",
        "Brooklyn",
        "Waterkloof",
        "Centurion",
        "Lynnwood",
        "Faerie Glen",
        "Garsfontein",
        "Moreleta Park",
        "Pretoria East",
        "Pretoria North",
        "Pretoria West",
        "Arcadia",
        "Sunnyside",
      ]}
      introduction="As the capital continues to grow, homes and businesses in Pretoria need electrical and backup power work they can actually trust, especially when the grid cannot be relied on to stay up. Blackout Busters has built a presence in Pretoria helping households and businesses with everything from a single faulty circuit to a full solar and battery backup installation. Our technicians reach suburbs across Pretoria East, the older central areas, and modern developments like Menlyn and Moreleta Park, and every job finishes with a Certificate of Compliance where one is required."
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
        "Certified electricians reaching Pretoria quickly for same day quotes",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "Experience across homes, businesses, and backup power systems",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Centurion", href: "/service-areas/centurion" },
        { name: "Midrand", href: "/service-areas/midrand" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
      ]}
    />
  )
}
