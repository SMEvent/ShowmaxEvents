import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Surrey BC | Audio Visual & Event Production Services",
  description: "Professional AV rental in Surrey, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, conferences & venues throughout Surrey and Fraser Valley.",
  keywords: [
    "av rental surrey",
    "audio visual surrey bc",
    "event production surrey",
    "sound system rental surrey",
    "led wall rental surrey",
    "corporate events surrey",
    "fraser valley av services"
  ],
  openGraph: {
    title: "AV Rental Surrey BC | Audio Visual & Event Production",
    description: "Professional AV rental in Surrey. d&b audio, LED walls, lighting. Serving Surrey and Fraser Valley.",
    url: `${siteUrl}/locations/surrey`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/surrey`
  }
};

export default function SurreyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Surrey"
        region="Fraser Valley"
        province="BC"
        heroTitle="AV Rental Surrey – Audio Visual & Event Production Services"
        description="Showmax Events provides professional audio visual services for Surrey, BC and the Fraser Valley. From corporate conferences to community events, we deliver complete AV solutions including sound systems, LED walls, lighting, and staging with experienced crews and premium equipment."
        nearbyVenues={[
          "Sheraton Vancouver Guildford Hotel",
          "Civic Hotel",
          "Surrey City Hall",
          "Bell Performing Arts Centre",
          "Cloverdale Fairgrounds",
          "Northview Golf & Country Club",
          "Morgan Creek Golf Course",
          "Coast Surrey Conference Centre"
        ]}
        servicesHighlight={[
          "Complete AV solutions for Surrey and Fraser Valley",
          "Same-day equipment delivery from Vancouver",
          "d&b audiotechnik and ROE Visual inventory",
          "Experienced production crews and technicians",
          "Full technical support from consultation to strike"
        ]}
      />
      <Footer />
    </div>
  );
}
