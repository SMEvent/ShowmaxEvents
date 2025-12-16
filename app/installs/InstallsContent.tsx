"use client";

import { useState } from "react";
import Link from "next/link";

export default function InstallsContent() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const installationSpecialties = [
    {
      id: "led-walls",
      title: "LED Wall Installations",
      summary: (
        <>
          Impress audiences with stunning visuals that turn your space into a destination. We design and install large-format LED screens, curved displays, stage backdrops, digital signage & lobby displays, and LED ceilings, strips & immersive environments.
        </>
      ),
      details: {
        closing: "From 2.6mm fine pitch to high-brightness outdoor walls, we tailor the screen to your space, your budget, and your goals.",
        equipment: [
          "ROE Visual LED panels (BP2.8mm, Graphite 2.6mm)",
          "Brompton SX40 / XD processing",
          "Large-format LED screens",
          "Curved displays & stage backdrops",
          "Digital signage & lobby displays",
          "LED ceilings, strips & immersive environments"
        ]
      }
    },
    {
      id: "audio",
      title: "Professional Audio Systems",
      summary: (
        <>
          Transform your room with crystal-clear sound designed for speech, music, worship, concerts, and everything in between. We specialize in full venue audio upgrades, concert-grade line arrays, subwoofer integration, distributed audio for lobbies, lounges, meeting rooms, system tuning, calibration & operator training.
        </>
      ),
      details: {
        closing: "The result: every seat is the best seat in the house.",
        equipment: [
          "d&b audiotechnik line arrays (J, Y, Q series)",
          "Subwoofer integration",
          "Distributed audio systems",
          "System tuning & calibration",
          "Operator training included",
          "QSC, Shure, Sennheiser"
        ]
      }
    },
    {
      id: "lighting",
      title: "Lighting Systems That Elevate Every Moment",
      summary: (
        <>
          Lighting shapes the entire experience—and we install systems that bring emotion, impact and flexibility. Our installations include moving fixtures, LED washes, strobes, blinders, house lighting & ambient fixtures, architectural accent lighting, and MA Lighting console programming.
        </>
      ),
      details: {
        closing: "From concerts to conferences to Sunday services, we build lighting systems that define the room.",
        equipment: [
          "Moving fixtures (Robe, Martin, Elation)",
          "LED washes, strobes, blinders",
          "House lighting & ambient fixtures",
          "Architectural accent lighting",
          "MA Lighting console programming",
          "Chauvet Professional"
        ]
      }
    },
    {
      id: "video",
      title: "Video, Projection & Camera Systems",
      summary: (
        <>
          Your visuals need to be sharp, reliable and easy to operate. Our integrations include laser projection systems, multi-camera setups, PTZ cameras for streaming, Barco E2 / S3 switching, Blackmagic ATEM control rooms, and 12G/SDI and fiber distribution.
        </>
      ),
      details: {
        closing: "Perfect for hybrid events, livestreams, conferences and broadcast environments.",
        equipment: [
          "Laser projection systems (Epson / Barco)",
          "Multi-camera setups",
          "PTZ cameras for streaming",
          "Barco E2 / S3 switching",
          "Blackmagic ATEM control rooms",
          "12G/SDI and fiber distribution"
        ]
      }
    },
    {
      id: "rigging",
      title: "Rigging, Power & Infrastructure",
      summary: (
        <>
          Every great AV system starts with a safe, reliable foundation. We provide CM motors & Eurotruss installations, permanent rigging points & load calculations, ground support structures, Theatrixx, LEX & TMB power systems, and cable management designed for long-term use.
        </>
      ),
      details: {
        closing: "Safety, compliance and engineering are built into every upgrade.",
        equipment: [
          "CM motors & Eurotruss installations",
          "Permanent rigging points & load calculations",
          "Ground support structures",
          "Theatrixx, LEX & TMB power systems",
          "Cable management & infrastructure",
          "Tyler Truss systems"
        ]
      }
    }
  ];

  const markets = [
    {
      title: "Event Venues & Convention Centres",
      description: "Turn your venue into a turnkey destination with installed LED, audio, lighting, and rigging systems that reduce rental dependencies and increase bookings."
    },
    {
      title: "Houses of Worship",
      description: "We specialize in clear speech, powerful worship environments, and volunteer-friendly systems."
    },
    {
      title: "Nightclubs & Entertainment Spaces",
      description: "High-impact sound, immersive lighting, and LED walls that define your brand."
    },
    {
      title: "Corporate Spaces & Boardrooms",
      description: "LED displays, conferencing systems, hybrid video setups, distributed audio and more."
    },
    {
      title: "Film, Broadcast & Virtual Production Studios",
      description: "Complete LED volume integration, camera tracking, rendering servers, and UE pipelines—installed by the team behind Vancouver's leading VP projects."
    }
  ];

  const installations = [
    {
      name: "Stanley Theatre",
      description: "Audio",
      links: [
        { url: "https://artsclub.com/shows/", label: "Stanley Theatre" }
      ]
    },
    {
      name: "Coastal Church Downtown",
      description: "Audio, LED wall, lighting",
      links: [
        { url: "https://coastalchurch.org/downtown/", label: "Coastal Church Downtown" }
      ]
    },
    {
      name: "Coastal Church Commercial Drive",
      description: "Audio, LED wall, lighting",
      links: [
        { url: "https://coastalchurch.org/commercial/", label: "Coastal Church Commercial Drive" }
      ]
    },
    {
      name: "Aurum Event Centre",
      description: "Audio, lighting, rigging, power",
      note: "formerly Enso",
      links: [
        { url: "https://aurumeventcentre.weebly.com/sales-deck.html", label: "Aurum Event Centre" }
      ]
    },
    {
      name: "Midtown Church",
      description: "Audio, lighting, video",
      links: [
        { url: "https://midtownchurch.com/", label: "Midtown Church" }
      ]
    },
    {
      name: "Rocky Mountaineer Station",
      description: "Audio, lighting, video, LED wall, rigging, power",
      links: [
        { url: "https://bceventmanagement.com/rocky-mountaineer-vancouver-station/", label: "Rocky Mountaineer Vancouver Station" }
      ]
    },
    {
      name: "Harbour Event Centre",
      description: "Audio, lighting, video, LED wall, rigging, power",
      links: []
    },
    {
      name: "Harbour Convention Centre",
      description: "Audio, lighting, video, LED wall, rigging, power",
      links: []
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
            <section id="installations" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                AV Installation Company – <span className="text-[#FACC15]">Permanent LED, Audio & Lighting Systems</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                Showmax designs and installs permanent <span className="text-[#FACC15]">AV systems</span> for venues, churches, nightclubs, corporate spaces, and entertainment facilities across North America. From <span className="text-[#FACC15]">LED video walls</span> and <span className="text-[#FACC15]">d&b audiotechnik sound systems</span> to professional lighting and rigging infrastructure—engineered by a team that produces 10,000+ events annually.
              </p>
              <p className="mt-4 text-lg text-gray-200 md:text-xl">
                Complete <span className="text-[#FACC15]">AV integration</span> with design, installation, programming, training, and ongoing support. Built to perform every day, for every event.
              </p>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
              {/* World-Class AV Systems */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Permanent AV Systems Built to <span className="text-[#FACC15]">Perform Every Day</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Your venue deserves technology that elevates every event, every service, every moment. At Showmax, we design and install complete, high-performance AV systems that look incredible, sound exceptional, and operate reliably—day after day, show after show.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    From LED walls and audio systems to lighting, video, rigging and power, our integration team delivers turnkey solutions that instantly upgrade your space and set you apart.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    This is permanent AV done right—engineered by a team that produces <span className="text-[#FACC15]">10,000+ events</span> and knows exactly what your venue needs to succeed.
                  </p>
                </div>
              </section>

              {/* Why Venues Choose Showmax */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Venues Choose <span className="text-[#FACC15]">Showmax</span> for AV Installations</h2>
                  
                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">We Don't Just Install Equipment—We Build Experiences</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        Your AV system becomes part of your business. It must be powerful, intuitive, and built for long-term performance. Showmax delivers installations that make your venue look better, sound better, and attract higher-value clients.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">Designed by Production Experts</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        With decades of experience producing concerts, festivals, conferences, churches and virtual productions, we know what works in the real world—not just on paper.
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        You get the same technology trusted by: <span className="text-[#FACC15]">TED, Amazon, Lululemon, MGM, NFL, Netflix, Coastal Church, BMW, Porter Airlines</span>, and more.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">Powered by Industry-Leading Brands</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        We install only proven, rider-approved, globally recognized equipment:
                      </p>
                      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-base text-gray-100 md:text-lg">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>ROE Visual LED walls</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Brompton Processing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>d&b audiotechnik sound systems</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Shure Axient wireless</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Digico, Avid, Allen & Heath</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Robe, Martin, Elation, Chauvet</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Barco, Blackmagic, Epson</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Eurotruss, Tyler Truss</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                          <span>Theatrixx & LEX power</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        Your installation is built with the same tools used on the world's biggest stages.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Installation Specialties */}
              <section id="specialties" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">AV Installation <span className="text-[#FACC15]">Services</span></h2>
                  
                  <div className="mt-12 space-y-12">
                    {installationSpecialties.map(({ id, title, summary, details }) => {
                      const isOpen = Boolean(openSections[id]);
                      const sectionId = `installs-${id}`;
                      return (
                        <div key={id} id={sectionId} className="border-t border-white/20 pt-10 first:border-t-0 first:pt-0 scroll-mt-24">
                          <button
                            type="button"
                            onClick={() => toggleSection(id)}
                            className="flex w-full items-center justify-between text-left group"
                            aria-expanded={isOpen}
                            aria-controls={`${id}-details`}
                          >
                            <span className="text-2xl font-semibold text-white md:text-3xl group-hover:text-[#FACC15] transition-colors">{title}</span>
                            <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 text-xl text-white transition-all group-hover:border-[#FACC15] group-hover:text-[#FACC15]">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          <div className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">{summary}</div>
                          {isOpen && (
                            <div id={`${id}-details`} className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-base leading-relaxed text-gray-100 md:text-lg">
                              <p className="text-sm font-semibold uppercase tracking-wide text-[#FACC15] md:text-base">Equipment & Integration:</p>
                              <ul className="space-y-3">
                                {details.equipment.map((item) => (
                                  <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <p className="text-gray-300 pt-2">{details.closing}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Markets We Install For */}
              <section id="markets" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Venues & Industries We <span className="text-[#FACC15]">Install For</span></h2>
                  
                  <div className="mt-8 space-y-6">
                    {markets.map((market, index) => (
                      <div key={index} className={index > 0 ? "border-t border-white/10 pt-6" : ""}>
                        <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">{market.title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-gray-300 md:text-lg">
                          {market.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Proven Installation Work */}
              <section id="portfolio" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Our Proven <span className="text-[#FACC15]">Installation Work</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    A selection of recent installations:
                  </p>
                  
                  <ul className="mt-6 space-y-4 text-base text-gray-100 md:text-lg">
                    {installations.map((installation, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-2">
                            {installation.links.length === 1 ? (
                              <Link
                                href={installation.links[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#FACC15] hover:text-[#FACC15]/80 underline decoration-[#FACC15]/50 hover:decoration-[#FACC15] transition-colors duration-200"
                              >
                                {installation.name}
                              </Link>
                            ) : installation.links.length === 0 ? (
                              <span className="font-semibold text-white">{installation.name}</span>
                            ) : (
                              <span className="font-semibold text-white">{installation.name}</span>
                            )}
                            {installation.note && (
                              <span className="text-gray-400 text-sm italic">({installation.note})</span>
                            )}
                            <span className="text-gray-300">– {installation.description}</span>
                          </div>
                          {installation.links.length > 1 && (
                            <div className="mt-2 flex flex-wrap gap-3">
                              {installation.links.map((link, linkIndex) => (
                                <Link
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-[#FACC15] hover:text-[#FACC15]/80 underline decoration-[#FACC15]/50 hover:decoration-[#FACC15] transition-colors duration-200"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
                    Each project completed with full design, integration, programming and support.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Frequently Asked Questions</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Common questions about our AV installation services, process, and capabilities.
                  </p>
                  
                  <div className="mt-10 space-y-8 text-left">
                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What does an AV installation company do?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        An AV installation company designs, installs, and integrates permanent audio, video, and lighting systems for venues, churches, corporate spaces, and entertainment facilities. This includes system design, equipment procurement, physical installation, programming, calibration, training, and ongoing support.
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What equipment do you install for permanent audio systems?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        We install d&b audiotechnik line arrays and point-source systems, DiGiCo and Allen & Heath mixing consoles, Shure and Sennheiser wireless microphones, distributed audio systems, and subwoofer integration. All installations include system tuning, calibration, and operator training.
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">Do you install LED video walls for churches and venues?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        Yes. We install ROE Visual LED walls with Brompton processing for churches, event venues, corporate lobbies, nightclubs, and broadcast studios. Options include fine-pitch indoor displays, outdoor LED screens, curved walls, LED ceilings, and immersive environments.
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">How long does a venue AV installation take?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        Installation timelines vary by project scope. A basic church audio upgrade may take 1-2 weeks, while a complete venue AV integration with LED walls, lighting, audio, and rigging typically takes 4-8 weeks. We provide detailed project schedules during the design phase.
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">Do you provide training after installation?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        Yes. All our installations include comprehensive operator training. We train your staff or volunteers on system operation, basic troubleshooting, and maintenance. We also provide documentation and ongoing technical support.
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What areas do you serve for AV installation?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        We provide AV installation services across North America, including major US markets (Las Vegas, Seattle) and Canadian markets including British Columbia (Vancouver, Victoria, Kelowna), Alberta (Calgary, Edmonton), and Ontario (Toronto, GTA).
                      </p>
                    </div>

                    <div className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What types of venues do you install AV systems for?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        We install permanent AV systems for event venues and convention centres, houses of worship and churches, nightclubs and entertainment venues, corporate boardrooms and conference centres, broadcast and virtual production studios, and performing arts theatres.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">Do you offer ongoing support after installation?</h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                        Yes. We provide ongoing technical support, preventive maintenance, and system upgrades. Our rental division can also supplement your installed system with additional equipment for larger events.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section id="contact-cta" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#FACC15]/10 via-white/5 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center">Ready to Upgrade Your Venue?</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg text-center max-w-3xl mx-auto">
                    A permanent AV installation is an investment in your guest experience, your revenue, and your future. Showmax delivers systems that look better, sound better, and last longer—installed by a team that supports you long after opening night.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact">
                      <button className="w-full sm:w-auto px-8 py-4 bg-[#FACC15] text-black font-semibold rounded-lg hover:bg-[#FACC15]/90 transition-colors">
                        Request Installation Quote
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                        Schedule Site Visit
                      </button>
                    </Link>
                    <Link href="/events">
                      <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                        View Event Production
                      </button>
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

