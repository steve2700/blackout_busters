"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Menu,
  Phone,
  ChevronDown,
  ChevronRight,
  X,
  MapPin,
  Mail,
  Zap,
  Sun,
  Wrench,
  ShieldCheck,
  Home,
  BatteryCharging,
  Lightbulb,
  CircuitBoard,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Electrical Installation",
    href: "/electrical-installation",
    description:
      "Professional electrical installations for homes, businesses and new projects.",
    icon: Zap,
  },
  {
    title: "Electrical Repairs",
    href: "/electrical-repairs",
    description:
      "Fast fault finding, repairs and electrical troubleshooting.",
    icon: Wrench,
  },
  {
    title: "Solar Installation",
    href: "/solar-installation",
    description:
      "Solar systems designed and installed to reduce your reliance on the grid.",
    icon: Sun,
  },
  {
    title: "Electrical Maintenance",
    href: "/electrical-maintenance",
    description:
      "Reliable scheduled maintenance to keep your electrical systems running safely.",
    icon: CircuitBoard,
  },
  {
    title: "Inverter & Battery Solutions",
    href: "/inverter-battery-solutions",
    description:
      "Backup power solutions including inverters and battery storage.",
    icon: BatteryCharging,
  },
  {
    title: "Electrical Compliance",
    href: "/electrical-compliance",
    description:
      "Electrical inspections, safety checks and compliance support.",
    icon: ShieldCheck,
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-lg shadow-md supports-[backdrop-filter]:bg-background/85"
          : "border-border/40 bg-background",
      )}
    >
      {/* Brand accent strip */}
      <div className="h-1 w-full bg-accent" />

      {/* =========================================================
          TOP BAR
      ========================================================== */}
      <div className="hidden border-b border-primary/20 bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 text-xs font-medium">
            <span className="flex items-center gap-2 text-white/90">
              <Zap className="h-3.5 w-3.5 text-accent" />
              Electrical & Solar Solutions
            </span>

            <span className="flex items-center gap-2 text-white/75">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Serving Gauteng
            </span>

            <Link
              href="/contact"
              className="flex items-center gap-2 text-white/75 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact Blackout Busters
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-red-600/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D62828]" />
              Emergency Electrical Callouts
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN HEADER
      ========================================================== */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Blackout Busters home"
        >
          <Image
            src="/logo-wordmark.svg"
            alt="Blackout Busters - Electrical & Solar Solutions"
            width={1000}
            height={300}
            className="h-10 w-auto sm:h-12 lg:h-14"
            priority
          />
        </Link>

        {/* =======================================================
            DESKTOP NAVIGATION
        ======================================================== */}
        <nav className="hidden items-center gap-1 lg:flex">

          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors",
                servicesOpen
                  ? "bg-primary/5 text-primary"
                  : "text-foreground hover:bg-primary/5 hover:text-primary",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services

              <ChevronDown
                className={cn(
                  "ml-1.5 h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[720px] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Dropdown Header */}
                <div className="border-b border-border bg-primary px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent">
                        What We Do
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-white">
                        Electrical & Solar Solutions
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Zap className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-2 gap-1 p-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="group rounded-lg p-3 transition-all hover:bg-primary/[0.04]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-primary">
                          <service.icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-1 text-sm font-bold leading-tight text-primary">
                            {service.title}
                          </div>

                          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* View All */}
                  <div className="col-span-2 mt-2 border-t border-border pt-3">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-lg bg-primary p-3 text-sm font-bold text-white transition-all hover:bg-primary/90"
                    >
                      Explore All Services
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/service-areas"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
          >
            Service Areas
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* =======================================================
            RIGHT SIDE CTA + MOBILE MENU
        ======================================================== */}
        <div className="flex items-center gap-3">

          {/* Emergency Badge */}
          <Link
            href="/contact"
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-[#D62828]/30 bg-[#D62828]/5 px-3 py-1.5 text-xs font-bold text-[#D62828] transition-colors hover:bg-[#D62828]/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D62828] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D62828]" />
            </span>

            Emergency Callout
          </Link>

          {/* Quote Button */}
          <Button
            asChild
            className="hidden bg-accent font-bold text-primary shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-accent/30 sm:inline-flex"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Get a Free Quote
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 bg-transparent text-primary transition-all hover:bg-primary hover:text-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-md overflow-hidden border-l-0 p-0 [&>button]:hidden"
            >
              {/* =================================================
                  MOBILE HEADER
              ================================================== */}
              <div className="bg-primary p-6 text-white">

                <div className="mb-5 flex items-center justify-between">

                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg bg-white px-3 py-2 shadow-lg"
                  >
                    <Image
                      src="/logo-wordmark.svg"
                      alt="Blackout Busters"
                      width={1000}
                      height={300}
                      className="h-8 w-auto"
                      priority
                    />
                  </Link>

                  {/* Close */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Brand Message */}
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    Electrical & Solar Solutions
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Reliable power. Professional service.
                  </p>
                </div>

                {/* Emergency CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg border border-[#D62828]/40 bg-[#D62828]/10 p-3 transition-colors hover:bg-[#D62828]/20"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D62828]">
                    <Phone className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white">
                      Emergency Electrical Callout
                    </p>

                    <p className="text-xs text-white/60">
                      Get help when you need it
                    </p>
                  </div>
                </Link>
              </div>

              {/* =================================================
                  MOBILE NAVIGATION
              ================================================== */}
              <nav className="flex-1 overflow-y-auto p-5">
                <div className="flex flex-col gap-1">

                  {/* Home */}
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-semibold transition-colors hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Home className="h-5 w-5" />
                    </div>

                    Home
                  </Link>

                  {/* About */}
                  <Link
                    href="/about"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-semibold transition-colors hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    About Us
                  </Link>

                  {/* Services */}
                  <div className="overflow-hidden rounded-xl">

                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 p-4 text-lg font-semibold transition-colors hover:bg-muted"
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      aria-expanded={mobileServicesOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Zap className="h-5 w-5" />
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
                        mobileServicesOpen
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="grid grid-cols-2 gap-2 px-4 pb-4">

                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex flex-col items-center gap-2 rounded-xl bg-muted/60 p-4 text-center text-xs font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            <service.icon className="h-5 w-5 text-primary" />

                            <span className="line-clamp-2">
                              {service.title}
                            </span>
                          </Link>
                        ))}

                      </div>

                      <Link
                        href="/services"
                        className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/25 p-3 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Services
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Service Areas */}
                  <Link
                    href="/service-areas"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-semibold transition-colors hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>

                    Service Areas
                  </Link>

                  {/* Contact */}
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-semibold transition-colors hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>

                    Contact
                  </Link>
                </div>
              </nav>

              {/* =================================================
                  MOBILE FOOTER CTA
              ================================================== */}
              <div className="border-t border-border bg-muted/50 p-5">

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent font-bold text-primary shadow-lg shadow-accent/20 hover:bg-accent/90"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get a Free Quote
                  </Link>
                </Button>

                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lightbulb className="h-3.5 w-3.5 text-accent" />
                  Electrical & Solar Solutions
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
