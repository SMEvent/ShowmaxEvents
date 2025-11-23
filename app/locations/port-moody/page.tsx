import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Presentation Equipment Port Moody | AV Rental & Event Services",
  description: "Professional presentation equipment in Port Moody, BC. Projectors, screens, audio systems, and complete AV rental for corporate events and Tri-Cities venues.",
  openGraph: {
    title: "Audio Visual Services Port Moody BC | AV Equipment & Production",
    description: "Professional audio visual services in Port Moody, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/port-moody`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function PortMoodyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Port Moody"
        region="Tri-Cities"
        province="BC"
        heroTitle="Presentation Equipment Port Moody | AV Rental & Event Services"
        description="Showmax Events provides professional audio visual services in Port Moody and throughout the Tri-Cities area. From waterfront venues to community events, we deliver comprehensive AV solutions with premium equipment and experienced crew."
        nearbyVenues={[
          "Rocky Point Park",
          "Port Moody Recreation Complex",
          "Kyle Centre",
        ]}
        servicesHighlight={[
          "Waterfront venue expertise",
          "Premium AV equipment from Vancouver",
          "Professional crew with local knowledge",
          "Complete technical support"
        ]}
      />
      <Footer />
    </div>
  );
}

