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
          <span className="text-[#FACC15]">Certified rigging</span> for safe, compliant event structures. Heavy-duty truss systems for concerts, corporate events, and festivals across North America.
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
            <section id="events" className="mx-auto scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Event Production Services for
                <br />
                <span className="text-[#FACC15]">Live, Hybrid & Virtual Events</span>
                <br />
                Across North America
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
              Showmax Events is a Vancouver-based live event production company providing audio, lighting, LED walls, staging, rigging and crew 
              <br />
              for concerts, conferences, galas and festivals across North America.
              <br />
              </p>
              <p className="mt-4 text-lg text-gray-200 md:text-xl">
                Our inventory features d&b audiotechnik line arrays, ROE Visual LED walls, Robe intelligent lighting, and broadcast-grade streaming infrastructure. 
                <br />
                Trusted by Fortune 500 companies, major festivals, and leading production partners, we handle every technical aspect so you can focus on your audience.
                <br />
                Headquartered in Vancouver with major operations in Las Vegas and Seattle, plus crews in Calgary, Edmonton, and Toronto, we provide complete event production services across North America.
                <br />
              </p>
            </section>

          <div className="mt-20 space-y-16 md:space-y-20">
            <section id="live-events" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12 text-center">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Live Event Production Services</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Complete technical production for concerts, conferences, galas, and brand activations. We provide <span className="text-[#FACC15]">audio, video, lighting, staging, rigging</span>, and scenic elements with full crew support across <span className="text-[#FACC15]">Las Vegas, Seattle, Vancouver, Calgary, Edmonton, Toronto</span>, and throughout North America.
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
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">Why Production Companies Choose Showmax</h3>
                  <ul className="mt-4 space-y-3 text-base text-gray-100 md:text-lg text-left">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Premium Equipment Inventory</strong> – d&b audiotechnik, ROE Visual, Robe, and DiGiCo—the same brands used on world tours and in broadcast studios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Experienced Technical Crews</strong> – A1 audio engineers, lighting designers, LED technicians, and certified riggers with decades of combined experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">North American Coverage</strong> – Headquarters in Vancouver with major operations in Las Vegas and Seattle, plus crews in Calgary, Edmonton, and Toronto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Trusted by Major Brands</strong> – Lululemon, TED Conferences, Netflix, Google, and leading production companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">End-to-End Production</strong> – From initial consultation through load-out, we manage equipment, crew, logistics, and technical direction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="hybrid-events" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Hybrid & Virtual Event Production</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Professional <span className="text-[#FACC15]">hybrid event production</span> that seamlessly connects in-person and remote audiences. Broadcast-quality <span className="text-[#FACC15]">live streaming</span> with redundant infrastructure for reliable delivery.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  From corporate <span className="text-[#FACC15]">webcasts</span> to multi-day <span className="text-[#FACC15]">virtual conferences</span>, our team provides complete technical management including encoding, switching, platform integration, and audience engagement tools.
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
                  <ul className="mt-4 space-y-3 text-base text-gray-100 md:text-lg text-left">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Broadcast-Quality Infrastructure</strong> – Professional encoding, redundant connectivity, and CDN distribution for global audiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Experienced Virtual Producers</strong> – Technical directors and operators who specialize in hybrid event execution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Platform Expertise</strong> – Full integration with Zoom, Teams, Hopin, and custom virtual venues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15] flex-shrink-0" aria-hidden />
                      <span><strong className="text-white">Redundant Systems</strong> – Backup connectivity, failover switching, and 24/7 monitoring for reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Common questions about our event production services, equipment, and capabilities.
                </p>
                
                <div className="mt-10 space-y-8 text-left">
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What does an event production company do?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      An event production company manages all technical aspects of live, hybrid, and virtual events. This includes audio systems, LED video walls, lighting design, staging, rigging, and crew coordination. We handle everything from initial planning and equipment selection through on-site operation and load-out.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What audio equipment do you use for concerts and corporate events?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      We use d&b audiotechnik line array systems—the same brand used on major world tours. Our inventory includes J-Series, Y-Series, and V-Series arrays with DiGiCo digital mixing consoles. For corporate events, we also provide QSC powered speakers and Shure wireless microphone systems.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">Do you provide LED walls for events in Vancouver and Calgary?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      Yes. We have one of the largest ROE Visual LED wall inventories across North America. We provide indoor and outdoor panels in pixel pitches from 1.5mm to 5mm, with Brompton processing and Barco switching. Available for events in Las Vegas, Seattle, Vancouver, Calgary, Edmonton, Toronto, and across North America.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What&apos;s the difference between hybrid and virtual events?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      Hybrid events combine an in-person audience with remote viewers through live streaming. Virtual events are fully online with no physical audience. Both require professional multi-camera production, encoding, and platform management. We provide complete production for both formats.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">How far in advance should I book event production services?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      For large events (500+ attendees), we recommend booking 3-6 months in advance to ensure equipment availability. Smaller corporate events can often be accommodated with 2-4 weeks notice. Last-minute requests are possible depending on inventory and crew availability.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">What areas do you serve outside Vancouver?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      We provide event production services across North America. Our primary markets include Las Vegas, Seattle, Vancouver (headquarters), Calgary, Edmonton, Toronto, and the Greater Toronto Area. We also serve additional US markets including Los Angeles, San Francisco, San Diego, Palm Springs, and Phoenix.
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">Do you provide crew with equipment rentals?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      Yes. All our production packages include experienced technicians—A1 audio engineers, lighting designers, LED technicians, and certified riggers. We recommend full-service packages to ensure optimal equipment performance and safety compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">Can you handle large-scale concerts and festivals?</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                      Absolutely. Our inventory scales from 50-person corporate meetings to 50,000+ concert audiences. We&apos;ve provided production for major festivals, arena concerts, and stadium events across North America using d&b audiotechnik, ROE Visual, and Robe systems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section id="contact-cta" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#FACC15]/10 via-white/5 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12 text-center">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Get a Quote for Your Event</h2>
                <p className="mt-4 text-lg text-gray-200 md:text-xl max-w-2xl mx-auto">
                  Ready to discuss your production requirements? Our team provides detailed quotes and technical consultations for events of any scale.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#FACC15] text-black font-semibold rounded-lg hover:bg-[#FACC15]/90 transition-colors">
                      Request a Quote
                    </button>
                  </Link>
                  <Link href="/rentals">
                    <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                      View Equipment Rentals
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

