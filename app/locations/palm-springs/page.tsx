import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Wireless Microphone Rental Palm Springs | Audio Equipment & AV",
  description: "Professional wireless microphone rental in Palm Springs, CA. Complete audio equipment, sound systems, and AV services for resort conferences, corporate retreats, and Coachella Valley events.",
  openGraph: {
    title: "Audio Visual Services Palm Springs | AV Equipment & Production",
    description: "Professional audio visual services in Palm Springs, CA. Resort event production and AV equipment rental.",
    url: `${siteUrl}/locations/palm-springs`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function PalmSpringsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Palm Springs"
        region="Coachella Valley"
        province="CA"
        heroTitle="Wireless Microphone Rental Palm Springs | Professional Audio Equipment"
        description="Showmax Events delivers premium audio visual production services for Palm Springs resort events. From corporate conferences and incentive programs to desert celebrations, we provide comprehensive AV solutions perfectly suited for Palm Springs' unique venues with premium equipment and experienced crew."
        nearbyVenues={[
          "Palm Springs Convention Center",
          "JW Marriott Desert Springs",
          "Renaissance Indian Wells",
          "Omni Rancho Las Palmas",
          "La Quinta Resort & Club",
          "The Parker Palm Springs",
        ]}
        servicesHighlight={[
          "Desert resort event specialists",
          "Premium equipment for outdoor and indoor venues",
          "Experienced with corporate incentive programs",
          "Complete production for Coachella Valley events",
          "Weather-resistant solutions for desert conditions",
        ]}
      />
      <Footer />
    </div>
  );
}

