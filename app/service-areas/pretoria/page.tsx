import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Pretoria | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Pretoria. Serving Montana, Hatfield, Menlyn, Brooklyn, Waterkloof, Moreleta Park and surrounding suburbs. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Pretoria | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for homes and businesses across Pretoria.",
  },
}

export default function PretoriaPage() {
  return (
    <ServiceAreaTemplate
      areaName="Pretoria"
      description="Jero Fire Solutions is your certified team for fire detection, extinguisher servicing, suppression systems, and OHS compliance throughout Pretoria and the greater Tshwane area. From homes to businesses, we keep buildings protected and every certificate current."
      introImage="/jero-fire-technician-commercial-gauteng.jpg"
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
      introduction="As the capital continues to grow, homes and businesses in Pretoria need fire safety work they can actually trust, not just a certificate that looks right on paper. Jero Fire Solutions has built a presence in Pretoria helping households and businesses with everything from a single extinguisher service to a full detection and suppression system installation. Our technicians reach suburbs across Pretoria East, the older central areas, and modern developments like Menlyn and Moreleta Park, and every job finishes with documentation that would hold up under an actual inspection."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for offices and retail",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Pretoria quickly for same day quotes",
        "Technicians who understand OHS Act requirements, not just paperwork",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
        "Trusted by homes and businesses across Pretoria",
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
