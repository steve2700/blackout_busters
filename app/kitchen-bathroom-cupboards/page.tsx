// File path: app/kitchen-bathroom-cupboards/page.tsx
// Clean URL: https://goshenprojects.co.za/kitchen-bathroom-cupboards

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Construction, Hammer, Ruler, Award, Package, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Cupboards in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Custom kitchen and bathroom cupboards in Gauteng. Built-in cupboards, vanities, storage units, bedroom wardrobes, office cabinets, and storage solutions for residential & commercial properties in Pretoria, Johannesburg & Midrand. Quality materials, modern designs, professional installation. 500+ custom projects completed. Same-day quotes.",
  keywords: "kitchen cupboards Gauteng, bathroom vanities Pretoria, built-in cupboards Johannesburg, custom cupboards Midrand, bedroom wardrobes, storage solutions, kitchen renovations, bathroom cabinets, melamine cupboards",
  openGraph: {
    title: "Kitchen & Bathroom Cupboards | Goshen Projects Solutions Gauteng",
    description:
      "Custom-designed kitchen and bathroom cupboards that maximize space, functionality, and style in Pretoria, Johannesburg & Gauteng. Quality materials, expert craftsmanship. 500+ installations completed.",
    images: [
      {
        url: "/custom-kitchen-cupboards-installation-in-gauteng-so.jpg",
        width: 1200,
        height: 630,
        alt: "Custom kitchen and bathroom cupboards installation in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function KitchenBathroomCupboardsPage() {
  return (
    <ServicePageTemplate
      title="Kitchen & Bathroom Cupboards"
      description="We design and manufacture custom cupboards that maximize space, functionality, and aesthetic appeal in homes and offices. From contemporary kitchen cupboards with soft-close hinges to elegant bathroom vanities and spacious bedroom wardrobes, we create storage solutions perfectly tailored to your space, style, and budget. With over 10 years of experience and 500+ completed projects, our expert craftsmen deliver quality cupboards that enhance your property's value and functionality."
      icon={Construction}
      heroImage="/custom-kitchen-cupboards-installation-in-gauteng-so.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "Custom kitchen cupboards & cabinetry",
        "Bathroom vanities & cabinets",
        "Built-in bedroom wardrobes",
        "Walk-in closets & dressing rooms",
        "Office storage & filing cabinets",
        "Entertainment units & TV stands",
        "Laundry room cabinets",
        "Pantry cupboards & storage",
        "Soft-close hinges & drawer systems",
        "Countertop installation (granite, Caesarstone)",
        "Cupboard repairs & refurbishment",
        "Modern & classic design styles",
      ]}
      benefits={[
        {
          title: "Fully Custom Design Solutions",
          description:
            "Every cupboard is designed specifically for your space with precise measurements, ensuring perfect fit, maximum storage capacity, and optimal functionality tailored to your lifestyle and requirements.",
          icon: Ruler,
        },
        {
          title: "Space Optimization & Storage Maximization",
          description:
            "Intelligent design solutions that utilize every inch of available space with clever storage features including pull-out drawers, corner units, soft-close mechanisms, and adjustable shelving.",
          icon: Package,
        },
        {
          title: "Premium Materials & Quality Finishes",
          description:
            "Wide selection of high-quality materials including melamine, solid wood, MDF, laminate finishes, and premium hardware with extensive color and texture options to match your décor perfectly.",
          icon: Award,
        },
        {
          title: "Contemporary & Timeless Designs",
          description:
            "Modern designs that combine aesthetic appeal with practical functionality—from sleek handleless kitchens to classic Shaker-style doors—adding significant value to your property.",
          icon: Construction,
        },
        {
          title: "Durable Construction & Longevity",
          description:
            "Built to withstand daily use with quality materials, reinforced joints, moisture-resistant boards for bathrooms, and expert craftsmanship ensuring your cupboards last for decades.",
          icon: CheckCircle,
        },
        {
          title: "Expert Professional Installation",
          description:
            "Precision installation by experienced carpenters ensuring perfect alignment, level mounting, smooth door operation, and seamless integration with existing structures and appliances.",
          icon: Hammer,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Consultation & Space Assessment",
          description: "We visit your property to take accurate measurements, assess space constraints, discuss your storage needs, style preferences, functionality requirements, and budget considerations.",
        },
        {
          step: 2,
          title: "Custom Design & Material Selection",
          description: "Our designers create 3D visualizations of your cupboards, present material options (finishes, colors, hardware), provide detailed specifications, and deliver transparent itemized quotations.",
        },
        {
          step: 3,
          title: "Manufacturing & Quality Control",
          description: "Cupboards are manufactured to exact specifications using quality materials, precision cutting, professional edge-banding, and rigorous quality checks before delivery to site.",
        },
        {
          step: 4,
          title: "Professional Installation & Finishing",
          description: "Expert installation with precise fitting, secure mounting, hardware installation, door adjustments, final touches, and thorough cleanup—ready to use immediately.",
        },
      ]}
      relatedServices={[
        { 
          title: "Carpentry Services", 
          href: "/carpentry-services",
          icon: Hammer,
        },
        { 
          title: "Building Renovations", 
          href: "/building-construction-renovations",
          icon: Construction,
        },
        { 
          title: "Plumbing Installation", 
          href: "/plumbing-services",
          icon: Package,
        },
        { 
          title: "Painting & Tiling", 
          href: "/painting-tiling-finishing",
          icon: Award,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Custom Cupboards?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> designing and installing custom cupboards across Gauteng, Goshen Projects Solutions has become the preferred choice for homeowners and businesses seeking quality storage solutions. Based in <strong>Midrand at 22 Richards Dr</strong>, we've successfully completed <strong>500+ custom cupboard projects</strong> for kitchens, bathrooms, bedrooms, and offices throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Custom Cupboard Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're renovating your kitchen, upgrading your bathroom, maximizing bedroom storage, or organizing your office, our design team creates custom solutions that perfectly balance functionality, aesthetics, and budget:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Kitchen Cupboards & Cabinetry</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete kitchen solutions including base units, wall cabinets, pantry cupboards, islands, breakfast nooks, and integrated appliance housing with soft-close systems.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Bathroom Vanities & Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom bathroom vanities with basin integration, medicine cabinets, linen cupboards, and moisture-resistant materials designed for wet environments.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Bedroom Wardrobes & Closets</h4>
                  <p className="text-sm text-muted-foreground">
                    Built-in wardrobes, walk-in closets, dressing rooms with hanging rails, shoe racks, drawer systems, mirrors, and internal lighting options.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Office & Commercial Storage</h4>
                  <p className="text-sm text-muted-foreground">
                    Reception desks, filing cabinets, office storage units, shelving systems, and commercial cabinetry for retail and office environments.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Premium Materials & Finish Options</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer an extensive selection of materials and finishes to suit every style and budget. Our standard materials include moisture-resistant melamine board (ideal for kitchens and bathrooms), high-density MDF with laminate finishes, and solid wood options for premium projects. Choose from hundreds of colors and textures including modern high-gloss finishes, textured woodgrains (oak, walnut, maple), matte finishes, and solid colors. All materials are sourced from reputable suppliers ensuring consistent quality and durability.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Modern Hardware & Soft-Close Systems</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We install quality hardware that enhances both functionality and longevity. Our cupboards feature soft-close hinges that prevent slamming and extend cupboard life, smooth drawer runners with full extension for easy access, adjustable shelving for flexibility, concealed hinges for clean aesthetics, and modern handle options (bar handles, knobs, or handleless push-to-open systems). For kitchens, we offer specialized solutions like corner carousels, pull-out spice racks, cutlery organizers, and waste bin systems.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Kitchen Renovations & Complete Makeovers</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transform your kitchen with a complete renovation including new custom cupboards, countertop installation (granite, Caesarstone, quartz), tiling backsplashes, plumbing modifications for sinks, electrical work for under-cabinet lighting and appliances, and full project coordination. We handle everything from design concept through to final installation, creating stunning kitchens that combine beauty with practical functionality. Our designs accommodate modern appliances including built-in ovens, microwaves, dishwashers, and integrated refrigerators.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Bathroom Vanity Design & Installation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Custom bathroom vanities are designed to withstand moisture while providing essential storage. We use moisture-resistant materials, waterproof edges, and proper sealing to prevent water damage. Our vanities are custom-sized to fit your bathroom layout, accommodate your chosen basin (undermount, semi-recessed, or vessel basins), and include soft-close drawers for toiletries, internal organizers, and mirror cabinets. We coordinate with plumbers for basin and tap installation, ensuring a seamless, leak-free finish.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Built-In Wardrobes & Storage Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Maximize bedroom space with floor-to-ceiling built-in wardrobes custom-designed for your storage needs. Our wardrobes include hanging space with adjustable rails (for full-length garments and shorter items), shelving for folded clothes, pull-out drawers with dividers, shoe racks, tie and belt organizers, internal mirrors, and optional lighting. We design layouts that optimize storage based on your wardrobe—whether you need more hanging space, drawer storage, or specialized compartments for accessories.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Space-Saving Design for Small Areas</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Limited space doesn't mean limited storage. We specialize in clever space-saving solutions for apartments, townhouses, and compact homes. This includes corner cupboards with carousel systems, vertical storage maximizing ceiling height, slim pull-out pantries, under-stair storage solutions, and multi-functional furniture that serves dual purposes. Our designs make even the smallest spaces highly functional without feeling cramped or cluttered.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Cupboard Repairs & Refurbishment</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Don't replace when you can repair and upgrade. We offer cupboard refurbishment services including replacement of damaged doors, drawer repairs, hinge and runner replacements, new handles and hardware, door realignment, surface refinishing, and conversion of standard hinges to soft-close systems. Refurbishment is often more cost-effective than complete replacement while dramatically improving appearance and functionality.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial Cabinetry & Retail Fixtures</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We design and install commercial cabinetry for offices, retail stores, salons, medical practices, and hospitality venues. This includes reception desks, display cabinets, retail shelving, salon stations, treatment room storage, laboratory cabinets, and custom commercial fixtures. Our commercial solutions balance durability, functionality, and professional aesthetics while meeting compliance requirements for commercial spaces.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Transparent Pricing & Project Timelines</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide detailed quotations that itemize materials, hardware, labor, installation, and any additional work (plumbing, electrical, tiling). Our quotes are valid for 30 days and include realistic timelines from manufacturing through installation. Standard projects typically take 2-3 weeks from approval to installation, depending on complexity and size. We maintain clear communication throughout the project, keeping you informed of progress and addressing any concerns promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
