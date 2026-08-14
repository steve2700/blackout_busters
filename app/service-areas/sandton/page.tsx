import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Sandton | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Sandton. Serving Morningside, Rivonia, Sunninghill, Bryanston, Hyde Park and surrounding suburbs. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Sandton | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Sandton homes, offices, and businesses.",
  },
}

export default function SandtonPage() {
  return (
    <ServiceAreaTemplate
      areaName="Sandton"
      description="Blackout Busters delivers certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates across Sandton. From executive homes and apartment blocks to corporate offices and retail, we keep the power on and the compliance current to the high standards the area expects."
      introImage="/commercial-electrical-work.png"
      suburbs={["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park", "Sandown", "Atholl", "Illovo"]}
      introduction="As the financial and business heart of Johannesburg, Sandton depends on power staying on every day of the year, which is exactly why solid backup systems matter here. Blackout Busters helps households, offices, restaurants, and retailers in Sandton with electrical installation and repairs, solar, and inverter and battery backup. Whether it is a DB board that keeps tripping in a corporate office or an apartment block needing a full backup power setup, our certified electricians respond quickly with work that is done properly and documented in full."
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
        "Certified electricians reaching Sandton quickly for same day callouts",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Experience with executive homes and corporate buildings",
        "Discreet, professional service with minimal disruption",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Morningside", href: "/service-areas/morningside" },
        { name: "Randburg", href: "/service-areas/randburg" },
      ]}
    />
  )
}
