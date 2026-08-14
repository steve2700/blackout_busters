import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Johannesburg | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) across Johannesburg. Serving Sandton, Rosebank, Fourways, Randburg, Bryanston and all JHB suburbs. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Johannesburg | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Johannesburg homes and businesses.",
  },
}

export default function JohannesburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Johannesburg"
      description="Blackout Busters delivers certified electrical installation and repairs, solar, inverter and battery backup, generators, and compliance certificates throughout Johannesburg. From homes in the northern suburbs to shops, offices, and restaurants in the city, we keep the power on and the paperwork sorted."
      introImage="/commercial-electrical-work.png"
      suburbs={[
        "Sandton",
        "Rosebank",
        "Fourways",
        "Randburg",
        "Parktown",
        "Melrose",
        "Hyde Park",
        "Bryanston",
        "Norwood",
        "Houghton",
        "Johannesburg CBD",
        "Melville",
        "Greenside",
        "Parkhurst",
        "Illovo",
      ]}
      introduction="Johannesburg is a fast moving city where a tripping DB board, a failing plug circuit, or an unreliable grid supply can bring a home or business to a standstill. Blackout Busters has built a reputation across Johannesburg for electrical, solar, and backup power work that is actually done properly, helping households, shops, offices, and restaurants stay powered and compliant. With one trusted team for installations, repairs, solar, and backup power, you only need to make one call."
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
        "Certified electricians positioned across Johannesburg for rapid response",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Experience across homes, restaurants, offices, and commercial sites",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Bedfordview", href: "/service-areas/bedfordview" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
