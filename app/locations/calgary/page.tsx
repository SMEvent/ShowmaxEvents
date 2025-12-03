import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Calgary | AV Rental & Audio Visual Services",
  description: "Calgary's trusted event production company. Full AV rental with d&b audiotechnik audio, ROE Visual LED walls, lighting & staging. Serving TELUS Convention Centre, BMO Centre & Stampede Park.",
  keywords: [
    "event production company calgary",
    "av company calgary",
    "audio visual calgary",
    "av rental calgary",
    "led wall rental calgary",
    "sound system rental calgary",
    "lighting rental calgary",
    "staging rental calgary",
    "telus convention centre av",
    "bmo centre av",
    "stampede park production",
    "corporate events calgary",
    "concert production calgary",
    "hybrid events calgary"
  ],
  openGraph: {
    title: "Event Production Company Calgary | AV Rental & Audio Visual",
    description: "Full-service event production in Calgary. d&b audio, ROE Visual LED walls, professional lighting. TELUS Convention Centre, BMO Centre & Stampede Park.",
    url: `${siteUrl}/locations/calgary`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Company Calgary | Showmax Events",
    description: "Full-service event production in Calgary. d&b audio, ROE Visual LED walls, professional lighting & staging.",
  },
  alternates: {
    canonical: `${siteUrl}/locations/calgary`
  }
};

export default function CalgaryPage() {
  const faqs = [
    {
      question: "What AV equipment do you provide in Calgary?",
      answer: "We provide complete AV systems including d&b audiotechnik line arrays, ROE Visual LED walls, Robe and Martin lighting, DiGiCo consoles, and professional staging. Our Calgary inventory supports events from corporate meetings to arena-scale concerts."
    },
    {
      question: "Do you provide AV services at the TELUS Convention Centre?",
      answer: "Yes. We regularly provide event production at the TELUS Convention Centre, BMO Centre, Scotiabank Saddledome, and other major Calgary venues. Our team is familiar with venue requirements and load-in procedures."
    },
    {
      question: "Can you support Calgary Stampede events?",
      answer: "Absolutely. We provide full production support for Stampede Park events including concerts, corporate functions, and festivals. Our inventory and crew scale to handle large-format productions."
    },
    {
      question: "Do you have crew based in Calgary?",
      answer: "Yes. We have experienced technicians in Calgary including A1 audio engineers, lighting designers, LED technicians, and certified riggers. We also deploy crews from Vancouver for larger productions."
    },
    {
      question: "What's your delivery area from Calgary?",
      answer: "We serve all of Southern Alberta from Calgary including Red Deer, Lethbridge, Medicine Hat, Banff, Lake Louise, and Canmore. We also support events in Edmonton and Northern Alberta."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Showmax Events Calgary",
        "description": "Professional event production company providing AV rental, LED walls, audio systems, lighting, and staging services in Calgary, Alberta.",
        "url": `${siteUrl}/locations/calgary`,
      "logo": `${siteUrl}/showmax_logo.png`,
        "image": `${siteUrl}/showmax_logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "addressCountry": "CA"
    },
        "areaServed": [
          {
      "@type": "City",
            "name": "Calgary"
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
        "areaServed": "Calgary, Alberta",
        "description": "Full-service event production including d&b audiotechnik audio systems, ROE Visual LED walls, professional lighting, staging, and rigging for corporate events, concerts, and conferences in Calgary."
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
          city="Calgary"
          region="Southern Alberta"
          province="AB"
          heroTitle="Event Production Company Calgary – AV Rental, LED Walls & Audio Visual Services"
          description="Showmax Events is Calgary's trusted event production company, delivering complete AV solutions for corporate events, conferences, concerts, and festivals across Southern Alberta. From the TELUS Convention Centre to Stampede Park, we provide d&b audiotechnik sound systems, ROE Visual LED walls, professional lighting, staging, and certified rigging with experienced local crews."
          nearbyVenues={[
            "TELUS Convention Centre",
            "BMO Centre",
            "Scotiabank Saddledome",
            "Arts Commons",
            "Jubilee Auditorium",
            "Stampede Park",
            "Hotel Arts",
            "Fairmont Palliser",
            "The Westin Calgary",
            "Hyatt Regency Calgary",
            "Calgary TELUS Spark",
            "Studio Bell",
            "Calgary Tower"
          ]}
          servicesHighlight={[
            "Complete event production with d&b audiotechnik and ROE Visual LED inventory",
            "Experienced Calgary-based crews and technicians",
            "Full production support for TELUS Convention Centre and BMO Centre",
            "Stampede and festival-scale production capabilities",
            "Certified rigging and professional staging systems",
            "Hybrid and virtual event production with broadcast-quality streaming",
            "Same-day equipment delivery across Calgary and Southern Alberta"
          ]}
          faqs={faqs}
        />
        <Footer />
      </div>
    </>
  );
}
