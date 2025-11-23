"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function useHashScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.querySelector(hash) as HTMLElement | null;
      if (!element) return;

      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname, searchParams]);
}

function Section({
  id,
  title,
  intro,
  items
}: {
  id: string;
  title: string;
  intro: string;
  items?: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">{intro}</p>
        {items && (
          <ul className="mt-6 space-y-3 text-base text-gray-100 md:text-lg">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default function EventsContent() {
  useHashScroll();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const hybridEventSubsections = [
    {
      id: "streaming",
      title: "Live Streaming & Webcasting Services",
      summary: (
        <>
          Professional <span className="text-[#FACC15]">webcasting</span> and <span className="text-[#FACC15]">broadcast production</span> for digital audiences. Secure, low-latency delivery with redundant connectivity for reliable <span className="text-[#FACC15]">virtual events</span>.
        </>
      ),
      details: {
        closing: "Broadcast-grade encoding and CDN distribution ensuring seamless delivery for global audiences.",
        equipment: [
          "Encoding: Teradek Prism, Makito X4, Haivision",
          "Streaming Platforms: Vimeo Enterprise, YouTube Live, custom RTMP",
          "Network: Bonded cellular (LiveU, TVU), dedicated fiber connections",
          "Monitoring: Wowza, OBS Studio, vMix Pro"
        ]
      }
    },
    {
      id: "multicam",
      title: "Multi-Camera Broadcast Production",
      summary: (
        <>
          <span className="text-[#FACC15]">Multi-camera production</span> and <span className="text-[#FACC15]">IMAG (Image Magnification)</span> for hybrid conferences. Cinema-quality capture with professional broadcast switching.
        </>
      ),
      details: {
        closing: "Dynamic multi-angle coverage that connects remote viewers to the in-room experience.",
        equipment: [
          "Cameras: Sony PTZ (4K), Blackmagic URSA Mini Pro, Canon C300",
          "Switching: Barco E2, Roland V-600UHD, ATEM Constellation",
          "Graphics: Ross XPression, vMix Title Designer, Singular.live",
          "Recording: Blackmagic HyperDeck, Atomos Shogun"
        ]
      }
    },
    {
      id: "platforms",
      title: "Virtual Venue & Platform Management",
      summary: (
        <>
          Seamless <span className="text-[#FACC15]">platform integration</span> for <span className="text-[#FACC15]">webinars</span> and virtual summits. Full technical management of Zoom, Teams, and custom virtual venues.
        </>
      ),
      details: {
        closing: "End-to-end management of registration, breakout rooms, Q&A, and audience engagement tools.",
        equipment: [
          "Platforms: Zoom Webinar, MS Teams, Hopin, Brella, ON24",
          "Integration: vMix integration, OBS plugins, NDI workflows",
          "Engagement: Slido polling, Mentimeter, StreamYard",
          "Production Tools: Ecamm Live, Wirecast, vMix Call"
        ]
      }
    },
    {
      id: "remote",
      title: "Remote Presenter Coordination",
      summary: (
        <>
          Technical <span className="text-[#FACC15]">remote speaker management</span> for hybrid programs. Pre-event tech checks and seamless integration of virtual presenters into the live show.
        </>
      ),
      details: {
        closing: "Virtual green rooms, technical rehearsals, and real-time coaching for professional delivery.",
        equipment: [
          "Communication: ClearCom, RTS intercom systems, Zoom producer channels",
          "Coordination: Backstage green room systems, presenter coaching",
          "Backup Systems: Redundant internet, backup laptops, mobile hotspots",
          "Quality Control: Pre-event tech checks, bandwidth testing, rehearsals"
        ]
      }
    }
  ];

  const liveEventSubsections = [
    {
      id: "audio",
      title: "Sound System Rental & Audio Reinforcement",
      summary: (
        <>
          Premium <span className="text-[#FACC15]">audio equipment rental</span> featuring d&b audiotechnik systems. Crystal-clear sound reinforcement for concerts, corporate meetings, and festivals.
        </>
      ),
      details: {
        closing: "Expert audio technicians delivering precision sound quality for venues of any scale.",
        equipment: [
          "Systems: d&b audiotechnik J, Y, Q, and B-Series line arrays",
          "Mixing Consoles: Digico SD7 / SD10, Avid S6L, Allen & Heath Avantis",
          "Wireless: Shure Axient, ULX-D, PSM900 & PSM1000",
          "Powered Speakers: QSC K-Series and KS118 Subwoofers"
        ]
      }
    },
    {
      id: "lighting",
      title: "Event Lighting Design & Production",
      summary: (
        <>
          Dynamic <span className="text-[#FACC15]">lighting design</span> using Robe and Martin fixtures. Atmospheric production for gala dinners, stage performances, and brand activations.
        </>
      ),
      details: {
        closing: "Creative lighting designers transforming spaces with professional illumination.",
        equipment: [
          "Robe BMFL, Pointe, Tarantula, Spikie",
          "Martin Axiom",
          "Chauvet Color Strike M",
          "MA3 & MA2 Consoles"
        ]
      }
    },
    {
      id: "video",
      title: "LED Wall & Projector Rental",
      summary: (
        <>
          High-resolution <span className="text-[#FACC15]">ROE Visual LED walls</span> and large-venue <span className="text-[#FACC15]">projector rental</span>. Comprehensive video solutions from one of Canada's leading <span className="text-[#FACC15]">video production companies</span>.
        </>
      ),
      details: {
        closing: "Complete visual packages with 4K processing, live switching, and content management.",
        equipment: [
          "ROE Visual BP2.8mm & Graphite 2.6mm panels",
          "Brompton SX40 / XD processing",
          "Barco E2 / S3 4K switching",
          "Sony & Blackmagic URSA cameras",
          "Epson Pro 15K laser projection"
        ]
      }
    },
    {
      id: "rigging",
      title: "Certified Rigging & Truss Services",
      summary: (
        <>
          <span className="text-[#FACC15]">Certified rigging</span> for safe, compliant event structures. Heavy-duty truss systems for concerts, corporate events, and festivals across Canada.
        </>
      ),
      details: {
        closing: "Certified riggers ensuring complete structural safety and code compliance for every installation.",
        equipment: [
          "Eurotruss HD44 & FD34",
          "Tyler GT Plus PRT Truss",
          "CM 1-Ton & ½-Ton motors",
          "Skjonberg 48-channel controllers"
        ]
      }
    },
    {
      id: "staging-drape",
      title: "Staging, Drape & Scenic Elements",
      summary: (
        <>
          Custom <span className="text-[#FACC15]">stage construction</span> and professional <span className="text-[#FACC15]">drape systems</span> that transform venues. Complete scenic packages including pipe and drape, stage decks, stairs, and decorative elements for any event style.
        </>
      ),
      details: {
        closing: "Expert staging and drape installations creating professional, polished environments for corporate events, galas, and performances.",
        equipment: [
          "Staging: Modular stage decks (4x8, 4x4), adjustable height systems",
          "Drape: Velour, sheer, IFR-rated fabrics in multiple colors",
          "Pipe & Drape: Adjustable uprights, crossbars, weighted bases",
          "Scenic: Step units, handrails, skirting, decorative backdrops",
          "Dance Floors: Portable hardwood and specialty finishes"
        ]
      }
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
            <section id="events" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Professional Event Production Services in <span className="text-[#FACC15]">Vancouver, Calgary & Toronto</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                From intimate corporate gatherings to stadium-scale <span className="text-[#FACC15]">concerts</span>, we deliver complete event production across <span className="text-[#FACC15]">Vancouver, Calgary, Toronto</span>, and throughout Canada. Our comprehensive inventory features <span className="text-[#FACC15]">d&b audiotechnik</span> sound systems, <span className="text-[#FACC15]">ROE Visual LED walls</span>, intelligent lighting, certified rigging, staging systems, and custom drape packages trusted by major brands and production companies. Full-service <span className="text-[#FACC15]">event production support</span> for venues including the Vancouver Convention Centre, with complete technical crews and project management.
              </p>
            </section>

          <div className="mt-20 space-y-16 md:space-y-20">
            <section id="live-events" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12 text-center">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Complete Live Event Production in <span className="text-[#FACC15]">Canada</span></h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Full-service production company delivering audio, video, lighting, staging, rigging, drape, and technical support for corporate events, concerts, conferences, and festivals across Canada.
                </p>
                <div className="mt-6 rounded-lg overflow-hidden">
                  <Image
                    src="/Live concert.jpg?v=2"
                    alt="Live concert event production with stage lighting and LED screens"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>

                <div className="mt-12 space-y-12 text-left">
                  {liveEventSubsections.map(({ id, title, summary, details }) => {
                    const isOpen = Boolean(openSections[id]);
                    const sectionId = `live-events-${id}`;
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
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#FACC15] md:text-base">Equipment &amp; Brands:</p>
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

                <div className="mt-10 border-t border-white/10 pt-8">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">Why Event Producers Choose Showmax</h3>
                  <ul className="mt-4 space-y-2 text-base text-gray-100 md:text-lg">
                    <li>Complete event production management from concept to load-out</li>
                    <li>Extensive inventory: audio, video, lighting, staging, rigging, and drape</li>
                    <li>Largest ROE Visual LED &amp; d&amp;b audio inventory in Western Canada</li>
                    <li>Experienced production crews, technicians, and show operators</li>
                    <li>Scalable solutions for any venue size or event type</li>
                    <li>Trusted by Lululemon, TED, Netflix, and the NFL</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="hybrid-events" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Hybrid & <span className="text-[#FACC15]">Virtual Event Production</span></h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  <span className="text-[#FACC15]">Hybrid conferences</span> and <span className="text-[#FACC15]">virtual events</span> with professional <span className="text-[#FACC15]">live streaming</span>, multi-camera production, and platform integration across Canada.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Broadcast-quality production with redundant infrastructure, professional switching, and interactive engagement tools. Reliable execution for audiences of any size.
                </p>
                <div className="mt-8 rounded-lg overflow-hidden">
                  <Image
                    src="/Showmax-virtual-events-live-streaming.jpeg?v=2"
                    alt="Live streaming production control room with professional AV equipment and multi-camera setup"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>

                <div className="mt-12 space-y-12 text-left">
                  {hybridEventSubsections.map(({ id, title, summary, details }) => {
                    const isOpen = Boolean(openSections[id]);
                    const sectionId = `hybrid-events-${id}`;
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
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#FACC15] md:text-base">Technology & Platforms:</p>
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

                <div className="mt-10 border-t border-white/10 pt-8">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">Why Choose Showmax for Hybrid Events</h3>
                  <ul className="mt-4 space-y-2 text-base text-gray-100 md:text-lg">
                    <li>End-to-end hybrid event production management</li>
                    <li>Broadcast-quality streaming infrastructure across Canada</li>
                    <li>Experienced virtual event producers and technical directors</li>
                    <li>Redundant systems and backup connectivity for reliability</li>
                    <li>Trusted by Fortune 500 companies for hybrid conferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              id="service-areas"
              className="scroll-mt-24 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12"
            >
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Event Production Service Areas Across <span className="text-[#FACC15]">Canada</span></h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                From <span className="text-[#FACC15]">Calgary event production</span> to large-scale shows in Vancouver and Toronto. We provide consistent, high-quality <span className="text-[#FACC15]">production services</span> and equipment across all major Canadian markets including audio visual, lighting, staging, rigging, and drape.
              </p>
              
              <div className="mt-8 space-y-8">
                {/* British Columbia - Vancouver Region */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">British Columbia - Vancouver Region</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <Link href="/locations/vancouver" className="hover:text-[#FACC15] transition-colors">Vancouver (HQ)</Link>
                    <Link href="/locations/richmond" className="hover:text-[#FACC15] transition-colors">Richmond</Link>
                    <Link href="/locations/burnaby" className="hover:text-[#FACC15] transition-colors">Burnaby</Link>
                    <Link href="/locations/surrey" className="hover:text-[#FACC15] transition-colors">Surrey</Link>
                    <Link href="/locations/north-vancouver" className="hover:text-[#FACC15] transition-colors">North Vancouver</Link>
                    <Link href="/locations/west-vancouver" className="hover:text-[#FACC15] transition-colors">West Vancouver</Link>
                    <Link href="/locations/coquitlam" className="hover:text-[#FACC15] transition-colors">Coquitlam</Link>
                    <Link href="/locations/port-coquitlam" className="hover:text-[#FACC15] transition-colors">Port Coquitlam</Link>
                    <Link href="/locations/port-moody" className="hover:text-[#FACC15] transition-colors">Port Moody</Link>
                    <Link href="/locations/new-westminster" className="hover:text-[#FACC15] transition-colors">New Westminster</Link>
                    <Link href="/locations/langley" className="hover:text-[#FACC15] transition-colors">Langley</Link>
                    <Link href="/locations/abbotsford" className="hover:text-[#FACC15] transition-colors">Abbotsford</Link>
                    <Link href="/locations/vancouver" className="hover:text-[#FACC15] transition-colors">East Vancouver</Link>
                    <Link href="/locations/vancouver" className="hover:text-[#FACC15] transition-colors">UBC</Link>
                  </div>
                </div>

                {/* British Columbia - Regional */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">British Columbia - Regional Cities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <Link href="/locations/victoria" className="hover:text-[#FACC15] transition-colors">Victoria</Link>
                    <Link href="/locations/kelowna" className="hover:text-[#FACC15] transition-colors">Kelowna</Link>
                    <div>Penticton</div>
                    <div>Vernon</div>
                  </div>
                </div>

                {/* Alberta */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Alberta</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <Link href="/locations/calgary" className="hover:text-[#FACC15] transition-colors">Calgary</Link>
                    <Link href="/locations/edmonton" className="hover:text-[#FACC15] transition-colors">Edmonton</Link>
                  </div>
                </div>

                {/* Resort Destinations */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Resort Destinations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <Link href="/locations/banff" className="hover:text-[#FACC15] transition-colors">Banff</Link>
                    <Link href="/locations/lake-louise" className="hover:text-[#FACC15] transition-colors">Lake Louise</Link>
                    <Link href="/locations/whistler" className="hover:text-[#FACC15] transition-colors">Whistler</Link>
                    <Link href="/locations/jasper" className="hover:text-[#FACC15] transition-colors">Jasper</Link>
                  </div>
                </div>

                {/* Ontario */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Ontario</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <Link href="/locations/toronto" className="hover:text-[#FACC15] transition-colors">Toronto</Link>
                    <Link href="/locations/toronto" className="hover:text-[#FACC15] transition-colors">Greater Toronto Area</Link>
                  </div>
                </div>

                {/* USA Markets */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">United States Markets</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <Link href="/locations/seattle" className="hover:text-[#FACC15] transition-colors">Seattle</Link>
                    <Link href="/locations/san-francisco" className="hover:text-[#FACC15] transition-colors">San Francisco</Link>
                    <Link href="/locations/los-angeles" className="hover:text-[#FACC15] transition-colors">Los Angeles</Link>
                    <Link href="/locations/san-diego" className="hover:text-[#FACC15] transition-colors">San Diego</Link>
                    <Link href="/locations/palm-springs" className="hover:text-[#FACC15] transition-colors">Palm Springs</Link>
                    <Link href="/locations/las-vegas" className="hover:text-[#FACC15] transition-colors">Las Vegas</Link>
                    <Link href="/locations/phoenix" className="hover:text-[#FACC15] transition-colors">Phoenix</Link>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-base leading-relaxed text-gray-300 md:text-lg">
                Consistent, professional results with premium equipment and experienced crew. Select US markets also available.
              </p>
            </section>


          </div>
          </article>
        </div>
      </div>
    </main>
  );
}

