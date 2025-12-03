import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Edmonton | AV Rental & Audio Visual Services",
  description: "Edmonton's trusted event production company. Full AV rental with d&b audiotechnik audio, ROE Visual LED walls, lighting & staging. Serving Edmonton Convention Centre, Rogers Place & Northern Alberta.",
  keywords: [
    "event production company edmonton",
    "av company edmonton",
    "audio visual edmonton",
    "av rental edmonton",
    "led wall rental edmonton",
    "sound system rental edmonton",
    "lighting rental edmonton",
    "staging rental edmonton",
    "edmonton convention centre av",
    "rogers place production",
    "corporate events edmonton",
    "concert production edmonton",
    "hybrid events edmonton"
  ],
  openGraph: {
    title: "Event Production Company Edmonton | AV Rental & Audio Visual",
    description: "Full-service event production in Edmonton. d&b audio, ROE Visual LED walls, professional lighting. Edmonton Convention Centre & Rogers Place.",
    url: `${siteUrl}/locations/edmonton`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Company Edmonton | Showmax Events",
    description: "Full-service event production in Edmonton. d&b audio, ROE Visual LED walls, professional lighting & staging.",
  },
  alternates: {
    canonical: `${siteUrl}/locations/edmonton`
  }
};

export default function EdmontonPage() {
  const faqs = [
    {
      question: "What AV equipment do you provide in Edmonton?",
      answer: "We provide complete AV systems including d&b audiotechnik line arrays, ROE Visual LED walls, Robe and Martin lighting, DiGiCo consoles, and professional staging. Our inventory supports events from corporate meetings to arena-scale concerts at Rogers Place."
    },
    {
      question: "Do you provide AV services at the Edmonton Convention Centre?",
      answer: "Yes. We regularly provide event production at the Edmonton Convention Centre, Rogers Place, Jubilee Auditorium, and other major Edmonton venues. Our team is familiar with venue requirements and technical specifications."
    },
    {
      question: "Do you have crew based in Edmonton?",
      answer: "Yes. We have experienced technicians in Edmonton including audio engineers, lighting designers, and video technicians. We also deploy crews from Calgary and Vancouver for larger productions requiring additional support."
    },
    {
      question: "Can you support large concerts at Rogers Place?",
      answer: "Absolutely. Our inventory and crew can scale to support arena-level productions at Rogers Place. We provide concert-grade d&b line arrays, ROE Visual LED walls, and professional lighting systems."
    },
    {
      question: "What's your delivery area from Edmonton?",
      answer: "We serve all of Northern Alberta from Edmonton including Fort McMurray, Grande Prairie, and surrounding areas. We coordinate with our Calgary team for province-wide coverage."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Showmax Events Edmonton",
        "description": "Professional event production company providing AV rental, LED walls, audio systems, lighting, and staging services in Edmonton, Alberta.",
        "url": `${siteUrl}/locations/edmonton`,
        "logo": `${siteUrl}/showmax_logo.png`,
        "image": `${siteUrl}/showmax_logo.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Edmonton",
          "addressRegion": "AB",
          "addressCountry": "CA"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Edmonton"
          },
          {
            "@type": "State",
            "name": "Alberta"
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
        "areaServed": "Edmonton, Alberta",
        "description": "Full-service event production including d&b audiotechnik audio systems, ROE Visual LED walls, professional lighting, staging, and rigging for corporate events, concerts, and conferences in Edmonton."
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
          city="Edmonton"
          region="Northern Alberta"
          province="AB"
          heroTitle="Event Production Company Edmonton – AV Rental, LED Walls & Audio Visual Services"
          description="Showmax Events is Edmonton's trusted event production company, delivering complete AV solutions for corporate events, conferences, concerts, and festivals across Northern Alberta. From the Edmonton Convention Centre to Rogers Place, we provide d&b audiotechnik sound systems, ROE Visual LED walls, professional lighting, staging, and certified rigging with experienced crews."
        nearbyVenues={[
          "Edmonton Convention Centre",
          "Rogers Place",
          "Jubilee Auditorium",
          "Shaw Conference Centre",
          "River Cree Resort & Casino",
          "JW Marriott Edmonton",
          "Fairmont Hotel Macdonald",
          "The Westin Edmonton",
            "Expo Centre",
            "Winspear Centre"
        ]}
        servicesHighlight={[
            "Complete event production with d&b audiotechnik and ROE Visual LED inventory",
            "Experienced Edmonton-based crews and technicians",
            "Full production support for Edmonton Convention Centre and Rogers Place",
            "Arena and festival-scale production capabilities",
            "Certified rigging and professional staging systems",
            "Hybrid and virtual event production with broadcast-quality streaming",
            "Coordination with Calgary team for province-wide coverage"
          ]}
          faqs={faqs}
      />
      <Footer />
    </div>
    </>
  );
}
