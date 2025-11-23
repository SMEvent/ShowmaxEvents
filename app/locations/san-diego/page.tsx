import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Projection Rental San Diego | Video Screens & AV Equipment",
  description: "Professional projection rental in San Diego, CA. Large-venue projectors, video screens, LED walls, and complete AV equipment for conferences, corporate events, and venues.",
  openGraph: {
    title: "Audio Visual Services San Diego | AV Equipment & Production",
    description: "Professional audio visual services in San Diego, CA. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/san-diego`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function SanDiegoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="San Diego"
        region="Southern California"
        province="CA"
        heroTitle="Projection Rental San Diego | Video Screens & AV Equipment"
        description="Showmax Events provides professional audio visual production services for San Diego events. From convention center conferences to beachfront corporate events and galas, we deliver comprehensive AV solutions with premium equipment and experienced technical crew serving America's Finest City."
        nearbyVenues={[
          "San Diego Convention Center",
          "Petco Park",
          "Hotel del Coronado",
          "Paradise Point Resort",
          "Manchester Grand Hyatt",
          "Balboa Park",
        ]}
        servicesHighlight={[
          "Convention and corporate event specialists",
          "Premium equipment for waterfront venues",
          "Experienced with San Diego convention requirements",
          "Complete production management",
          "Trusted for large-scale Southern California events",
        ]}
      />
      <Footer />
    </div>
  );
}

