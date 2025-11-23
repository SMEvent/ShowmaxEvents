import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Company Kelowna | AV Services Okanagan Valley",
  description: "Leading event production company in Kelowna and the Okanagan Valley. Complete AV services, equipment rental for corporate events, conferences, and winery venues.",
  keywords: [
    "event production company kelowna",
    "av company kelowna",
    "kelowna av services",
    "okanagan event production",
    "kelowna conference av",
  ],
  openGraph: {
    title: "Audio Visual Services Kelowna BC | AV Equipment & Event Production",
    description: "Professional audio visual services in Kelowna, BC. Event production and AV equipment rental for the Okanagan.",
    url: `${siteUrl}/locations/kelowna`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function KelownaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
        <LocationTemplate
          city="Kelowna"
          region="Okanagan Valley"
          province="BC"
          heroTitle="Event Production Company Kelowna | Okanagan AV Services"
          description="Showmax Events delivers professional audio visual production services in Kelowna and throughout the Okanagan Valley. From resort conferences to vineyard events and corporate functions, we provide comprehensive AV solutions with premium touring equipment and experienced technical crew serving BC's interior."
        nearbyVenues={[
          "Kelowna Convention Centre",
          "Prospera Place",
          "Rotary Centre for the Arts",
          "Delta Hotels Grand Okanagan Resort",
          "Manteo Resort",
          "Harvest Golf Club",
          "Mission Hill Winery",
          "Summerhill Pyramid Winery",
        ]}
        servicesHighlight={[
          "Extensive Okanagan Valley event experience",
          "Premium touring equipment for resort venues",
          "Vineyard and outdoor event specialists",
          "Full production support from Vancouver base",
          "Expert logistics for Okanagan locations",
        ]}
      />
      <Footer />
    </div>
  );
}

