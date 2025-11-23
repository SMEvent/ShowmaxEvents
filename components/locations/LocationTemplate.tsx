"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LocationTemplateProps {
  city: string;
  region: string;
  province: string;
  heroTitle?: string;
  description: string;
  nearbyVenues?: string[];
  servicesHighlight?: string[];
}

export function LocationTemplate({
  city,
  region,
  province,
  heroTitle,
  description,
  nearbyVenues = [],
  servicesHighlight = []
}: LocationTemplateProps) {
  const defaultHeroTitle = `Professional Audio Visual Services in ${city}, ${province}`;
  const title = heroTitle || defaultHeroTitle;

  return (
    <main className="flex-1 bg-black pt-24 pb-24">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-48 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4">
          <article>
            {/* Hero Section */}
            <section className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                {description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-[#FACC15] text-black hover:bg-[#FACC15]/90">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/events#live-events">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                    View Services
                  </Button>
                </Link>
              </div>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
              {/* Services Section */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Complete AV Production Services in <span className="text-[#FACC15]">{city}</span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Showmax Events provides comprehensive audio visual production services for events of all sizes in {city} and the surrounding {region} area. Our experienced team delivers professional results for corporate events, conferences, concerts, galas, and more.
                  </p>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {/* Live Event Production */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Live Event Production</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Sound System Rental & Audio Reinforcement</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Event Lighting Design & Production</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>LED Wall & Projector Rental</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Certified Rigging & Truss Services</span>
                        </li>
                      </ul>
                    </div>

                    {/* Hybrid & Virtual Events */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Hybrid & Virtual Events</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Live Streaming & Webcasting</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Multi-Camera Production</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Virtual Platform Management</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Remote Presenter Coordination</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {servicesHighlight.length > 0 && (
                    <div className="mt-10 border-t border-white/10 pt-8">
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">
                        Why Choose Showmax in {city}
                      </h3>
                      <ul className="mt-4 space-y-2 text-base text-gray-100 md:text-lg">
                        {servicesHighlight.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              {/* Equipment Section */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Premium <span className="text-[#FACC15]">AV Equipment</span> Rental
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Our {city} inventory includes industry-leading equipment from the world's top manufacturers.
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Audio Systems</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>d&b audiotechnik Line Arrays</li>
                        <li>Digico SD Series Consoles</li>
                        <li>Shure Axient Wireless</li>
                        <li>QSC Powered Speakers</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Lighting</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>Robe BMFL & Pointe</li>
                        <li>Martin Axiom</li>
                        <li>MA3 & MA2 Consoles</li>
                        <li>Chauvet Color Strike</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Video</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>ROE Visual LED Walls</li>
                        <li>Barco E2 Processing</li>
                        <li>Sony 4K Cameras</li>
                        <li>Epson Laser Projectors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Venues Section */}
              {nearbyVenues.length > 0 && (
                <section className="scroll-mt-24">
                  <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">
                      Venues We Serve in <span className="text-[#FACC15]">{city}</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                      We provide AV production services at premier venues throughout {city} and {region}.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {nearbyVenues.map((venue, index) => (
                        <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-4 text-gray-200">
                          {venue}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Call to Action */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#FACC15]/10 via-white/5 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12 text-center">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Ready to Elevate Your Event in {city}?
                  </h2>
                  <p className="mt-4 text-lg text-gray-200 md:text-xl max-w-2xl mx-auto">
                    Contact our team today to discuss your audio visual production needs. We'll provide a detailed quote and technical consultation for your upcoming event.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto bg-[#FACC15] text-black hover:bg-[#FACC15]/90">
                        Request a Quote
                      </Button>
                    </Link>
                    <Link href="/events">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                        Learn More About Our Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

