import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Victoria BC | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Victoria, BC. Complete audio visual services with d&b audio, LED walls, lighting for conferences at Victoria Conference Centre, Fairmont Empress & Vancouver Island venues.",
  keywords: [
    "event production victoria",
    "av rental victoria bc",
    "audio visual victoria",
    "sound system rental victoria",
    "led wall rental victoria",
    "victoria conference centre av",
    "fairmont empress av",
    "corporate events victoria"
  ],
  openGraph: {
    title: "Event Production Victoria BC | AV Rental & Audio Visual",
    description: "Professional event production in Victoria. d&b audio, LED walls, lighting. Victoria Conference Centre & Fairmont Empress.",
    url: `${siteUrl}/locations/victoria`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/victoria`
  }
};

export default function VictoriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Victoria"
        region="Vancouver Island"
        province="BC"
        heroTitle="Event Production Victoria – AV Rental & Audio Visual Services"
        description="Showmax Events provides complete event production and audio visual services in Victoria and across Vancouver Island. From conferences at the Victoria Conference Centre to galas at the Fairmont Empress, we deliver professional sound systems, LED walls, lighting, and staging with experienced crews deployed from our Vancouver headquarters."
        nearbyVenues={[
          "Victoria Conference Centre",
          "Fairmont Empress",
          "Hotel Grand Pacific",
          "Royal BC Museum",
          "Royal Theatre",
          "McPherson Playhouse",
          "Save-On-Foods Memorial Centre",
          "University of Victoria",
          "Delta Ocean Pointe Resort"
        ]}
        servicesHighlight={[
          "Full-service event production for Vancouver Island",
          "Victoria Conference Centre and Fairmont Empress specialists",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced crews deployed from Vancouver",
          "Complete production management including ferry logistics"
        ]}
      />
      <Footer />
    </div>
  );
}
