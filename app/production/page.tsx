import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ProductionContent from "./ProductionContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Services Vancouver, Calgary, Toronto | Live, Hybrid & Virtual Events | Showmax Events",
  description: "World-class live event production, hybrid events, and virtual event services across Canada and USA. Professional audio (d&b audiotechnik), LED walls (ROE Visual), lighting, and rigging for concerts, conferences, and corporate events in Vancouver, Calgary, Banff, Toronto.",
  keywords: [
    "event production Vancouver",
    "live event production Calgary",
    "hybrid event production Toronto",
    "LED wall rental Vancouver",
    "concert production Canada",
    "corporate event AV",
    "conference production services",
    "d&b audiotechnik rental",
    "ROE Visual LED walls",
    "event lighting design",
    "virtual event production",
    "audio visual production BC",
    "event production Alberta",
    "live streaming services"
  ],
  openGraph: {
    title: "Event Production Services Vancouver, Calgary, Toronto | Showmax Events",
    description: "Professional live, hybrid & virtual event production across Canada. Premium audio, lighting, LED walls, and rigging for concerts, conferences, and corporate events.",
    url: `${siteUrl}/production`,
    siteName: "Showmax Events",
    images: [
      {
        url: `${siteUrl}/production/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Showmax Events - Event Production Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Services Vancouver, Calgary, Toronto | Showmax Events",
    description: "Professional live, hybrid & virtual event production across Canada. Premium audio, lighting, LED walls, and rigging for concerts and corporate events.",
    images: [`${siteUrl}/production/opengraph-image`]
  },
  alternates: {
    canonical: `${siteUrl}/production`
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

export default function ProductionPage() {
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
            "name": "Production Services",
            "item": `${siteUrl}/production`
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Showmax Events",
        "url": siteUrl,
        "logo": `${siteUrl}/showmax_logo.png`,
        "description": "Professional event production company providing live, hybrid, and virtual event services across Canada and USA",
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Vancouver",
            "addressRegion": "BC",
            "addressCountry": "CA"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Calgary",
            "addressRegion": "AB",
            "addressCountry": "CA"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Toronto",
            "addressRegion": "ON",
            "addressCountry": "CA"
          }
        ],
        "areaServed": [
          {
            "@type": "State",
            "name": "British Columbia"
          },
          {
            "@type": "State",
            "name": "Alberta"
          },
          {
            "@type": "State",
            "name": "Ontario"
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "sameAs": []
      },
      {
        "@type": "Service",
        "serviceType": "Live Event Production",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "United States"],
        "description": "Full-service live event production including concert-quality audio systems (d&b audiotechnik), professional lighting design, LED video walls (ROE Visual), and certified rigging services for concerts, festivals, corporate conferences, and brand activations.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Hybrid Event Production",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "United States"],
        "description": "Hybrid event production services combining in-person and virtual experiences with multi-camera livestream setups, real-time graphics, remote speaker coordination, and secure streaming platforms.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Virtual Event Production",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "United States"],
        "description": "Professional virtual event production with broadcast-level quality, multi-camera setups, encoding, switching, and audience engagement tools for online conferences and streaming events.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
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
        <ProductionContent />
      </Suspense>
      <Footer />
    </div>
  );
}

