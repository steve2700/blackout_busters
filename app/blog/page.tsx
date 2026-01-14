import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Construction & Maintenance Tips | Goshen Projects",
  description:
    "Expert advice, tips, and insights on construction, renovations, property maintenance, and infrastructure from Goshen Projects. Stay informed about building trends in Gauteng.",
  openGraph: {
    title: "Blog | Construction & Maintenance Tips | Goshen Projects",
    description:
      "Expert construction and maintenance advice for Gauteng property owners. Tips, guides, and industry insights from experienced professionals.",
  },
}

const featuredPost = {
  slug: "top-10-home-renovation-tips-for-gauteng-homeowners",
  title: "Top 10 Home Renovation Tips for Gauteng Homeowners",
  excerpt:
    "Planning a home renovation? Discover essential tips from our expert team to ensure your renovation project runs smoothly, stays on budget, and delivers stunning results.",
  image: "/placeholder.svg?height=600&width=900",
  category: "Renovations",
  date: "2024-01-15",
  author: "Goshen Projects Team",
  readTime: "8 min read",
  featured: true,
}

const blogPosts = [
  {
    slug: "understanding-building-regulations-in-south-africa",
    title: "Understanding Building Regulations in South Africa",
    excerpt:
      "A comprehensive guide to South African building regulations, permits, and compliance requirements for construction projects in Gauteng.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Building Regulations",
    date: "2024-01-12",
    author: "Goshen Projects Team",
    readTime: "6 min read",
  },
  {
    slug: "waterproofing-solutions-for-gauteng-homes",
    title: "Waterproofing Solutions for Gauteng Homes",
    excerpt:
      "Protect your property from water damage with professional waterproofing. Learn about the best solutions for roofs, balconies, and foundations.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Waterproofing",
    date: "2024-01-10",
    author: "Goshen Projects Team",
    readTime: "7 min read",
  },
  {
    slug: "solar-power-gauteng-complete-guide",
    title: "Solar Power in Gauteng: A Complete Guide",
    excerpt:
      "Everything you need to know about solar power installation in Gauteng. Benefits, costs, ROI, and choosing the right system for your property.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Solar & Energy",
    date: "2024-01-08",
    author: "Goshen Projects Team",
    readTime: "10 min read",
  },
  {
    slug: "property-maintenance-checklist-for-homeowners",
    title: "Property Maintenance Checklist for Homeowners",
    excerpt:
      "Keep your property in top condition with our comprehensive maintenance checklist. Learn what to inspect and when to schedule professional services.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Maintenance",
    date: "2024-01-05",
    author: "Goshen Projects Team",
    readTime: "5 min read",
  },
  {
    slug: "choosing-right-roofing-material-gauteng-climate",
    title: "Choosing the Right Roofing Material for Gauteng Climate",
    excerpt:
      "Gauteng's climate demands specific roofing solutions. Discover which materials perform best and offer the longest lifespan in our region.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Roofing",
    date: "2024-01-03",
    author: "Goshen Projects Team",
    readTime: "6 min read",
  },
  {
    slug: "kitchen-renovation-trends-2024-south-africa",
    title: "Kitchen Renovation Trends 2024 in South Africa",
    excerpt:
      "Explore the latest kitchen design trends taking South Africa by storm. From smart appliances to sustainable materials, discover what's hot in 2024.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Renovations",
    date: "2024-01-01",
    author: "Goshen Projects Team",
    readTime: "7 min read",
  },
]

const categories = [
  "All Posts",
  "Renovations",
  "Maintenance",
  "Building Regulations",
  "Waterproofing",
  "Solar & Energy",
  "Roofing",
  "Plumbing",
  "Electrical",
  "Security",
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Tag className="h-4 w-4 text-accent" />
              Expert Insights & Tips
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Construction & Maintenance Blog
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/80 md:text-xl">
              Expert advice, industry insights, and practical tips for construction, renovation, and property
              maintenance in Gauteng. Stay informed with Goshen Projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Article</h2>
            <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Featured
            </span>
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <Card className="overflow-hidden border-2 border-secondary shadow-xl transition-all hover:shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    {featuredPost.category}
                  </div>
                </div>

                <CardContent className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-ZA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold group-hover:text-secondary transition-colors md:text-3xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-muted/50 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="flex-shrink-0 text-sm font-medium text-muted-foreground">Categories:</span>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === "All Posts"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-foreground hover:bg-secondary/10 border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-2xl font-bold">Latest Articles</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-border transition-all hover:border-secondary hover:shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-secondary/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-secondary-foreground">
                      {post.category}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-ZA", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Updated with Expert Tips</h2>
            <p className="mb-8 text-muted-foreground">
              Subscribe to our newsletter for the latest construction tips, renovation advice, and industry insights
              delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-12 rounded-lg border border-border bg-background px-4 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 sm:w-80"
              />
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Subscribe Now
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}
