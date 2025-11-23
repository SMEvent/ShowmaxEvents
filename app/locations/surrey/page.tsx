import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Equipment Rental Surrey BC | Audio Visual Services Fraser Valley",
  description: "Professional AV equipment rental in Surrey, BC. Complete audio visual services, sound systems, lighting, and event production for corporate events and conferences throughout Fraser Valley.",
  openGraph: {
    title: "Audio Visual Services Surrey BC | AV Equipment & Event Production",
    description: "Professional audio visual services in Surrey, BC. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/surrey`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function SurreyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Surrey"
        region="Metro Vancouver"
        province="BC"
        heroTitle="AV Equipment Rental Surrey | Audio Visual Services & Event Production"
        description="Professional audio visual services for Surrey, BC events. Showmax Events provides complete AV production, equipment rental, and technical support for corporate events, conferences, and venues throughout Surrey and the Fraser Valley with premium equipment and experienced crew."
        nearbyVenues={[
          "Sheraton Vancouver Guildford Hotel",
          "Fraser Downs Racetrack & Casino",
          "Surrey City Hall",
          "Coast Surrey Conference Centre",
          "Civic Hotel",
        ]}
        servicesHighlight={[
          "Comprehensive AV solutions for Surrey venues",
          "Premium equipment delivery throughout Fraser Valley",
          "Experienced technical crew and production management",
          "Full-service support from consultation to strike"
        ]}
      />
      <Footer />
    </div>
  );
}

