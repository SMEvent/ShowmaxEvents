import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "AV Rental West Vancouver | Audio Visual & Event Production",
  description: "Professional AV rental in West Vancouver, BC. Complete audio visual services for corporate events, galas, and private functions at West Vancouver venues and private estates.",
  keywords: [
    "av rental west vancouver",
    "audio visual west vancouver",
    "event production west vancouver",
    "corporate events west vancouver",
    "private event av west vancouver"
  ],
  openGraph: {
    title: "AV Rental West Vancouver | Audio Visual & Event Production",
    description: "Professional AV rental in West Vancouver. d&b audio, LED walls, lighting for corporate and private events.",
    url: `${siteUrl}/locations/west-vancouver`,
    siteName: "Showmax Events",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/locations/west-vancouver`
  }
};

export default function WestVancouverPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="West Vancouver"
        region="North Shore"
        province="BC"
        heroTitle="AV Rental West Vancouver – Audio Visual & Event Production"
        description="Showmax Events provides premium audio visual services in West Vancouver. From elegant galas at private estates to corporate functions at local venues, we deliver sophisticated AV solutions with white-glove service and premium equipment from our Vancouver headquarters."
        nearbyVenues={[
          "West Vancouver Yacht Club",
          "Hollyburn Country Club",
          "Kay Meek Arts Centre",
          "Gleneagles Golf Course",
          "Private Estates",
          "West Vancouver Community Centre"
        ]}
        servicesHighlight={[
          "Premium AV for West Vancouver events",
          "White-glove service for private functions",
          "d&b audiotechnik and ROE Visual equipment",
          "Experienced crews for high-end productions",
          "Discreet, professional delivery and setup"
        ]}
      />
      <Footer />
    </div>
  );
}
