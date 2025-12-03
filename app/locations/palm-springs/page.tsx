import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Palm Springs | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Palm Springs, CA. Complete audio visual services with d&b audio, LED walls, lighting for corporate retreats, conferences & Coachella Valley venues.",
  keywords: [
    "event production palm springs",
    "av rental palm springs",
    "audio visual palm springs",
    "palm springs convention center av",
    "corporate retreats palm springs",
    "coachella valley av services"
  ],
  openGraph: {
    title: "Event Production Palm Springs | AV Rental & Audio Visual",
    description: "Professional event production in Palm Springs. d&b audio, LED walls, lighting. Desert resort event specialists.",
    url: `${siteUrl}/locations/palm-springs`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/palm-springs`
  }
};

export default function PalmSpringsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Palm Springs"
        region="Coachella Valley"
        province="CA"
        heroTitle="Event Production Palm Springs – AV Rental & Audio Visual Services"
        description="Showmax Events provides professional event production and AV services in Palm Springs and the Coachella Valley. From corporate retreats at luxury desert resorts to conferences at the Palm Springs Convention Center, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting for California's premier desert destination."
        nearbyVenues={[
          "Palm Springs Convention Center",
          "La Quinta Resort & Club",
          "The Ritz-Carlton, Rancho Mirage",
          "JW Marriott Desert Springs",
          "Renaissance Esmeralda Resort & Spa",
          "Hyatt Regency Indian Wells",
          "Parker Palm Springs"
        ]}
        servicesHighlight={[
          "Desert resort event specialists",
          "Coachella Valley production experience",
          "Premium touring equipment for Southern California",
          "d&b audiotechnik and ROE Visual inventory",
          "Cross-border coordination from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
