import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Lake Louise | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental at Lake Louise, Alberta. Complete audio visual services for corporate retreats, conferences & events at Fairmont Chateau Lake Louise and Canadian Rockies venues.",
  keywords: [
    "event production lake louise",
    "av rental lake louise",
    "audio visual lake louise",
    "fairmont chateau lake louise av",
    "corporate events lake louise",
    "canadian rockies events"
  ],
  openGraph: {
    title: "Event Production Lake Louise | AV Rental & Audio Visual",
    description: "Professional event production at Lake Louise. d&b audio, LED walls, lighting. Fairmont Chateau Lake Louise.",
    url: `${siteUrl}/locations/lake-louise`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/lake-louise`
  }
};

export default function LakeLouisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Lake Louise"
        region="Canadian Rockies"
        province="AB"
        heroTitle="Event Production Lake Louise – AV Rental & Audio Visual Services"
        description="Showmax Events provides premium event production and audio visual services at Lake Louise. From corporate retreats at the iconic Fairmont Chateau Lake Louise to events with stunning glacier views, we deliver world-class sound systems, LED walls, lighting, and staging for one of Canada's most breathtaking destinations."
        nearbyVenues={[
          "Fairmont Chateau Lake Louise",
          "Lake Louise Ski Resort",
          "Deer Lodge",
          "Post Hotel & Spa",
          "Moraine Lake Lodge"
        ]}
        servicesHighlight={[
          "Premium AV for iconic Lake Louise events",
          "Fairmont Chateau Lake Louise specialists",
          "Complete corporate retreat and incentive event production",
          "d&b audiotechnik and ROE Visual equipment from Calgary",
          "Mountain venue logistics expertise"
        ]}
      />
      <Footer />
    </div>
  );
}
