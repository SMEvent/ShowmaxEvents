import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Whistler | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Whistler, BC. Complete audio visual services for corporate retreats, conferences & events at Fairmont Chateau Whistler, Four Seasons & Whistler Conference Centre.",
  keywords: [
    "event production whistler",
    "av rental whistler",
    "audio visual whistler",
    "whistler conference centre av",
    "fairmont chateau whistler av",
    "corporate events whistler",
    "whistler incentive events"
  ],
  openGraph: {
    title: "Event Production Whistler | AV Rental & Audio Visual",
    description: "Professional event production in Whistler. d&b audio, LED walls, lighting. Fairmont Chateau Whistler & Four Seasons.",
    url: `${siteUrl}/locations/whistler`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/whistler`
  }
};

export default function WhistlerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Whistler"
        region="Sea-to-Sky"
        province="BC"
        heroTitle="Event Production Whistler – AV Rental & Audio Visual Services"
        description="Showmax Events provides premium event production and audio visual services in Whistler. From corporate retreats at the Fairmont Chateau Whistler to conferences at the Whistler Conference Centre, we deliver world-class sound systems, LED walls, lighting, and staging for Canada's premier resort destination."
        nearbyVenues={[
          "Fairmont Chateau Whistler",
          "Four Seasons Resort Whistler",
          "Whistler Conference Centre",
          "Nita Lake Lodge",
          "Westin Resort & Spa Whistler",
          "Pan Pacific Whistler",
          "Squamish Lil'wat Cultural Centre",
          "Whistler Olympic Plaza"
        ]}
        servicesHighlight={[
          "Premium AV for world-class resort events",
          "Fairmont Chateau Whistler and Four Seasons specialists",
          "Complete corporate retreat and incentive event production",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced crews for mountain venue logistics"
        ]}
      />
      <Footer />
    </div>
  );
}
