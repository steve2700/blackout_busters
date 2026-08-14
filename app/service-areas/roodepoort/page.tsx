import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Roodepoort | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Roodepoort. Serving Wilgeheuwel, Honeydew, Constantia Kloof, Ruimsig, Florida and surrounding suburbs. Same day quotes available.",
  keywords:
    "electrician Roodepoort, solar installation Wilgeheuwel, backup power Honeydew, DB board upgrade Constantia Kloof, electrical repairs Radiokop",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Roodepoort | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Roodepoort homes and businesses.",
    images: [
      {
        url: "/electrician-installing-wiring.png",
        width: 1200,
        height: 630,
        alt: "Certified electrician working in Roodepoort for Blackout Busters",
      },
    ],
  },
}

export default function RoodepoortPage() {
  return (
    <ServiceAreaTemplate
      areaName="Roodepoort"
      description="Blackout Busters provides certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates throughout Roodepoort and its surrounding suburbs. From family homes to shops, offices, and industrial units, we keep the power on with honest pricing and documented workmanship."
      introImage="/electrician-installing-wiring.png"
      suburbs={[
        "Wilgeheuwel",
        "Honeydew",
        "Constantia Kloof",
        "Ruimsig",
        "Featherbrooke Estate",
        "Radiokop",
        "Florida",
        "Weltevredenpark",
        "Little Falls",
        "Strubensvalley",
        "Laser Park",
        "Quellerina",
      ]}
      introduction="Roodepoort covers a broad mix of residential suburbs, commercial districts, and industrial areas, and each one feels load shedding and power faults in its own way. Blackout Busters brings hands on, properly certified work to every job, whether that means repairing a tripping board in a family home in Wilgeheuwel, installing a solar and battery system in a commercial building in Radiokop, or issuing a compliance certificate for a business in Laser Park."
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
        "Certified electricians reaching Roodepoort quickly for same day quotes",
        "Experience across homes, retail, and industrial sites",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    >
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              Electrical, Solar, and Backup Power Throughout Roodepoort
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort combines residential neighbourhoods, commercial developments, and industrial zones, and
                each one has its own power and backup needs. Blackout Busters brings the same standard to every job,
                whether that is fixing a faulty circuit in a family home in Wilgeheuwel, installing a solar system in
                a commercial building in Radiokop, or upgrading a DB board for a business in Laser Park.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Serving Roodepoort&apos;s Diverse Suburbs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our service coverage reaches across Roodepoort and all surrounding suburbs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Areas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We look after electrical repairs, solar, and backup power in Roodepoort&apos;s established and
                    upmarket suburbs including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Ruimsig and Featherbrooke Estate, premium homes and estates</li>
                    <li>Constantia Kloof and Little Falls, family neighbourhoods</li>
                    <li>Wilgeheuwel and Weltevredenpark, established suburbs</li>
                    <li>Honeydew and Florida, diverse residential properties</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial and Industrial Zones</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Installation, backup power, and compliance services for Roodepoort&apos;s business and industrial
                    districts:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Radiokop, offices, retail, and solar systems</li>
                    <li>Laser Park, industrial units and backup power</li>
                    <li>Strubensvalley, mixed commercial developments</li>
                    <li>Quellerina, business parks and compliance certificates</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Home Electrical &amp; Backup Power in Roodepoort</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort homeowners trust us for electrical repairs, DB board upgrades, solar installation, and
                inverter and battery backup. We arrive with the right stock on hand so most work can be completed and
                certified on the first visit.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial and Industrial Electrical Work</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort&apos;s shops, offices, and industrial units depend on power that stays on and installations
                that pass inspection. We install, repair, and certify electrical systems, solar, and backup power, and
                we work around your operating hours to keep disruption to a minimum.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Emergency Callouts and Fast Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A dead circuit or a tripping DB board is not something that can wait weeks for attention. Our emergency
                callout service covers Roodepoort around the clock, so an electrical fault never has to wait until the
                next working day.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-bold text-lg mb-3">Need Electrical or Backup Power Help in Roodepoort?</h4>
                <p className="text-muted-foreground mb-4">
                  Contact us today for a free, no obligation quote. Whether you are in Wilgeheuwel, Honeydew,
                  Constantia Kloof, or any other Roodepoort suburb, our team is ready to help.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Dispatched from:</strong> Kempton Park, serving all of Gauteng<br />
                  <strong>Response Time:</strong> Same day across Roodepoort<br />
                  <strong>Emergency Service:</strong> Available 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceAreaTemplate>
  )
}
