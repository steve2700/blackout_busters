// File path: app/painting-tiling-finishing/page.tsx
// Clean URL: https://goshenprojects.co.za/painting-tiling-finishing

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { PaintBucket, Brush, Droplets, Sparkles, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Painting, Tiling & Finishing Services in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional painting, tiling, and finishing services in Gauteng. Interior & exterior painting, floor & wall tiling, texture coatings, waterproofing, decorative finishes for residential & commercial properties in Pretoria, Johannesburg & Midrand. Premium materials, expert application, 10+ years experience. Same-day quotes.",
  keywords: "painting services Gauteng, tiling contractors Pretoria, interior painting Johannesburg, exterior painting Midrand, floor tiling, wall tiling, texture coatings, decorative finishes, waterproofing, commercial painting",
  openGraph: {
    title: "Painting, Tiling & Finishing Services | Goshen Projects Solutions Gauteng",
    description:
      "Expert painting, tiling, and finishing services that transform properties with quality finishes, durability, and aesthetic appeal. Serving Pretoria, Johannesburg & Gauteng. 10+ years experience, premium materials.",
    images: [
      {
        url: "/painter-applying-paint-to-interior-walls-in-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "Professional painting services in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function PaintingTilingFinishingPage() {
  return (
    <ServicePageTemplate
      title="Painting, Tiling & Finishing Services"
      description="Transform your property with professional finishes that combine beauty, durability, and lasting value. From flawless interior painting and weather-resistant exterior coatings to precision floor and wall tiling, our expert craftsmen deliver exceptional results. With over 10 years of experience and hundreds of completed projects across Gauteng, we use premium materials and proven application techniques to create stunning finishes that protect and enhance residential and commercial properties."
      icon={PaintBucket}
      heroImage="/painter-applying-paint-to-interior-walls-in-gauteng.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "Interior painting (walls, ceilings, woodwork)",
        "Exterior painting (walls, roofs, fascias)",
        "Floor tiling (porcelain, ceramic, natural stone)",
        "Wall tiling (kitchens, bathrooms, feature walls)",
        "Texture coatings & decorative finishes",
        "Damp-proofing & waterproofing",
        "Wallpaper installation & removal",
        "Wood staining & varnishing",
        "Epoxy floor coatings",
        "Commercial & industrial painting",
        "Color consultation & design advice",
        "Surface preparation & repair",
      ]}
      benefits={[
        {
          title: "Expert Professional Application",
          description:
            "Skilled painters and tilers with 10+ years of experience delivering flawless finishes through proper techniques, attention to detail, and commitment to excellence on every project.",
          icon: Brush,
        },
        {
          title: "Premium Quality Materials",
          description:
            "We use top-tier paints (Plascon, Dulux, Prominent), quality tiles from reputable suppliers, and professional-grade adhesives ensuring superior coverage, durability, and long-lasting beauty.",
          icon: Sparkles,
        },
        {
          title: "Thorough Surface Preparation",
          description:
            "Proper preparation is key—crack filling, sanding, priming, substrate leveling, and moisture testing ensure optimal adhesion, smooth finishes, and prevention of future problems.",
          icon: Shield,
        },
        {
          title: "Color & Design Consultation",
          description:
            "Professional guidance on color schemes, tile selections, finish types, and design trends that complement your space, enhance aesthetics, and align with your vision and budget.",
          icon: PaintBucket,
        },
        {
          title: "Weather-Resistant Solutions",
          description:
            "Specialized exterior coatings, waterproofing systems, and moisture barriers that protect against Gauteng's weather conditions—sun exposure, heavy rains, and temperature fluctuations.",
          icon: Droplets,
        },
        {
          title: "Clean Professional Workmanship",
          description:
            "Neat, organized work practices with furniture protection, drop cloths, masking, daily cleanup, and thorough final site clearing—leaving your property spotless and ready to enjoy.",
          icon: CheckCircle,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Inspection & Consultation",
          description: "We assess your property, evaluate surface conditions, discuss your preferences for colors and finishes, take measurements, identify preparation requirements, and understand your timeline and budget.",
        },
        {
          step: 2,
          title: "Detailed Quotation & Material Selection",
          description: "Receive itemized quotes covering materials, labor, preparation work, and finishing. We present product options, color samples, tile selections, and provide professional recommendations tailored to your needs.",
        },
        {
          step: 3,
          title: "Surface Preparation & Repairs",
          description: "Comprehensive preparation including crack repairs, surface cleaning, sanding, priming, substrate leveling, damp treatment, and masking—ensuring surfaces are perfectly ready for finishing work.",
        },
        {
          step: 4,
          title: "Application & Final Finishing",
          description: "Expert application of paints, coatings, or tile installation using proper techniques, multiple coats where needed, precision cutting and grouting, quality control inspections, and thorough cleanup for perfect results.",
        },
      ]}
      relatedServices={[
        { 
          title: "Building Renovations", 
          href: "/building-construction-renovations",
          icon: Shield,
        },
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: CheckCircle,
        },
        { 
          title: "Waterproofing Services", 
          href: "/waterproofing-services",
          icon: Droplets,
        },
        { 
          title: "Kitchen & Bathroom Cupboards", 
          href: "/kitchen-bathroom-cupboards",
          icon: Sparkles,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Painting, Tiling & Finishing?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> delivering exceptional finishing services across Gauteng, Goshen Projects Solutions has established a reputation for quality craftsmanship and customer satisfaction. Based in <strong>Midrand at 22 Richards Dr</strong>, we've completed <strong>hundreds of painting and tiling projects</strong> for homes, offices, retail spaces, and industrial facilities throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Painting Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're refreshing a single room, repainting your entire home, or coating commercial premises, our painting services cover all your needs with professional results:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Interior Painting</h4>
                  <p className="text-sm text-muted-foreground">
                    Walls, ceilings, skirting boards, door frames, window frames, built-in cupboards, and interior woodwork. Available in matte, satin, semi-gloss, and high-gloss finishes with extensive color options.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Exterior Painting</h4>
                  <p className="text-sm text-muted-foreground">
                    External walls, boundary walls, roofs, fascia boards, gutters, garage doors, and exterior woodwork using weather-resistant paints designed for South African climate conditions.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Specialized Coatings</h4>
                  <p className="text-sm text-muted-foreground">
                    Texture coatings, waterproofing paints, anti-mold treatments, roof sealants, epoxy floor coatings, and decorative finishes including stenciling and feature walls.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial & Industrial</h4>
                  <p className="text-sm text-muted-foreground">
                    Office buildings, retail stores, warehouses, factories, schools, hospitals, and commercial complexes with minimal disruption to operations and accelerated completion schedules.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Professional Tiling Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our experienced tilers deliver precision installation for all types of tiles and applications. We work with porcelain tiles, ceramic tiles, natural stone (granite, marble, travertine, slate), mosaic tiles, and glass tiles. Floor tiling services include kitchens, bathrooms, living areas, patios, balconies, garages, and commercial spaces with proper substrate preparation, waterproofing where needed, and precise leveling. Wall tiling covers bathroom walls, kitchen backsplashes, shower enclosures, feature walls, and commercial wall applications with seamless corners and professional grouting.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Surface Preparation Excellence</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Proper preparation is the foundation of quality finishes. We never skip this critical step. Our preparation process includes filling cracks and holes with appropriate fillers, sanding surfaces smooth, treating damp and mold issues, applying quality primers for optimal paint adhesion, removing loose or flaking paint, repairing damaged plaster or drywall, cleaning surfaces thoroughly, and protecting fixtures, floors, and furniture. For tiling, we ensure substrates are level, stable, clean, and properly waterproofed where moisture is present.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Premium Paint & Materials Selection</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use trusted paint brands including Plascon, Dulux, and Prominent Paints, offering various quality grades to suit different budgets and requirements. Interior paints include washable acrylic paints (ideal for high-traffic areas and children's rooms), low-VOC eco-friendly options, stain-resistant formulations, and mold-resistant bathroom paints. Exterior paints feature UV-resistant coatings, flexible masonry paints, roof paints with heat-reflective properties, and waterproofing systems. All products come with manufacturer warranties and proven performance records.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Color Consultation & Design Advice</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Choosing the right colors can be overwhelming with thousands of options available. Our team provides professional color consultation to help you select shades that enhance your space, complement existing décor, reflect your personality, and create desired moods. We consider factors like natural lighting, room size, architectural features, and current design trends. We provide sample pots for testing colors in your actual space and offer guidance on accent walls, color combinations, and finish selections (matte for ceilings, satin for walls, semi-gloss for trim).
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Exterior Painting & Weather Protection</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gauteng's climate presents unique challenges for exterior surfaces—intense UV radiation, occasional heavy rains, and temperature variations. We use specialized exterior paints formulated to withstand these conditions, providing long-lasting protection and color retention. Our exterior painting includes comprehensive surface preparation (pressure washing, scraping loose paint, treating rust), crack sealing, primer application for bare surfaces, multiple finish coats for durability, and waterproofing treatments where needed. We also offer roof painting with specialized roof coatings that reduce heat absorption and extend roof life.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Bathroom & Kitchen Tiling Expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bathrooms and kitchens require special attention due to moisture exposure and heavy use. We install tiles with waterproofing membranes beneath floor tiles, proper falls toward drains, quality flexible adhesives and grouts, sealed corners and edges, and anti-slip floor tiles where safety is important. Shower enclosures receive extra waterproofing, careful detailing around fixtures, and proper grouting to prevent leaks. Kitchen backsplashes are installed with precise cutting around outlets and switches, neat finishing at benchtop edges, and easy-to-clean grout that resists staining.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Decorative Finishes & Texture Coatings</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond standard painting, we offer decorative finishes that add character and visual interest to interiors and exteriors. Texture coatings create depth and hide minor surface imperfections while providing weather protection for exterior walls. Popular textures include fine, medium, and coarse finishes in various colors. We also offer specialist finishes like venetian plaster for elegant interiors, metallic paints for modern accents, stenciling and patterns, limewash for rustic aesthetics, and faux finishes that replicate marble, wood, or stone.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Damp-Proofing & Waterproofing Integration</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many painting and tiling projects reveal or require damp treatment. We identify moisture issues during inspection, treat the source of dampness, apply damp-proofing compounds, install waterproofing membranes under tiles, use anti-mold primers and paints, and ensure proper ventilation where needed. This integrated approach prevents paint failure, tile lifting, and recurring damp problems. We work closely with waterproofing specialists for complex moisture issues requiring specialized interventions.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial & Industrial Painting</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Commercial projects require efficiency, minimal disruption, and adherence to safety standards. We handle office painting, retail store painting (including after-hours work), warehouse and factory floor coatings, line marking, safety markings and signage, schools and healthcare facilities, restaurants and hospitality venues, and strata painting for apartment complexes. Our commercial services include project management, site safety compliance, coordinated scheduling, rapid completion, and minimal interference with business operations.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Wood Staining, Varnishing & Finishing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wooden surfaces require special treatments to protect and enhance natural beauty. We provide wood staining for decks, pergolas, and timber features, varnishing for interior woodwork and floors, sealing for outdoor wood furniture, treatment for wooden doors and window frames, and restoration of aging timber surfaces. We use quality wood finishes that penetrate and protect while allowing wood grain to show through, available in various tones from natural to dark stains.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Epoxy Floor Coatings for Garages & Industrial Spaces</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Epoxy coatings provide durable, chemical-resistant, easy-to-clean floors ideal for garages, workshops, warehouses, and commercial kitchens. Our epoxy services include concrete surface preparation and grinding, moisture testing, application of primer and epoxy coats, anti-slip additives where required, choice of colors and finishes, and fast curing for quick return to service. Epoxy floors resist oils, chemicals, abrasion, and impact while providing a professional, attractive finish.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Wallpaper Installation & Removal</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wallpaper offers pattern, texture, and design options beyond paint. We install all types of wallpaper including traditional pasted papers, peel-and-stick wallpapers, vinyl wallpapers for moisture areas, textured wallcoverings, and feature wall installations. We also provide wallpaper removal services using proper techniques to minimize wall damage, followed by surface preparation and painting or new wallpaper installation. Our installers ensure pattern matching, bubble-free application, and clean seam finishing.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Quality Control & Warranty</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every project undergoes quality control inspections to ensure work meets our high standards before completion. We check paint coverage uniformity, smooth finish consistency, clean cut-in lines at edges, tile alignment and level installation, grout consistency and cleanliness, and overall appearance. We provide workmanship guarantees covering paint adhesion, tile installation integrity, and finish durability. Any issues identified during or after completion are promptly addressed.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Transparent Pricing & Project Timelines</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide detailed quotations itemizing paint quantities, tile quantities and types, materials and supplies, labor costs, preparation work, and additional services (repairs, waterproofing). Quotes are valid for 30 days and include realistic timelines. Standard interior painting projects take 3-7 days depending on size. Exterior painting takes 5-14 days subject to weather conditions. Tiling projects range from 3-10 days based on area and complexity. We maintain clear communication throughout, keeping you informed of progress and addressing any concerns immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
