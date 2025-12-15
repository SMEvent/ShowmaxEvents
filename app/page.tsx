import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { HomePageContent } from "@/components/common/HomePageContent";

export const metadata: Metadata = {
  title: "Showmax Events | Full-Service Event Production & AV Rentals Across North America",
  description: "Showmax Events is a leading event production company based in Vancouver with major operations in Las Vegas and Seattle, delivering full-service audio, lighting, video, LED, staging, rigging, virtual production, and venue installations across North America. Trusted for corporate events, conferences, concerts, festivals, and large-scale productions.",
  keywords: [
    "event production Vancouver",
    "event production Calgary",
    "event production Toronto",
    "corporate event AV",
    "concert production Canada",
    "AV rentals Vancouver",
    "LED wall rental Canada",
    "hybrid event production",
    "conference AV services",
    "production company Canada"
  ],
};

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-black">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Homepage Content Sections */}
        <HomePageContent />
      </main>
      <Footer />
    </div>
  );
}
