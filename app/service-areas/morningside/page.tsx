import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Morningside | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Morningside. Serving Sandton Central, Atholl, Inanda, Sandown, Benmore and surrounding areas. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Morningside | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Morningside homes and businesses.",
  },
}

export default function MorningsidePage() {
  return (
    <ServiceAreaTemplate
      areaName="Morningside"
      description="Blackout Busters provides certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates throughout Morningside. From luxury homes to apartments and businesses, we handle every site with the same discretion and care."
      introImage="/solar-panel-roof-installation.png"
      suburbs={["Sandton Central", "Atholl", "Inanda", "Sandown", "Benmore", "Strathavon"]}
      introduction="Morningside is one of Johannesburg's most desirable residential areas, home to luxury properties and high value businesses that cannot afford to sit in the dark every time the grid drops. Blackout Busters looks after Morningside homeowners and businesses with electrical repairs, solar, and inverter and battery backup that stands up to real scrutiny, not a rushed sign off. Whether it is a residential backup power system or full compliance documentation for a business, our electricians deliver careful, properly certified work."
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
        "Certified electricians reaching Morningside quickly for same day quotes",
        "Experience with premium homes and high value business sites",
        "Discreet, professional service with attention to detail",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
      ]}
    />
  )
}
