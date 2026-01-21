// File path: app/carpentry-services/page.tsx
// Clean URL: https://goshenprojects.co.za/carpentry-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Hammer, Award, Ruler, Wrench, Home, Construction, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Carpentry Services in Gauteng | Custom Woodwork, Decking, Pergolas & Repairs | Goshen Projects Solutions",
  description:
    "Professional carpentry services in Gauteng. Expert roof timber structures, custom doors & frames, decking, pergolas, cabinetry, and woodwork repairs in Pretoria, Johannesburg & Midrand. Skilled craftsmen with 10+ years experience. Quality timber, precision work, custom solutions.",
  keywords: "carpentry Gauteng, custom woodwork Pretoria, decking installation Johannesburg, pergolas Midrand, timber structures, door frames, cabinetry, furniture repairs, roof carpentry, skilled carpenters",
  openGraph: {
    title: "Carpentry Services | Goshen Projects Solutions Gauteng",
    description: "Quality woodwork combining functionality with aesthetic appeal for homes and businesses in Gauteng. Custom carpentry, decking, pergolas & repairs by skilled craftsmen.",
    images: [
      {
        url: "/carpenter-working-on-custom-cabinetry-in-gauteng-so.jpg",
        width: 1200,
        height: 630,
        alt: "Professional carpentry services in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function CarpentryServicesPage() {
  return (
    <ServicePageTemplate
      title="Carpentry Services"
      description="Transform your space with expert carpentry from Goshen Projects Solutions. We provide high-quality woodwork that combines functionality with aesthetic appeal. Our skilled carpenters create custom solutions for residential and commercial properties throughout Gauteng, from structural roof timber to beautiful outdoor decking and everything in between."
      icon={Hammer}
      heroImage="/carpenter-working-on-custom-cabinetry-in-gauteng-so.jpg"
      priceRange="From R1,500"
      responseTime="Same-day"
      features={[
        "Roof timber structures & trusses",
        "Custom doors, frames & architraves",
        "Trims, moldings & skirting",
        "Timber decking & balustrades",
        "Pergolas & outdoor structures",
        "Custom cabinetry & shelving",
        "Built-in furniture & wardrobes",
        "General carpentry repairs",
        "Bespoke custom woodwork",
        "Furniture restoration & repairs",
        "Window frames & shutters",
        "Staircase construction & repairs",
      ]}
      benefits={[
        {
          title: "Master Craftsmen",
          description: "Our experienced carpenters bring over 10 years of expertise and meticulous attention to detail to every project, large or small.",
          icon: Award,
        },
        {
          title: "Custom Solutions",
          description: "We create bespoke woodwork tailored to your exact specifications, space requirements, and design preferences for a perfect fit.",
          icon: Ruler,
        },
        {
          title: "Premium Materials",
          description: "We source only the finest quality timber and materials, ensuring durability, longevity, and beautiful natural aesthetics.",
          icon: Construction,
        },
        {
          title: "Functional Design",
          description: "Our work perfectly balances practical functionality with visual appeal, creating spaces that are both beautiful and usable.",
          icon: Home,
        },
        {
          title: "Precision Craftsmanship",
          description: "Accurate measurements, precise cuts, and expert joinery ensure perfect results that stand the test of time.",
          icon: Ruler,
        },
        {
          title: "Repair Specialists",
          description: "We restore and repair existing woodwork, doors, frames, and furniture to like-new condition, saving you replacement costs.",
          icon: Wrench,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Design Consultation",
          description: "We discuss your vision, take measurements, and provide design recommendations tailored to your space and budget.",
        },
        {
          step: 2,
          title: "Material Selection",
          description: "Choose from quality timber options and finishes. We guide you on the best materials for your specific application.",
        },
        {
          step: 3,
          title: "Precision Construction",
          description: "Our skilled carpenters craft your project with precision, using traditional techniques and modern tools.",
        },
        {
          step: 4,
          title: "Installation & Finishing",
          description: "Professional installation, sanding, sealing, and finishing for a flawless result that exceeds expectations.",
        },
      ]}
      relatedServices={[
        { 
          title: "Kitchen & Bathroom Cupboards", 
          href: "/kitchen-bathroom-cupboards",
          icon: Construction,
        },
        { 
          title: "Building Construction", 
          href: "/building-construction-renovations",
          icon: Home,
        },
        { 
          title: "Roofing Services", 
          href: "/roofing-services",
          icon: Home,
        },
        { 
          title: "Painting & Finishing", 
          href: "/painting-tiling-finishing",
          icon: Hammer,
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
            <h2 className="mb-8 text-3xl font-bold">Expert Carpentry Services Across Gauteng</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> in carpentry and woodworking, <strong>Goshen Projects Solutions</strong> delivers exceptional craftsmanship for homes and businesses across <strong>Pretoria, Johannesburg, Midrand</strong>, and all of Gauteng. Whether you need structural roof timber, a stunning outdoor deck, custom cabinetry, or repairs to existing woodwork, our skilled carpenters have the expertise to bring your vision to life.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Our Carpentry Specializations</h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Structural Carpentry
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Roof trusses, timber structures, load-bearing beams, and structural supports for new builds and renovations.
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Roof timber structures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Truss installations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Load-bearing supports
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Construction className="h-5 w-5" />
                    Custom Woodwork
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bespoke doors, frames, architraves, skirting, and decorative moldings tailored to your specifications.
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Custom door designs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Decorative moldings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Window frames & shutters
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Hammer className="h-5 w-5" />
                    Outdoor Carpentry
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Beautiful decking, pergolas, gazebos, garden furniture, and outdoor entertainment areas.
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Timber decking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Pergolas & gazebos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Outdoor furniture
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Repairs & Restoration
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Expert repairs of damaged doors, frames, furniture, decking, and all types of woodwork.
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Door frame repairs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Furniture restoration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Deck refurbishment
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Timber & Material Options</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We work with a wide range of quality timber species and materials to suit different applications, budgets, and aesthetic preferences:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-bold mb-2">Hardwoods</h4>
                  <p className="text-sm text-muted-foreground">Oak, meranti, saligna for durability and premium finishes</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-bold mb-2">Softwoods</h4>
                  <p className="text-sm text-muted-foreground">Pine, balau, treated timber for cost-effective solutions</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-bold mb-2">Composite</h4>
                  <p className="text-sm text-muted-foreground">Low-maintenance composite decking and materials</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Our Carpentry Services?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of skilled carpenters has completed <strong>hundreds of carpentry projects</strong> across Gauteng, from small repairs to large-scale commercial installations. We combine traditional woodworking techniques with modern tools and materials to deliver exceptional results that last for decades. Every project receives the same level of care, precision, and attention to detail.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Popular Carpentry Projects</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0 mt-0.5">
                    <Hammer className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="block">Outdoor Decking</strong>
                    <span className="text-sm text-muted-foreground">Create beautiful entertainment areas with timber or composite decking, complete with balustrades and steps.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0 mt-0.5">
                    <Home className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="block">Pergolas & Gazebos</strong>
                    <span className="text-sm text-muted-foreground">Custom-designed outdoor structures that provide shade, style, and increase property value.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0 mt-0.5">
                    <Construction className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="block">Custom Doors & Frames</strong>
                    <span className="text-sm text-muted-foreground">Replace old doors or create bespoke designs that complement your home's architecture and style.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0 mt-0.5">
                    <Wrench className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="block">Built-in Furniture</strong>
                    <span className="text-sm text-muted-foreground">Maximize space with custom built-in wardrobes, shelving, home offices, and storage solutions.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">Maintenance & Care</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide guidance on maintaining your carpentry work to ensure it stays beautiful for years to come. From wood treatment and sealing recommendations to maintenance schedules for outdoor decking, we help you protect your investment. We also offer maintenance services to keep your woodwork in pristine condition.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Award className="h-6 w-6 text-secondary" />
                  Quality Craftsmanship Guarantee
                </h3>
                <p className="text-muted-foreground mb-4">
                  All our carpentry work is backed by our quality guarantee. We take pride in our craftsmanship and stand behind every project we complete. If you're not satisfied, we'll make it right.
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us at <strong className="text-secondary">+27 61 530 7314</strong> or visit our office at <strong className="text-secondary">22 Richards Dr, Midrand</strong> to discuss your carpentry project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
