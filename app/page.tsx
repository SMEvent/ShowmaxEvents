import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { ServiceCards } from "@/components/common/ServiceCards";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-black pt-16">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Hero Content Section */}
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
}
