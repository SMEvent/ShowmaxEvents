import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Trade Show AV Abbotsford | Exhibition Production & Equipment",
  description: "Professional trade show AV in Abbotsford, BC. Exhibition production, audio visual equipment, and event services for Tradex, Abbotsford Centre, and Fraser Valley venues.",
  openGraph: {
    title: "Audio Visual Services Abbotsford BC | AV Equipment & Production",
    description: "Professional audio visual services in Abbotsford, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/abbotsford`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function AbbotsfordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Abbotsford"
        region="Fraser Valley"
        province="BC"
        heroTitle="Trade Show AV Abbotsford | Exhibition Production & Equipment"
        description="Showmax Events delivers comprehensive audio visual production services in Abbotsford and throughout the Fraser Valley. From the Abbotsford Centre to agricultural exhibitions and corporate venues, we provide professional AV solutions with premium equipment and experienced technical crew."
        nearbyVenues={[
          "Abbotsford Centre",
          "Tradex",
          "Abbotsford Entertainment & Sports Centre",
          "University of the Fraser Valley",
          "Abbotsford Airport",
        ]}
        servicesHighlight={[
          "Extensive experience with Fraser Valley agricultural shows",
          "Full production support for large-scale exhibitions",
          "Premium touring equipment for any event scale",
          "Professional crew with local venue expertise"
        ]}
      />
      <Footer />
    </div>
  );
}

