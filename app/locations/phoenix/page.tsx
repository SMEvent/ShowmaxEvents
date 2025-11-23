import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Lighting Phoenix | Stage Lighting & Production Services",
  description: "Professional event lighting in Phoenix, AZ. Stage lighting, intelligent fixtures, LED walls, and complete event production for corporate conferences, galas, and venues throughout the Valley of the Sun.",
  openGraph: {
    title: "Audio Visual Services Phoenix AZ | AV Equipment & Production",
    description: "Professional audio visual services in Phoenix, AZ. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/phoenix`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function PhoenixPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Phoenix"
        region="Valley of the Sun"
        province="AZ"
        heroTitle="Event Lighting Phoenix | Stage Lighting & Production Services"
        description="Showmax Events provides comprehensive audio visual production services for Phoenix and the Valley of the Sun. From convention center conferences to resort events and corporate galas, we deliver professional AV solutions with premium equipment and experienced technical crew serving the greater Phoenix area."
        nearbyVenues={[
          "Phoenix Convention Center",
          "Arizona Biltmore",
          "The Phoenician Resort",
          "Talking Stick Resort",
          "Scottsdale Center for the Performing Arts",
          "State Farm Stadium",
        ]}
        servicesHighlight={[
          "Major convention and conference experience",
          "Premium equipment for desert venues",
          "Experienced with Phoenix metro requirements",
          "Complete production management",
          "Trusted for large-scale Arizona events",
        ]}
      />
      <Footer />
    </div>
  );
}

