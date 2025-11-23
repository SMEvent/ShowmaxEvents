import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "LED Wall Rental Toronto | Video Screens & Event Production Services",
  description: "Professional LED wall rental in Toronto and the GTA. ROE Visual LED screens, video walls, and complete event production for corporate events, conferences, and concerts. Serving Metro Toronto Convention Centre and major venues.",
  keywords: [
    "led wall rental toronto",
    "video wall rental toronto",
    "led screen rental toronto",
    "av company toronto",
    "event production toronto",
    "sound system rental toronto",
    "lighting rental toronto",
    "metro toronto convention centre av",
    "corporate events toronto",
    "gta av services"
  ],
  openGraph: {
    title: "Audio Visual Services Toronto | AV Production & Equipment Rental",
    description: "Professional audio visual services in Toronto, ON. Complete event production, AV equipment rental, and technical services for the GTA.",
    url: `${siteUrl}/locations/toronto`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function TorontoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Audio Visual Services Toronto",
    "provider": {
      "@type": "Organization",
      "name": "Showmax Events",
      "url": siteUrl,
      "logo": `${siteUrl}/showmax_logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Toronto",
      "containedIn": {
        "@type": "State",
        "name": "Ontario"
      }
    },
    "serviceType": "Audio Visual Production Services",
    "description": "Professional audio visual services including event production, equipment rental, LED walls, sound systems, lighting, and hybrid event solutions in Toronto and the Greater Toronto Area."
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
          heroTitle="LED Wall Rental Toronto | ROE Visual Video Screens & Event Production"
          description="Showmax Events provides comprehensive audio visual production services throughout Toronto and the GTA. From major conferences at the Metro Toronto Convention Centre to corporate galas and live concerts, we deliver broadcast-quality results with premium d&b audiotechnik sound systems, ROE Visual LED walls, and complete lighting packages. Professional technical crew and comprehensive production support for Ontario's largest events."
          nearbyVenues={[
            "Metro Toronto Convention Centre",
            "Scotiabank Arena",
            "Four Seasons Centre",
            "Roy Thomson Hall",
            "Princess of Wales Theatre",
            "Royal Alexandra Theatre",
            "Massey Hall",
            "Meridian Hall",
            "Budweiser Stage",
            "Fairmont Royal York",
            "Shangri-La Toronto",
            "Arcadian Court",
            "One King West",
            "Liberty Grand",
            "Evergreen Brick Works"
          ]}
          servicesHighlight={[
            "Full-service AV production for Toronto's largest venues",
            "Premium touring equipment and experienced Ontario-based crew",
            "Complete production management for conferences and corporate events",
            "Hybrid event solutions with professional live streaming",
            "Fast deployment across the Greater Toronto Area",
            "Trusted by major brands and production companies in Ontario"
          ]}
        />
        <Footer />
      </div>
    </>
  );
}

