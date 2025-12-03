import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Event Production Las Vegas | AV Rental & Audio Visual Services",
  description: "Professional event production and AV rental in Las Vegas, NV. Complete audio visual services with d&b audio, LED walls, lighting for corporate events, trade shows & Las Vegas Convention Center.",
  keywords: [
    "event production las vegas",
    "av rental las vegas",
    "audio visual las vegas",
    "las vegas convention center av",
    "trade show production las vegas",
    "corporate events las vegas",
    "ces av services"
  ],
  openGraph: {
    title: "Event Production Las Vegas | AV Rental & Audio Visual",
    description: "Professional event production in Las Vegas. d&b audio, LED walls, lighting. Trade show and convention specialists.",
    url: `${siteUrl}/locations/las-vegas`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/las-vegas`
  }
};

export default function LasVegasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Las Vegas"
        region="Nevada"
        province="NV"
        heroTitle="Event Production Las Vegas – AV Rental & Audio Visual Services"
        description="Showmax Events provides professional event production and AV services in Las Vegas. From major trade shows at the Las Vegas Convention Center to corporate galas on the Strip, we deliver d&b audiotechnik sound systems, ROE Visual LED walls, and professional lighting for the entertainment capital's most demanding productions."
        nearbyVenues={[
          "Las Vegas Convention Center",
          "Mandalay Bay Convention Center",
          "Wynn Las Vegas",
          "Venetian Expo",
          "T-Mobile Arena",
          "Allegiant Stadium",
          "MGM Grand Conference Center",
          "Caesars Palace",
          "ARIA Resort & Casino"
        ]}
        servicesHighlight={[
          "Trade show and convention production specialists",
          "CES and major Las Vegas event experience",
          "Premium touring equipment for high-profile events",
          "d&b audiotechnik and ROE Visual inventory",
          "Cross-border coordination from Vancouver"
        ]}
      />
      <Footer />
    </div>
  );
}
