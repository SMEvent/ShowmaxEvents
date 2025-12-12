"use client";

import Link from "next/link";
import { MapPin, Mail, ExternalLink, Users, Maximize, FileText } from "lucide-react";

export default function VenuesContent() {
  const venues = [
    {
      name: "Rocky Mountaineer Station",
      capacity: "1,255 people",
      size: "12,500 sq ft, 25'-40' ceilings",
      location: "1755 Cottrell Street, Vancouver, BC",
      floorplan: "https://bceventmanagement.com/rocky-mountaineer-vancouver-station/", // Update with actual floorplan URL
      description: "Beautifully converted turn of the century train station into modern event space with installed sound, lighting and LED screen.",
      contact: "darren@bceventmanagement.com",
      website: "https://bceventmanagement.com/rocky-mountaineer-vancouver-station/",
      advantages: [
        "Free parking",
        "Free internet",
        "Customizable",
        "Private",
        "Installed AV system",
        "Professionally managed"
      ]
    },
    {
      name: "Aurum Event Centre",
      capacity: "1,000 people",
      size: "10,000 sq ft, 40' ceilings",
      location: "750 Pacific Blvd South, Vancouver, BC",
      floorplan: "https://aurumeventcentre.weebly.com/sales-deck.html", // Update with actual floorplan URL
      description: "State of the art nightclub with giant LED screen, lighting, audio and performance stage in the heart of the city.",
      contact: "yvonne@klar-av.com",
      website: "https://aurumeventcentre.weebly.com/sales-deck.html",
      advantages: [
        "Customizable",
        "Private",
        "Installed AV system",
        "Professionally managed"
      ]
    },
    {
      name: "Plaza of Nations",
      capacity: "8,000 people",
      size: "25,000 sq ft outdoor",
      location: "750 Pacific Blvd South, Vancouver, BC",
      floorplan: "https://aurumeventcentre.weebly.com/sales-deck.html", // Update with actual floorplan URL
      description: "State of the art outdoor concert and festival space with SL100 mobile stage, LED screen, lighting, audio and power in the heart of the city.",
      contact: "yvonne@klar-av.com",
      website: "https://aurumeventcentre.weebly.com/sales-deck.html",
      advantages: [
        "Customizable",
        "Private",
        "SL100 stage",
        "Sound, lighting, LED wall",
        "Power distribution",
        "Professionally managed",
        "Indoor/outdoor option with Enso Nightclub"
      ]
    }
  ];

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
            <section id="venues" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Turnkey Event Venues with <span className="text-[#FACC15]">World-Class AV</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                Finding the right venue can be time consuming. Showmax has simplified this process by installing fully integrated and complete equipment packages into three unique venues that you can rent for your next event.
              </p>
              <p className="mt-4 text-base text-gray-300 md:text-lg">
                Each of these venues offer world-class equipment technology paired with friendly technical support.
              </p>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
              {/* Venue Cards */}
              {venues.map((venue, index) => (
                <section key={index} className="scroll-mt-24">
                  <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                    <h2 className="text-3xl font-semibold text-[#FACC15] md:text-4xl">{venue.name}</h2>
                    
                    {/* Specs Grid */}
                    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:col-span-1 lg:col-span-1">
                        <div className="flex items-start gap-3 mb-4">
                          <Users className="h-5 w-5 text-[#FACC15] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-white/70 uppercase tracking-wide">Capacity</div>
                            <div className="text-lg font-semibold text-white">{venue.capacity}</div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="text-sm text-white/70 uppercase tracking-wide mb-3">Advantages</div>
                          <div className="space-y-2">
                            {venue.advantages.map((advantage, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                                <span className="text-sm text-gray-300">{advantage}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <Maximize className="h-5 w-5 text-[#FACC15] mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm text-white/70 uppercase tracking-wide">Size</div>
                          <div className="text-lg font-semibold text-white">{venue.size}</div>
                          {venue.floorplan && (
                            <a
                              href={venue.floorplan}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#FACC15] hover:text-[#fff1b2] transition-colors"
                            >
                              <FileText className="h-3.5 w-3.5" />
                              See floorplan
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:col-span-2 lg:col-span-1">
                        <div className="flex items-start gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-[#FACC15] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-white/70 uppercase tracking-wide">Location</div>
                            <div className="text-base font-semibold text-white">{venue.location}</div>
                          </div>
                        </div>
                        <div className="mt-3 rounded-lg overflow-hidden border border-white/10">
                          <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(venue.location)}&output=embed&zoom=15`}
                            width="100%"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                            title={`Map showing ${venue.location}`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
                      {venue.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <a
                        href={`mailto:${venue.contact}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                      >
                        <Mail className="h-4 w-4" />
                        Contact Venue
                      </a>
                      <a
                        href={venue.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Learn More
                      </a>
                    </div>
                  </div>
                </section>
              ))}

              {/* CTA Section */}
              <section id="contact-cta" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center">Ready to Book Your <span className="text-[#FACC15]">Event Venue?</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg text-center max-w-3xl mx-auto">
                    Contact us today to discuss your event needs and discover how our turnkey venue solutions can make your next event extraordinary.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                    >
                      📞 Get in Touch
                    </Link>
                    <Link
                      href="/production"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                    >
                      🎬 View Our Services
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



