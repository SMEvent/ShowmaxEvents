import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Jasper | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Jasper, Alberta. Complete audio visual services for corporate retreats, conferences & events at Fairmont Jasper Park Lodge and Canadian Rockies venues.",
  keywords: [
    "event production jasper",
    "av rental jasper",
    "audio visual jasper",
    "fairmont jasper park lodge av",
    "corporate events jasper",
    "canadian rockies events"
  ],
  openGraph: {
    title: "Event Production Jasper | AV Rental & Audio Visual",
    description: "Professional event production in Jasper. d&b audio, LED walls, lighting. Fairmont Jasper Park Lodge.",
    url: `${siteUrl}/locations/jasper`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/jasper`
  }
};

export default function JasperPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Jasper"
        region="Canadian Rockies"
        province="AB"
        heroTitle="Event Production Jasper – AV Rental & Audio Visual Services"
        description="Showmax Events provides premium event production and audio visual services in Jasper National Park. From corporate retreats at the Fairmont Jasper Park Lodge to outdoor events with stunning mountain backdrops, we deliver professional sound systems, LED walls, lighting, and staging for unforgettable Rocky Mountain experiences."
        nearbyVenues={[
          "Fairmont Jasper Park Lodge",
          "Sawridge Inn and Conference Centre",
          "Pyramid Lake Resort",
          "Jasper Park Coliseum",
          "Jasper Activity Centre"
        ]}
        servicesHighlight={[
          "Premium AV for Jasper National Park events",
          "Fairmont Jasper Park Lodge specialists",
          "Complete corporate retreat and incentive event production",
          "d&b audiotechnik and ROE Visual equipment from Edmonton",
          "Outdoor event capabilities in mountain environments"
        ]}
      />
      <Footer />
    </div>
  );
}
