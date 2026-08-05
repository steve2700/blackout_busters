import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Midrand | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Midrand. Serving Carlswald, Halfway House, Vorna Valley, Kyalami, Waterfall and surrounding areas. Same day quotes available.",
}

export default function MidrandPage() {
  return (
    <ServiceAreaTemplate
      areaName="Midrand"
      description="Jero Fire Solutions serves Midrand's growing residential and commercial communities with certified fire detection, extinguisher servicing, suppression systems, and OHS compliance. Dispatched from our Kempton Park base, we reach Midrand quickly for both routine servicing and urgent callouts."
      introImage="/jero-fire-technician-midrand.jpg"
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
      introduction="Midrand's position between Pretoria and Johannesburg has made it one of Gauteng's fastest growing areas, with new office parks, estates, and commercial developments that all carry their own fire safety and OHS compliance obligations from the day they open. Jero Fire Solutions serves Midrand's mix of residential estates, office parks, and commercial sites with detection, suppression, extinguisher servicing, and compliance work that holds up under an actual inspection. From a faulty alarm panel in a townhouse to a full suppression system for an office park, we respond properly, not just quickly."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for offices and estates",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Midrand quickly from Kempton Park",
        "Experience with security estates and office parks",
        "Technicians who understand OHS Act requirements, not just paperwork",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for fire safety faults",
        "A Certificate of Compliance issued on every completed job",
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
