import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Speaker Rental New Westminster | Audio Systems & Event Production",
  description: "Professional speaker rental in New Westminster, BC. Audio systems, sound equipment, and event production services for corporate events, conferences, and heritage venues.",
  openGraph: {
    title: "Audio Visual Services New Westminster | AV Equipment & Production",
    description: "Professional audio visual services in New Westminster, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/new-westminster`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function NewWestminsterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="New Westminster"
        region="Metro Vancouver"
        province="BC"
        heroTitle="Speaker Rental New Westminster | Audio Systems & Event Production"
        description="Showmax Events provides comprehensive audio visual production services in New Westminster, BC. From heritage venues to modern conference spaces, we deliver professional AV solutions with premium equipment and experienced technical crew serving the Royal City."
        nearbyVenues={[
          "The Anvil Centre",
          "Irving House",
          "Massey Theatre",
          "Inn at the Quay",
          "Westminster Pier Park",
        ]}
        servicesHighlight={[
          "Specialized AV for heritage and modern venues",
          "Premium equipment delivery throughout New Westminster",
          "Experienced crew with local venue expertise",
          "Complete production management"
        ]}
      />
      <Footer />
    </div>
  );
}

