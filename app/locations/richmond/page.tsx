import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Conference AV Services Richmond BC | Corporate Event Production",
  description: "Professional conference AV services in Richmond, BC. Complete audio visual solutions for corporate events, hotel conferences, and venues throughout Richmond Metro Vancouver.",
  openGraph: {
    title: "Audio Visual Services Richmond BC | AV Equipment & Event Production",
    description: "Professional audio visual services in Richmond, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/richmond`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function RichmondPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Richmond"
        region="Metro Vancouver"
        province="BC"
        heroTitle="Conference AV Services Richmond | Corporate Event Production"
        description="Showmax Events provides professional audio visual production services throughout Richmond, BC. From the River Rock Casino Resort to corporate venues and private events, we deliver comprehensive AV solutions with premium equipment and experienced technical crew serving Metro Vancouver."
        nearbyVenues={[
          "River Rock Casino Resort",
          "Vancouver Airport Marriott",
          "Sheraton Vancouver Airport",
          "Executive Airport Plaza Hotel",
          "Richmond Olympic Oval",
          "Aberdeen Centre",
        ]}
        servicesHighlight={[
          "Fast equipment delivery throughout Richmond and Metro Vancouver",
          "Full technical support for hotel and casino events",
          "Premium AV equipment from our Vancouver headquarters",
          "Experienced crew familiar with Richmond venues"
        ]}
      />
      <Footer />
    </div>
  );
}

