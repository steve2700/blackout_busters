// File path: app/refrigeration-repairs/page.tsx
// Clean URL: https://www.coldfix.co.za/refrigeration-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Refrigerator, Snowflake, Wrench, Clock, Award, ShieldCheck, Store, Warehouse } from "lucide-react"

export const metadata: Metadata = {
  title: "Refrigeration Repairs in Gauteng | Fridge and Freezer Repair | Cold Fix Services",
  description:
    "Fast, reliable refrigeration repairs in Gauteng. We fix fridges, freezers, and chest freezers with cooling faults, gas leaks, thermostat and compressor problems. Serving Pretoria, Johannesburg and Midrand. Same day callouts available.",
  keywords:
    "refrigeration repairs Gauteng, fridge repair Johannesburg, freezer repair Pretoria, chest freezer repair, fridge not cooling, refrigeration technician Midrand",
  openGraph: {
    title: "Refrigeration Repairs | Cold Fix Services Gauteng",
    description:
      "Expert fridge and freezer repairs for homes and businesses across Gauteng. Same day callouts and honest pricing.",
    images: [
      {
        url: "/air-conditioning-technician-installing-ac-unit-in-.jpg",
        width: 1200,
        height: 630,
        alt: "Refrigeration repairs in Gauteng by Cold Fix Services",
      },
    ],
  },
}

export default function RefrigerationRepairsPage() {
  return (
    <ServicePageTemplate
      title="Refrigeration Repairs"
      description="When your fridge or freezer stops cooling, food and stock are on the line. Cold Fix Services provides fast, reliable refrigeration repairs for fridges, freezers, and chest freezers across Gauteng. Our refrigerant handling certified technicians diagnose cooling faults, gas leaks, thermostat problems, and compressor failures, then get your unit running again with quality parts and lasting repairs."
      icon={Refrigerator}
      heroImage="/air-conditioning-technician-installing-ac-unit-in-.jpg"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Fridge repairs for all brands",
        "Freezer and chest freezer repairs",
        "Cooling and temperature fault finding",
        "Refrigerant gas leak detection and refills",
        "Thermostat and control repairs",
        "Compressor diagnosis and replacement",
        "Door seal and gasket replacement",
        "Defrost system repairs",
        "Fan and evaporator repairs",
        "Bar fridge and beverage cooler repairs",
        "Ice maker repairs",
        "Emergency breakdown callouts",
      ]}
      benefits={[
        {
          title: "Fast Turnaround",
          description:
            "We know a broken fridge cannot wait. Our technicians respond quickly with same day callouts to protect your food and stock.",
          icon: Clock,
        },
        {
          title: "Certified Technicians",
          description:
            "Refrigerant handling certified technicians who diagnose and repair cooling faults correctly the first time.",
          icon: Award,
        },
        {
          title: "All Brands Serviced",
          description:
            "We repair every major fridge and freezer brand, from household units to bar fridges and beverage coolers.",
          icon: Refrigerator,
        },
        {
          title: "Quality Parts",
          description:
            "We use quality replacement parts and proper repair methods so your unit keeps cooling for the long term.",
          icon: ShieldCheck,
        },
        {
          title: "Honest Pricing",
          description:
            "You get a clear quote before any work starts, with no hidden costs and honest advice on repair versus replacement.",
          icon: Wrench,
        },
        {
          title: "Cooling Specialists",
          description:
            "Refrigeration is our core business. We understand cooling systems inside out and fix the root cause, not just the symptom.",
          icon: Snowflake,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Diagnosis",
          description:
            "We inspect your fridge or freezer, test the cooling system, and identify the exact cause of the fault.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive an honest quote covering parts and labour, with advice on whether a repair or replacement makes sense.",
        },
        {
          step: 3,
          title: "Professional Repair",
          description:
            "Our technicians complete the repair using quality parts and proper refrigeration techniques.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We run the unit, confirm it holds the correct temperature, and make sure you are happy before we leave.",
        },
      ]}
      relatedServices={[
        { title: "Commercial Refrigeration", href: "/commercial-refrigeration", icon: Store },
        { title: "Cold Room Installation and Repair", href: "/cold-room-installation-repair", icon: Warehouse },
        { title: "Appliance Repairs", href: "/appliance-repairs", icon: Wrench },
        { title: "Emergency Callout Service", href: "/emergency-callout-service", icon: Clock },
      ]}
      serviceAreas={[
        "Pretoria",
        "Johannesburg",
        "Midrand",
        "Sandton",
        "Centurion",
        "Fourways",
        "Randburg",
        "Rosebank",
        "Bedfordview",
        "Roodepoort",
      ]}
    >
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Reliable Fridge and Freezer Repairs Across Gauteng</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A fridge that is not cooling, a freezer building up ice, or a unit making strange noises are all signs that something needs attention. <strong>Cold Fix Services</strong> repairs household and small commercial refrigeration for clients throughout <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region. We carry common spares so most repairs can be completed on the first visit.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Common Faults We Fix</h3>
                  <p className="text-sm text-muted-foreground">
                    Not cooling, cooling too much, water leaks, ice build up, loud noises, tripping power, and doors that no longer seal.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Repair or Replace</h3>
                  <p className="text-sm text-muted-foreground">
                    We give honest advice on whether a repair is worthwhile or whether a replacement will save you money over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
