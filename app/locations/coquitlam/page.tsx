import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Audio Rental Coquitlam | Sound Equipment & Event Services",
  description: "Professional audio rental in Coquitlam, BC. Sound equipment, microphones, speakers, and complete event services for corporate events, conferences, and Tri-Cities venues.",
  openGraph: {
    title: "Audio Visual Services Coquitlam BC | AV Equipment & Production",
    description: "Professional audio visual services in Coquitlam, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/coquitlam`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function CoquitlamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Coquitlam"
        region="Tri-Cities"
        province="BC"
        heroTitle="Audio Rental Coquitlam | Sound Equipment & Event Production"
        description="Professional audio visual services for Coquitlam and the Tri-Cities area. Showmax Events provides complete event production, AV equipment rental, and technical support for corporate events, conferences, and venues throughout Coquitlam with premium equipment and experienced crew."
        nearbyVenues={[
          "Hard Rock Casino Vancouver",
          "Executive Plaza Hotel & Conference Centre",
          "City Centre Aquatic Complex",
          "Mackin House Museum",
          "Poirier Sport & Leisure Complex",
        ]}
        servicesHighlight={[
          "Full AV production for Tri-Cities venues",
          "Premium equipment from our Vancouver base",
          "Experienced crew with local venue knowledge",
          "Complete technical support from setup to strike"
        ]}
      />
      <Footer />
    </div>
  );
}

