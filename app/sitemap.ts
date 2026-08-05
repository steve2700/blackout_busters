import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const baseUrl = "https://www.jerofiresolutions.com"

const services = [
  "fire-detection-alarm-systems",
  "fire-extinguisher-supply-servicing",
  "sprinkler-suppression-systems",
  "fire-safety-training-compliance",
  "fire-equipment-maintenance-contracts",
  "fire-hydrant-installation-testing",
]

const serviceAreas = [
  "johannesburg",
  "pretoria",
  "kempton-park",
  "midrand",
  "sandton",
  "centurion",
  "fourways",
  "randburg",
  "bedfordview",
  "rosebank",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map((slug) => ({
    url: `${baseUrl}/service-areas/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]

  return [...mainPages, ...servicePages, ...serviceAreaPages, ...legalPages]
}
