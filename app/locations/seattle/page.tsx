import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Live Streaming Services Seattle | Video Production & Webcasting",
  description: "Professional live streaming services in Seattle, WA. Broadcast-quality video production, webcasting, and hybrid event solutions for corporate conferences and events throughout the Pacific Northwest.",
  openGraph: {
    title: "Audio Visual Services Seattle WA | AV Equipment & Event Production",
    description: "Professional audio visual services in Seattle, WA. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/seattle`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function SeattlePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Seattle"
        region="Pacific Northwest"
        province="WA"
        heroTitle="Live Streaming Services Seattle | Video Production & Webcasting"
        description="Showmax Events extends professional audio visual production services to Seattle and the Pacific Northwest. From corporate conferences to large-scale productions, we provide comprehensive AV solutions with premium d&b audiotechnik sound systems, ROE Visual LED walls, and professional technical crew serving the greater Seattle area."
        nearbyVenues={[
          "Washington State Convention Center",
          "Lumen Field",
          "Climate Pledge Arena",
          "The Westin Seattle",
          "Grand Hyatt Seattle",
          "Benaroya Hall",
          "McCaw Hall",
        ]}
        servicesHighlight={[
          "Cross-border production expertise",
          "Premium touring equipment from Vancouver",
          "Experienced with Pacific Northwest venues",
          "Complete production management",
          "Trusted by international brands for Seattle events",
        ]}
      />
      <Footer />
    </div>
  );
}

