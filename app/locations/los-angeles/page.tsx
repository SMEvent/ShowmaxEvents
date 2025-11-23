import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Video Production Company Los Angeles | Broadcast AV Services",
  description: "Professional video production company in Los Angeles, CA. Broadcast-quality AV services, multi-camera production, and event services for entertainment industry and corporate events throughout LA.",
  openGraph: {
    title: "Audio Visual Services Los Angeles | AV Equipment & Production",
    description: "Professional audio visual services in Los Angeles, CA. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/los-angeles`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function LosAngelesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Los Angeles"
        region="Southern California"
        province="CA"
        heroTitle="Video Production Company Los Angeles | Broadcast AV Services"
        description="Showmax Events delivers premium audio visual production services for Los Angeles events. From entertainment industry galas to corporate conferences and product launches, we provide comprehensive AV solutions with broadcast-quality equipment and experienced technical crew serving LA's diverse event landscape."
        nearbyVenues={[
          "LA Convention Center",
          "The Beverly Hilton",
          "SoFi Stadium",
          "Hollywood Bowl",
          "The Forum",
          "Santa Monica Pier",
        ]}
        servicesHighlight={[
          "Entertainment industry production experience",
          "Broadcast-quality equipment and crew",
          "Comprehensive AV for large-scale LA events",
          "Complete production management",
          "Trusted by major brands for Los Angeles productions",
        ]}
      />
      <Footer />
    </div>
  );
}

