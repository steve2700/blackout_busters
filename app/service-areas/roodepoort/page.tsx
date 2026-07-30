// File path: app/service-areas/roodepoort/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/service-areas/roodepoort

import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Roodepoort | ZECO Construction - Gauteng",
  description:
    "Professional construction and maintenance services in Roodepoort. Expert solutions for residential, commercial & industrial properties in Wilgeheuwel, Honeydew, Constantia Kloof, Ruimsig & more. Licensed contractors with 500+ completed projects. Same-day quotes.",
  keywords: "construction Roodepoort, maintenance services Roodepoort, renovations Wilgeheuwel, building contractors Honeydew, property maintenance Constantia Kloof, electrical services Ruimsig",
  openGraph: {
    title: "Construction & Maintenance Services in Roodepoort | ZECO Construction",
    description:
      "Expert construction and maintenance services for Roodepoort properties. 10+ years experience, 500+ projects completed. Serving Wilgeheuwel, Honeydew, Constantia Kloof & all Roodepoort suburbs.",
    images: [
      {
        url: "/construction-workers-building-a-new-home-in-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "Professional construction services in Roodepoort - ZECO Construction",
      },
    ],
  },
}

export default function RoodepoortPage() {
  return (
    <ServiceAreaTemplate
      areaName="Roodepoort"
      description="ZECO Construction provides comprehensive construction and maintenance services throughout Roodepoort and surrounding suburbs. From residential renovations to commercial projects and industrial maintenance, we deliver quality workmanship with transparent pricing and professional service."
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
      heroImage="/construction-workers-building-a-new-home-in-gauteng.jpg"
      introduction="Roodepoort's diverse property landscape—from established residential suburbs to growing commercial districts and industrial areas—requires versatile, reliable construction and maintenance services. ZECO Construction has been serving Roodepoort homeowners, businesses, and industrial clients for over 10 years with professional solutions tailored to each property's unique needs. Whether you're in the upmarket estates of Ruimsig, the established neighborhoods of Constantia Kloof, or the commercial hubs of Radiokop, our experienced team delivers quality results you can trust."
      servicesOffered={[
        "Complete home renovations and extensions",
        "New residential construction and building",
        "Commercial property construction and fit-outs",
        "Industrial maintenance and repairs",
        "Kitchen and bathroom remodeling",
        "Electrical installations and repairs",
        "Plumbing services and geyser installations",
        "Painting, tiling and finishing work",
        "Roofing repairs and waterproofing",
        "Boundary wall construction",
        "Concrete works and bricklaying",
        "Paving, driveways and concrete works",
        "Carpentry and custom cupboards",
        "Property maintenance contracts",
        "Emergency repair services",
      ]}
      whyChooseUs={[
        "Over 10 years serving Roodepoort and surrounding areas",
        "500+ successfully completed projects in the region",
        "Rapid response times of 20-40 minutes across Gauteng",
        "Licensed, insured, and qualified professionals",
        "NHBRC and CIDB certified for peace of mind",
        "Transparent pricing with detailed quotations",
        "Quality materials from trusted suppliers",
        "Excellent track record with local clients",
        "Emergency callout services available 24/7",
        "Comprehensive warranties on all workmanship",
        "Professional project management from start to finish",
        "Flexible scheduling to suit your timeline",
      ]}
      nearbyAreas={[
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
      responseTime="20-40 minutes"
      projectsCompleted={500}
    >
      {/* Additional Roodepoort-Specific Content */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              Comprehensive Construction & Maintenance Services Throughout Roodepoort
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort's unique character—combining residential neighborhoods, commercial developments, and industrial zones—demands construction and maintenance providers who understand the diverse requirements of each area. ZECO Construction brings <strong>over 10 years of local experience</strong> to every project, whether you're renovating a family home in Wilgeheuwel, upgrading a commercial property in Radiokop, or maintaining an industrial facility in Laser Park.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Serving Roodepoort's Diverse Suburbs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our comprehensive service coverage extends throughout Roodepoort and all surrounding suburbs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Areas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We specialize in serving Roodepoort's established and upmarket residential suburbs including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ruimsig and Featherbrooke Estate - Premium homes and estates</li>
                    <li>• Constantia Kloof and Little Falls - Family neighborhoods</li>
                    <li>• Wilgeheuwel and Weltevredenpark - Established suburbs</li>
                    <li>• Honeydew and Florida - Diverse residential properties</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial & Industrial Zones</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional services for Roodepoort's business and industrial districts:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Radiokop - Commercial offices and retail spaces</li>
                    <li>• Laser Park - Industrial facilities and warehouses</li>
                    <li>• Strubensvalley - Mixed commercial developments</li>
                    <li>• Quellerina - Business parks and offices</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Residential Construction & Renovations in Roodepoort</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort homeowners trust us for comprehensive residential services including complete home renovations, room additions and extensions, kitchen and bathroom remodeling, bedroom cupboards and built-in wardrobes, garage conversions, and outdoor entertainment areas. We understand the architectural styles common in Roodepoort suburbs—from modern estates to classic family homes—and deliver renovations that enhance both functionality and property value.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial Property Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort's growing commercial sector requires professional contractors who minimize business disruption. We provide office fit-outs and renovations, retail space upgrades, restaurant and hospitality construction, medical and dental practice fit-outs, and commercial property maintenance contracts. Our flexible scheduling accommodates business hours, and we work efficiently to ensure minimal impact on your operations.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Industrial Maintenance & Construction</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Laser Park and surrounding industrial areas require robust, reliable maintenance services. We offer warehouse construction and modifications, factory floor repairs and resurfacing, industrial electrical installations, structural repairs and reinforcement, roof repairs and waterproofing, and preventative maintenance programs. Our industrial clients benefit from scheduled maintenance that prevents costly downtime and emergency repairs.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Emergency Services & Rapid Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Emergencies don't wait for convenient times. Our 24/7 emergency service covers electrical faults and power failures, plumbing emergencies and burst geysers, and roof leaks and storm damage. We maintain <strong>rapid response times of 20-40 minutes</strong> to all Roodepoort suburbs, ensuring you're never left waiting during an emergency.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Property Maintenance Contracts</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For commercial buildings, residential estates, and industrial facilities in Roodepoort, we offer comprehensive property maintenance contracts that provide regular inspections, preventative maintenance, priority emergency response, scheduled repairs and upgrades, and detailed maintenance records. These contracts ensure your property remains in optimal condition while providing predictable maintenance costs and peace of mind.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Why Roodepoort Clients Choose ZECO Construction</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our reputation in Roodepoort is built on consistent delivery of quality workmanship, honest transparent pricing, professional project management, respect for your property and time, and reliable after-sales support. We're proud to serve Roodepoort's diverse community with construction and maintenance services that meet the highest standards of quality and professionalism.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-bold text-lg mb-3">Ready to Start Your Roodepoort Project?</h4>
                <p className="text-muted-foreground mb-4">
                  Contact us today for a free, no-obligation consultation and detailed quotation. Whether you're in Wilgeheuwel, Honeydew, Constantia Kloof, or any other Roodepoort suburb, our team is ready to help.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Based in:</strong> Gauteng, South Africa<br />
                  <strong>Response Time:</strong> 20-40 minutes to Roodepoort<br />
                  <strong>Emergency Service:</strong> Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceAreaTemplate>
  )
}
