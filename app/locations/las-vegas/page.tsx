import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationTemplate } from "@/components/locations/LocationTemplate";

const siteUrl = "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Convention AV Services Las Vegas | Trade Show Production",
  description: "Professional convention AV services in Las Vegas, NV. Complete trade show production, audio visual equipment, and event services for conventions, conferences, and corporate events on the Strip.",
  openGraph: {
    title: "Audio Visual Services Las Vegas | AV Equipment & Production",
    description: "Professional audio visual services in Las Vegas, NV. Event production and AV equipment rental.",
    url: `${siteUrl}/locations/las-vegas`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website",
  },
};

export default function LasVegasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <LocationTemplate
        city="Las Vegas"
        region="Nevada"
        province="NV"
        heroTitle="Convention AV Services Las Vegas | Trade Show Production"
        description="Showmax Events provides premium audio visual production services for Las Vegas events. From major conventions and corporate conferences to entertainment productions and product launches, we deliver comprehensive AV solutions with premium equipment and experienced crew serving the world's premier convention destination."
        nearbyVenues={[
          "Las Vegas Convention Center",
          "Mandalay Bay Convention Center",
          "MGM Grand Conference Center",
          "The Venetian Congress Center",
          "Caesars Forum",
          "T-Mobile Arena",
        ]}
        servicesHighlight={[
          "Major convention and trade show experience",
          "Premium equipment for high-profile events",
          "Experienced with Las Vegas venue requirements",
          "Complete production management",
          "Trusted for corporate shows on the Strip",
        ]}
      />
      <Footer />
    </div>
  );
}

