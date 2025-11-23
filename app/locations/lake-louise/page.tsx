import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Resort Event Production Lake Louise | Fairmont Chateau AV Services",
  description: "Premium resort event production in Lake Louise, AB. Complete AV services for conferences, weddings, and corporate events at Fairmont Chateau Lake Louise and Rocky Mountain venues.",
  openGraph: {
    title: "Audio Visual Services Lake Louise AB | Resort Event Production",
    description: "Professional audio visual services in Lake Louise, AB. Resort event production and AV equipment rental.",
    url: `${siteUrl}/locations/lake-louise`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function LakeLouisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Lake Louise"
        region="Canadian Rockies"
        province="AB"
        heroTitle="Resort Event Production Lake Louise | Fairmont Chateau AV Services"
        description="Showmax Events delivers exceptional audio visual production services for Lake Louise resort events. Specializing in the iconic Fairmont Chateau Lake Louise and mountain venues, we provide comprehensive AV solutions for corporate conferences, luxury weddings, and special events with premium equipment suited for this breathtaking Rocky Mountain location."
        nearbyVenues={[
          "Fairmont Chateau Lake Louise",
          "Lake Louise Ski Resort",
          "Lake Louise Lakeshore",
          "Moraine Lake",
        ]}
        servicesHighlight={[
          "Specialized luxury resort event experience",
          "Premium equipment for iconic mountain venue",
          "Expert Rocky Mountain logistics",
          "Complete AV for corporate retreats and incentives",
          "Professional support for destination events",
          "Weather-resistant solutions for alpine conditions",
        ]}
      />
      <Footer />
    </div>
  );
}

