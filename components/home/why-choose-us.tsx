import Image from "next/image"
import { CheckCircle, Shield, Users, Clock, Award, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Users,
    title: "Skilled & Experienced Professionals",
    description:
      "Our team includes highly skilled engineers, technicians, carpenters, plumbers, electricians, and project managers with years of industry experience.",
  },
  {
    icon: Shield,
    title: "Compliance & Regulations",
    description:
      "We strictly adhere to South African building, electrical, and plumbing regulations, ensuring every project meets legal and safety standards.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description:
      "No hidden costs or surprises. We provide clear, detailed quotations and transparent project management from start to finish.",
  },
  {
    icon: Award,
    title: "Commitment to Quality",
    description:
      "Quality is non-negotiable. We use high-quality materials and proven techniques to deliver lasting results that exceed expectations.",
  },
  {
    icon: Clock,
    title: "Reliable Turnaround Times",
    description:
      "We understand time is valuable. Our efficient project execution ensures your projects are completed on schedule without compromising quality.",
  },
  {
    icon: Leaf,
    title: "Innovative & Sustainable Solutions",
    description:
      "We embrace innovation and sustainability, offering cost-effective solutions that are environmentally responsible and future-proof.",
  },
]

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
]

export function WhyChooseUs() {
  return (
    <section className="bg-muted py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Why Choose Us
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Why Goshen Projects is Gauteng&apos;s Trusted Choice
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              We bring together expertise, reliability, and a commitment to excellence that makes us the preferred
              partner for construction, maintenance, and infrastructure projects across Pretoria and Johannesburg.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/construction-team-meeting-on-site-in-gauteng-south.jpg?height=600&width=800"
                alt="Goshen Projects team reviewing construction plans"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 aspect-square w-40 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
              <Image
                src="/carpenter-working-on-custom-cabinetry-in-gauteng-so.jpg?height=200&width=200"
                alt="Goshen Projects professional worker"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl bg-accent p-4 shadow-xl text-accent-foreground">
              <Award className="h-8 w-8 mb-1" />
              <p className="text-xs font-medium">Quality Assured</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-lg hover:border-secondary/30"
            >
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground shadow-lg">
                {index + 1}
              </div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
