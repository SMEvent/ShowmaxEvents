import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Abbotsford | Audio Visual & Event Production Services",
  description: "Professional AV rental in Abbotsford, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, concerts & venues at Abbotsford Centre and Fraser Valley.",
  keywords: [
    "av rental abbotsford",
    "audio visual abbotsford",
    "event production abbotsford",
    "abbotsford centre av",
    "sound system rental abbotsford",
    "fraser valley av services"
  ],
  openGraph: {
    title: "AV Rental Abbotsford BC | Audio Visual & Event Production",
    description: "Professional AV rental in Abbotsford. d&b audio, LED walls, lighting. Abbotsford Centre specialists.",
    url: `${siteUrl}/locations/abbotsford`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/abbotsford`
  }
};

export default function AbbotsfordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Abbotsford"
        region="Fraser Valley"
        province="BC"
        heroTitle="AV Rental Abbotsford – Audio Visual & Event Production Services"
        description="Showmax Events provides complete audio visual services in Abbotsford and the Eastern Fraser Valley. From concerts at the Abbotsford Centre to corporate events and agricultural shows, we deliver professional sound systems, LED walls, lighting, and staging with experienced crews."
        nearbyVenues={[
          "Abbotsford Centre",
          "Tradex",
          "UFV Abbotsford Campus",
          "Quality Hotel & Conference Centre",
          "Kariton Art Gallery",
          "Abbotsford Air Show"
        ]}
        servicesHighlight={[
          "Abbotsford Centre and Tradex specialists",
          "Concert and festival-scale capabilities",
          "d&b audiotechnik and ROE Visual equipment",
          "Complete production for agricultural and trade shows",
          "Fraser Valley coverage from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
