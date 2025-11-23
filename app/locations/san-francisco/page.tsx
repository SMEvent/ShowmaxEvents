import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Stage Rental San Francisco | Audio Visual Equipment & Event Services",
  description: "Professional stage rental in San Francisco, CA. Complete staging, audio visual equipment, and event production services for corporate conferences, product launches, and Bay Area venues.",
  openGraph: {
    title: "Audio Visual Services San Francisco | AV Equipment & Production",
    description: "Professional audio visual services in San Francisco, CA. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/san-francisco`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function SanFranciscoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="San Francisco"
        region="Bay Area"
        province="CA"
        heroTitle="Stage Rental San Francisco | Professional Staging & AV Equipment"
        description="Showmax Events provides premium audio visual production services for San Francisco and Bay Area events. From tech conferences at Moscone Center to corporate galas and product launches, we deliver comprehensive AV solutions with premium equipment and experienced technical crew serving California's innovation capital."
        nearbyVenues={[
          "Moscone Center",
          "Oracle Park",
          "Palace Hotel",
          "Fairmont San Francisco",
          "The St. Regis San Francisco",
          "SFJAZZ Center",
        ]}
        servicesHighlight={[
          "Tech industry event specialists",
          "Premium equipment for Bay Area productions",
          "Experienced with corporate launches and conferences",
          "Complete production management",
          "Trusted by major tech brands for San Francisco events",
        ]}
      />
      <Footer />
    </div>
  );
}

