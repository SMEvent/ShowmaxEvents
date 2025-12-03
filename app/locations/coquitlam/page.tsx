import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Coquitlam | Audio Visual & Event Production Services",
  description: "Professional AV rental in Coquitlam, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events and venues throughout the Tri-Cities.",
  keywords: [
    "av rental coquitlam",
    "audio visual coquitlam",
    "event production coquitlam",
    "sound system rental coquitlam",
    "tri-cities av services",
    "corporate events coquitlam"
  ],
  openGraph: {
    title: "AV Rental Coquitlam BC | Audio Visual & Event Production",
    description: "Professional AV rental in Coquitlam and Tri-Cities. d&b audio, LED walls, lighting.",
    url: `${siteUrl}/locations/coquitlam`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/coquitlam`
  }
};

export default function CoquitlamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Coquitlam"
        region="Tri-Cities"
        province="BC"
        heroTitle="AV Rental Coquitlam – Audio Visual & Event Production Services"
        description="Showmax Events provides complete audio visual services in Coquitlam and the Tri-Cities. From corporate events to community productions, we deliver professional sound systems, LED walls, lighting, and staging with experienced crews and fast delivery from Vancouver."
        nearbyVenues={[
          "Hard Rock Casino Vancouver",
          "Executive Plaza Hotel & Conference Centre",
          "Westwood Plateau Golf & Country Club",
          "Evergreen Cultural Centre",
          "Place des Arts",
          "Coquitlam Centre"
        ]}
        servicesHighlight={[
          "Complete AV for Tri-Cities events",
          "Fast delivery from Vancouver warehouse",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced production crews",
          "Hard Rock Casino specialists"
        ]}
      />
      <Footer />
    </div>
  );
}
