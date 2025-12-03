import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Seattle | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Seattle, WA. Complete audio visual services with d&b audio, LED walls, lighting for corporate events at Washington State Convention Center, Climate Pledge Arena & Pacific Northwest venues.",
  keywords: [
    "event production seattle",
    "av rental seattle",
    "audio visual seattle",
    "washington state convention center av",
    "climate pledge arena production",
    "corporate events seattle",
    "pacific northwest av services"
  ],
  openGraph: {
    title: "Event Production Seattle | AV Rental & Audio Visual",
    description: "Professional event production in Seattle. d&b audio, LED walls, lighting. Cross-border production expertise.",
    url: `${siteUrl}/locations/seattle`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/seattle`
  }
};

export default function SeattlePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Seattle"
        region="Pacific Northwest"
        province="WA"
        heroTitle="Event Production Seattle – AV Rental & Audio Visual Services"
        description="Showmax Events extends professional event production and AV services to Seattle and the Pacific Northwest. From corporate conferences at the Washington State Convention Center to concerts at Climate Pledge Arena, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting with cross-border production expertise."
        nearbyVenues={[
          "Washington State Convention Center",
          "Climate Pledge Arena",
          "Lumen Field",
          "Benaroya Hall",
          "McCaw Hall",
          "The Westin Seattle",
          "Grand Hyatt Seattle",
          "Hyatt Regency Seattle",
          "Paramount Theatre",
          "Museum of Pop Culture"
        ]}
        servicesHighlight={[
          "Cross-border production expertise from Vancouver",
          "Premium touring equipment for US events",
          "Washington State Convention Center specialists",
          "d&b audiotechnik and ROE Visual inventory",
          "Experienced crews for Pacific Northwest productions"
        ]}
      />
      <Footer />
    </div>
  );
}
