import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Vancouver | AV Equipment, Staging, Lighting & Rigging",
  description: "Leading event production company in Vancouver, BC. Complete audio visual, LED walls, sound systems, lighting, staging, rigging, and drape for corporate events, conferences, and concerts. Serving Vancouver Convention Centre and major venues.",
  keywords: [
    "event production company vancouver",
    "av company vancouver",
    "audio visual company vancouver",
    "av equipment rental vancouver",
    "led wall rental vancouver",
    "sound system rental vancouver",
    "lighting rental vancouver",
    "staging rental vancouver",
    "rigging services vancouver",
    "vancouver convention centre av",
    "corporate events vancouver",
    "video production vancouver"
  ],
  openGraph: {
    title: "Event Production Services Vancouver | AV, Staging, Lighting & Rigging",
    description: "Professional event production company in Vancouver, BC. Complete audio visual, staging, lighting, rigging, drape, LED walls, and sound systems for events of any scale.",
    url: `${siteUrl}/locations/vancouver`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function VancouverPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Production Services Vancouver",
    "provider": {
      "@type": "Organization",
      "name": "Showmax Events",
      "url": siteUrl,
      "logo": `${siteUrl}/showmax_logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Vancouver",
      "containedIn": {
        "@type": "State",
        "name": "British Columbia"
      }
    },
    "serviceType": "Event Production Services",
    "description": "Professional event production company providing complete audio visual, staging, lighting, rigging, drape, LED walls, sound systems, and technical crew in Vancouver, BC."
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
          heroTitle="Leading Event Production Company in Vancouver | Full-Service AV, Staging & Rigging"
          description="Headquartered in Vancouver, Showmax Events is British Columbia's premier full-service event production company. From the Vancouver Convention Centre to intimate corporate venues, we deliver complete event solutions including audio visual, staging, certified rigging, lighting, drape, LED video walls, and d&b audiotechnik sound systems. Comprehensive production services with experienced crews, trusted by Fortune 500 companies, major brands, and production partners across the Lower Mainland."
          nearbyVenues={[
            "Vancouver Convention Centre",
            "BC Place Stadium",
            "Rogers Arena",
            "Queen Elizabeth Theatre",
            "Orpheum Theatre",
            "Vancouver Playhouse",
            "Rio Theatre",
            "UBC Robson Square",
            "Pan Pacific Vancouver",
            "Fairmont Hotel Vancouver",
            "Terminal City Club",
            "Science World",
            "Vancouver Art Gallery",
            "Parq Vancouver",
            "BMO Theatre Centre",
            "The Centre in Vancouver for Performing Arts"
          ]}
          servicesHighlight={[
            "Complete event production: audio, video, lighting, staging, rigging, and drape",
            "Largest ROE Visual LED wall inventory in Western Canada",
            "Full d&b audiotechnik J, Y, Q, and B-Series line arrays",
            "Certified rigging and professional staging systems",
            "Experienced production crews, technicians, and show operators based in Vancouver",
            "Same-day equipment delivery across Metro Vancouver",
            "Trusted by Lululemon, TED, Netflix, and major events at Vancouver Convention Centre",
            "End-to-end production management from concept to load-out"
          ]}
        />
        <Footer />
      </div>
    </>
  );
}

