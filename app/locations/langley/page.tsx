import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Concert Sound Langley | Live Audio & Event Production Services",
  description: "Professional concert sound in Langley, BC. Live audio production, sound systems, and event services for concerts, corporate events, and Fraser Valley venues including Thunderbird Show Park.",
  openGraph: {
    title: "Audio Visual Services Langley BC | AV Equipment & Event Production",
    description: "Professional audio visual services in Langley, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/langley`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function LangleyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Langley"
        region="Fraser Valley"
        province="BC"
        heroTitle="Concert Sound Langley | Live Audio & Event Production Services"
        description="Professional audio visual services for Langley and the Fraser Valley. Showmax Events provides complete event production, AV equipment rental, and technical support for corporate events, conferences, agricultural events, and venues throughout Langley with premium equipment and experienced crew."
        nearbyVenues={[
          "Cascades Casino Resort",
          "Langley Events Centre",
          "Fort Langley National Historic Site",
          "Thunderbird Show Park",
          "Trinity Western University",
        ]}
        servicesHighlight={[
          "Full AV production for Fraser Valley events",
          "Experienced with agricultural shows and sporting venues",
          "Premium equipment from our Vancouver headquarters",
          "Complete technical support and production management"
        ]}
      />
      <Footer />
    </div>
  );
}

