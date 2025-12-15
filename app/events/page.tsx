import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import EventsContent from "./EventsContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Canada | Live & Virtual Events | Showmax",
  description: "Full-service event production with d&b audiotechnik audio, ROE Visual LED walls, and professional lighting. Live, hybrid & virtual events across Vancouver, Calgary, Edmonton & Toronto. Get a quote today.",
  keywords: [
    // PRIMARY (highest volume from gap analysis)
    "event production company",
    "event production vancouver",
    "event production calgary",
    "av company vancouver",
    "audio visual services",
    // SECONDARY (commercial intent)
    "live event production",
    "hybrid event production",
    "virtual event production",
    "concert production canada",
    "corporate event production",
    // EQUIPMENT (brand searches)
    "d&b audiotechnik rental",
    "ROE Visual LED wall rental",
    "sound system rental",
    "led wall rental",
    "event lighting rental",
    // LOCATION MODIFIERS
    "event production edmonton",
    "event production toronto",
    "production company vancouver",
    "av company calgary"
  ],
  openGraph: {
    title: "Event Production Company | Live & Virtual Events Across North America",
    description: "Professional event production with premium AV equipment. d&b audio, ROE Visual LED, and expert crews for concerts, conferences & corporate events.",
    url: `${siteUrl}/events`,
    siteName: "Showmax Events",
    images: [
      {
        url: `${siteUrl}/events/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Showmax Events - Professional Event Production Company"
      }
    ],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Company | Showmax Events",
    description: "Full-service event production across North America. d&b audio, ROE Visual LED walls, professional lighting. Las Vegas, Seattle, Vancouver, Calgary, Edmonton, Toronto.",
    images: [`${siteUrl}/events/opengraph-image`]
  },
  alternates: {
    canonical: `${siteUrl}/events`
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

export default function EventsPage() {
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
            "name": "Event Production",
            "item": `${siteUrl}/events`
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Showmax Events",
        "url": siteUrl,
        "logo": `${siteUrl}/showmax_logo.png`,
        "description": "Full-service event production company providing live, hybrid, and virtual event services across North America with d&b audiotechnik audio, ROE Visual LED walls, and professional lighting.",
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
            "addressLocality": "Edmonton",
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does an event production company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An event production company manages all technical aspects of live, hybrid, and virtual events. This includes audio systems, LED video walls, lighting design, staging, rigging, and crew coordination. We handle everything from initial planning and equipment selection through on-site operation and load-out."
            }
          },
          {
            "@type": "Question",
            "name": "What audio equipment do you use for concerts and corporate events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use d&b audiotechnik line array systems—the same brand used on major world tours. Our inventory includes J-Series, Y-Series, and V-Series arrays with DiGiCo digital mixing consoles. For corporate events, we also provide QSC powered speakers and Shure wireless microphone systems."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide LED walls for events in Vancouver and Calgary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We have one of the largest ROE Visual LED wall inventories across North America. We provide indoor and outdoor panels in pixel pitches from 1.5mm to 5mm, with Brompton processing and Barco switching. Available for events in Las Vegas, Seattle, Vancouver, Calgary, Edmonton, Toronto, and across North America."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between hybrid and virtual events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hybrid events combine an in-person audience with remote viewers through live streaming. Virtual events are fully online with no physical audience. Both require professional multi-camera production, encoding, and platform management. We provide complete production for both formats."
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book event production services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For large events (500+ attendees), we recommend booking 3-6 months in advance to ensure equipment availability. Smaller corporate events can often be accommodated with 2-4 weeks notice. Last-minute requests are possible depending on inventory and crew availability."
            }
          },
          {
            "@type": "Question",
            "name": "What areas do you serve outside Vancouver?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide event production services across North America. Our primary markets include Las Vegas, Seattle, Vancouver (headquarters), Calgary, Edmonton, Toronto, and the Greater Toronto Area. We also serve additional US markets including Los Angeles, San Francisco, San Diego, Palm Springs, and Phoenix."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide crew with equipment rentals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All our production packages include experienced technicians—A1 audio engineers, lighting designers, LED technicians, and certified riggers. We recommend full-service packages to ensure optimal equipment performance and safety compliance."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle large-scale concerts and festivals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our inventory scales from 50-person corporate meetings to 50,000+ concert audiences. We've provided production for major festivals, arena concerts, and stadium events across North America using d&b audiotechnik, ROE Visual, and Robe systems."
            }
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
        <EventsContent />
      </Suspense>
      <Footer />
    </div>
  );
}

