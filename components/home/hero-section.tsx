import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Zap, ShieldCheck, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const PHONE_DISPLAY = "+27 83 617 1112"
const PHONE_TEL = "tel:+27836171112"
const WHATSAPP_HREF =
  "https://wa.me/27836171112?text=" +
  encodeURIComponent("Hi Blackout Busters, I'd like to make an inquiry.")

// Bar heights for the power-status meter — deliberately uneven, like a real load graph
const METER_BARS = [35, 55, 40, 70, 50, 85, 60, 95, 70, 100]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-primary"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Circuit-grid background pattern — no external photo dependency yet */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(255,184,0,0.6) 39px, transparent 40px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(255,184,0,0.6) 39px, transparent 40px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-destructive/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-8 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge — no unverified claims */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm border border-white/10 shadow-lg">
              <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Electrical &amp; Solar Specialists in Gauteng</span>
            </div>

            {/* Headline */}
            <h1
              className="mb-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              itemProp="name"
            >
              <span className="block">The Lights Stay On.</span>
              <span className="block text-accent">Even When Eskom's Don't.</span>
            </h1>

            {/* Description */}
            <p
              className="mb-6 text-pretty text-base sm:text-lg text-primary-foreground/80 md:text-xl max-w-2xl mx-auto lg:mx-0"
              itemProp="description"
            >
              <strong className="text-white">Blackout Busters</strong> installs and repairs the
              electrical, solar and backup power systems that keep Gauteng homes and businesses
              running. Installations, repairs, generators, inverters and compliance
              certificates, done right the first time.
            </p>

            {/* CTAs — all 3 visible without scrolling, call goes straight to the phone dialer */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <a href={PHONE_TEL}>
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 transition-all hover:scale-105"
              >
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Compact trust row — kept short so it never pushes CTAs below the fold */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Residential, Commercial &amp; Industrial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Emergency Callouts Available</span>
              </div>
            </div>
          </div>

          {/* Signature visual: a "power status" panel instead of a stock photo */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-white/50">
                  POWER STATUS
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                  MONITORING
                </span>
              </div>

              {/* Meter bars */}
              <div className="mb-6 flex h-24 items-end gap-1.5" aria-hidden="true">
                {METER_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <div>
                  <p className="text-xs text-white/50">GRID</p>
                  <p className="font-semibold text-destructive">OFFLINE</p>
                </div>
                <Zap className="h-5 w-5 text-accent" aria-hidden="true" />
                <div className="text-right">
                  <p className="text-xs text-white/50">BACKUP</p>
                  <p className="font-semibold text-accent">ACTIVE</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 right-8 rounded-xl bg-destructive px-4 py-3 shadow-xl ring-1 ring-white/10">
              <p className="text-sm font-bold text-destructive-foreground">24/7</p>
              <p className="text-xs text-destructive-foreground/90">Emergency Callout</p>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-secondary px-4 py-3 shadow-xl ring-1 ring-white/10">
              <p className="text-sm font-bold text-secondary-foreground">Solar + Backup</p>
              <p className="text-xs text-secondary-foreground/80">Inverter &amp; Battery Installs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured data */}
      <meta itemProp="provider" content="Blackout Busters" />
      <meta
        itemProp="areaServed"
        content="Gauteng, Johannesburg, Pretoria, Kempton Park, Sandton, Centurion, Midrand"
      />
      <meta
        itemProp="serviceType"
        content="Electrical Installation, Electrical Repairs, Solar Installation, Backup Power, Generator Servicing, DB Board Upgrades, Compliance Certificates (COC)"
      />
    </section>
  )
}
