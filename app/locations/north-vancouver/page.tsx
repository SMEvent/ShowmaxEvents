import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Video Wall Rental North Vancouver | LED Screens & AV Equipment",
  description: "Professional video wall rental in North Vancouver, BC. LED screens, AV equipment, and event production services for corporate events, conferences, and North Shore venues.",
  openGraph: {
    title: "Audio Visual Services North Vancouver | AV Equipment & Production",
    description: "Professional audio visual services in North Vancouver, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/north-vancouver`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function NorthVancouverPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="North Vancouver"
        region="North Shore"
        province="BC"
        heroTitle="Video Wall Rental North Vancouver | LED Screens & Event Production"
        description="Showmax Events provides professional audio visual production services in North Vancouver and throughout the North Shore. From corporate events to special venues, we deliver comprehensive AV solutions with premium equipment and experienced technical crew serving the entire North Shore region."
        nearbyVenues={[
          "Pinnacle Hotel at the Pier",
          "Lonsdale Quay",
          "Presentation House Theatre",
          "The Shipyards District",
          "Capilano University",
        ]}
        servicesHighlight={[
          "Local North Shore event expertise",
          "Premium AV equipment from Vancouver headquarters",
          "Full production support for waterfront and mountain venues",
          "Experienced crew with North Shore venue knowledge"
        ]}
      />
      <Footer />
    </div>
  );
}

