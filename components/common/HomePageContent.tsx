"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mic2, Lightbulb, MonitorPlay, Triangle, Building2, Sparkles, Users, Award, CheckCircle } from "lucide-react";

// Client logos data
const clients = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "MGM", logo: "/logos/mgm.svg" },
  { name: "NFL", logo: "/logos/nfl.svg" },
  { name: "Lululemon", logo: "/logos/lululemon.svg" },
  { name: "TD Bank", logo: "/logos/td-bank.svg" },
  { name: "Boeing", logo: "/logos/boeing.svg" },
  { name: "Pattison", logo: "/logos/pattison.svg" },
  { name: "TED Talks", logo: "/logos/ted-talks.svg" },
  { name: "Siemens", logo: "/logos/siemens.svg" },
  { name: "Coastal Church", logo: "/logos/coastal-church.png" },
  { name: "Netflix", logo: "/logos/netflix.svg" },
  { name: "Disney", logo: "/logos/disney.svg" },
  { name: "BMW", logo: "/logos/bmw.svg" },
  { name: "Porter Airlines", logo: "/logos/Porter.svg" },
  { name: "Sun Life", logo: "/logos/sun-life.svg" },
  { name: "Vancity", logo: "/logos/vancity.svg" },
  { name: "Kia", logo: "/logos/kia.svg" },
  { name: "Rivian", logo: "/logos/rivian.svg" }
];

// Service cards data for Corporate Events section
const serviceCards = [
  {
    title: "Conferences & Corporate Experiences",
    description: "Clean, modern, production-ready setups built for presenters, executives and global audiences.",
    icon: Building2,
    href: "/events"
  },
  {
    title: "Concerts, Festivals & Live Entertainment",
    description: "Tour-level audio, lighting, LED and rigging for concerts, DJs, festivals and large-format shows.",
    icon: Mic2,
    href: "/events"
  },
  {
    title: "Hybrid & Virtual Productions",
    description: "Broadcast-quality streaming, multi-camera systems and fully integrated AV packages.",
    icon: MonitorPlay,
    href: "/events#hybrid-events"
  },
  {
    title: "Film, Television & Volume LED Studios",
    description: "Complete LED walls, media servers, motion tracking and on-set technical support for virtual production.",
    icon: Sparkles,
    href: "/film-tv"
  }
];

// Equipment cards data
const equipmentCards = [
  {
    title: "Audio, Lighting, LED & Video Systems",
    description: "d&b audiotechnik, MA Lighting, Robe, Barco, Blackmagic, Epson and more.",
    icon: Lightbulb
  },
  {
    title: "Rigging, Staging & Power Distribution",
    description: "Certified rigging, truss systems, staging decks and power solutions for any venue or environment.",
    icon: Triangle
  },
  {
    title: "Canada's Largest ROE Visual LED Inventory",
    description: "Thousands of ROE Visual panels, Brompton processing and full ground-support systems.",
    icon: MonitorPlay
  },
  {
    title: "Industry-Standard Consoles & Production Gear",
    description: "MA3, MA2, Digico, Avid, Barco E2, S3, media servers, switching, cameras and broadcast equipment.",
    icon: Mic2
  }
];

// Locations data
const locations = [
  { name: "Vancouver", href: "/locations/vancouver" },
  { name: "Calgary", href: "/locations/calgary" },
  { name: "Edmonton", href: "/locations/edmonton" },
  { name: "Toronto", href: "/locations/toronto" },
  { name: "Whistler", href: "/locations/whistler" },
  { name: "Banff", href: "/locations/banff" },
  { name: "Kelowna", href: "/locations/kelowna" }
];

