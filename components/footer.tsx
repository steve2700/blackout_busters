import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react"

const services = [
  { title: "Building Construction", href: "/services/building-construction-renovations" },
  { title: "Property Maintenance", href: "/services/property-maintenance" },
  { title: "Plumbing Services", href: "/services/plumbing-services" },
  { title: "Electrical Services", href: "/services/electrical-services" },
  { title: "Roofing & Repairs", href: "/services/roofing-services" },
  { title: "Solar & Energy", href: "/services/solar-energy-solutions" },
  { title: "Security Systems", href: "/services/cctv-alarm-surveillance" },
  { title: "Paving & Surfacing", href: "/services/paving-driveways-surfacing" },
]

const serviceAreas = [
  { name: "Pretoria", href: "/service-areas/pretoria" },
  { name: "Johannesburg", href: "/service-areas/johannesburg" },
  { name: "Sandton", href: "/service-areas/sandton" },
  { name: "Midrand", href: "/service-areas/midrand" },
  { name: "Centurion", href: "/service-areas/centurion" },
  { name: "Randburg", href: "/service-areas/randburg" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden bg-secondary">
                <Image 
                  src="/logo-icon.png" 
                  alt="Goshen Projects" 
                  width={40} 
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Goshen Projects</h3>
                <p className="text-xs text-primary-foreground/70">Building Excellence in Gauteng</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Integrated Construction, Infrastructure, Maintenance & Security Solutions serving Gauteng, Pretoria &
              Johannesburg.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 transition-colors hover:text-secondary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-secondary hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm font-medium text-secondary hover:underline">
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  32 Richards Dr, Halfway House
                  <br />
                  Midrand 1632, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href="tel:+27722524721" className="text-sm text-primary-foreground/80 hover:text-secondary">
                  +27 72 252 4721
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:sales@goshenprojects.co.za"
                    className="text-sm text-primary-foreground/80 hover:text-secondary"
                  >
                    sales@goshenprojects.co.za
                  </a>
                  <a
                    href="mailto:admin@goshenprojects.co.za"
                    className="text-sm text-primary-foreground/80 hover:text-secondary"
                  >
                    admin@goshenprojects.co.za
                  </a>
                  <a
                    href="mailto:info@goshenprojects.co.za"
                    className="text-sm text-primary-foreground/80 hover:text-secondary"
                  >
                    info@goshenprojects.co.za
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  Mon - Fri: 07:00 - 17:00
                  <br />
                  Sat: 08:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Goshen Projects. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-primary-foreground/70 hover:text-secondary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-primary-foreground/70 hover:text-secondary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
