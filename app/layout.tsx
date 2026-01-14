import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://goshenprojects.co.za"),
  title: {
    default: "Goshen Projects | Construction, Infrastructure & Maintenance Solutions in Gauteng",
    template: "%s | Goshen Projects - Gauteng's Trusted Service Provider",
  },
  description:
    "Goshen Projects delivers comprehensive construction, property maintenance, civil works, paving, security, electrical, plumbing, solar, and renovation services in Gauteng, Pretoria & Johannesburg. One-stop integrated service provider.",
  keywords:
    "construction Gauteng, building contractor Pretoria, property maintenance Johannesburg, civil works South Africa, paving contractor Gauteng, electrical services Pretoria, plumbing Johannesburg, solar installation Gauteng, renovations Sandton, security systems Midrand, roofing Centurion, waterproofing Gauteng",
  authors: [{ name: "Goshen Projects", url: "https://goshenprojects.co.za" }],
  creator: "Goshen Projects",
  publisher: "Goshen Projects",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://goshenprojects.co.za",
    siteName: "Goshen Projects",
    title: "Goshen Projects | Construction, Infrastructure & Maintenance Solutions in Gauteng",
    description:
      "Gauteng's trusted integrated service provider for construction, maintenance, civil works, security, and energy solutions. Serving Pretoria, Johannesburg & surrounds.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goshen Projects - Construction & Infrastructure Solutions in Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goshen Projects | Construction & Infrastructure Solutions Gauteng",
    description:
      "Integrated construction, infrastructure, maintenance & security solutions in Gauteng. Serving Pretoria, Johannesburg & surrounds.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://goshenprojects.co.za",
  },
  category: "Construction & Infrastructure",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
