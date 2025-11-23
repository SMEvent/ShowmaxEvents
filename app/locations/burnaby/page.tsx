import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Corporate Event Production Burnaby | AV Services Metro Vancouver",
  description: "Professional corporate event production in Burnaby, BC. Complete AV services, equipment rental, and technical support for conferences and events throughout Metro Vancouver.",
  openGraph: {
    title: "Audio Visual Services Burnaby BC | AV Equipment & Event Production",
    description: "Professional audio visual services in Burnaby, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/burnaby`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function BurnabyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Burnaby"
        region="Metro Vancouver"
        province="BC"
        heroTitle="Corporate Event Production Burnaby | Professional AV Services"
        description="Showmax Events delivers comprehensive audio visual production services in Burnaby, BC. Serving corporate venues, hotels, and special events throughout Burnaby with premium AV equipment, professional lighting, sound systems, and experienced technical crew from our nearby Vancouver headquarters."
        nearbyVenues={[
          "Simon Fraser University",
          "Metropolis at Metrotown",
          "Burnaby Village Museum",
          "Hilton Vancouver Metrotown",
          "Executive Hotel Burnaby",
        ]}
        servicesHighlight={[
          "Quick response times from our Vancouver base",
          "Full production support for corporate and academic events",
          "Premium equipment including d&b audio and ROE LED walls",
          "Professional crew with venue experience"
        ]}
      />
      <Footer />
    </div>
  );
}

