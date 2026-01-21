// File path: app/building-construction-renovations/page.tsx
// Clean URL: https://goshenprojects.co.za/building-construction-renovations

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Building2, Hammer, Wrench, Home, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Building Construction & Renovations in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional building construction and renovation services in Gauteng. New residential, commercial & industrial builds, home extensions, renovations, refurbishments, and structural alterations in Pretoria, Johannesburg & Midrand. Licensed NHBRC & CIDB contractors. Get same-day quotes.",
  keywords: "building construction Gauteng, renovations Pretoria, home extensions Johannesburg, commercial construction Midrand, residential building contractors, industrial construction, structural alterations, NHBRC builders",
  openGraph: {
    title: "Building Construction & Renovations | Goshen Projects Solutions Gauteng",
    description:
      "Expert construction and renovation services for residential, commercial & industrial projects in Pretoria, Johannesburg & Gauteng. 500+ completed projects. Licensed & insured.",
    images: [
      {
        url: "/construction-workers-building-a-new-home-in-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "Professional building construction in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function BuildingConstructionPage() {
  return (
    <ServicePageTemplate
      title="Building Construction & Renovations"
      description="Our construction projects are managed from concept to completion, ensuring strict adherence to timelines, budgets, and quality standards. Goshen Projects Solutions provides expert guidance on design, materials, and compliance for residential, commercial, and industrial clients throughout Gauteng. With over 10 years of experience and 500+ completed projects, we're your trusted construction partner."
      icon={Building2}
      heroImage="/construction-workers-building-a-new-home-in-gauteng.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "New residential buildings and homes",
        "Commercial & industrial construction",
        "Complete renovations & refurbishments",
        "Fit-outs & interior alterations",
        "Home extensions and additions",
        "Structural alterations and modifications",
        "Office & retail space optimization",
        "Structural repairs & upgrades",
        "Multi-storey buildings",
        "Townhouse complexes",
        "Shopping centers & warehouses",
        "NHBRC & CIDB certified projects",
      ]}
      benefits={[
        {
          title: "End-to-End Project Management",
          description:
            "From initial concept and design to final completion, we manage every aspect of your construction project with precision, professionalism, and clear communication throughout.",
          icon: Users,
        },
        {
          title: "Quality Workmanship Guaranteed",
          description:
            "We use high-quality materials and proven construction techniques to deliver lasting results that exceed your expectations. Our work comes with comprehensive warranties.",
          icon: Award,
        },
        {
          title: "Full Compliance & Safety",
          description:
            "All our construction work adheres to South African building regulations, NHBRC standards, and SANS codes, ensuring your project is safe, legal, and built to last.",
          icon: Building2,
        },
        {
          title: "Transparent Pricing",
          description:
            "Detailed quotations with no hidden costs. We provide itemized estimates and keep you informed of progress and any changes throughout the project lifecycle.",
          icon: Hammer,
        },
        {
          title: "Skilled Professionals",
          description:
            "Our team of qualified engineers, experienced project managers, and skilled tradespeople bring over 10 years of combined experience to every construction project.",
          icon: Users,
        },
        {
          title: "On-Time Delivery",
          description:
            "We understand the importance of deadlines and work efficiently to complete your project on schedule without compromising on quality or safety standards.",
          icon: Wrench,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "We discuss your vision, requirements, budget constraints, and project goals to fully understand your construction needs and expectations.",
        },
        {
          step: 2,
          title: "Planning & Design",
          description: "Our team develops detailed architectural plans, material specifications, cost estimates, and realistic project timelines for your approval.",
        },
        {
          step: 3,
          title: "Construction Phase",
          description: "Skilled professionals execute the build with regular progress updates, quality checks, and site management to ensure everything runs smoothly.",
        },
        {
          step: 4,
          title: "Completion & Handover",
          description: "Final inspections, touch-ups, compliance certification, and complete handover of your finished project with all documentation and warranties.",
        },
      ]}
      relatedServices={[
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: Wrench,
        },
        { 
          title: "Carpentry Services", 
          href: "/carpentry-services",
          icon: Hammer,
        },
        { 
          title: "Painting & Tiling", 
          href: "/painting-tiling-finishing",
          icon: Home,
        },
        { 
          title: "Electrical Services", 
          href: "/electrical-services",
          icon: Building2,
        },
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
      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Your Construction Project?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> in the Gauteng construction industry, Goshen Projects Solutions has established itself as a trusted name in building construction and renovations. Based in <strong>Midrand at 22 Richards Dr</strong>, we've successfully completed <strong>500+ projects</strong> across <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Our Construction Specializations</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're planning a new residential home, expanding your commercial premises, or undertaking a complete renovation, our team has the expertise and resources to deliver exceptional results:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Construction</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom homes, townhouses, extensions, and complete renovations designed and built to your exact specifications.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial Buildings</h4>
                  <p className="text-sm text-muted-foreground">
                    Office spaces, retail stores, warehouses, and industrial facilities built for functionality and durability.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Renovations & Alterations</h4>
                  <p className="text-sm text-muted-foreground">
                    Transform existing spaces with structural changes, modernization, and complete refurbishment services.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Compliance & Certification</h4>
                  <p className="text-sm text-muted-foreground">
                    NHBRC registration, CIDB grading, and full compliance with all South African building regulations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Quality Materials & Modern Techniques</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We source premium building materials from trusted suppliers and employ modern construction techniques to ensure longevity, energy efficiency, and aesthetic appeal. Our commitment to quality extends from the foundation to the finishing touches.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Serving All of Gauteng</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our strategically located teams provide <strong>fast response times</strong> across Gauteng, with average response times of <strong>20-40 minutes</strong> depending on your location. We proudly serve residential, commercial, and industrial clients throughout the province.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
