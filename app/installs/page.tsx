import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import InstallsContent from "./InstallsContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Showmax AV Installation & Integration | LED Walls, Audio, Lighting & Video Systems",
  description: "Showmax delivers world-class AV installations for venues, churches, nightclubs, corporate spaces and entertainment facilities. LED walls, audio, lighting, video, rigging & power—designed, installed and supported by experts.",
  keywords: [
    "AV installation",
    "LED wall installation",
    "permanent audio systems",
    "venue lighting installation",
    "church AV systems",
    "corporate AV integration",
    "nightclub sound system",
    "video wall installation",
    "rigging installation",
    "d&b audiotechnik installation",
    "ROE Visual LED installation",
    "concert venue installation",
    "event venue AV",
    "broadcast studio integration"
  ],
  openGraph: {
    title: "Showmax AV Installation & Integration | LED Walls, Audio, Lighting & Video Systems",
    description: "Showmax delivers world-class AV installations for venues, churches, nightclubs, corporate spaces and entertainment facilities. LED walls, audio, lighting, video, rigging & power—designed, installed and supported by experts.",
    url: `${siteUrl}/installs`,
    siteName: "Showmax Events",
    images: [
      {
        url: `${siteUrl}/showmax_logo.png`,
        width: 1200,
        height: 630,
        alt: "Showmax Events - AV Installation & Integration Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Showmax AV Installation & Integration | LED Walls, Audio, Lighting & Video Systems",
    description: "World-class AV installations for venues, churches, and corporate spaces. LED walls, audio, lighting, video systems installed by experts.",
    images: [`${siteUrl}/showmax_logo.png`]
  },
  alternates: {
    canonical: `${siteUrl}/installs`
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

export default function InstallsPage() {
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
            "name": "AV Installation & Integration",
            "item": `${siteUrl}/installs`
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Showmax Events",
        "url": siteUrl,
        "logo": `${siteUrl}/showmax_logo.png`,
        "description": "Professional AV installation and integration company providing permanent audio, video, lighting, and LED wall systems for venues, churches, and corporate spaces",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
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
            "name": "Canada"
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
        "serviceType": "AV Installation & Integration",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "Canada", "United States"],
        "description": "Complete AV installation and integration services including LED wall installation, professional audio systems (d&b audiotechnik), lighting design and installation, video systems, rigging infrastructure, and power distribution for venues, houses of worship, nightclubs, corporate spaces, and entertainment facilities.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "serviceType": "LED Wall Installation",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "Canada", "United States"],
        "description": "Professional LED wall installation services featuring ROE Visual panels, Brompton processing, large-format screens, curved displays, digital signage, and immersive LED environments for permanent venue installations.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Professional Audio System Installation",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "Canada", "United States"],
        "description": "Permanent audio system installation featuring d&b audiotechnik line arrays, distributed audio, sound system tuning, calibration, and operator training for venues, churches, and corporate spaces.",
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
        <InstallsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
