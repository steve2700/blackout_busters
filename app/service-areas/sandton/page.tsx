import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Sandton | Cold Fix Services",
  description:
    "Air conditioning, refrigeration, and appliance repairs in Sandton. Serving Morningside, Rivonia, Sunninghill, Bryanston, Hyde Park and surrounding suburbs. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Sandton | Cold Fix Services",
    description:
      "Reliable air conditioning, refrigeration, and appliance repairs for Sandton homes, offices, and businesses.",
  },
}

export default function SandtonPage() {
  return (
    <ServiceAreaTemplate
      areaName="Sandton"
      description="Cold Fix Services keeps Sandton homes, apartments, offices, and businesses cool and running with professional air conditioning, refrigeration, and appliance repairs. From executive homes to corporate buildings, we deliver reliable service that matches the high standards expected in the area."
      introImage="/air-conditioning-technician-installing-ac-unit-in-.jpg"
      suburbs={["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park", "Sandown", "Atholl", "Inanda"]}
      introduction="As the financial and business heart of Johannesburg, Sandton depends on reliable cooling and appliances every day of the year. Cold Fix Services helps households, offices, restaurants, and retailers in Sandton with fast air conditioning, refrigeration, and appliance repairs. Whether it is a fridge that has stopped cooling in an apartment or an aircon that needs servicing in a corporate office, our technicians respond quickly with professional, lasting work."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Chest freezer and bar fridge repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and office refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
      ]}
      whyChooseUs={[
        "Technicians reaching Sandton quickly for same day callouts",
        "Experience with executive homes and corporate buildings",
        "Refrigerant handling certified and fully insured teams",
        "Discrete, professional service with minimal disruption",
        "Honest, upfront quotes with no hidden costs",
        "24 hour emergency support for cooling breakdowns",
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
