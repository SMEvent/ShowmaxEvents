import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Richmond BC | Audio Visual & Event Production Services",
  description: "Professional AV rental in Richmond, BC. Complete audio visual services with d&b audio, LED walls, lighting for events at River Rock Casino, Richmond Convention Centre & YVR area venues.",
  keywords: [
    "av rental richmond",
    "audio visual richmond bc",
    "event production richmond",
    "sound system rental richmond",
    "led wall rental richmond",
    "river rock casino av",
    "richmond convention centre av",
    "corporate events richmond"
  ],
  openGraph: {
    title: "AV Rental Richmond BC | Audio Visual & Event Production",
    description: "Professional AV rental in Richmond. d&b audio, LED walls, lighting. River Rock Casino & Richmond Convention Centre.",
    url: `${siteUrl}/locations/richmond`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/richmond`
  }
};

export default function RichmondPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Richmond"
        region="Metro Vancouver"
        province="BC"
        heroTitle="AV Rental Richmond – Audio Visual & Event Production Services"
        description="Showmax Events provides complete audio visual services in Richmond, BC. From galas at River Rock Casino to conferences at the Richmond Convention Centre, we deliver professional sound systems, LED walls, lighting, and staging with fast delivery from our Vancouver warehouse."
        nearbyVenues={[
          "River Rock Casino Resort",
          "Richmond Convention Centre",
          "Sheraton Vancouver Airport",
          "Fairmont Vancouver Airport",
          "Executive Airport Plaza Hotel",
          "Richmond Olympic Oval",
          "Gateway Theatre",
          "Aberdeen Centre"
        ]}
        servicesHighlight={[
          "Fast delivery from Vancouver headquarters",
          "Complete AV for Richmond conventions and galas",
          "River Rock Casino and YVR area specialists",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced Metro Vancouver production crews"
        ]}
      />
      <Footer />
    </div>
  );
}
