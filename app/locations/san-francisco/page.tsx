import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production San Francisco | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in San Francisco, CA. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, tech conferences & Bay Area venues.",
  keywords: [
    "event production san francisco",
    "av rental san francisco",
    "audio visual san francisco",
    "moscone center av",
    "tech conference production",
    "corporate events san francisco",
    "bay area av services"
  ],
  openGraph: {
    title: "Event Production San Francisco | AV Rental & Audio Visual",
    description: "Professional event production in San Francisco. d&b audio, LED walls, lighting. Tech conference specialists.",
    url: `${siteUrl}/locations/san-francisco`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/san-francisco`
  }
};

export default function SanFranciscoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="San Francisco"
        region="Bay Area"
        province="CA"
        heroTitle="Event Production San Francisco – AV Rental & Audio Visual Services"
        description="Showmax Events provides professional event production and AV services in San Francisco and the Bay Area. From tech conferences at Moscone Center to corporate galas and product launches, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting for Silicon Valley's most demanding events."
        nearbyVenues={[
          "Moscone Center",
          "Chase Center",
          "Bill Graham Civic Auditorium",
          "Palace of Fine Arts",
          "The Ritz-Carlton, San Francisco",
          "Fairmont San Francisco",
          "Hotel Nikko San Francisco",
          "Fort Mason Center",
          "Yerba Buena Center for the Arts"
        ]}
        servicesHighlight={[
          "Tech conference and product launch specialists",
          "Premium touring equipment for Bay Area events",
          "Moscone Center production expertise",
          "d&b audiotechnik and ROE Visual inventory",
          "Cross-border coordination from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
