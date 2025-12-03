import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental New Westminster | Audio Visual & Event Production",
  description: "Professional AV rental in New Westminster, BC. Complete audio visual services with d&b audio, LED walls, lighting for corporate events at Anvil Centre and New Westminster venues.",
  keywords: [
    "av rental new westminster",
    "audio visual new westminster",
    "event production new westminster",
    "anvil centre av",
    "corporate events new westminster"
  ],
  openGraph: {
    title: "AV Rental New Westminster | Audio Visual & Event Production",
    description: "Professional AV rental in New Westminster. d&b audio, LED walls, lighting. Anvil Centre specialists.",
    url: `${siteUrl}/locations/new-westminster`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/new-westminster`
  }
};

export default function NewWestminsterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="New Westminster"
        region="Metro Vancouver"
        province="BC"
        heroTitle="AV Rental New Westminster – Audio Visual & Event Production"
        description="Showmax Events provides complete audio visual services in New Westminster. From conferences at the Anvil Centre to corporate events at the Inn at the Quay, we deliver professional AV solutions with fast delivery from our Vancouver warehouse."
        nearbyVenues={[
          "Anvil Centre",
          "Inn at the Quay",
          "Massey Theatre",
          "Douglas College",
          "Westminster Pier Park",
          "River Market"
        ]}
        servicesHighlight={[
          "Anvil Centre AV specialists",
          "Complete AV for New Westminster events",
          "Fast delivery from Vancouver",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced production crews"
        ]}
      />
      <Footer />
    </div>
  );
}
