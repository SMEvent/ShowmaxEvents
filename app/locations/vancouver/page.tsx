import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Audio Visual Company Vancouver | AV Rental & Event Production | Showmax",
  description: "Vancouver's trusted audio visual company. Full AV rental with d&b audiotechnik audio, ROE Visual LED walls, lighting & staging. Same-day delivery across Metro Vancouver. Vancouver Convention Centre specialists.",
  keywords: [
    "audio visual company vancouver",
    "av company vancouver",
    "event production company vancouver",
    "av rental vancouver",
    "audio visual rental vancouver",
    "led wall rental vancouver",
    "sound system rental vancouver",
    "lighting rental vancouver",
    "staging rental vancouver",
    "projector rental vancouver",
    "vancouver convention centre av",
    "corporate events vancouver",
    "concert production vancouver",
    "video production vancouver",
    "hybrid events vancouver"
  ],
  openGraph: {
    title: "Audio Visual Company Vancouver | AV Rental & Event Production",
    description: "Vancouver's trusted AV company. d&b audio, ROE Visual LED walls, professional lighting. Same-day delivery. Vancouver Convention Centre specialists.",
    url: `${siteUrl}/locations/vancouver`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Visual Company Vancouver | Showmax Events",
    description: "Full-service AV company in Vancouver. d&b audio, ROE Visual LED walls, professional lighting & staging.",
  },
  alternates: {
    canonical: `${siteUrl}/locations/vancouver`
  }
};

export default function VancouverPage() {
  const faqs = [
    {
      question: "What audio visual equipment do you rent in Vancouver?",
      answer: "We rent complete AV systems including d&b audiotechnik line arrays, ROE Visual LED walls, Robe and Martin lighting, DiGiCo mixing consoles, Sony cameras, and Barco video processing. Our inventory covers sound, video, lighting, rigging, staging, and drape for events of any size."
    },
    {
      question: "Do you provide AV services at the Vancouver Convention Centre?",
      answer: "Yes. Showmax Events regularly provides audio visual production at the Vancouver Convention Centre (East and West buildings). We're familiar with the venue's technical requirements and have experience supporting conferences, galas, trade shows, and corporate events there."
    },
    {
      question: "How quickly can you deliver AV equipment in Vancouver?",
      answer: "We offer same-day delivery across Metro Vancouver for most equipment. Our warehouse is locally based in Vancouver, allowing us to respond quickly to urgent requests and last-minute changes."
    },
    {
      question: "Do you provide technicians with equipment rentals?",
      answer: "Yes. All our AV rentals can include professional operators—A1 audio engineers, lighting designers, LED technicians, and certified riggers. We recommend full-service packages to ensure optimal performance and safety."
    },
    {
      question: "What types of events do you support in Vancouver?",
      answer: "We support corporate conferences, galas and awards ceremonies, concerts and festivals, trade shows, product launches, hybrid events, and broadcast productions. Our team handles events from 50-person meetings to 50,000+ concert audiences."
    },
    {
      question: "What areas do you serve outside Vancouver?",
      answer: "Beyond Metro Vancouver, we provide AV services throughout British Columbia including Whistler, Victoria, Kelowna, and Kamloops. We also serve Alberta (Calgary, Edmonton, Banff) and have offices supporting Toronto and US markets."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Showmax Events Vancouver",
        "description": "Vancouver's leading audio visual company providing event production, AV rental, LED walls, sound systems, lighting, and staging services.",
        "url": `${siteUrl}/locations/vancouver`,
      "logo": `${siteUrl}/showmax_logo.png`,
        "image": `${siteUrl}/showmax_logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
    },
        "areaServed": [
          {
      "@type": "City",
            "name": "Vancouver"
          },
          {
        "@type": "State",
        "name": "British Columbia"
      }
        ],
        "priceRange": "$$$$",
        "openingHours": "Mo-Fr 08:00-18:00"
      },
      {
        "@type": "Service",
        "serviceType": "Audio Visual Services",
        "provider": {
          "@type": "Organization",
          "name": "Showmax Events"
        },
        "areaServed": "Vancouver, British Columbia",
        "description": "Full-service audio visual company providing event production, AV rental, d&b audiotechnik audio systems, ROE Visual LED walls, professional lighting, staging, and rigging for events in Vancouver and Metro Vancouver."
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
          city="Vancouver"
          region="Lower Mainland"
          province="BC"
          heroTitle="Audio Visual Company Vancouver – AV Rental, LED Walls & Event Production"
          description="Headquartered in Vancouver, Showmax Events is British Columbia's leading audio visual company. From the Vancouver Convention Centre to intimate corporate venues, we deliver complete event solutions including d&b audiotechnik sound systems, ROE Visual LED walls, professional lighting, staging, and certified rigging. Same-day equipment delivery across Metro Vancouver with experienced local crews."
          nearbyVenues={[
            "Vancouver Convention Centre",
            "BC Place Stadium",
            "Rogers Arena",
            "Queen Elizabeth Theatre",
            "Orpheum Theatre",
            "Vancouver Playhouse",
            "Science World",
            "Vancouver Art Gallery",
            "Pan Pacific Vancouver",
            "Fairmont Hotel Vancouver",
            "Parq Vancouver",
            "Terminal City Club",
            "UBC Robson Square",
            "BMO Theatre Centre",
            "The Centre in Vancouver for Performing Arts",
            "Rio Theatre"
          ]}
          servicesHighlight={[
            "Vancouver headquarters with largest equipment inventory in Western Canada",
            "Same-day delivery across Metro Vancouver",
            "Vancouver Convention Centre specialists",
            "d&b audiotechnik J, Y, Q, and B-Series line arrays",
            "Largest ROE Visual LED wall inventory in BC",
            "Experienced local crews, technicians, and show operators",
            "Trusted by Lululemon, TED, Netflix, and major events",
            "End-to-end production management from concept to load-out"
          ]}
          faqs={faqs}
        />
        <Footer />
      </div>
    </>
  );
}
