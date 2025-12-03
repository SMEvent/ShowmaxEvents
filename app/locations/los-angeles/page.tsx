import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Los Angeles | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Los Angeles, CA. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, concerts & productions across Southern California.",
  keywords: [
    "event production los angeles",
    "av rental los angeles",
    "audio visual los angeles",
    "la convention center av",
    "corporate events los angeles",
    "southern california av services",
    "concert production la"
  ],
  openGraph: {
    title: "Event Production Los Angeles | AV Rental & Audio Visual",
    description: "Professional event production in Los Angeles. d&b audio, LED walls, lighting. Premium touring equipment for LA events.",
    url: `${siteUrl}/locations/los-angeles`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/los-angeles`
  }
};

export default function LosAngelesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Los Angeles"
        region="Southern California"
        province="CA"
        heroTitle="Event Production Los Angeles – AV Rental & Audio Visual Services"
        description="Showmax Events provides professional event production and AV services in Los Angeles and Southern California. From corporate conferences at the LA Convention Center to high-profile productions across the entertainment capital, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting for world-class events."
        nearbyVenues={[
          "Los Angeles Convention Center",
          "Crypto.com Arena",
          "Hollywood Palladium",
          "The Beverly Hilton",
          "JW Marriott Los Angeles L.A. LIVE",
          "The Ritz-Carlton, Los Angeles",
          "Dolby Theatre",
          "The Novo",
          "SoFi Stadium"
        ]}
        servicesHighlight={[
          "Premium touring equipment for Los Angeles events",
          "Entertainment industry production expertise",
          "d&b audiotechnik and ROE Visual inventory",
          "Cross-border coordination from Vancouver",
          "Large-scale event and concert capabilities"
        ]}
      />
      <Footer />
    </div>
  );
}
