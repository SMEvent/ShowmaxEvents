import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Langley BC | Audio Visual & Event Production Services",
  description: "Professional AV rental in Langley, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, weddings & venues throughout Langley and Fraser Valley.",
  keywords: [
    "av rental langley",
    "audio visual langley",
    "event production langley",
    "sound system rental langley",
    "fraser valley av services",
    "corporate events langley"
  ],
  openGraph: {
    title: "AV Rental Langley BC | Audio Visual & Event Production",
    description: "Professional AV rental in Langley. d&b audio, LED walls, lighting. Serving Langley and Fraser Valley.",
    url: `${siteUrl}/locations/langley`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/langley`
  }
};

export default function LangleyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Langley"
        region="Fraser Valley"
        province="BC"
        heroTitle="AV Rental Langley – Audio Visual & Event Production Services"
        description="Showmax Events provides complete audio visual services in Langley and the Fraser Valley. From corporate conferences to weddings and community events, we deliver professional sound systems, LED walls, lighting, and staging with experienced crews and premium equipment."
        nearbyVenues={[
          "Cascades Casino",
          "Langley Events Centre",
          "Redwoods Golf Course",
          "Newlands Golf & Country Club",
          "Chief Sepass Theatre",
          "Willowbrook Shopping Centre"
        ]}
        servicesHighlight={[
          "Complete AV for Langley and Fraser Valley events",
          "Cascades Casino and Langley Events Centre specialists",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced production crews",
          "Fast delivery from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
