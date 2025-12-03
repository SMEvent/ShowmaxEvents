import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental North Vancouver | Audio Visual & Event Production",
  description: "Professional AV rental in North Vancouver, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, galas & venues on the North Shore.",
  keywords: [
    "av rental north vancouver",
    "audio visual north vancouver",
    "event production north shore",
    "sound system rental north vancouver",
    "corporate events north vancouver"
  ],
  openGraph: {
    title: "AV Rental North Vancouver | Audio Visual & Event Production",
    description: "Professional AV rental on the North Shore. d&b audio, LED walls, lighting. Fast delivery from Vancouver.",
    url: `${siteUrl}/locations/north-vancouver`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/north-vancouver`
  }
};

export default function NorthVancouverPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="North Vancouver"
        region="North Shore"
        province="BC"
        heroTitle="AV Rental North Vancouver – Audio Visual & Event Production"
        description="Showmax Events provides professional audio visual services on the North Shore. From corporate events at the Pinnacle Hotel to outdoor productions with mountain backdrops, we deliver complete AV solutions with fast delivery from our Vancouver headquarters."
        nearbyVenues={[
          "Pinnacle Hotel at the Pier",
          "Lonsdale Quay Hotel",
          "Grouse Mountain",
          "Centennial Theatre",
          "North Vancouver Recreation Centre",
          "Presentation House Theatre",
          "Polygon Gallery"
        ]}
        servicesHighlight={[
          "Fast delivery across the North Shore",
          "Complete AV for corporate and outdoor events",
          "Premium d&b audiotechnik and ROE Visual equipment",
          "Experienced Vancouver-based production crews",
          "Full technical support for North Shore venues"
        ]}
      />
      <Footer />
    </div>
  );
}
