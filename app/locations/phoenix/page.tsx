import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Phoenix | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Phoenix, AZ. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, conferences & Phoenix Convention Center.",
  keywords: [
    "event production phoenix",
    "av rental phoenix",
    "audio visual phoenix",
    "phoenix convention center av",
    "corporate events phoenix",
    "arizona av services"
  ],
  openGraph: {
    title: "Event Production Phoenix | AV Rental & Audio Visual",
    description: "Professional event production in Phoenix. d&b audio, LED walls, lighting. Phoenix Convention Center specialists.",
    url: `${siteUrl}/locations/phoenix`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/phoenix`
  }
};

export default function PhoenixPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Phoenix"
        region="Arizona"
        province="AZ"
        heroTitle="Event Production Phoenix – AV Rental & Audio Visual Services"
        description="Showmax Events provides professional event production and AV services in Phoenix and the Valley of the Sun. From corporate conferences at the Phoenix Convention Center to resort events in Scottsdale, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting for Arizona's premier events."
        nearbyVenues={[
          "Phoenix Convention Center",
          "Talking Stick Resort Arena",
          "State Farm Stadium",
          "The Phoenician",
          "Arizona Biltmore",
          "JW Marriott Phoenix Desert Ridge",
          "Scottsdale Resort at McCormick Ranch",
          "Fairmont Scottsdale Princess"
        ]}
        servicesHighlight={[
          "Phoenix Convention Center specialists",
          "Scottsdale resort event expertise",
          "Premium touring equipment for Arizona events",
          "d&b audiotechnik and ROE Visual inventory",
          "Cross-border coordination from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
