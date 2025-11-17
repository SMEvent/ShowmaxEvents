import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AboutContent from "./AboutContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "About Showmax Events | Professional Event Production & AV Integration Company",
  description: "Showmax Events is a full-service production company delivering world-class live events, AV installations, and technical solutions across Canada and USA. Trusted by TED, Amazon, Lululemon, Netflix, and more.",
  keywords: [
    "event production company",
    "AV integration company",
    "professional event services",
    "live event production Vancouver",
    "AV installation Calgary",
    "event production Toronto",
    "d&b audiotechnik",
    "ROE Visual LED walls",
    "concert production company",
    "corporate event company",
    "technical production services"
  ],
  openGraph: {
    title: "About Showmax Events | Professional Event Production & AV Integration Company",
    description: "Full-service production company delivering world-class live events, AV installations, and technical solutions. Trusted by Fortune 500 companies and global brands.",
    url: `${siteUrl}/about`,
    siteName: "Showmax Events",
    images: [
      {
        url: `${siteUrl}/showmax_logo.png`,
        width: 1200,
        height: 630,
        alt: "Showmax Events - Professional Event Production Company"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Showmax Events | Professional Event Production & AV Integration",
    description: "Full-service production company delivering world-class events and AV solutions. Trusted by TED, Amazon, Netflix, and more.",
    images: [`${siteUrl}/showmax_logo.png`]
  },
  alternates: {
    canonical: `${siteUrl}/about`
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

export default function AboutPage() {
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
            "name": "About Us",
            "item": `${siteUrl}/about`
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Showmax Events",
        "url": siteUrl,
        "logo": `${siteUrl}/showmax_logo.png`,
        "description": "Professional event production and AV integration company providing complete technical production services, permanent AV installations, equipment rentals, and virtual production solutions across Canada and USA",
        "foundingDate": "2003",
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
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "knowsAbout": [
          "Event Production",
          "AV Installation",
          "LED Wall Systems",
          "Professional Audio Systems",
          "Lighting Design",
          "Video Production",
          "Rigging Services",
          "Virtual Production",
          "Hybrid Events"
        ],
        "sameAs": []
      },
      {
        "@type": "ProfessionalService",
        "name": "Showmax Events",
        "description": "Full-service event production and AV integration company serving Canada and USA",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "Canada", "United States"],
        "priceRange": "$$$"
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
        <AboutContent />
      </Suspense>
      <Footer />
    </div>
  );
}
