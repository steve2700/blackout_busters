// File path: app/concrete-works-bricklaying/page.tsx
// Clean URL: https://goshenprojects.co.za/concrete-works-bricklaying

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Blocks, HardHat, Ruler, Building, Award, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Concrete Works & Bricklaying in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional concrete works and bricklaying services in Gauteng. Foundations, concrete slabs, driveways, pathways, structural concrete, bricklaying, plastering, retaining walls & decorative brickwork in Pretoria, Johannesburg & Midrand. Skilled masons with 500+ completed projects. Licensed contractors with same-day quotes.",
  keywords: "concrete works Gauteng, bricklaying Pretoria, concrete slabs Johannesburg, foundations Midrand, driveways, plastering, retaining walls, structural concrete, decorative brickwork, professional masons",
  openGraph: {
    title: "Concrete Works & Bricklaying | Goshen Projects Solutions Gauteng",
    description:
      "Expert concrete and masonry services for residential, commercial & industrial projects in Pretoria, Johannesburg & Gauteng. Skilled masons, quality materials, structural integrity guaranteed. 500+ projects completed.",
    images: [
      {
        url: "/bricklayer-working-on-construction-site-in-gauteng-.jpg",
        width: 1200,
        height: 630,
        alt: "Professional bricklaying and concrete works in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function ConcreteWorksBricklayingPage() {
  return (
    <ServicePageTemplate
      title="Concrete Works & Bricklaying"
      description="We provide durable, precise, and high-quality masonry and concrete solutions for every construction need. From solid foundations and structural concrete to expert bricklaying and decorative finishes, our skilled masons deliver exceptional results for residential, commercial, and industrial projects across Gauteng. With over 10 years of experience and 500+ completed projects, we build structures that last generations."
      icon={Blocks}
      heroImage="/bricklayer-working-on-construction-site-in-gauteng-.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "Concrete foundations & footings",
        "Concrete slabs & floor slabs",
        "Driveways & parking areas",
        "Pathways & walkways",
        "Expert bricklaying & block work",
        "Internal & external plastering",
        "Structural concrete beams & columns",
        "Retaining walls & boundary walls",
        "Decorative & face brick work",
        "Concrete repairs & resurfacing",
        "Screeding & leveling",
        "SANS compliant structural work",
      ]}
      benefits={[
        {
          title: "Master Craftsmen & Skilled Masons",
          description:
            "Our team consists of highly experienced bricklayers, concrete specialists, and qualified artisans with decades of combined expertise delivering precise, professional results on every project.",
          icon: HardHat,
        },
        {
          title: "Premium Quality Materials",
          description:
            "We use correctly proportioned concrete mixes, high-grade cement, quality bricks, and proper reinforcement materials to ensure maximum strength, durability, and longevity of all structures.",
          icon: Award,
        },
        {
          title: "Structural Integrity Guaranteed",
          description:
            "All concrete and brickwork is executed according to South African building standards (SANS codes), ensuring sound foundations and structures that meet or exceed regulatory requirements.",
          icon: Shield,
        },
        {
          title: "Precision & Accuracy",
          description:
            "Meticulous attention to measurements, levels, plumb lines, and alignment ensures perfectly straight walls, level slabs, and professional finishes that stand the test of time.",
          icon: Ruler,
        },
        {
          title: "Versatile Solutions",
          description:
            "From basic residential slabs to complex multi-storey structural concrete work, decorative brickwork, and industrial foundations—we handle projects of any scale and complexity.",
          icon: Blocks,
        },
        {
          title: "Weather-Resistant Construction",
          description:
            "Proper curing techniques, weatherproofing, and quality finishing ensure your concrete and brickwork withstands harsh weather conditions, moisture, and the test of time.",
          icon: Building,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Assessment & Planning",
          description: "We evaluate soil conditions, drainage requirements, structural load specifications, and project scope to develop the optimal concrete and masonry solution for your needs.",
        },
        {
          step: 2,
          title: "Material Specification & Quote",
          description: "Detailed breakdown of materials required, concrete mix specifications, brick quantities, reinforcement needs, and transparent pricing with itemized cost estimates.",
        },
        {
          step: 3,
          title: "Professional Execution",
          description: "Our skilled masons prepare the site, install formwork and reinforcement, pour concrete with proper techniques, lay bricks with precision, and ensure quality at every stage.",
        },
        {
          step: 4,
          title: "Curing & Finishing",
          description: "Proper curing processes, quality plastering, finishing touches, final inspections, and cleanup—ensuring your structure achieves maximum strength and aesthetic appeal.",
        },
      ]}
      relatedServices={[
        { 
          title: "Building Construction", 
          href: "/building-construction-renovations",
          icon: Building,
        },
        { 
          title: "Road Construction & Civil Works", 
          href: "/road-construction-civil-works",
          icon: HardHat,
        },
        { 
          title: "Paving & Driveways", 
          href: "/paving-driveways-surfacing",
          icon: Blocks,
        },
        { 
          title: "Waterproofing", 
          href: "/waterproofing-services",
          icon: Shield,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Concrete & Bricklaying?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> in concrete works and masonry across Gauteng, Goshen Projects Solutions has built a reputation for delivering structurally sound, aesthetically pleasing, and long-lasting results. Based in <strong>Midrand at 22 Richards Dr</strong>, we've successfully completed <strong>500+ concrete and bricklaying projects</strong> for homes, businesses, and industrial facilities throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Concrete & Masonry Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're building a new home foundation, constructing a commercial driveway, or need expert bricklaying for an extension, our qualified masons and concrete specialists deliver precision workmanship tailored to your specific requirements:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Foundations & Structural Concrete</h4>
                  <p className="text-sm text-muted-foreground">
                    Strip foundations, raft slabs, concrete footings, beams, columns, and load-bearing structures engineered to building codes.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Slabs, Driveways & Surfaces</h4>
                  <p className="text-sm text-muted-foreground">
                    Residential and commercial concrete slabs, driveways, parking areas, pathways, and hardstanding surfaces with proper compaction.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Bricklaying & Block Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Expert bricklaying for walls, boundary structures, internal partitions, face brick, and decorative masonry with precision alignment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Plastering & Finishing</h4>
                  <p className="text-sm text-muted-foreground">
                    Internal and external plastering, smooth finishes, textured finishes, screeding, and surface preparation for painting or tiling.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Quality Materials & Proven Techniques</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We source premium concrete aggregates, high-strength cement, quality bricks (clay, cement, and stock bricks), and proper reinforcement materials from trusted suppliers. Our masons use time-tested construction techniques combined with modern best practices to ensure every structure is built to last. We adhere to correct concrete mix ratios (typically 1:2:3 or 1:3:3 depending on application) and employ proper curing methods to achieve maximum compressive strength.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Structural Integrity & Compliance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All our concrete and bricklaying work complies with South African National Standards (SANS 10400), ensuring structural safety, load-bearing capacity, and regulatory compliance. Our qualified artisans understand soil conditions, drainage requirements, expansion joints, damp-proofing, and reinforcement placement—critical factors that differentiate professional work from substandard construction.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Residential, Commercial & Industrial Projects</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We handle projects of all sizes and complexities—from small residential pathways and garden walls to large commercial foundations, industrial warehouse floors, and multi-storey structural concrete work. Our team has the equipment, expertise, and workforce to deliver on schedule without compromising quality or safety standards.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Fast Response Times Across Gauteng</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Time-sensitive projects require prompt service. Our strategically located teams provide <strong>rapid response times</strong> throughout Gauteng, with average arrival times of <strong>20-40 minutes</strong> depending on your location. Whether you need emergency concrete repairs, urgent bricklaying for a deadline project, or scheduled construction work, we deliver reliable service when you need it.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Competitive Pricing & Transparent Quotes</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide detailed, itemized quotations that break down material costs, labor charges, and project timelines—no hidden fees or unexpected surprises. Our competitive pricing reflects fair value for premium workmanship, quality materials, and professional project management from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
