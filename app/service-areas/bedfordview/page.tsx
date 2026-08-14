import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Bedfordview | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Bedfordview and the East Rand. Serving Edenvale, Germiston, Kensington, and surrounding areas. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Bedfordview | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Bedfordview and East Rand homes and businesses.",
  },
}

export default function BedfordviewPage() {
  return (
    <ServiceAreaTemplate
      areaName="Bedfordview"
      description="Blackout Busters provides electrical installation and repairs, solar, inverter and battery backup, and compliance certificates across Bedfordview and the greater East Rand. From upmarket homes to shops, offices, and industrial facilities, we keep the power on and certificates current."
      introImage="/commercial-electrical-work.png"
      suburbs={["Edenvale", "Germiston", "Kensington", "Kempton Park", "Boksburg", "Benoni", "East Rand Mall area"]}
      introduction="Bedfordview and the greater East Rand feature a wide mix of properties, from upmarket homes to retail centres, offices, and industrial facilities, each with different electrical and backup power needs. Blackout Busters serves this region with installation, repairs, solar, backup power, and compliance work that holds up under an actual audit, not just a signature on a form. Whether it is a single circuit repair or a full solar and battery installation, our electricians treat every site the same way, properly."
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
        "Electricians reaching the East Rand quickly for same day quotes",
        "Experience across homes, retail, offices, and industrial sites",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Kempton Park", href: "/service-areas/kempton-park" },
      ]}
    />
  )
}
