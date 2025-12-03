import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Port Moody | Audio Visual & Event Production",
  description: "Professional AV rental in Port Moody, BC. Complete audio visual services for corporate events and venues in Port Moody and the Tri-Cities.",
  keywords: [
    "av rental port moody",
    "audio visual port moody",
    "event production port moody",
    "tri-cities av services"
  ],
  openGraph: {
    title: "AV Rental Port Moody | Audio Visual & Event Production",
    description: "Professional AV rental in Port Moody. d&b audio, LED walls, lighting.",
    url: `${siteUrl}/locations/port-moody`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/port-moody`
  }
};

export default function PortMoodyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Port Moody"
        region="Tri-Cities"
        province="BC"
        heroTitle="AV Rental Port Moody – Audio Visual & Event Production"
        description="Showmax Events provides audio visual services in Port Moody and the Tri-Cities area. Complete AV solutions for corporate events, waterfront gatherings, and productions with fast delivery from our Vancouver warehouse."
        nearbyVenues={[
          "Inlet Theatre",
          "Port Moody Arts Centre",
          "Kyle Centre",
          "Rocky Point Park",
          "Brewers Row Venues"
        ]}
        servicesHighlight={[
          "AV services for Port Moody and Tri-Cities",
          "Fast delivery from Vancouver",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced Metro Vancouver crews"
        ]}
      />
      <Footer />
    </div>
  );
}
