import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Audio Visual Rental Edmonton | AV Equipment & Event Production",
  description: "Professional audio visual rental in Edmonton, AB. Complete AV equipment, LED walls, sound systems, lighting for corporate events, conferences, and venues. Serving Shaw Conference Centre and Rogers Place.",
  keywords: [
    "audio visual rental edmonton",
    "av equipment rental edmonton",
    "av company edmonton",
    "event production edmonton",
    "edmonton convention centre av",
    "corporate events edmonton",
  ],
  openGraph: {
    title: "Audio Visual Services Edmonton AB | AV Equipment & Event Production",
    description: "Professional audio visual services in Edmonton, AB. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/edmonton`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
};

export default function EdmontonPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
        <LocationTemplate
          city="Edmonton"
          region="Northern Alberta"
          province="AB"
          heroTitle="Audio Visual Rental Edmonton | Complete AV Equipment & Event Services"
          description="Showmax Events provides comprehensive audio visual production services in Edmonton and Northern Alberta. From conferences at the Edmonton Convention Centre to corporate galas and large-scale productions, we deliver professional results with premium touring equipment and experienced technical crew."
        nearbyVenues={[
          "Edmonton Convention Centre",
          "Rogers Place",
          "Jubilee Auditorium",
          "Shaw Conference Centre",
          "River Cree Resort & Casino",
          "JW Marriott Edmonton",
          "Fairmont Hotel Macdonald",
          "The Westin Edmonton",
        ]}
        servicesHighlight={[
          "Full production support for Alberta events",
          "Premium touring equipment and experienced crew",
          "Comprehensive AV for conventions and conferences",
          "Large-scale production capabilities",
          "Complete technical management",
        ]}
      />
      <Footer />
    </div>
  );
}

