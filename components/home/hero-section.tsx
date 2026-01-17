import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Shield, Award, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/professional-construction-site-aerial-view-modern-.jpg"
          alt="Goshen Projects construction site"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Shield className="h-4 w-4 text-accent" />
              Trusted Service Provider in Gauteng
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Integrated Construction, Infrastructure &<span className="text-accent"> Maintenance Solutions</span>
            </h1>

            <p className="mb-8 text-pretty text-lg text-primary-foreground/80 md:text-xl max-w-2xl mx-auto lg:mx-0">
              Goshen Projects is your one-stop solution for all construction, renovation, maintenance,civil construction and automated security systems
              needs in <strong className="text-white">Pretoria, Johannesburg</strong>, and the greater{" "}
              <strong className="text-white">Gauteng</strong> region. We deliver excellence with every project.
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
                Fully Compliant
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <Award className="h-4 w-4 text-accent" />
                </div>
                Quality Guaranteed
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/90">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <Shield className="h-4 w-4 text-accent" />
                </div>
                Licensed Professionals
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-14 px-8 text-base"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Request a Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-14 px-8 text-base"
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/professional-construction-workers-team.jpg"
                  alt="Goshen Projects construction team at work in Gauteng"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Secondary Image */}
              <div className="absolute -bottom-8 -left-8 aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
                <Image
                  src="/modern-renovated-kitchen-interior-design-south-afr.jpg"
                  alt="Completed kitchen renovation project"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-card p-6 shadow-2xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80">
                    <Award className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-card-foreground">16+</p>
                    <p className="text-sm text-muted-foreground">Service Categories</p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 right-12 rounded-xl bg-secondary px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-secondary-foreground">10+</p>
                <p className="text-xs text-secondary-foreground/80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-center text-sm text-primary-foreground/60 mb-6">
            Trusted by residential, commercial & industrial clients across Gauteng
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">NHBRC Registered</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">CIDB Graded</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">SABS Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">ECSA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
