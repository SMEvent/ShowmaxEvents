import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production San Diego | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in San Diego, CA. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, conferences & San Diego Convention Center.",
  keywords: [
    "event production san diego",
    "av rental san diego",
    "audio visual san diego",
    "san diego convention center av",
    "corporate events san diego",
    "southern california av services"
  ],
  openGraph: {
    title: "Event Production San Diego | AV Rental & Audio Visual",
    description: "Professional event production in San Diego. d&b audio, LED walls, lighting. San Diego Convention Center specialists.",
    url: `${siteUrl}/locations/san-diego`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/san-diego`
  }
};

export default function SanDiegoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="San Diego"
        region="Southern California"
        province="CA"
        heroTitle="Event Production San Diego – AV Rental & Audio Visual Services"
        description="Showmax Events provides professional event production and AV services in San Diego. From major conferences at the San Diego Convention Center to corporate galas at waterfront venues, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting for San Diego's premier events."
        nearbyVenues={[
          "San Diego Convention Center",
          "Manchester Grand Hyatt San Diego",
          "Hilton San Diego Bayfront",
          "Marriott Marquis San Diego Marina",
          "Pechanga Arena San Diego",
          "The Rady Shell at Jacobs Park",
          "Hotel del Coronado"
        ]}
        servicesHighlight={[
          "San Diego Convention Center specialists",
          "Premium touring equipment for Southern California",
          "d&b audiotechnik and ROE Visual inventory",
          "Waterfront and outdoor event capabilities",
          "Cross-border coordination from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
