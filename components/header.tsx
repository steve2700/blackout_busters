"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Phone,
  ChevronDown,
  ChevronRight,
  X,
  MapPin,
  Mail,
  Building2,
  Wrench,
  Droplets,
  Zap,
  Home,
  Shield,
  Hammer,
  PaintBucket,
  Construction,
  Fence,
  Camera,
  Sun,
  Snowflake,
  Car,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Building Construction & Renovations",
    href: "/services/building-construction-renovations",
    description: "New builds, renovations, refurbishments & fit-outs",
    icon: Building2,
  },
  {
    title: "Property Maintenance",
    href: "/services/property-maintenance",
    description: "Residential & commercial maintenance programs",
    icon: Wrench,
  },
  {
    title: "Plumbing Services",
    href: "/services/plumbing-services",
    description: "Installations, repairs, leak detection & geysers",
    icon: Droplets,
  },
  {
    title: "Electrical Repairs & Installations",
    href: "/services/electrical-services",
    description: "Installations, rewiring, fault finding & repairs",
    icon: Zap,
  },
  {
    title: "Roofing & Roof Leak Repairs",
    href: "/services/roofing-services",
    description: "Leak repairs, waterproofing & gutter installation",
    icon: Home,
  },
  {
    title: "Waterproofing Services",
    href: "/services/waterproofing-services",
    description: "Roof, balcony, foundation & damp proofing",
    icon: Shield,
  },
  {
    title: "Carpentry Services",
    href: "/services/carpentry-services",
    description: "Timber structures, decking, pergolas & cabinetry",
    icon: Hammer,
  },
  {
    title: "Kitchen & Bathroom Cupboards",
    href: "/services/kitchen-bathroom-cupboards",
    description: "Custom cupboards, vanities & built-in storage",
    icon: Construction,
  },
  {
    title: "Painting, Tiling & Finishing",
    href: "/services/painting-tiling-finishing",
    description: "Interior/exterior painting & floor/wall tiling",
    icon: PaintBucket,
  },
  {
    title: "Paving, Driveways & Surfacing",
    href: "/services/paving-driveways-surfacing",
    description: "Brick paving, tar paving & driveway construction",
    icon: Car,
  },
  {
    title: "Road Construction & Civil Works",
    href: "/services/road-construction-civil-works",
    description: "Road construction, earthworks & drainage systems",
    icon: Construction,
  },
  {
    title: "Fencing, Gates & Access Control",
    href: "/services/fencing-gates-access-control",
    description: "Palisade, electric fencing & gate automation",
    icon: Fence,
  },
  {
    title: "CCTV, Alarm & Surveillance",
    href: "/services/cctv-alarm-surveillance",
    description: "CCTV installations, alarms & remote monitoring",
    icon: Camera,
  },
  {
    title: "Solar & Energy Solutions",
    href: "/services/solar-energy-solutions",
    description: "Solar power, geysers, inverters & battery backup",
    icon: Sun,
  },
  {
    title: "Air Conditioning Services",
    href: "/services/air-conditioning-services",
    description: "AC installation, servicing & maintenance",
    icon: Snowflake,
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-lg shadow-sm supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-background",
      )}
    >
      <div className="hidden border-b border-border/50 bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+27722524721" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +27 72 252 4721
            </a>
            <a
              href="mailto:info@goshenprojects.co.za"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              info@goshenprojects.co.za
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span>Serving Pretoria, Johannesburg & Greater Gauteng</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/logo-icon.png" 
              alt="Goshen Projects Logo" 
              width={44} 
              height={44}
              className="object-cover"
            />
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent border-2 border-background"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">Goshen Projects</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Building Excellence in Gauteng</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary focus:bg-muted focus:text-secondary focus:outline-none">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary focus:bg-muted focus:text-secondary focus:outline-none">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-secondary">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-1 p-4 md:w-[700px] md:grid-cols-2 lg:w-[800px]">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-secondary focus:bg-muted"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li className="col-span-2 mt-2 border-t pt-2">
                    <Link
                      href="/services"
                      className="flex items-center gap-2 p-2 text-sm font-medium text-secondary hover:underline"
                    >
                      View All Services <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/service-areas" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary focus:bg-muted focus:text-secondary focus:outline-none">
                  Service Areas
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary focus:bg-muted focus:text-secondary focus:outline-none">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-secondary focus:bg-muted focus:text-secondary focus:outline-none">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>




        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 sm:inline-flex"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Request a Quote
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md p-0 border-l-0 overflow-hidden [&>button]:hidden">
              {/* Mobile Menu Header */}
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden bg-white/10">
                      <Image 
                        src="/logo-icon.png" 
                        alt="Goshen Projects" 
                        width={40} 
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Goshen Projects</p>
                      <p className="text-xs text-white/70">Building Excellence</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-col gap-2 text-sm text-white/80">
                  <a href="tel:+27722524721" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +27 72 252 4721
                  </a>
                  <a href="mailto:info@goshenprojects.co.za" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    info@goshenprojects.co.za
                  </a>
                </div>
              </div>

              {/* Mobile Menu Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Home className="h-5 w-5" />
                    </div>
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    About Us
                  </Link>

                  {/* Services Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      className="flex w-full items-center justify-between gap-3 p-4 text-lg font-medium hover:bg-muted transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                          <Wrench className="h-5 w-5" />
                        </div>
                        Services
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-300",
                          mobileServicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                        {services.slice(0, 8).map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-3 text-center text-xs font-medium hover:bg-secondary/10 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <service.icon className="h-5 w-5 text-secondary" />
                            <span className="line-clamp-2">{service.title.split(" ").slice(0, 2).join(" ")}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-secondary/30 p-3 text-sm font-medium text-secondary hover:bg-secondary/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        View All 16 Services
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/service-areas"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    Service Areas
                  </Link>

                  <Link
                    href="/blog"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                        />
                      </svg>
                    </div>
                    Blog
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Footer CTA */}
              <div className="border-t border-border bg-muted/50 p-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Request a Free Quote
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Free consultations for all projects in Gauteng
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
