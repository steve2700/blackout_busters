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
    default: "Goshen Projects Solutions | Construction, Infrastructure & Maintenance in Gauteng",
    template: "%s | Goshen Projects Solutions - Gauteng's Trusted Service Provider",
  },
  description:
    "Goshen Projects Solutions delivers comprehensive construction, property maintenance, civil works, paving, security, electrical, plumbing, solar, and renovation services in Gauteng, Pretoria & Johannesburg. One-stop integrated service provider.",
  keywords:
    "construction Gauteng, building contractor Pretoria, property maintenance Johannesburg, civil works South Africa, paving contractor Gauteng, electrical services Pretoria, plumbing Johannesburg, solar installation Gauteng, renovations Sandton, security systems Midrand, roofing Centurion, waterproofing Gauteng, Goshen Projects Solutions",
  authors: [{ name: "Goshen Projects Solutions", url: "https://goshenprojects.co.za" }],
  creator: "Goshen Projects Solutions",
  publisher: "Goshen Projects Solutions",
  applicationName: "Goshen Projects Solutions",
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
  // Enhanced favicon and icons for Google Search results
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1a5632" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://goshenprojects.co.za",
    siteName: "Goshen Projects Solutions",
    title: "Goshen Projects Solutions | Construction, Infrastructure & Maintenance in Gauteng",
    description:
      "Gauteng's trusted integrated service provider for construction, maintenance, civil works, security, and energy solutions. Serving Pretoria, Johannesburg & surrounds.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goshen Projects Solutions - Construction & Infrastructure Solutions in Gauteng",
      },
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "Goshen Projects Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goshen_projects",
    creator: "@goshen_projects",
    title: "Goshen Projects Solutions | Construction & Infrastructure Gauteng",
    description:
      "Integrated construction, infrastructure, maintenance & security solutions in Gauteng. Serving Pretoria, Johannesburg & surrounds.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://goshenprojects.co.za",
  },
  // Verification tags (add your verification codes when ready)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Construction & Infrastructure",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-25.9967;28.1242", // Midrand coordinates
    "ICBM": "-25.9967, 28.1242",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Additional meta tags for better indexing */}
        <meta name="theme-color" content="#1a5632" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Goshen Projects Solutions",
              url: "https://goshenprojects.co.za",
              logo: "https://goshenprojects.co.za/logo.png",
              image: "https://goshenprojects.co.za/og-image.jpg",
              description: "Comprehensive construction, infrastructure, and maintenance solutions in Gauteng",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22 Richards Dr, Halfway House",
                addressLocality: "Midrand",
                addressRegion: "Gauteng",
                postalCode: "1632",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -25.9967,
                longitude: 28.1242,
              },
              areaServed: ["Gauteng", "Pretoria", "Johannesburg", "Sandton", "Midrand", "Centurion"],
              sameAs: [
                "https://www.facebook.com/goshenprojectssolutions",
                "https://www.instagram.com/goshenprojectssolutions",
                "https://www.x.com/goshen_projects",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-61-530-7314",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://goshenprojects.co.za",
              name: "Goshen Projects Solutions",
              image: "https://goshenprojects.co.za/logo.png",
              url: "https://goshenprojects.co.za",
              telephone: "+27-61-530-7314",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22 Richards Dr, Halfway House",
                addressLocality: "Midrand",
                addressRegion: "Gauteng",
                postalCode: "1632",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -25.9967,
                longitude: 28.1242,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/goshenprojectssolutions",
                "https://www.instagram.com/goshenprojectssolutions",
                "https://www.x.com/goshen_projects",
              ],
            }),
          }}
        />
      </head>
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
