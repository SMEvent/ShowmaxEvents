import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Company Whistler | Resort Event Production & Equipment Rental",
  description: "Premier AV company serving Whistler resort events. Complete audio visual production, equipment rental for conferences, corporate retreats, and mountain venues at Whistler Blackcomb and luxury resorts.",
  keywords: [
    "av company whistler",
    "audio visual whistler",
    "whistler av services",
    "whistler conference av",
    "resort event production whistler",
    "whistler corporate events",
  ],
  openGraph: {
    title: "Audio Visual Services Whistler BC | Resort Event Production",
    description: "Professional audio visual services in Whistler, BC. Resort event production and AV equipment rental.",
    url: `${siteUrl}/locations/whistler`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function WhistlerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
        <LocationTemplate
          city="Whistler"
          region="Sea to Sky Corridor"
          province="BC"
          heroTitle="Premier AV Company in Whistler | Resort Event Production Services"
          description="Showmax Events specializes in premium audio visual production for Whistler resort events. From corporate conferences and incentive programs to mountain celebrations, we deliver comprehensive AV solutions perfectly suited for Whistler's unique alpine venues with premium equipment and experienced mountain logistics."
        nearbyVenues={[
          "Fairmont Chateau Whistler",
          "Four Seasons Resort Whistler",
          "Westin Resort & Spa Whistler",
          "Whistler Conference Centre",
          "Nita Lake Lodge",
          "Audain Art Museum",
          "Squamish Lil'wat Cultural Centre",
          "Whistler Olympic Plaza",
        ]}
        servicesHighlight={[
          "Specialized mountain resort event experience",
          "Premium equipment suited for unique venues",
          "Expert logistics and Sea to Sky transportation",
          "Complete production for corporate retreats",
          "Weather-resistant solutions for outdoor events",
          "Trusted by luxury brands for Whistler incentive programs",
        ]}
      />
      <Footer />
    </div>
  );
}

