import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Port Coquitlam | Audio Visual & Event Production",
  description: "Professional AV rental in Port Coquitlam, BC. Complete audio visual services for corporate events and venues in Port Coquitlam and the Tri-Cities.",
  keywords: [
    "av rental port coquitlam",
    "audio visual port coquitlam",
    "event production port coquitlam",
    "tri-cities av services"
  ],
  openGraph: {
    title: "AV Rental Port Coquitlam | Audio Visual & Event Production",
    description: "Professional AV rental in Port Coquitlam. d&b audio, LED walls, lighting.",
    url: `${siteUrl}/locations/port-coquitlam`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/port-coquitlam`
  }
};

export default function PortCoquitlamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Port Coquitlam"
        region="Tri-Cities"
        province="BC"
        heroTitle="AV Rental Port Coquitlam – Audio Visual & Event Production"
        description="Showmax Events provides audio visual services in Port Coquitlam and the Tri-Cities area. Complete AV solutions for corporate events, community gatherings, and productions with fast delivery from our Vancouver warehouse."
        nearbyVenues={[
          "Poco Community Centre",
          "Terry Fox Theatre",
          "Port Coquitlam Recreation Complex",
          "Swan-e-set Bay Resort"
        ]}
        servicesHighlight={[
          "AV services for Port Coquitlam and Tri-Cities",
          "Fast delivery from Vancouver",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced Metro Vancouver crews"
        ]}
      />
      <Footer />
    </div>
  );
}
