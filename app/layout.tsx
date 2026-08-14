import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

// TODO: replace with the confirmed live domain before launch
const SITE_URL = "https://www.blackoutbusters.co.za"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blackout Busters | Electrical Installation, Repairs & Solar Solutions in Gauteng",
    template: "%s | Blackout Busters",
  },
  description:
    "Blackout Busters provides electrical installation and repairs, solar installation, backup power (inverter & battery), generator servicing, DB board upgrades, and compliance certificates (COC) across Gauteng, Johannesburg and Pretoria.",
  keywords:
    "electrical installation Gauteng, electrician Johannesburg, solar installation Gauteng, backup power inverter battery, generator installation servicing, DB board upgrade, compliance certificate COC, load shedding solutions, geyser installation repairs, CCTV installation, emergency electrician 24 hour, commercial industrial electrician, Blackout Busters",
  authors: [{ name: "Blackout Busters", url: SITE_URL }],
  creator: "Blackout Busters",
  publisher: "Blackout Busters",
  applicationName: "Blackout Busters",
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
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0B2545" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: "Blackout Busters",
    title: "Blackout Busters | Electrical Installation, Repairs & Solar Solutions in Gauteng",
    description:
      "Electrical installation, repairs, solar and backup power solutions across Gauteng. Serving Johannesburg, Pretoria and surrounding areas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blackout Busters, Electrical & Solar Solutions in Gauteng",
      },
      {
        url: "/logo-square.png",
        width: 512,
        height: 512,
        alt: "Blackout Busters Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blackoutbusters", // TODO: confirm handle
    creator: "@blackoutbusters", // TODO: confirm handle
    title: "Blackout Busters | Electrical & Solar Solutions Gauteng",
    description:
      "Electrical installation, repairs, solar, backup power, generators, and compliance certificates across Gauteng, Johannesburg and Pretoria.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "your-google-verification-code", // TODO: add real code once domain is live
  },
  category: "Electrical Installation, Repairs & Solar Solutions",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
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
        <meta name="theme-color" content="#0B2545" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Blackout Busters",
              url: SITE_URL,
              logo: `${SITE_URL}/logo-square.png`,
              image: `${SITE_URL}/og-image.png`,
              description:
                "Electrical installation and repairs, solar installation, backup power, generator servicing, DB board upgrades, and compliance certificates in Gauteng",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
                // TODO: add streetAddress and addressLocality once confirmed
              },
              areaServed: ["Gauteng", "Johannesburg", "Pretoria", "Kempton Park", "Sandton", "Midrand", "Centurion"], // TODO: confirm actual coverage
              sameAs: [
                // TODO: add social links once created, e.g.
                // "https://www.facebook.com/blackoutbusters",
                // "https://www.instagram.com/blackoutbusters",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-83-617-1112",
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
              "@id": SITE_URL,
              name: "Blackout Busters",
              image: `${SITE_URL}/logo-square.png`,
              url: SITE_URL,
              telephone: "+27-83-617-1112",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
                // TODO: add streetAddress and addressLocality once confirmed
              },
              // TODO: add geo coordinates once a physical address is confirmed
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
              sameAs: [],
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
        <SpeedInsights />
      </body>
    </html>
  )
}
