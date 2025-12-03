import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Truck, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/lib/sanity/client";
import { RentalsContent } from "./RentalsContent";

export const metadata: Metadata = {
  title: "Equipment Rentals - ShowMax Events",
  description: "Professional AV equipment rental services in Vancouver. Audio, video, and lighting equipment for events of all sizes.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

// Fetch equipment from Sanity
async function getEquipment() {
  const query = `*[_type == "equipment"] | order(category asc, name asc) {
    _id,
    name,
    slug,
    category,
    description,
    day_rate,
    quantity,
    featured
  }`;
  
  return sanityFetch<any[]>({ query, tags: ["equipment"] });
}

export default async function RentalsPage() {
  const equipment = await getEquipment();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-black pt-16 text-white">
        {/* Hero Section */}
        <section className="section-glow relative overflow-hidden py-12 sm:py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-a h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.32)_0%,_transparent_80%)] blur-3xl"
              style={{ animationDuration: "20s" }}
            />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/60">Rentals</p>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl px-4 sm:px-0">
                Equipment <span className="seo-highlight">Rentals</span>
              </h1>
              <p className="text-base sm:text-lg text-white/70 md:text-xl px-4 sm:px-0">
                Professional AV equipment rental for events, productions, and installations
              </p>
            </div>
            
            {/* Equipment Catalog */}
            <RentalsContent equipment={equipment} />
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA Section */}
        <section className="section-glow relative overflow-hidden py-12 sm:py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-b h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.24)_0%,_transparent_85%)] blur-3xl"
              style={{ animationDuration: "26s", animationDelay: "-8s" }}
            />
          </div>
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-white/85">
              <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl text-primary">
                  Ready to Rent Equipment?
                </h2>
                <p className="text-base sm:text-lg text-white/70">
                  Browse our equipment catalog or contact us for a custom quote
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto sm:min-w-[220px]"
                  >
                    <Link href="/installs">Explore Install Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="section-divider" />

        {/* Rental Options */}
        <section className="section-glow relative overflow-hidden py-12 sm:py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-between">
            <div
              className="glow-sphere glow-variant-b h-[22rem] w-[22rem] -translate-x-1/4 rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.2)_0%,_transparent_85%)] blur-3xl"
              style={{ animationDuration: "22s", animationDelay: "-6s" }}
            />
            <div
              className="glow-sphere glow-variant-d h-[24rem] w-[24rem] translate-x-1/4 rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.2)_0%,_transparent_85%)] blur-3xl"
              style={{ animationDuration: "24s", animationDelay: "-10s" }}
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold md:text-4xl text-primary">
                Rental Options
              </h2>
            </div>

            <div className="grid gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="text-white/85">
                <CardHeader className="pb-4">
                  <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle className="text-lg sm:text-xl font-semibold">Daily Rentals</CardTitle>
                  <CardDescription className="text-white/70 text-sm">
                    Perfect for single-day events and short-term needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-white/70">
                    Flexible daily rental rates with same-day pickup and return options available.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-white/85">
                <CardHeader className="pb-4">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle className="text-lg sm:text-xl font-semibold">Weekly Rentals</CardTitle>
                  <CardDescription className="text-white/70 text-sm">
                    Extended rentals for multi-day events and productions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-white/70">
                    Discounted weekly rates for longer rental periods. Ideal for conferences and festivals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-white/85 sm:col-span-2 md:col-span-1">
                <CardHeader className="pb-4">
                  <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle className="text-lg sm:text-xl font-semibold">Delivery &amp; Setup</CardTitle>
                  <CardDescription className="text-white/70 text-sm">
                    Professional delivery and installation services available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-white/70">
                    We can deliver, set up, and configure equipment at your location. Technical support included.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

