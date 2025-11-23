import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Technology Port Coquitlam | AV Solutions & Services",
  description: "Professional event technology in Port Coquitlam, BC. Complete AV solutions, audio visual equipment, and technical services for corporate events and Tri-Cities venues.",
  openGraph: {
    title: "Audio Visual Services Port Coquitlam | AV Equipment & Production",
    description: "Professional audio visual services in Port Coquitlam, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/port-coquitlam`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function PortCoquitlamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Port Coquitlam"
        region="Tri-Cities"
        province="BC"
        heroTitle="Event Technology Port Coquitlam | Professional AV Solutions"
        description="Professional audio visual services for Port Coquitlam and the Tri-Cities. Showmax Events provides event production, AV equipment rental, and technical support for corporate events, community functions, and venues throughout Port Coquitlam."
        servicesHighlight={[
          "Full AV production for Tri-Cities venues",
          "Premium equipment from Vancouver headquarters",
          "Experienced local technical crew",
          "Complete production management"
        ]}
      />
      <Footer />
    </div>
  );
}

