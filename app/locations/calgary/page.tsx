import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Calgary | AV, Staging, Lighting & Rigging Services",
  description: "Professional event production company in Calgary, AB. Complete audio visual, staging, rigging, lighting, LED walls, and sound systems for corporate events, conferences, and concerts. Serving TELUS Convention Centre and major Calgary venues.",
  keywords: [
    "event production company calgary",
    "lighting rental calgary",
    "stage lighting calgary",
    "staging rental calgary",
    "rigging services calgary",
    "av company calgary",
    "calgary audio visual",
    "led wall rental calgary",
    "sound system rental calgary",
    "telus convention centre av",
    "corporate events calgary"
  ],
  openGraph: {
    title: "Event Production Services Calgary | AV, Staging, Lighting & Rigging",
    description: "Professional event production company in Calgary, AB. Complete audio visual, staging, lighting, rigging, drape, LED walls, and sound systems for events of any scale.",
    url: `${siteUrl}/locations/calgary`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function CalgaryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Production Services Calgary",
    "provider": {
      "@type": "Organization",
      "name": "Showmax Events",
      "url": siteUrl,
      "logo": `${siteUrl}/showmax_logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Calgary",
      "containedIn": {
        "@type": "State",
        "name": "Alberta"
      }
    },
    "serviceType": "Event Production Services",
    "description": "Professional event production company providing complete audio visual, staging, lighting, rigging, drape, LED walls, sound systems, and technical crew in Calgary, Alberta."
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
          heroTitle="Premier Event Production Company in Calgary | Full-Service AV, Staging & Rigging"
          description="Showmax Events delivers comprehensive event production services to Calgary and Southern Alberta. From corporate events at the TELUS Convention Centre to large-scale productions and galas, we provide complete solutions including audio visual, staging, certified rigging, lighting, drape, d&b audiotechnik sound systems, and ROE Visual LED walls. Expert production crews and comprehensive equipment inventory for events of any scale in Calgary."
          nearbyVenues={[
            "TELUS Convention Centre",
            "BMO Centre",
            "Scotiabank Saddledome",
            "Arts Commons",
            "Jubilee Auditorium",
            "Calgary TELUS Spark",
            "Stampede Park",
            "Hotel Arts",
            "Fairmont Palliser",
            "The Westin Calgary",
            "Calgary Tower",
            "Studio Bell"
          ]}
          servicesHighlight={[
            "Complete event production: audio, video, lighting, staging, rigging, and drape",
            "Premium touring equipment for Calgary events",
            "Certified rigging and professional staging systems",
            "Experienced production crews familiar with major Calgary venues",
            "Full production support for Stampede, corporate events, and conferences",
            "Comprehensive solutions for festivals and large-scale productions",
            "Hybrid and virtual event production with broadcast-quality streaming",
            "End-to-end technical management from load-in to strike"
          ]}
        />
        <Footer />
      </div>
    </>
  );
}

