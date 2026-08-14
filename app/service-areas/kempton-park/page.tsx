import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Kempton Park | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Kempton Park. Home base of Blackout Busters, serving Aston Manor, Birchleigh, Edleen, Glen Marais and surrounds with rapid same day response.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Kempton Park | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Kempton Park homes and businesses, dispatched from our local base.",
  },
}

export default function KemptonParkPage() {
  return (
    <ServiceAreaTemplate
      areaName="Kempton Park"
      description="Kempton Park is home base for Blackout Busters. From here we deliver certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates to homes, factories, warehouses, and businesses across the area, with the fastest response times anywhere in our coverage."
      introImage="/electrician-installing-wiring.png"
      responseTime="Rapid same day"
      suburbs={[
        "Aston Manor",
        "Birchleigh",
        "Edleen",
        "Glen Marais",
        "Bonaero Park",
        "Van Riebeeck Park",
        "Norkem Park",
        "Kempton Park CBD",
        "Terenure",
        "Pomona",
        "Rhodesfield",
        "Isando",
      ]}
      introduction="Kempton Park is where Blackout Busters is based, so it is the area we know best and reach fastest. We are minutes away from most homes and businesses in the area, from residential suburbs to the industrial and warehousing zones around Isando and Pomona. When a DB board faults, a circuit fails, or a business needs solar and battery backup to ride out load shedding, we can be on site quickly to put it right and keep your compliance current."
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
        "Based in Kempton Park for the fastest response in the area",
        "Certified electricians and a COC issued on every completed job",
        "Experience across homes, factories, warehouses, and offices",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Midrand", href: "/service-areas/midrand" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Bedfordview", href: "/service-areas/bedfordview" },
        { name: "Pretoria", href: "/service-areas/pretoria" },
      ]}
    />
  )
}
