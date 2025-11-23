import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Hybrid Event Production Jasper | Virtual & In-Person AV Services",
  description: "Professional hybrid event production in Jasper, AB. Virtual and in-person AV services for resort conferences, live streaming, and corporate retreats in Jasper National Park.",
  openGraph: {
    title: "Audio Visual Services Jasper AB | Resort Event Production",
    description: "Professional audio visual services in Jasper, AB. Resort event production and AV equipment rental.",
    url: `${siteUrl}/locations/jasper`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function JasperPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Jasper"
        region="Canadian Rockies"
        province="AB"
        heroTitle="Hybrid Event Production Jasper | Virtual & Live Event AV Services"
        description="Showmax Events provides professional audio visual production services for Jasper resort events in the stunning Canadian Rockies. From conferences at the Fairmont Jasper Park Lodge to corporate retreats and mountain celebrations, we deliver comprehensive AV solutions with premium equipment and experienced crew for Jasper National Park venues."
        nearbyVenues={[
          "Fairmont Jasper Park Lodge",
          "Sawridge Inn Jasper",
          "Jasper Park Lodge Conference Centre",
          "Pyramid Lake Resort",
        ]}
        servicesHighlight={[
          "Canadian Rockies resort expertise",
          "Premium equipment for remote mountain venues",
          "Specialized logistics for Jasper National Park",
          "Complete production for corporate events",
          "Expert crew with alpine venue experience",
          "Full technical support in wilderness settings",
        ]}
      />
      <Footer />
    </div>
  );
}

