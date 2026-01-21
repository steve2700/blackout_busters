// File path: app/roofing-roof-leak-repairs/page.tsx
// Clean URL: https://goshenprojects.co.za/roofing-roof-leak-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Home, Shield, Wrench, Clock, CheckCircle, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Roofing & Roof Leak Repairs in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional roofing services and roof leak repairs in Gauteng. Tile roofing, IBR & corrugated roofing, roof waterproofing, gutter installation, fascia boards, ridge capping, leak detection & complete roof replacements for residential & commercial properties in Pretoria, Johannesburg & Midrand. Quality materials, expert workmanship, warranties included. NHBRC registered.",
  keywords: "roofing Gauteng, roof leak repairs Pretoria, tile roofing Johannesburg, IBR roofing Midrand, roof waterproofing, gutter installation, roof replacement, fascia boards, ridge capping, corrugated roofing, roof maintenance",
  openGraph: {
    title: "Roofing & Roof Leak Repairs | Goshen Projects Solutions Gauteng",
    description:
      "Expert roofing solutions for homes and businesses. Leak repairs, tile & IBR roofing, waterproofing, gutters. Quality materials, professional workmanship. Serving Pretoria, Johannesburg & Gauteng.",
    images: [
      {
        url: "/roofer-installing-tiles-on-a-house-in-gauteng-south.jpg",
        width: 1200,
        height: 630,
        alt: "Professional roofing and roof leak repairs in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function RoofingServicesPage() {
  return (
    <ServicePageTemplate
      title="Roofing & Roof Leak Repairs"
      description="Protect your property with professional roofing services and expert roof leak repairs. From minor leak detection and waterproofing to complete roof replacements, our experienced roofing specialists deliver quality solutions using premium materials and proven techniques. With over 10 years of roofing experience across Gauteng, we handle tile roofing, IBR and corrugated roofing, gutter systems, fascia boards, and comprehensive roof maintenance for residential and commercial properties. Our commitment to quality materials, expert workmanship, and customer satisfaction ensures your roof provides reliable protection for decades."
      icon={Home}
      heroImage="/roofer-installing-tiles-on-a-house-in-gauteng-south.jpg"
      priceRange="From Leak Repairs to Full Replacements"
      responseTime="Emergency Leak Repairs Available"
      features={[
        "Roof leak detection & diagnosis",
        "Emergency roof leak repairs",
        "Tile roofing installation & repairs",
        "IBR roofing installation & repairs",
        "Corrugated roofing & sheeting",
        "Roof waterproofing & sealing",
        "Torch-on waterproofing",
        "Gutter installation & replacement",
        "Gutter cleaning & repairs",
        "Fascia boards & soffits",
        "Ridge capping & flashing",
        "Roof maintenance programs",
        "Complete roof replacements",
        "Commercial roofing solutions",
        "Roof inspections & assessments",
      ]}
      benefits={[
        {
          title: "Premium Quality Materials",
          description:
            "High-grade roofing materials from trusted suppliers including quality tiles, IBR sheeting, waterproofing membranes, and gutters engineered to withstand South African weather conditions providing long-lasting protection.",
          icon: Shield,
        },
        {
          title: "Expert Leak Detection & Repair",
          description:
            "Experienced specialists accurately identify leak sources using proven diagnostic methods. Comprehensive repairs address root causes, not just symptoms, ensuring effective, lasting solutions preventing recurring water damage.",
          icon: Wrench,
        },
        {
          title: "All Roofing Systems Covered",
          description:
            "Expertise across all roofing types including tile roofs (concrete and clay), IBR and corrugated sheeting, torch-on flat roofs, and specialized systems for residential, commercial, and industrial properties.",
          icon: Home,
        },
        {
          title: "Extended Roof Lifespan",
          description:
            "Proper installation, quality repairs, regular maintenance, and professional waterproofing significantly extend roof life, maximize your investment, and prevent costly premature replacements.",
          icon: TrendingUp,
        },
        {
          title: "Fast Response Times",
          description:
            "Emergency leak repair services available for urgent situations. Quick response minimizes water damage, protects property contents, and prevents structural issues from worsening during storms or unexpected failures.",
          icon: Clock,
        },
        {
          title: "Comprehensive Warranties",
          description:
            "Warranties on materials and workmanship provide peace of mind. We stand behind our roofing installations and repairs, ensuring quality, reliability, and long-term protection for your investment.",
          icon: CheckCircle,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Roof Inspection & Assessment",
          description: "Thorough roof inspection identifying damage, leaks, wear areas, and structural issues. Detailed assessment with photos, diagnosis of problems, and comprehensive recommendations for repairs or replacement.",
        },
        {
          step: 2,
          title: "Detailed Quote & Planning",
          description: "Clear itemized quote covering materials, labor, and project scope. Discussion of roofing options, material selections, timeline planning, and addressing any questions ensuring informed decisions.",
        },
        {
          step: 3,
          title: "Professional Installation & Repair",
          description: "Expert roofing work using quality materials and proven methods. Site protection, proper installation techniques, safety compliance, and minimal disruption to your property throughout the project.",
        },
        {
          step: 4,
          title: "Quality Check & Warranty",
          description: "Final inspection verifying work quality, leak testing where applicable, site cleanup, and warranty documentation. Maintenance recommendations to ensure your roof's continued performance and longevity.",
        },
      ]}
      relatedServices={[
        { 
          title: "Waterproofing Services", 
          href: "/waterproofing-services",
          icon: Shield,
        },
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: Wrench,
        },
        { 
          title: "Building Construction & Renovations", 
          href: "/building-construction-renovations",
          icon: Home,
        },
        { 
          title: "Painting, Tiling & Finishing", 
          href: "/painting-tiling-finishing",
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Roofing Services?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of roofing experience</strong> across Gauteng, Goshen Projects Solutions provides professional roofing services and expert roof leak repairs for residential and commercial properties. Based in <strong>Midrand at 22 Richards Dr</strong>, our qualified roofing specialists have completed <strong>thousands of roofing projects</strong> throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas. From emergency leak repairs to complete roof replacements, we deliver quality roofing solutions using premium materials, proven installation techniques, and comprehensive warranties ensuring your roof provides reliable protection for decades.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Roofing Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need urgent leak repairs, new roof installation, waterproofing, or gutter replacement, our experienced roofing teams handle all aspects of residential and commercial roofing:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Leak Detection & Repairs</h4>
                  <p className="text-sm text-muted-foreground">
                    Expert leak detection identifying sources accurately. Professional repairs addressing cracked tiles, damaged sheeting, deteriorated waterproofing, faulty flashings, and structural issues preventing recurring leaks and water damage.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Tile Roofing Installation</h4>
                  <p className="text-sm text-muted-foreground">
                    Quality tile roofing using concrete or clay tiles with proper batten installation, underlayment, flashing, ridge capping, and valley work ensuring weather-tight, durable roofs meeting building standards and aesthetic requirements.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">IBR & Corrugated Roofing</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional IBR and corrugated sheet roofing for residential, commercial, and industrial applications with proper purlin spacing, sheeting overlap, ridge capping, and fastener installation providing economical, durable protection.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Waterproofing & Sealing</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive roof waterproofing including torch-on membranes for flat roofs, acrylic and bitumen coatings, roof sealing, crack repairs, and flashing waterproofing preventing water penetration and extending roof life.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-12">Expert Roof Leak Detection & Repair</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roof leaks cause extensive damage if not addressed quickly and properly. Our specialists use proven diagnostic methods to accurately identify leak sources, which often differ from where water appears inside. Common leak causes include cracked or displaced tiles, deteriorated waterproofing on flat roofs, damaged IBR or corrugated sheeting, failed flashing around chimneys and penetrations, blocked gutters causing water backup, and structural movement creating gaps. Our diagnostic process includes interior inspection checking ceiling damage and water stains, exterior inspection examining roof condition, water testing to verify leak locations, and thermal imaging for hidden moisture when needed. Once identified, repairs address the root cause using appropriate methods: replacing damaged tiles with matching materials, repairing or replacing sections of IBR sheeting, waterproofing membrane repairs or recoating, flashing repairs around chimneys and valleys, and sealing cracks in roof structures. Quality leak repairs prevent water damage to ceilings, walls, and contents, stop structural deterioration from moisture, eliminate mold and mildew growth, maintain property value, and provide lasting solutions avoiding recurring problems. Emergency leak repair services minimize damage during storms or unexpected failures with rapid response and temporary protection until permanent repairs can be completed.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Tile Roofing Installation & Repairs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tile roofs provide attractive, durable roofing for residential properties with proper installation ensuring decades of reliable service. We install concrete tiles offering affordability and variety of profiles and colors, and clay tiles providing premium aesthetics and longevity. Tile roof installation begins with proper roof structure ensuring adequate support for tile weight, waterproof underlayment providing secondary protection, treated timber battens correctly spaced for tile type, and tile installation with proper overlap and fastening. Critical components include valley installations channeling water between roof slopes, ridge capping securing tiles at roof peaks, flashing around chimneys, walls, and penetrations, and verge details finishing roof edges neatly. Tile roof repairs address cracked tiles from impact or age, displaced tiles from wind or poor installation, broken tiles requiring replacement, ridge capping repairs, and valley repairs preventing leaks. Proper tile installation provides excellent weather protection, long service life (30-50+ years), aesthetic appeal enhancing property value, and durability against wind, hail, and UV exposure. Regular tile roof maintenance includes inspecting for damage, replacing broken tiles promptly, checking flashing and ridge capping, cleaning valleys and gutters, and repointing ridge capping as needed ensuring continued performance and preventing small issues from becoming major problems.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">IBR & Corrugated Sheet Roofing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IBR and corrugated sheeting provide economical, durable roofing for homes, commercial buildings, industrial facilities, and outbuildings. We install various sheeting types including IBR (Inverted Box Rib) sheeting popular for residential roofing, corrugated sheeting for industrial and agricultural buildings, chromadek sheeting with color coating, and galvanized sheeting for utility structures. Sheet roof installation requires proper purlin or batten spacing supporting sheeting without sagging, correct sheeting overlap preventing water penetration, appropriate fasteners with washers preventing leaks, ridge capping finishing peaks weathertight, and flashing around penetrations and walls. Installation considerations include roof pitch ensuring adequate water runoff (minimum 5 degrees recommended), expansion allowance for thermal movement, overlap direction (up-slope overlap prevents water entry), and fastener placement in sheet crests for corrugated or ribs for IBR. Sheet roofing benefits include economical cost compared to tiles, quick installation reducing labor time, lightweight reducing structural requirements, and durability against weather when properly maintained. Sheet roof repairs include replacing damaged sheets, resealing fasteners and overlaps, repairing or replacing ridge capping, fixing rust damage, and addressing wind damage. Regular maintenance involves checking fastener tightness, inspecting for rust and corrosion, cleaning valleys and gutters, and coating sheet roofs to extend life and improve appearance.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Roof Waterproofing & Torch-On Systems</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Flat and low-slope roofs require quality waterproofing preventing water penetration and damage. We provide torch-on waterproofing using heat-applied bitumen membranes providing excellent waterproofing for flat roofs, liquid membrane systems with acrylic or polyurethane coatings, bitumen coatings for existing surfaces, and roof sealing for pitched roofs. Torch-on waterproofing involves surface preparation cleaning and repairing substrate, primer application ensuring adhesion, base layer torch-on membrane application, cap sheet final layer with granular surface, and detailing at upstands, penetrations, and edges. Waterproofing other roof types includes acrylic roof coatings providing flexible, UV-resistant protection, bitumen-based coatings for asbestos and tile roofs, crack sealing addressing existing damage, and silicone sealants for flashing and penetrations. Quality waterproofing prevents water penetration protecting structures and contents, extends roof life by protecting underlying materials, reduces maintenance costs by preventing damage, and improves energy efficiency with reflective coatings. Waterproofing maintenance includes regular inspections checking membrane condition, cleaning removing debris and vegetation, minor repairs addressing damage promptly, and recoating as recommended maintaining protection. Proper waterproofing is essential investment preventing costly water damage, structural deterioration, and premature roof failure.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Gutter Installation & Repairs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gutters protect property foundations, walls, and landscaping by controlling roof water runoff. We install and repair various gutter systems including box gutters (hidden gutters) integrated into roof design, eaves gutters (half-round or square) attached to fascia boards, custom gutters fabricated on-site for specific requirements, and valley gutters between roof slopes. Gutter installation requires proper fall ensuring water flows to downpipes (typically 1:100 gradient), adequate sizing for roof catchment area, secure brackets supporting gutter weight when full, quality materials (aluminum, galvanized steel, or custom), and downpipe positioning directing water away from foundations. Gutter components include gutter sections in appropriate lengths, outlets connecting to downpipes, end caps sealing gutter ends, brackets/hangers supporting gutters, downpipes carrying water to ground level, and elbows directing water around corners. Gutter repairs address leaks from corrosion or damage, sagging from inadequate support, disconnected joints, blocked outlets and downpipes, and damaged sections requiring replacement. Regular gutter maintenance includes cleaning removing leaves and debris preventing blockages, checking fall and alignment, inspecting brackets and fasteners, examining downpipes for blockages, and repainting or coating preventing corrosion. Properly functioning gutters prevent foundation damage from water accumulation, protect walls from water staining and deterioration, eliminate erosion around property, prevent damp problems, and direct water to appropriate drainage or collection systems.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Fascia Boards & Soffits</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fascia boards and soffits provide essential functions finishing roof edges and protecting roof structure. Fascia boards attach to rafter ends providing surface for gutter attachment, creating neat finished appearance, protecting roof edge from weather, and providing structural support for gutters. Soffits cover underside of roof overhang providing ventilation for roof spaces, protecting rafters from weather, preventing bird and pest entry, and enhancing visual appeal. We install various fascia and soffit materials including fiber cement boards offering durability and low maintenance, treated timber providing traditional appearance, uPVC (plastic) requiring no painting and resisting rot, and custom options matching architectural styles. Installation considerations include proper ventilation for roof spaces, secure fastening to rafters, weather-resistant materials and finishes, integration with gutters and roof edge, and neat joints and finishes. Fascia and soffit repairs address rotted timber from moisture exposure, damaged boards from impact or age, paint deterioration requiring recoating, loose boards affecting gutter alignment, and pest damage requiring replacement and sealing. Quality fascia and soffits protect roof structure from weather, provide neat finished appearance, support gutter systems reliably, allow proper roof ventilation, and require minimal maintenance when quality materials are used. Regular inspection identifies problems early preventing more extensive damage and costly repairs.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Complete Roof Replacements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When roofs reach the end of their service life or suffer extensive damage, complete replacement provides best long-term value. Roof replacement involves removing existing roofing materials, inspecting and repairing roof structure as needed, installing new waterproof underlayment, installing new roofing (tiles, sheeting, or waterproofing), replacing fascia and gutters if required, and ensuring proper ventilation and insulation. Replacement timing considerations include age exceeding expected lifespan (20-30 years for sheeting, 30-50+ for tiles), extensive damage making repairs uneconomical, chronic leaking despite repairs, structural issues requiring major work, and aesthetic improvement during renovations. Roof replacement benefits include eliminating all existing problems with fresh start, opportunity to upgrade materials and systems, improved energy efficiency with modern materials, extended property life with new 20-50 year roof, and increased property value and marketability. Our replacement process includes thorough assessment and recommendations, detailed quote with material options, professional removal and disposal, quality installation to current standards, cleanup leaving property neat, and comprehensive warranty on materials and workmanship. Complete roof replacement represents significant investment providing decades of reliable protection, eliminating ongoing leak and maintenance problems, improving property value and appearance, and giving peace of mind with new warranted roofing system.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial Roofing Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Commercial properties require durable roofing systems designed for larger spans, specific usage requirements, and business continuity needs. We provide commercial roofing including IBR and corrugated sheeting for warehouses and industrial buildings, torch-on waterproofing for flat commercial roofs, standing seam metal roofing for modern commercial buildings, and specialized systems for unique requirements. Commercial roofing considerations include minimal business disruption during work, durability for long service life and low maintenance, safety compliance for workers and building occupants, energy efficiency reducing operating costs, and warranty requirements for building owners and tenants. Our commercial experience includes retail centers and shopping complexes, office buildings and corporate parks, industrial facilities and warehouses, schools and institutional buildings, and apartment complexes. We understand commercial project requirements including detailed planning and scheduling, safety protocols for occupied buildings, quality assurance and testing, as-built documentation, and maintenance program development. Commercial roofing investment requires professional expertise, quality materials suitable for application, proper installation meeting building codes, comprehensive warranties, and ongoing maintenance ensuring continued performance and protecting substantial property investments.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Roof Maintenance Programs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Regular roof maintenance prevents problems, extends roof life, and protects property value. Our maintenance programs include scheduled inspections checking roof condition, gutter cleaning preventing water damage, minor repairs addressing issues early, waterproofing maintenance renewing protection, and detailed reporting documenting condition. Maintenance benefits include early problem detection before major damage occurs, extended roof lifespan maximizing investment, preventing emergency repairs and business disruption, maintaining warranty coverage, and preserving property value. Inspection components include roof surface checking for damage or wear, flashings examining critical leak points, gutters and downpipes ensuring proper drainage, roof penetrations checking seals around vents and equipment, and structural elements identifying movement or deterioration. Regular maintenance identifies cracked or displaced tiles needing replacement, deteriorated waterproofing requiring attention, blocked gutters causing overflow, damaged flashing risking leaks, and rust or corrosion on metal elements. Maintenance frequency depends on roof type and age (older roofs need more frequent checks), weather exposure (coastal or storm-prone areas), surrounding vegetation (trees dropping debris), and property type (commercial properties need stricter maintenance). Roof maintenance programs provide peace of mind, prevent costly emergency repairs, extend roof life significantly, maintain property value and appearance, and ensure continuous protection for buildings and contents.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Quality Materials & Workmanship</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roof quality depends on both materials and installation expertise. We use premium materials from reputable suppliers including quality concrete and clay tiles, heavy-gauge IBR and corrugated sheeting, proven waterproofing membranes and coatings, durable gutter materials, and quality flashings and accessories. Material selection considers roof pitch and design, weather conditions and exposure, aesthetic requirements, budget parameters, and maintenance requirements. Our experienced roofing specialists provide proper installation techniques ensuring weather-tight roofs, attention to detail in critical areas, safety-focused work practices, neat workmanship, and site protection and cleanup. Quality control includes material inspection verifying specifications, installation checks ensuring correct methods, leak testing where applicable, and final inspection before completion. We stand behind our work with comprehensive warranties on materials (from manufacturers) and workmanship (from Goshen Projects), ensuring quality, reliability, and customer satisfaction. Quality roofing provides reliable weather protection, long service life minimizing replacement costs, minimal maintenance requirements, maintained property value and appearance, and peace of mind knowing your property is protected by professionally installed roofing built to last.
              </p>

              {/* Call to Action */}
              <div className="mt-12 p-8 rounded-xl bg-primary/5 border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Protect Your Property with Quality Roofing</h3>
                <p className="text-muted-foreground mb-6">
                  Need roof repairs, new roofing installation, or emergency leak services? Contact Goshen Projects Solutions for professional roofing services across Gauteng. Our experienced specialists deliver quality solutions with premium materials and comprehensive warranties.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Emergency Leak Repairs Available</strong><br />
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
