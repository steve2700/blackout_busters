import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jerofiresolutions.com"),
  title: {
    default: "Jero Fire Solutions | Fire Detection, Suppression & Safety Compliance in Gauteng",
    template: "%s | Jero Fire Solutions",
  },
  description:
    "Jero Fire Solutions delivers fire detection and alarm systems, extinguisher servicing, sprinkler and suppression installation, and OHS fire safety compliance across Gauteng, Johannesburg and Pretoria.",
  keywords:
    "fire extinguisher servicing Gauteng, fire alarm installation Johannesburg, fire detection system maintenance, sprinkler system servicing Gauteng, fire safety compliance certificate Gauteng, OHS fire safety audit, fire equipment maintenance contract, emergency fire alarm repair, Jero Fire Solutions",
  authors: [{ name: "Jero Fire Solutions", url: "https://www.jerofiresolutions.com" }],
  creator: "Jero Fire Solutions",
  publisher: "Jero Fire Solutions",
  applicationName: "Jero Fire Solutions",
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
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5C0000" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.jerofiresolutions.com",
    siteName: "Jero Fire Solutions",
    title: "Jero Fire Solutions | Fire Detection, Suppression & Safety Compliance in Gauteng",
    description:
      "Fire detection, alarm, suppression and extinguisher servicing across Gauteng. Serving Johannesburg, Pretoria and surrounding areas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jero Fire Solutions, Fire Detection and Safety Compliance in Gauteng",
      },
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "Jero Fire Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jerofiresolutions",
    creator: "@jerofiresolutions",
    title: "Jero Fire Solutions | Fire Safety & Compliance Gauteng",
    description:
      "Fire detection, suppression, extinguisher servicing and compliance audits across Gauteng, Johannesburg and Pretoria.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.jerofiresolutions.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Fire Detection, Suppression & Safety Compliance",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    "geo.position": "-26.1076;28.0567",
    "ICBM": "-26.1076, 28.0567",
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
        <meta name="theme-color" content="#5C0000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jero Fire Solutions",
              url: "https://www.jerofiresolutions.com",
              logo: "https://www.jerofiresolutions.com/logo-square.png",
              image: "https://www.jerofiresolutions.com/og-image.png",
              description:
                "Fire detection and alarm systems, extinguisher servicing, sprinkler and suppression systems, and fire safety compliance in Gauteng",
              address: {
                "@type": "PostalAddress",
                streetAddress: "18 Profusa Street, Aston Manor",
                addressLocality: "Kempton Park",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              areaServed: ["Gauteng", "Johannesburg", "Pretoria", "Kempton Park", "Sandton", "Midrand", "Centurion"],
              sameAs: [
                "https://www.facebook.com/jerofiresolutions",
                "https://www.instagram.com/jerofiresolutions",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-78-133-6684",
                email: "014@jerofiresolutions.co.za",
                contactType: "Customer Service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.jerofiresolutions.com",
              name: "Jero Fire Solutions",
              image: "https://www.jerofiresolutions.com/logo-square.png",
              url: "https://www.jerofiresolutions.com",
              telephone: "+27-78-133-6684",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "18 Profusa Street, Aston Manor",
                addressLocality: "Kempton Park",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1076,
                longitude: 28.0567,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/jerofiresolutions",
                "https://www.instagram.com/jerofiresolutions",
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
