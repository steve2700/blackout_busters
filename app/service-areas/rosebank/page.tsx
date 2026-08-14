import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Rosebank | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Rosebank. Serving Parktown, Saxonwold, Dunkeld, Forest Town, Killarney and northern Johannesburg suburbs. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Rosebank | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Rosebank homes, apartments, and businesses.",
  },
}

export default function RosebankPage() {
  return (
    <ServiceAreaTemplate
      areaName="Rosebank"
      description="Blackout Busters serves Rosebank's mix of heritage homes, modern apartments, offices, and retail spaces with certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates. We keep the power on and certificates current with fast, professional service."
      introImage="/blackout-busters-team-gauteng.png"
      suburbs={["Parktown", "Saxonwold", "Dunkeld", "Forest Town", "Parkhurst", "Greenside", "Westcliff", "Killarney"]}
      introduction="Rosebank sits at the centre of Johannesburg's northern suburbs, combining older homes with modern apartment blocks, offices, and busy retail, all of which need dependable power and backup for load shedding. Blackout Busters helps residents and businesses in Rosebank with everything from a tripping circuit to full solar and battery backup for an office or shopping precinct. Our certified electricians know the area well and respond quickly with work that is done properly and backed by compliance documentation."
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
        "Electricians reaching Rosebank quickly for same day callouts",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Experience with apartments, offices, and retail spaces",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Morningside", href: "/service-areas/morningside" },
      ]}
    />
  )
}
