import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Pretoria | Cold Fix Services",
  description:
    "Air conditioning, refrigeration, and appliance repairs in Pretoria. Serving Montana, Hatfield, Menlyn, Brooklyn, Waterkloof, Moreleta Park and surrounding suburbs. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Pretoria | Cold Fix Services",
    description:
      "Fast, reliable air conditioning, refrigeration, and appliance repairs for homes and businesses across Pretoria.",
  },
}

export default function PretoriaPage() {
  return (
    <ServiceAreaTemplate
      areaName="Pretoria"
      description="Cold Fix Services is your trusted team for air conditioning, refrigeration, and appliance repairs throughout Pretoria and the greater Tshwane area. From homes to businesses, we keep your fridges, freezers, air conditioners, and appliances running with fast, reliable service."
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
      introduction="As the capital continues to grow, homes and businesses in Pretoria need reliable cooling and appliance repairs they can count on. Cold Fix Services has built a strong presence in Pretoria, helping households and businesses with everything from a fridge that has stopped cooling to a new air conditioning installation. Our technicians reach suburbs across Pretoria East, the older central areas, and modern developments like Menlyn and Moreleta Park quickly and professionally."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Chest freezer and bar fridge repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Local technicians reaching Pretoria quickly for same day callouts",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "24 hour emergency support for cooling breakdowns",
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