// Why Showmax items
const whyShowmaxItems = [
  {
    title: "30 Years of Experience",
    description: "Over 10,000 events delivered with industry-leading expertise.",
    icon: Award,
    href: "/about"
  },
  {
    title: "One Partner — All Production Elements",
    description: "Avoid multiple vendors. We handle everything from concepts to closing cues.",
    icon: Users
  },
  {
    title: "Industry-Leading Gear & Skilled Technicians",
    description: "Exceptional equipment paired with experienced, service-focused teams.",
    icon: CheckCircle
  }
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function HomePageContent() {
  return (
    <div className="relative bg-black">
      {/* Hero Tagline Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div
            className="glow-sphere glow-variant-a h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.25)_0%,_transparent_70%)] blur-3xl"
            style={{ animationDuration: "18s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <p className="text-center text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-4xl mx-auto">
              Professional <span className="seo-highlight">Event Production</span>, LED, Audio, Lighting & Broadcast Services — <span className="text-primary">Nationwide</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-8 md:py-12 border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={100}>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-white/50 mb-6">
              Trusted by Leading Brands
            </p>
            <div className="scroll-banner">
              <div className="scroll-banner-content">
                {/* First set of clients */}
                {clients.map((client) => (
                  <div
                    key={`${client.name}-1`}
                    className="flex items-center justify-center px-6 md:px-8 h-20 md:h-24 flex-shrink-0"
                  >
                    {client.logo ? (
                      <div className="w-32 md:w-40 h-16 md:h-20 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={160}
                          height={80}
                          className="max-h-full max-w-full w-auto h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-sm md:text-base font-medium text-white/80">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client) => (
                  <div
                    key={`${client.name}-2`}
                    className="flex items-center justify-center px-6 md:px-8 h-20 md:h-24 flex-shrink-0"
                  >
                    {client.logo ? (
                      <div className="w-32 md:w-40 h-16 md:h-20 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={160}
                          height={80}
                          className="max-h-full max-w-full w-auto h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-sm md:text-base font-medium text-white/80">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* H1 Section - Full-Service Event Production */}
      <section className="section-glow relative py-16 md:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div
            className="glow-sphere glow-variant-b h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.2)_0%,_transparent_75%)] blur-3xl"
            style={{ animationDuration: "22s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Full-Service <span className="seo-highlight">Event Production</span> & AV Solutions Across Canada
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Showmax Events delivers high-end audio, lighting, video, LED, staging, rigging and production support for{" "}
              <Link href="/events" className="text-primary hover:underline">corporate events</Link>, conferences,{" "}
              <Link href="/events" className="text-primary hover:underline">concerts</Link>, festivals, hybrid broadcasts and{" "}
              <Link href="/film-tv" className="text-primary hover:underline">film/TV</Link>. With headquarters in Vancouver and operations across Canada and the USA, we support medium to large-scale productions with industry-leading technology and experienced crews.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Corporate Events, Concerts & Large-Scale Productions */}
      <section className="section-glow relative py-16 md:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="glow-sphere glow-variant-c absolute left-0 top-1/4 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.18)_0%,_transparent_70%)] blur-3xl"
            style={{ animationDuration: "25s" }}
          />
          <div
            className="glow-sphere glow-variant-d absolute right-0 bottom-1/4 h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.15)_0%,_transparent_70%)] blur-3xl"
            style={{ animationDuration: "20s", animationDelay: "-8s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Corporate Events, Concerts & Large-Scale Productions
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We help planners and promoters bring ambitious ideas to life. Whether you&apos;re building a multi-room conference, producing a major concert, or planning a high-stakes corporate experience, our team designs and delivers seamless, professional live environments.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {serviceCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 100}>
                <Link href={card.href} className="block h-full group">
                  <div className="glass-panel rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary/20 w-fit mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Equipment, Technology & Expertise */}
      <section className="section-glow relative py-16 md:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div
            className="glow-sphere glow-variant-a h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.22)_0%,_transparent_75%)] blur-3xl"
            style={{ animationDuration: "24s", animationDelay: "-4s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Equipment, Technology & Expertise
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We carry one of the most comprehensive{" "}
              <Link href="/rentals" className="text-primary hover:underline">equipment inventories</Link>{" "}
              in North America, ensuring reliability, consistency and creativity on every project.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {equipmentCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 100}>
                <div className="glass-panel rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="text-center mt-8">
            <Link
              href="/rentals"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 font-medium"
            >
              View Full Equipment Inventory
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Where We Work */}
      <section className="section-glow relative py-16 md:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="glow-sphere glow-variant-b absolute left-1/4 top-0 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.2)_0%,_transparent_70%)] blur-3xl"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Where We Work
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We support events across Canada and operate in major US markets through our Las Vegas office.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {locations.map((location, index) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 text-white/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 text-sm md:text-base font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="text-center mt-8">
            <p className="text-white/60 text-sm">
              Vancouver • Calgary • Edmonton • Toronto • Whistler • Banff • Kelowna • Las Vegas
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Showmax Events */}
      <section className="section-glow relative py-16 md:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div
            className="glow-sphere glow-variant-d h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.2)_0%,_transparent_75%)] blur-3xl"
            style={{ animationDuration: "22s", animationDelay: "-6s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Showmax Events
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              With over{" "}
              <Link href="/about" className="text-primary hover:underline">30 years of experience</Link>{" "}
              and more than 10,000 events delivered, Showmax Events is trusted by global brands to execute high-profile productions. Our team brings a full 360° approach — design, pre-production, equipment, crew and onsite management.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {whyShowmaxItems.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                {item.href ? (
                  <Link href={item.href} className="block h-full group">
                    <div className="glass-panel rounded-xl p-6 h-full text-center hover:border-primary/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300">
                      <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="glass-panel rounded-xl p-6 h-full text-center hover:border-primary/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 group">
                    <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section - Ready to Start Planning? */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="glow-sphere glow-variant-a absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.25)_0%,_transparent_65%)] blur-3xl"
            style={{ animationDuration: "18s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Let&apos;s bring your next event to life. Connect with our team to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.4)]"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

