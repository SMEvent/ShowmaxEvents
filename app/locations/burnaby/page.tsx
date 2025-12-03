import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental Burnaby | Audio Visual & Event Production Services",
  description: "Professional AV rental in Burnaby, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events at Hilton Metrotown, Grand Villa Casino & Burnaby venues. Same-day delivery.",
  keywords: [
    "av rental burnaby",
    "audio visual burnaby",
    "event production burnaby",
    "sound system rental burnaby",
    "led wall rental burnaby",
    "corporate events burnaby",
    "hilton metrotown av"
  ],
  openGraph: {
    title: "AV Rental Burnaby BC | Audio Visual & Event Production",
    description: "Professional AV rental in Burnaby. d&b audio, LED walls, lighting. Same-day delivery from Vancouver.",
    url: `${siteUrl}/locations/burnaby`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/burnaby`
  }
};

export default function BurnabyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Burnaby"
        region="Metro Vancouver"
        province="BC"
        heroTitle="AV Rental Burnaby – Audio Visual & Event Production Services"
        description="Showmax Events provides complete audio visual services in Burnaby and the Tri-Cities. From corporate events at the Hilton Metrotown to productions at Grand Villa Casino, we deliver professional sound systems, LED walls, lighting, and staging with same-day delivery from our Vancouver headquarters."
        nearbyVenues={[
          "Hilton Vancouver Metrotown",
          "Grand Villa Casino",
          "Executive Plaza Hotel",
          "Burnaby Mountain Golf Course",
          "Michael J. Fox Theatre",
          "Shadbolt Centre for the Arts",
          "BCIT Campus",
          "SFU Burnaby Campus"
        ]}
        servicesHighlight={[
          "Same-day delivery from Vancouver warehouse",
          "Complete AV for Burnaby corporate events",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced Metro Vancouver crews",
          "Full technical support and production management"
        ]}
      />
      <Footer />
    </div>
  );
}
