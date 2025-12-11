import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import VenuesContent from "./VenuesContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Turnkey Event Venues Vancouver | Installed AV Systems - Showmax Events",
  description: "Rent fully-equipped event venues with installed sound, lighting & LED walls. Rocky Mountaineer Station, Aurum Event Centre & Plaza of Nations in Vancouver.",
  keywords: [
    "event venues Vancouver",
    "turnkey event space",
    "venues with installed AV",
    "Vancouver event venues",
    "pre-installed AV venues",
    "event space Vancouver",
    "concert venue Vancouver",
    "corporate event venue",
    "venue with sound system",
    "venue with LED wall"
  ],
  openGraph: {
    title: "Turnkey Event Venues Vancouver | Installed AV Systems - Showmax Events",
    description: "Rent fully-equipped event venues with installed sound, lighting & LED walls. Rocky Mountaineer Station, Aurum Event Centre & Plaza of Nations in Vancouver.",
    url: `${siteUrl}/venues`,
    siteName: "Showmax Events",
    images: [
      {
        url: `${siteUrl}/showmax_logo.png`,
        width: 1200,
        height: 630,
        alt: "Showmax Events - Turnkey Event Venues"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Event Venues Vancouver | Installed AV Systems",
    description: "Fully-equipped event venues with installed sound, lighting & LED walls in Vancouver.",
    images: [`${siteUrl}/showmax_logo.png`]
  },
  alternates: {
    canonical: `${siteUrl}/venues`
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function VenuesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Venues",
            "item": `${siteUrl}/venues`
          }
        ]
      },
      {
        "@type": "Place",
        "name": "Rocky Mountaineer Station",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1755 Cottrell Street",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "maximumAttendeeCapacity": 1255,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 12500,
          "unitCode": "FTK"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Professional Audio System"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "LED Screen"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Professional Lighting"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Free Parking"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Free Internet"
          }
        ]
      },
      {
        "@type": "Place",
        "name": "Aurum Event Centre",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "750 Pacific Blvd South",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "maximumAttendeeCapacity": 1000,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 10000,
          "unitCode": "FTK"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Giant LED Screen"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Professional Audio System"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Professional Lighting"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Performance Stage"
          }
        ]
      },
      {
        "@type": "Place",
        "name": "Plaza of Nations",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "750 Pacific Blvd South",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "maximumAttendeeCapacity": 8000,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 25000,
          "unitCode": "FTK"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "SL100 Mobile Stage"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "LED Wall"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Professional Audio System"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Professional Lighting"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Power Distribution"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Indoor/Outdoor Option"
          }
        ]
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Suspense
        fallback={
          <main className="flex-1 bg-black pt-24">
            <div className="container mx-auto flex h-[60vh] items-center justify-center px-4">
              <span className="text-white">Loading...</span>
            </div>
          </main>
        }
      >
        <VenuesContent />
      </Suspense>
      <Footer />
    </div>
  );
}
