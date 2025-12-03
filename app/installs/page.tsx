import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import InstallsContent from "./InstallsContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Installation Company | LED Walls, Audio & Lighting Systems | Showmax",
  description: "Permanent AV installation for venues, churches, nightclubs & corporate spaces. d&b audiotechnik audio, ROE Visual LED walls, professional lighting. Design, install & support across Canada.",
  keywords: [
    // PRIMARY
    "av installation",
    "av installation company",
    "av integration",
    "permanent av systems",
    // LED/VIDEO
    "led wall installation",
    "led video wall installation",
    "video wall installation",
    "digital signage installation",
    // AUDIO
    "commercial audio installation",
    "church sound system installation",
    "venue audio installation",
    "d&b audiotechnik installation",
    "nightclub sound system",
    // LIGHTING
    "venue lighting installation",
    "stage lighting installation",
    "architectural lighting",
    // MARKETS
    "church av systems",
    "corporate av integration",
    "event venue av",
    "broadcast studio integration",
    "house of worship av"
  ],
  openGraph: {
    title: "AV Installation Company | Permanent LED, Audio & Lighting Systems",
    description: "Professional AV installation for venues, churches, nightclubs & corporate spaces. d&b audio, ROE Visual LED, and expert integration across Canada.",
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
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Installation Company | Showmax Events",
    description: "Permanent AV installation for venues, churches, and corporate spaces. LED walls, d&b audio, professional lighting. Design, install & support.",
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
            "name": "AV Installation",
            "item": `${siteUrl}/installs`
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Showmax Events",
        "url": siteUrl,
        "logo": `${siteUrl}/showmax_logo.png`,
        "description": "Professional AV installation company providing permanent audio, video, lighting, and LED wall systems for venues, churches, nightclubs, and corporate spaces across Canada.",
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
        "serviceType": "Commercial Audio System Installation",
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
      },
      {
        "@type": "Service",
        "serviceType": "Church AV Installation",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": ["British Columbia", "Alberta", "Ontario", "Canada", "United States"],
        "description": "Complete house of worship AV installation including sound systems for clear speech and powerful worship, LED video walls, stage lighting, live streaming infrastructure, and volunteer-friendly control systems.",
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
            "name": "What does an AV installation company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AV installation company designs, installs, and integrates permanent audio, video, and lighting systems for venues, churches, corporate spaces, and entertainment facilities. This includes system design, equipment procurement, physical installation, programming, calibration, training, and ongoing support."
            }
          },
          {
            "@type": "Question",
            "name": "What equipment do you install for permanent audio systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We install d&b audiotechnik line arrays and point-source systems, DiGiCo and Allen & Heath mixing consoles, Shure and Sennheiser wireless microphones, distributed audio systems, and subwoofer integration. All installations include system tuning, calibration, and operator training."
            }
          },
          {
            "@type": "Question",
            "name": "Do you install LED video walls for churches and venues?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We install ROE Visual LED walls with Brompton processing for churches, event venues, corporate lobbies, nightclubs, and broadcast studios. Options include fine-pitch indoor displays, outdoor LED screens, curved walls, LED ceilings, and immersive environments."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a venue AV installation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Installation timelines vary by project scope. A basic church audio upgrade may take 1-2 weeks, while a complete venue AV integration with LED walls, lighting, audio, and rigging typically takes 4-8 weeks. We provide detailed project schedules during the design phase."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide training after installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All our installations include comprehensive operator training. We train your staff or volunteers on system operation, basic troubleshooting, and maintenance. We also provide documentation and ongoing technical support."
            }
          },
          {
            "@type": "Question",
            "name": "What areas do you serve for AV installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide AV installation services across Canada, including British Columbia (Vancouver, Victoria, Kelowna), Alberta (Calgary, Edmonton), and Ontario (Toronto, GTA). We also serve select US markets for larger projects."
            }
          },
          {
            "@type": "Question",
            "name": "What types of venues do you install AV systems for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We install permanent AV systems for event venues and convention centres, houses of worship and churches, nightclubs and entertainment venues, corporate boardrooms and conference centres, broadcast and virtual production studios, and performing arts theatres."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer ongoing support after installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide ongoing technical support, preventive maintenance, and system upgrades. Our rental division can also supplement your installed system with additional equipment for larger events."
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
        <InstallsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
