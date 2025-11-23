import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Sound System Rental Victoria | Audio Equipment & Event Production",
  description: "Professional sound system rental in Victoria, BC. Premium audio equipment, d&b audiotechnik, event production for corporate events, conferences, and venues on Vancouver Island.",
  keywords: [
    "sound system rental victoria",
    "audio equipment rental victoria",
    "av company victoria",
    "event production victoria",
    "victoria convention centre av",
    "vancouver island av services",
  ],
  openGraph: {
    title: "Audio Visual Services Victoria BC | AV Equipment & Event Production",
    description: "Professional audio visual services in Victoria, BC. Event production and AV equipment rental for Vancouver Island.",
    url: `${siteUrl}/locations/victoria`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function VictoriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
        <LocationTemplate
          city="Victoria"
          region="Vancouver Island"
          province="BC"
          heroTitle="Sound System Rental Victoria | Premium Audio Equipment & Event Services"
          description="Showmax Events provides comprehensive audio visual production services in Victoria and throughout Vancouver Island. From the Victoria Conference Centre to the Royal Theatre and hotel venues, we deliver professional AV solutions with premium equipment and experienced technical crew serving BC's capital city."
        nearbyVenues={[
          "Victoria Conference Centre",
          "The Royal Theatre",
          "McPherson Playhouse",
          "Fairmont Empress Hotel",
          "Hotel Grand Pacific",
          "Delta Victoria Ocean Pointe Resort",
          "Coast Victoria Hotel",
          "University of Victoria",
        ]}
        servicesHighlight={[
          "Full-service AV for Vancouver Island events",
          "Premier equipment for Victoria's historic venues",
          "Experienced crew with island logistics expertise",
          "Comprehensive production management",
          "Ferry coordination and equipment logistics",
        ]}
      />
      <Footer />
    </div>
  );
}

