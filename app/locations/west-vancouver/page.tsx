import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Premium AV Services West Vancouver | Luxury Event Production",
  description: "Premium audio visual services in West Vancouver, BC. Upscale event production, AV equipment rental, and technical services for corporate events, galas, and exclusive waterfront venues.",
  openGraph: {
    title: "Audio Visual Services West Vancouver | AV Equipment & Production",
    description: "Professional audio visual services in West Vancouver, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/west-vancouver`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function WestVancouverPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="West Vancouver"
        region="North Shore"
        province="BC"
        heroTitle="Premium AV Services West Vancouver | Luxury Event Production"
        description="Showmax Events delivers premium audio visual production services in West Vancouver. Specializing in high-end corporate events, private functions, and waterfront venues with comprehensive AV solutions, professional lighting, sound systems, and experienced technical crew."
        nearbyVenues={[
          "Gleneagles Golf Course",
          "West Vancouver Community Centre",
          "Hollyburn Country Club",
          "Kay Meek Arts Centre",
          "Lighthouse Park",
        ]}
        servicesHighlight={[
          "Premium AV services for upscale West Vancouver venues",
          "Discreet, professional technical crew",
          "High-end equipment for exclusive events",
          "Complete production management for waterfront locations"
        ]}
      />
      <Footer />
    </div>
  );
}

