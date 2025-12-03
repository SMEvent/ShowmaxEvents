import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Toronto | AV Rental & Audio Visual Services",
  description: "Toronto's trusted event production company. Full AV rental with d&b audiotechnik audio, ROE Visual LED walls, lighting & staging. Serving Metro Toronto Convention Centre, Scotiabank Arena & GTA venues.",
  keywords: [
    "event production company toronto",
    "av company toronto",
    "audio visual toronto",
    "av rental toronto",
    "led wall rental toronto",
    "video wall rental toronto",
    "sound system rental toronto",
    "lighting rental toronto",
    "staging rental toronto",
    "metro toronto convention centre av",
    "scotiabank arena production",
    "corporate events toronto",
    "concert production toronto",
    "gta av services",
    "hybrid events toronto"
  ],
  openGraph: {
    title: "Event Production Company Toronto | AV Rental & Audio Visual",
    description: "Full-service event production in Toronto & GTA. d&b audio, ROE Visual LED walls, professional lighting. Metro Toronto Convention Centre & major venues.",
    url: `${siteUrl}/locations/toronto`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Company Toronto | Showmax Events",
    description: "Full-service event production in Toronto. d&b audio, ROE Visual LED walls, professional lighting & staging.",
  },
  alternates: {
    canonical: `${siteUrl}/locations/toronto`
  }
};

export default function TorontoPage() {
  const faqs = [
    {
      question: "What AV equipment do you provide in Toronto?",
      answer: "We provide complete AV systems including d&b audiotechnik line arrays, ROE Visual LED walls, Robe and Martin lighting, DiGiCo consoles, and professional staging. Our Toronto inventory supports events from corporate meetings to arena-scale concerts at Scotiabank Arena."
    },
    {
      question: "Do you provide AV services at the Metro Toronto Convention Centre?",
      answer: "Yes. We regularly provide event production at the Metro Toronto Convention Centre, Scotiabank Arena, Roy Thomson Hall, and other major Toronto venues. Our team is experienced with GTA venue requirements and union protocols."
    },
    {
      question: "Do you have crew based in Toronto?",
      answer: "Yes. We have experienced technicians in Toronto including A1 audio engineers, lighting designers, LED technicians, and video operators. We maintain a full-service presence in the Greater Toronto Area."
    },
    {
      question: "Can you support large-scale events in the GTA?",
      answer: "Absolutely. Our inventory and crew can scale to support arena and stadium-level productions. We've provided production for major conferences, concerts, and corporate events throughout the Greater Toronto Area."
    },
    {
      question: "What areas do you serve from Toronto?",
      answer: "We serve the entire Greater Toronto Area including Mississauga, Brampton, Markham, Vaughan, Richmond Hill, and Oakville. We also support events across Ontario including Ottawa, Hamilton, and Niagara."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Showmax Events Toronto",
        "description": "Professional event production company providing AV rental, LED walls, audio systems, lighting, and staging services in Toronto and the Greater Toronto Area.",
        "url": `${siteUrl}/locations/toronto`,
      "logo": `${siteUrl}/showmax_logo.png`,
        "image": `${siteUrl}/showmax_logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
    },
        "areaServed": [
          {
      "@type": "City",
            "name": "Toronto"
          },
          {
        "@type": "State",
        "name": "Ontario"
      }
        ],
        "priceRange": "$$$$",
        "openingHours": "Mo-Fr 08:00-18:00"
      },
      {
        "@type": "Service",
        "serviceType": "Event Production Services",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": "Toronto, Ontario",
        "description": "Full-service event production including d&b audiotechnik audio systems, ROE Visual LED walls, professional lighting, staging, and rigging for corporate events, concerts, and conferences in Toronto and the GTA."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <LocationTemplate
          city="Toronto"
          region="Greater Toronto Area"
          province="ON"
          heroTitle="Event Production Company Toronto – AV Rental, LED Walls & Audio Visual Services"
          description="Showmax Events is Toronto's trusted event production company, delivering complete AV solutions for corporate events, conferences, concerts, and galas across the Greater Toronto Area. From the Metro Toronto Convention Centre to Scotiabank Arena, we provide d&b audiotechnik sound systems, ROE Visual LED walls, professional lighting, staging, and certified rigging with experienced Ontario crews."
          nearbyVenues={[
            "Metro Toronto Convention Centre",
            "Scotiabank Arena",
            "Roy Thomson Hall",
            "Massey Hall",
            "Meridian Hall",
            "Princess of Wales Theatre",
            "Royal Alexandra Theatre",
            "Four Seasons Centre",
            "Budweiser Stage",
            "Fairmont Royal York",
            "Shangri-La Toronto",
            "One King West",
            "Liberty Grand",
            "Evergreen Brick Works",
            "Arcadian Court"
          ]}
          servicesHighlight={[
            "Complete event production with d&b audiotechnik and ROE Visual LED inventory",
            "Experienced Toronto-based crews and technicians",
            "Full production support for Metro Toronto Convention Centre and major venues",
            "Arena and stadium-scale production capabilities",
            "Certified rigging and professional staging systems",
            "Hybrid and virtual event production with broadcast-quality streaming",
            "Fast deployment across the Greater Toronto Area"
          ]}
          faqs={faqs}
        />
        <Footer />
      </div>
    </>
  );
}
