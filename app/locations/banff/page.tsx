import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Company Banff | Audio Visual Equipment & Resort Event Production",
  description: "Trusted AV company serving Banff and the Canadian Rockies. Complete audio visual equipment rental, event production for resort conferences, corporate retreats at Fairmont Banff Springs and mountain venues.",
  keywords: [
    "av company banff",
    "audio visual banff",
    "banff av services",
    "banff conference av",
    "resort event production banff",
    "banff corporate events",
  ],
  openGraph: {
    title: "Audio Visual Services Banff AB | Resort Event Production",
    description: "Professional audio visual services in Banff, AB. Resort event production and AV equipment rental.",
    url: `${siteUrl}/locations/banff`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function BanffPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
        <LocationTemplate
          city="Banff"
          region="Canadian Rockies"
          province="AB"
          heroTitle="Leading AV Company in Banff | Canadian Rockies Event Production"
          description="Showmax Events provides premium audio visual production services for Banff resort events in the heart of the Canadian Rockies. From conferences at the Fairmont Banff Springs to corporate retreats and mountain celebrations, we deliver comprehensive AV solutions with premium equipment and experienced crew familiar with Banff's spectacular venues."
        nearbyVenues={[
          "Fairmont Banff Springs",
          "Rimrock Resort Hotel",
          "Banff Park Lodge",
          "The Juniper Hotel",
          "Moose Hotel & Suites",
          "Banff Centre for Arts and Creativity",
          "Banff Gondola",
          "Cave and Basin National Historic Site",
        ]}
        servicesHighlight={[
          "Specialized Canadian Rockies resort experience",
          "Premium equipment for luxury mountain venues",
          "Expert logistics and Rocky Mountain transportation",
          "Complete production for corporate conferences",
          "Trusted for high-end incentive programs in Banff",
          "Full technical support in alpine environment",
        ]}
      />
      <Footer />
    </div>
  );
}

