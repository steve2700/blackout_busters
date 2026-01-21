// File path: app/road-construction-civil-works/page.tsx
// Clean URL: https://goshenprojects.co.za/road-construction-civil-works

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Construction, Wrench, Clock, ShieldCheck, TrendingUp, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Road Construction & Civil Works in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional road construction and civil engineering works in Gauteng. Earthworks, site preparation, drainage systems, concrete foundations, road surfacing, kerbing, stormwater management & infrastructure development for residential, commercial & municipal projects in Pretoria, Johannesburg & Midrand. Engineering standards, quality materials, experienced teams. NHBRC registered.",
  keywords: "road construction Gauteng, civil works Pretoria, earthworks Johannesburg, drainage systems Midrand, concrete foundations, road surfacing, kerbing, stormwater drainage, infrastructure development, site preparation, civil engineering",
  openGraph: {
    title: "Road Construction & Civil Works | Goshen Projects Solutions Gauteng",
    description:
      "Professional civil engineering and road construction services. Earthworks, drainage, foundations, road surfacing & infrastructure. Engineering standards, experienced teams. Serving Pretoria, Johannesburg & Gauteng.",
    images: [
      {
        url: "/road-construction-equipment-at-work-in-gauteng-sout.jpg",
        width: 1200,
        height: 630,
        alt: "Professional road construction and civil works in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function RoadConstructionCivilWorksPage() {
  return (
    <ServicePageTemplate
      title="Road Construction & Civil Works"
      description="Build lasting infrastructure with professional civil engineering and road construction services performed to strict engineering standards. From comprehensive earthworks and site preparation to road construction, drainage systems, and concrete foundations, we deliver civil works that meet design specifications, comply with regulations, and provide decades of reliable service. With over 10 years of experience, qualified civil engineers, modern equipment fleet, and commitment to quality construction, our teams execute residential, commercial, and municipal civil engineering projects across Gauteng with precision and professionalism."
      icon={Construction}
      heroImage="/road-construction-equipment-at-work-in-gauteng-sout.jpg"
      priceRange="Project-Based Quotes"
      responseTime="Site Assessments & Estimates"
      features={[
        "Road construction & surfacing",
        "Earthworks & bulk excavation",
        "Site preparation & leveling",
        "Stormwater drainage systems",
        "Concrete foundations & slabs",
        "Kerbing & channeling",
        "Retaining walls & structures",
        "Paving & hard landscaping",
        "Underground services installation",
        "Culvert construction",
        "Access roads & driveways",
        "Parking lot construction",
        "Municipal infrastructure projects",
        "Residential development civil works",
        "NHBRC compliance & engineering certification",
      ]}
      benefits={[
        {
          title: "Engineering Standards Compliance",
          description:
            "All civil works performed to SANS standards, COLTO specifications, and engineering designs. Qualified civil engineers oversee projects ensuring structural integrity, safety compliance, and design adherence throughout construction.",
          icon: ShieldCheck,
        },
        {
          title: "Experienced Civil Engineering Teams",
          description:
            "Over 10 years of civil works experience with qualified engineers, skilled operators, experienced construction teams, and proven expertise executing complex infrastructure projects from planning through completion.",
          icon: Construction,
        },
        {
          title: "Modern Equipment Fleet",
          description:
            "Comprehensive equipment including excavators, graders, compactors, concrete equipment, and specialized machinery enabling efficient earthworks, precise grading, proper compaction, and quality construction throughout projects.",
          icon: Wrench,
        },
        {
          title: "Quality Materials & Testing",
          description:
            "Specified materials meeting engineering requirements including certified concrete, approved aggregates, quality asphalt, and engineered fill. Comprehensive testing verifies material quality, compaction levels, and structural performance.",
          icon: CheckCircle,
        },
        {
          title: "Project Management Expertise",
          description:
            "Professional project management coordinating trades, managing schedules, controlling costs, ensuring safety compliance, and delivering projects on time within budget while maintaining quality standards and client communication.",
          icon: Clock,
        },
        {
          title: "Long-Term Infrastructure Durability",
          description:
            "Civil works designed and constructed for decades of service. Proper design, quality materials, correct construction methods, adequate drainage, and engineering oversight ensure infrastructure withstands usage and environmental demands.",
          icon: TrendingUp,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Assessment & Engineering Design",
          description: "Site surveys, geotechnical investigations, engineering design, specifications development, quantity calculations, and detailed project planning establishing scope, requirements, and construction methodology.",
        },
        {
          step: 2,
          title: "Project Approval & Mobilization",
          description: "Final design approval, permits and approvals acquisition, material procurement, equipment mobilization, site establishment, and safety planning preparing for efficient construction commencement.",
        },
        {
          step: 3,
          title: "Construction & Quality Control",
          description: "Earthworks, drainage installation, foundation construction, road surfacing, and finishing works executed to specifications. Continuous quality control, material testing, compaction verification, and engineering inspections throughout construction.",
        },
        {
          step: 4,
          title: "Completion, Testing & Certification",
          description: "Final inspections, performance testing, snag list completion, as-built documentation, engineering certification, and site handover ensuring infrastructure meets specifications and performs as designed.",
        },
      ]}
      relatedServices={[
        { 
          title: "Paving, Driveways & Surfacing", 
          href: "/paving-driveways-surfacing",
          icon: Construction,
        },
        { 
          title: "Concrete Works & Bricklaying", 
          href: "/concrete-works-bricklaying",
          icon: Wrench,
        },
        { 
          title: "Building Construction & Renovations", 
          href: "/building-construction-renovations",
          icon: ShieldCheck,
        },
        { 
          title: "Fencing, Gates & Access Control", 
          href: "/fencing-gates-access-control",
          icon: CheckCircle,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Road Construction & Civil Works?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of civil engineering experience</strong> across Gauteng, Goshen Projects Solutions delivers professional road construction and civil works for residential developments, commercial properties, and municipal infrastructure projects. Based in <strong>Midrand at 22 Richards Dr</strong>, our qualified engineers and experienced construction teams have completed <strong>hundreds of civil engineering projects</strong> throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas. We combine engineering expertise, modern equipment, quality materials, and rigorous project management to build infrastructure that meets specifications, complies with regulations, and provides reliable service for decades.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Civil Engineering Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need road construction, site earthworks, drainage systems, or complete infrastructure development, our experienced civil engineering teams handle all aspects of residential, commercial, and municipal civil works:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Road Construction & Surfacing</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete road construction from earthworks through surfacing including access roads, internal estate roads, parking areas, and driveways with proper layers, drainage, and durable surfaces meeting traffic requirements.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Earthworks & Site Preparation</h4>
                  <p className="text-sm text-muted-foreground">
                    Bulk earthworks, excavation, site leveling, cut and fill operations, soil stabilization, and ground preparation creating stable platforms for construction with proper drainage and compaction to engineering specifications.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Drainage & Stormwater Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive drainage design and installation including stormwater systems, culverts, French drains, retention systems, and erosion control protecting infrastructure and property from water damage with proper flow management.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Concrete Foundations & Structures</h4>
                  <p className="text-sm text-muted-foreground">
                    Engineered concrete foundations, slabs, retaining walls, kerbing, and structural concrete works providing strong, durable bases for buildings, roads, and infrastructure with reinforcement and specified concrete mixes.
                  </p>
                </div>
              </div>

              {/* Key Service Sections - Condensed for better readability */}
              <h3 className="text-2xl font-bold mb-4 mt-12">Road Construction Excellence</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional road construction requires engineering knowledge, proper layering, quality materials, and precise construction methods. We construct roads, access roads, estate roads, parking areas, and driveways following established engineering practices. Our process includes site preparation, subgrade compaction, layer works with specified materials (G5/G6 subbase, G1/G2 base), and surfacing options including asphalt, concrete paving, or paving blocks depending on traffic requirements. Integrated drainage with proper camber, kerbing, and culverts ensures effective water management. Quality control includes layer thickness verification, compaction testing, and surface finishing for smooth, durable roads providing decades of reliable service.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Earthworks & Site Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Earthworks form the foundation of all civil engineering projects. Our services include bulk excavation, cut and fill operations, site leveling, trenching for services, and slope grading. Using excavators, bulldozers, graders, and compaction equipment operated by experienced personnel, we achieve design levels with proper compaction and drainage. Geotechnical understanding guides soil management, stability considerations, and bearing capacity assessment. Quality earthworks provide stable construction platforms, prevent settlement, ensure proper drainage, and establish correct foundations for successful projects meeting engineering specifications.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Drainage Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Effective drainage protects infrastructure from water damage and prevents flooding. We design and install surface drainage, underground pipe systems, culverts, French drains, and retention systems. Drainage design considers catchment areas, design storms, pipe sizing, and gradients ensuring adequate capacity. Installation includes proper excavation, bedding, pipe laying with correct falls, and connections to structures. Quality control verifies levels, joints, and flow capacity. Properly designed drainage systems prevent structural damage, flooding, erosion, and waterlogging while meeting regulatory requirements and functioning reliably through severe weather.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Structural Concrete Works</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Concrete foundations and structural works provide essential support for buildings and infrastructure. We construct strip footings, pad footings, raft foundations, suspended slabs, retaining walls, and kerbing using specified concrete mixes and proper reinforcement. Our process includes accurate excavation, formwork construction, reinforcement installation per structural design, quality concrete pouring, proper curing, and testing verification. Reinforced concrete provides high load-bearing capacity, durability, and longevity with minimal maintenance, ensuring infrastructure performs reliably throughout its design life.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Development Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Residential and commercial developments require comprehensive infrastructure including internal roads, drainage systems, water reticulation, sewer systems, and services installation. We provide complete civil engineering from site preparation through infrastructure construction, coordinating multiple elements, managing staged construction, ensuring NHBRC compliance, and delivering as-built documentation. Our development experience, modern equipment, project management capability, and quality standards enable successful infrastructure delivery supporting property development and community needs.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Engineering Standards & Quality Assurance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All civil works meet SANS standards, COLTO specifications, and design requirements. Our quality assurance includes qualified civil engineers providing oversight, comprehensive testing programs (material testing, compaction testing, concrete testing), detailed documentation, and independent verification. Testing and documentation ensure structural safety, durability, regulatory compliance, and performance meeting functional requirements. We never compromise on engineering standards as they ensure infrastructure safety, reliability, and longevity protecting client investments and delivering infrastructure performing reliably for decades.
              </p>

              {/* Call to Action */}
              <div className="mt-12 p-8 rounded-xl bg-primary/5 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Start Your Infrastructure Project</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to develop quality infrastructure built to engineering standards? Contact Goshen Projects Solutions for professional civil engineering and road construction services. Our qualified engineers and experienced teams deliver reliable infrastructure across Gauteng.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Location:</strong> 22 Richards Dr, Midrand, Gauteng<br />
                  <strong>Service Areas:</strong> Pretoria, Johannesburg, Midrand, Centurion, Sandton & Gauteng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
