"use client";

import Link from "next/link";

export default function AboutContent() {
  const stats = [
    { number: "10,000+", label: "Events Produced Annually" },
    { number: "20+", label: "Years of Experience" },
    { number: "3", label: "Major Cities Served" },
    { number: "100%", label: "Premium Equipment" }
  ];

  const services = [
    {
      title: "Event Production",
      description: "Complete technical production for live events, concerts, conferences, and festivals across Canada and USA."
    },
    {
      title: "AV Installations",
      description: "Permanent AV integration for venues, churches, nightclubs, and corporate spaces that perform every day."
    },
    {
      title: "Equipment Rentals",
      description: "Access to the largest inventory of ROE Visual LED walls and d&b audiotechnik systems in Western Canada."
    },
    {
      title: "Virtual Production",
      description: "LED volume integration, camera tracking, and Unreal Engine pipelines for film and broadcast studios."
    }
  ];

  const clients = [
    "TED", "Amazon", "Lululemon", "Netflix", "MGM", "NFL",
    "BMW", "Porter Airlines", "Coastal Church", "Rocky Mountaineer"
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
            <section id="about" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Production Experts. <span className="text-[#FACC15]">Technical Partners.</span> Event Innovators.
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                Showmax Events is a full-service production company delivering world-class live events, permanent AV installations, and technical solutions across Canada and the USA.
              </p>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
              {/* Who We Are */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Who We Are</h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    <p>
                      Based in <span className="text-[#FACC15]">Vancouver</span> with operations in <span className="text-[#FACC15]">Calgary</span> and <span className="text-[#FACC15]">Toronto</span>, Showmax Events has been producing and supporting world-class events for over two decades.
                    </p>
                    <p>
                      We're the team behind some of the most memorable concerts, conferences, church services, festivals, and brand activations across North America. From intimate corporate gatherings to stadium-scale productions, we bring the same dedication to excellence every time.
                    </p>
                    <p>
                      What started as an AV rental company has evolved into a complete production partner—offering event production services, permanent AV installations, equipment rentals, and virtual production integration for clients who demand the best.
                    </p>
                  </div>
                </div>
              </section>

              {/* What Sets Us Apart */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">What Sets <span className="text-[#FACC15]">Showmax</span> Apart</h2>
                  
                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">We Own the Best Gear in the Industry</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        No substitutions. No compromises. We maintain the largest inventory of <span className="text-[#FACC15]">ROE Visual LED walls</span> and <span className="text-[#FACC15]">d&b audiotechnik line arrays</span> in Western Canada—the same equipment trusted on global tours and Fortune 500 events.
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        When you work with Showmax, you get rider-approved, tour-proven technology: <span className="text-[#FACC15]">Robe and Martin lighting</span>, <span className="text-[#FACC15]">Brompton video processing</span>, <span className="text-[#FACC15]">Digico and Avid consoles</span>, <span className="text-[#FACC15]">Shure Axient wireless</span>, and more.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">We Know Production Inside and Out</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        Our team has decades of combined experience producing concerts, conferences, worship services, festivals, and virtual productions. We don't just rent gear—we engineer solutions, solve problems, and execute flawlessly under pressure.
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        Whether you're a venue manager, an event planner, a production company, or a touring act, you get a technical partner who understands the details that make or break an event.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">We Support You Every Step of the Way</h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        From initial consultation and site surveys to load-in, showtime, and teardown—our team is with you. We provide experienced <span className="text-[#FACC15]">audio engineers</span>, <span className="text-[#FACC15]">lighting designers</span>, <span className="text-[#FACC15]">video technicians</span>, and <span className="text-[#FACC15]">certified riggers</span> who make your event look and sound incredible.
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                        For permanent installations, we design, integrate, program, and train your staff—ensuring your AV system performs reliably long after we leave.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* By The Numbers */}
              <section id="stats" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center mb-12">By The <span className="text-[#FACC15]">Numbers</span></h2>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-2">{stat.number}</div>
                        <div className="text-sm md:text-base text-gray-300 uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Our Services */}
              <section id="services" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Our <span className="text-[#FACC15]">Services</span></h2>
                  
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {services.map((service, index) => (
                      <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-xl font-semibold text-[#FACC15] md:text-2xl">{service.title}</h3>
                        <p className="mt-3 text-base leading-relaxed text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    <Link
                      href="/production"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                    >
                      View Production Services
                    </Link>
                    <Link
                      href="/installs"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                    >
                      View Installation Services
                    </Link>
                    <Link
                      href="/rentals"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                    >
                      View Equipment Rentals
                    </Link>
                  </div>
                </div>
              </section>

              {/* Our Expertise */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Our <span className="text-[#FACC15]">Expertise</span></h2>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white md:text-2xl">Markets We Serve</h3>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-base text-gray-300 md:text-lg">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Corporate Conferences & Brand Activations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Concerts, Festivals & Live Music</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Houses of Worship & Ministries</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Convention Centres & Event Venues</span>
                          </li>
                        </ul>
                        <ul className="space-y-2 text-base text-gray-300 md:text-lg">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Virtual Production & Broadcast Studios</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Nightclubs & Entertainment Spaces</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Hybrid & Virtual Events</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Trade Shows & Exhibitions</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">Technical Specialties</h3>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-base text-gray-300 md:text-lg">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Concert-Grade Audio Systems (d&b, L-Acoustics)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>LED Video Walls (ROE Visual, Brompton)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Professional Lighting Design</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Certified Rigging & Truss Systems</span>
                          </li>
                        </ul>
                        <ul className="space-y-2 text-base text-gray-300 md:text-lg">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Multi-Camera Video Production</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Live Streaming & Broadcast</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>Power Distribution & Infrastructure</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden />
                            <span>System Integration & Automation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Trusted By */}
              <section className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center">Trusted By <span className="text-[#FACC15]">Industry Leaders</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg text-center max-w-3xl mx-auto">
                    We've had the privilege of producing and supporting events for some of the world's most recognized brands and organizations.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {clients.map((client) => (
                      <div key={client} className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white md:text-lg">
                        {client}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Service Areas */}
              <section
                id="service-areas"
                className="scroll-mt-24 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12"
              >
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Service Areas Across <span className="text-[#FACC15]">North America</span></h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  <span className="text-[#FACC15]">Event production</span> services from Vancouver to Toronto and beyond. Headquarters in Vancouver with regional crews in <span className="text-[#FACC15]">Calgary, Edmonton</span>, and the <span className="text-[#FACC15]">Greater Toronto Area</span>. Consistent quality with premium equipment and experienced technicians across all markets.
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
                  Consistent, professional results with premium equipment and experienced crew across all markets.
                </p>
              </section>

              {/* CTA */}
              <section id="contact-cta" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center">Let's Create Something <span className="text-[#FACC15]">Extraordinary</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg text-center max-w-3xl mx-auto">
                    Whether you're planning a corporate conference, a concert, a permanent venue installation, or anything in between—let's talk about how Showmax can bring your vision to life.
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
                      🎬 Explore Our Services
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

