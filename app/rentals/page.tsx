import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Package, Truck, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Equipment Rentals - ShowMax Events",
  description: "Professional AV equipment rental services in Vancouver. Audio, video, and lighting equipment for events of all sizes.",
};

export default function RentalsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-black pt-16 text-white">
        {/* Hero Section */}
        <section className="section-glow relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-a h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.32)_0%,_transparent_80%)] blur-3xl"
              style={{ animationDuration: "20s" }}
            />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Rentals</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Equipment <span className="seo-highlight">Rentals</span>
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                Professional AV equipment rental for events, productions, and installations
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Services Section */}
        <section className="section-glow relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-c h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.22)_0%,_transparent_80%)] blur-3xl"
              style={{ animationDuration: "24s", animationDelay: "-4s" }}
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary">
                Rental Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/70">
                Flexible rental options for all your AV equipment needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-white/85">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Audio Equipment</CardTitle>
                  <CardDescription className="text-white/70">
                    PA systems, microphones, mixers, and audio accessories
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-white/85">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Video Equipment</CardTitle>
                  <CardDescription className="text-white/70">
                    Projectors, screens, cameras, and video production gear
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-white/85">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Lighting Equipment</CardTitle>
                  <CardDescription className="text-white/70">
                    Stage lighting, effects, and control systems
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-white/85">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Accessories &amp; Cables</CardTitle>
                  <CardDescription className="text-white/70">
                    All the cables, stands, and accessories you need
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Rental Options */}
        <section className="section-glow relative overflow-hidden py-16 md:py-24">
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
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary">
                Rental Options
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="text-white/85">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Daily Rentals</CardTitle>
                  <CardDescription className="text-white/70">
                    Perfect for single-day events and short-term needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Flexible daily rental rates with same-day pickup and return options available.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-white/85">
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Weekly Rentals</CardTitle>
                  <CardDescription className="text-white/70">
                    Extended rentals for multi-day events and productions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Discounted weekly rates for longer rental periods. Ideal for conferences and festivals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-white/85">
                <CardHeader>
                  <Truck className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold">Delivery &amp; Setup</CardTitle>
                  <CardDescription className="text-white/70">
                    Professional delivery and installation services available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    We can deliver, set up, and configure equipment at your location. Technical support included.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA Section */}
        <section className="section-glow relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-b h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.24)_0%,_transparent_85%)] blur-3xl"
              style={{ animationDuration: "26s", animationDelay: "-8s" }}
            />
          </div>
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-white/85">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl text-primary">
                  Ready to Rent Equipment?
                </h2>
                <p className="text-lg text-white/70">
                  Browse our equipment catalog or contact us for a custom quote
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="sm:min-w-[220px]"
                  >
                    <Link href="/installs" className="w-full">Explore Install Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

