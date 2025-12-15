"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function ProductionContent() {
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
      title: "Live Streaming & Broadcast Production",
      summary: (
        <>
          Professional <span className="text-[#FACC15]">live streaming services</span> and <span className="text-[#FACC15]">broadcast production</span> for <span className="text-[#FACC15]">hybrid events</span> across North America. Our streaming infrastructure delivers broadcast-quality video with secure, redundant connectivity for conferences and corporate events in <span className="text-[#FACC15]">Las Vegas, Seattle, Vancouver, Calgary, and Toronto</span>.
        </>
      ),
      details: {
        closing: "From local hybrid events to global virtual conferences, our streaming team ensures flawless delivery with professional encoding, CDN distribution, and real-time monitoring across North America and worldwide.",
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
      title: "Multi-Camera Video Production",
      summary: (
        <>
          <span className="text-[#FACC15]">Multi-camera video production</span> for <span className="text-[#FACC15]">hybrid conferences</span> and <span className="text-[#FACC15]">virtual events</span>. Our video production team delivers cinema-quality capture with professional switching, graphics, and replay capabilities for events across North America.
        </>
      ),
      details: {
        closing: "Our camera operators and video directors create engaging multi-angle coverage that keeps remote audiences connected to the live event experience.",
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
      title: "Virtual Event Platforms & Integration",
      summary: (
        <>
          <span className="text-[#FACC15]">Virtual event platform integration</span> and technical support for <span className="text-[#FACC15]">online conferences</span> and <span className="text-[#FACC15]">webinars</span>. We manage Zoom, Microsoft Teams, Hopin, and custom platforms with seamless AV integration for corporate events across Vancouver, Calgary, Toronto, and globally.
        </>
      ),
      details: {
        closing: "We handle all technical aspects of virtual event platforms including registration, breakout rooms, Q&A, polling, and audience engagement tools to create interactive online experiences.",
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
      title: "Remote Speaker & Presenter Management",
      summary: (
        <>
          Professional <span className="text-[#FACC15]">remote speaker management</span> and technical support for <span className="text-[#FACC15]">hybrid conferences</span>. We coordinate remote presenters, manage video feeds, and ensure seamless integration between in-person and virtual participants for events across North America.
        </>
      ),
      details: {
        closing: "Our producer team manages green rooms, speaker rehearsals, technical checks, and real-time troubleshooting to ensure every remote presenter delivers a professional experience.",
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
      title: "Professional Audio Systems & Sound Reinforcement",
      summary: (
        <>
          Premium <span className="text-[#FACC15]">d&b audiotechnik audio systems rental</span> for concerts, corporate events, and conferences across North America including <span className="text-[#FACC15]">Las Vegas, Seattle, Vancouver, Calgary, and Toronto</span>. Our professional audio production services deliver <span className="text-[#FACC15]">concert-quality sound reinforcement</span> with crystal-clear clarity, depth, and impact for any venue size.
        </>
      ),
      details: {
        closing: "From intimate corporate venues to stadium-scale concert production across North America, our experienced audio engineers and technicians ensure your message and music are delivered with precision and professional-grade sound quality.",
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
          Professional <span className="text-[#FACC15]">concert and event lighting rental services</span> across North America featuring <span className="text-[#FACC15]">Robe and Martin fixtures</span>. Our lighting designers create custom lighting production from ambient corporate lighting to full-scale <span className="text-[#FACC15]">concert lighting spectacles</span> for events in <span className="text-[#FACC15]">Las Vegas, Seattle, Vancouver, Calgary, Banff, and Toronto</span>.
        </>
      ),
      details: {
        closing: "Our expert lighting designers and programmers specialize in creating dynamic lighting looks that amplify every performance, brand activation, and corporate presentation on stage using industry-leading equipment.",
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
      title: "LED Wall Rental & Video Production Services",
      summary: (
        <>
          <span className="text-[#FACC15]">ROE Visual LED wall rental</span> and video production for conferences, concerts, and corporate events. Our <span className="text-[#FACC15]">LED video wall systems</span> deliver stunning <span className="text-[#FACC15]">4K visuals</span> with advanced video production capabilities including multi-camera setups, live switching, and broadcast-quality content for events across <span className="text-[#FACC15]">Las Vegas, Seattle, Vancouver, Calgary, and Toronto</span>.
        </>
      ),
      details: {
        closing: "We provide complete LED wall rental packages including ROE Visual panels, video processing, multi-camera production, and live video switching to create immersive visual experiences that captivate audiences at conferences, concerts, and corporate events throughout North America.",
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
      title: "Certified Rigging & Truss Services Canada",
      summary: (
        <>
          Professional <span className="text-[#FACC15]">rigging and truss services</span> for concerts, corporate events, and festivals across <span className="text-[#FACC15]">North America</span>. Our <span className="text-[#FACC15]">certified riggers</span> provide safe, reliable rigging solutions using <span className="text-[#FACC15]">Eurotruss and Tyler truss systems</span> for events in <span className="text-[#FACC15]">Las Vegas, Seattle, Vancouver, Calgary, Banff, Jasper, and Toronto</span>, ensuring flawless execution and complete structural safety.
        </>
      ),
      details: {
        closing: "Our team of certified rigging professionals and structural engineers delivers secure, code-compliant rigging installations that support the largest concert productions, corporate events, and festival stages across North America with complete safety and efficiency.",
        equipment: [
          "Eurotruss HD44 & FD34",
          "Tyler GT Plus PRT Truss",
          "CM 1-Ton & ½-Ton motors",
          "Skjonberg 48-channel controllers"
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
            <section id="production" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Professional <span className="text-[#FACC15]">Event Production Services</span> Across <span className="text-[#FACC15]">North America</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                Leading event production company serving <span className="text-[#FACC15]">Las Vegas</span>, <span className="text-[#FACC15]">Seattle</span>, <span className="text-[#FACC15]">Vancouver</span>, <span className="text-[#FACC15]">Calgary</span>, <span className="text-[#FACC15]">Banff</span>, <span className="text-[#FACC15]">Toronto</span>, and across North America. Showmax Events delivers complete <span className="text-[#FACC15]">live event production</span>, <span className="text-[#FACC15]">hybrid event solutions</span>, and <span className="text-[#FACC15]">virtual event services</span> with premium <span className="text-[#FACC15]">d&amp;b audiotechnik audio systems</span>, <span className="text-[#FACC15]">ROE Visual LED wall rentals</span>, professional lighting design, and certified rigging for concerts, corporate conferences, festivals, and brand activations.
              </p>
            </section>

          <div className="mt-20 space-y-16 md:space-y-20">
            <section id="live-events" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12 text-center">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Live Event Production Services Across <span className="text-[#FACC15]">North America</span></h2>
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
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Showmax Events is a premier event production company delivering comprehensive <span className="text-[#FACC15]">live event production services</span> across North America including <span className="text-[#FACC15]">Las Vegas</span>, <span className="text-[#FACC15]">Seattle</span>, <span className="text-[#FACC15]">Vancouver</span>, <span className="text-[#FACC15]">Calgary</span>, <span className="text-[#FACC15]">Banff</span>, <span className="text-[#FACC15]">Jasper</span>, and <span className="text-[#FACC15]">Toronto</span>. Specializing in <span className="text-[#FACC15]">concert production</span>, <span className="text-[#FACC15]">music festivals</span>, <span className="text-[#FACC15]">corporate conferences</span>, trade shows, and brand activations, we provide complete technical production including professional audio systems, stage lighting, LED video walls, and certified rigging services.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Our live event production team uses only touring-grade equipment from industry-leading manufacturers including <span className="text-[#FACC15]">d&amp;b audiotechnik line array systems</span>, <span className="text-[#FACC15]">ROE Visual LED wall panels</span>, and professional lighting fixtures. From intimate corporate events in <span className="text-[#FACC15]">Vancouver</span> to large-scale concert production in <span className="text-[#FACC15]">Las Vegas</span>, <span className="text-[#FACC15]">Seattle</span>, <span className="text-[#FACC15]">Calgary</span>, and <span className="text-[#FACC15]">Toronto</span>, we deliver broadcast-quality AV production that exceeds professional standards.
                </p>

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
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">Why Producers Choose Showmax</h3>
                  <ul className="mt-4 space-y-2 text-base text-gray-100 md:text-lg">
                    <li>End-to-end production management</li>
                    <li>Major ROE Visual &amp; d&amp;b inventory across North America</li>
                    <li>Experienced technicians and show operators</li>
                    <li>Scalable solutions for any venue or event type</li>
                    <li>Trusted by Lululemon, TED, Netflix, and the NFL</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="hybrid-events" className="scroll-mt-24">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Hybrid Event Production & Virtual Events Services</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  Showmax Events specializes in comprehensive <span className="text-[#FACC15]">hybrid event production</span> and <span className="text-[#FACC15]">virtual event services</span> across North America including <span className="text-[#FACC15]">Las Vegas</span>, <span className="text-[#FACC15]">Seattle</span>, <span className="text-[#FACC15]">Vancouver</span>, <span className="text-[#FACC15]">Calgary</span>, and <span className="text-[#FACC15]">Toronto</span>. Our <span className="text-[#FACC15]">hybrid conference production</span> team combines in-person event expertise with professional <span className="text-[#FACC15]">live streaming</span>, multi-camera video production, and virtual platform integration to create seamless experiences for both live and remote audiences.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  From <span className="text-[#FACC15]">corporate hybrid conferences</span> to fully virtual events, we provide broadcast-quality production with redundant streaming infrastructure, professional video switching, real-time graphics, and interactive audience engagement tools. Our technical production team ensures flawless execution whether streaming to 50 or 50,000 participants worldwide.
                </p>

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
                    <li>Broadcast-quality streaming infrastructure across North America</li>
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
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Event Production Services Across <span className="text-[#FACC15]">North America</span></h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                Showmax Events provides professional <span className="text-[#FACC15]">event production services</span> across major markets in North America with major operations in <span className="text-[#FACC15]">Las Vegas</span> and <span className="text-[#FACC15]">Seattle</span>, plus Canadian markets. Our team travels with touring-grade equipment to deliver world-class live events, hybrid conferences, and virtual event production wherever you need us.
              </p>
              
              <div className="mt-8 space-y-8">
                {/* United States Markets */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">United States Markets</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <div>Las Vegas</div>
                    <div>Seattle</div>
                    <div>San Francisco</div>
                    <div>Los Angeles</div>
                    <div>San Diego</div>
                    <div>Palm Springs</div>
                    <div>Phoenix</div>
                  </div>
                </div>

                {/* British Columbia - Vancouver Region */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">British Columbia - Vancouver Region</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <div>Vancouver (HQ)</div>
                    <div>Richmond</div>
                    <div>Burnaby</div>
                    <div>Surrey</div>
                    <div>North Vancouver</div>
                    <div>West Vancouver</div>
                    <div>Coquitlam</div>
                    <div>Port Coquitlam</div>
                    <div>Port Moody</div>
                    <div>New Westminster</div>
                    <div>Langley</div>
                    <div>Abbotsford</div>
                    <div>East Vancouver</div>
                    <div>UBC</div>
                  </div>
                </div>

                {/* British Columbia - Regional */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">British Columbia - Regional Cities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <div>Victoria</div>
                    <div>Kelowna</div>
                    <div>Penticton</div>
                    <div>Vernon</div>
                  </div>
                </div>

                {/* Alberta */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Alberta</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <div>Calgary</div>
                    <div>Edmonton</div>
                  </div>
                </div>

                {/* Resort Destinations */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Resort Destinations</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <div>Banff</div>
                    <div>Lake Louise</div>
                    <div>Whistler</div>
                    <div>Jasper</div>
                  </div>
                </div>

                {/* Ontario */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Ontario</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-gray-300">
                    <div>Toronto</div>
                    <div>Greater Toronto Area</div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-base leading-relaxed text-gray-300 md:text-lg">
                From <span className="text-[#FACC15]">trade shows in Las Vegas</span> and <span className="text-[#FACC15]">corporate events in Seattle</span> to <span className="text-[#FACC15]">concert production in Vancouver</span>, <span className="text-[#FACC15]">corporate events in Calgary</span>, and <span className="text-[#FACC15]">resort conferences in Banff</span>, our mobile production teams deliver consistent, professional results with the same premium equipment and experienced crew at every location.
              </p>
            </section>

            <section
              id="venues"
              className="scroll-mt-24 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12"
            >
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Venues with Installed <span className="text-[#FACC15]">AV Equipment</span></h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                We've partnered with select venues across <span className="text-[#FACC15]">North America</span> where Showmax gear is already installed and ready to rent. These spaces are fully equipped with our <span className="text-[#FACC15]">professional audio systems</span>, <span className="text-[#FACC15]">event lighting</span>, and <span className="text-[#FACC15]">LED wall technology</span> — reducing setup time and costs for <span className="text-[#FACC15]">conference production</span> and <span className="text-[#FACC15]">corporate events</span>.
              </p>
              <Link
                href="/venues"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
              >
                👉 See our Venue Partners
              </Link>
            </section>

            <section
              id="why-showmax"
              className="scroll-mt-24 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-12"
            >
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Choose Showmax for <span className="text-[#FACC15]">Event Production</span></h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                From initial design to the final cue, our experienced <span className="text-[#FACC15]">event production team</span> ensures your <span className="text-[#FACC15]">live event</span>, <span className="text-[#FACC15]">hybrid conference</span>, or <span className="text-[#FACC15]">virtual experience</span> runs flawlessly. We use premium gear, experienced <span className="text-[#FACC15]">audio engineers</span> and <span className="text-[#FACC15]">lighting designers</span>, and decades of touring experience to make every show a success.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
              >
                📞 Request a Production Quote
              </Link>
            </section>
          </div>
          </article>
        </div>
      </div>
    </main>
  );
}

