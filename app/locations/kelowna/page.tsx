import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Kelowna | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Kelowna, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, conferences & Okanagan venues.",
  keywords: [
    "event production kelowna",
    "av rental kelowna",
    "audio visual kelowna",
    "sound system rental kelowna",
    "led wall rental kelowna",
    "corporate events kelowna",
    "okanagan av services"
  ],
  openGraph: {
    title: "Event Production Kelowna | AV Rental & Audio Visual",
    description: "Professional event production in Kelowna. d&b audio, LED walls, lighting. Serving the Okanagan Valley.",
    url: `${siteUrl}/locations/kelowna`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/kelowna`
  }
};

export default function KelownaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Kelowna"
        region="Okanagan Valley"
        province="BC"
        heroTitle="Event Production Kelowna – AV Rental & Audio Visual Services"
        description="Showmax Events provides complete event production and audio visual services in Kelowna and the Okanagan Valley. From corporate conferences at the Kelowna Grand to winery events and outdoor festivals, we deliver professional sound systems, LED walls, lighting, and staging with premium equipment from Vancouver."
        nearbyVenues={[
          "Kelowna Grand Hotel & Conference Centre",
          "Delta Grand Okanagan Resort",
          "Coast Capri Hotel",
          "Prospera Place",
          "Rotary Centre for the Arts",
          "Mission Hill Family Estate",
          "UBC Okanagan",
          "The Cove Lakeside Resort"
        ]}
        servicesHighlight={[
          "Full event production for Okanagan events",
          "Corporate conference and winery event specialists",
          "d&b audiotechnik and ROE Visual equipment",
          "Outdoor festival and concert capabilities",
          "Production crews deployed from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
