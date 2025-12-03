import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Banff | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Banff, Alberta. Complete audio visual services for corporate retreats, conferences & events at Fairmont Banff Springs, Banff Centre & Canadian Rockies venues.",
  keywords: [
    "event production banff",
    "av rental banff",
    "audio visual banff",
    "fairmont banff springs av",
    "banff centre av",
    "corporate events banff",
    "canadian rockies events"
  ],
  openGraph: {
    title: "Event Production Banff | AV Rental & Audio Visual",
    description: "Professional event production in Banff. d&b audio, LED walls, lighting. Fairmont Banff Springs & Banff Centre.",
    url: `${siteUrl}/locations/banff`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/banff`
  }
};

export default function BanffPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Banff"
        region="Canadian Rockies"
        province="AB"
        heroTitle="Event Production Banff – AV Rental & Audio Visual Services"
        description="Showmax Events provides premium event production and audio visual services in Banff and the Canadian Rockies. From corporate retreats at the Fairmont Banff Springs to conferences at the Banff Centre, we deliver world-class sound systems, LED walls, lighting, and staging for one of Canada's most iconic destinations."
        nearbyVenues={[
          "Fairmont Banff Springs",
          "Banff Centre for Arts and Creativity",
          "Rimrock Resort Hotel",
          "Moose Hotel and Suites",
          "Banff Park Lodge",
          "Mount Royal Hotel",
          "Elk + Avenue Hotel"
        ]}
        servicesHighlight={[
          "Premium AV for iconic Canadian Rockies events",
          "Fairmont Banff Springs and Banff Centre specialists",
          "Complete corporate retreat and incentive event production",
          "d&b audiotechnik and ROE Visual equipment from Calgary",
          "Experienced crews for mountain venue logistics"
        ]}
      />
      <Footer />
    </div>
  );
}
