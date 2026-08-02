import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Morningside | Cold Fix Services",
  description:
    "Air conditioning, refrigeration, and appliance repairs in Morningside. Serving Sandton Central, Atholl, Inanda, Sandown, Benmore and surrounding areas. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Morningside | Cold Fix Services",
    description:
      "Reliable air conditioning, refrigeration, and appliance repairs for Morningside homes and businesses.",
  },
}

export default function MorningsidePage() {
  return (
    <ServiceAreaTemplate
      areaName="Morningside"
      description="Cold Fix Services provides air conditioning, refrigeration, and appliance repairs throughout Morningside. From luxury homes to apartments and businesses, we keep your cooling and appliances running with careful, professional service."
      introImage="/cold-room-installation.png"
      suburbs={["Sandton Central", "Atholl", "Inanda", "Sandown", "Benmore", "Strathavon"]}
      introduction="Morningside is one of Johannesburg's most desirable residential areas, home to luxury properties with high end appliances and cooling systems. Cold Fix Services looks after Morningside homeowners and businesses with reliable air conditioning, refrigeration, and appliance repairs, treating every property with care. Whether it is a premium fridge that needs repair or an aircon that needs servicing, our technicians deliver quality work with attention to detail."
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
        "Technicians reaching Morningside quickly for same day callouts",
        "Experience with premium homes and high end appliances",
        "Refrigerant handling certified and fully insured teams",
        "Discrete, professional service with attention to detail",
        "Honest, upfront quotes with no hidden costs",
        "24 hour emergency support for cooling breakdowns",
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
