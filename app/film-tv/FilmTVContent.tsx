"use client";

import { useEffect } from "react";
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

export default function FilmTVContent() {
  useHashScroll();

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
            <section id="film-tv" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Film & Television Production Services in <span className="text-[#FACC15]">Vancouver, Calgary & Toronto</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                Professional <span className="text-[#FACC15]">film</span> and <span className="text-[#FACC15]">television production services</span> across North America. Showmax Events provides camera packages, lighting equipment, grip gear, and experienced crew for commercials, documentaries, and TV productions.
              </p>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
              <section id="camera-packages" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Camera Packages & <span className="text-[#FACC15]">Video Production</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Professional cinema camera packages for film and television production across <span className="text-[#FACC15]">Vancouver, Calgary, and Toronto</span>. Our rental inventory includes broadcast and cinema cameras with complete lens packages, monitoring, and recording systems.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-gray-100 md:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Cinema Cameras: Sony FX9, Canon C300, Blackmagic URSA Mini Pro</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Lenses: Canon CN-E Primes, Sigma Cine Primes, Zoom Lenses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Monitoring: SmallHD, Atomos Shogun, Wireless Video Systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Support: Tripods, Gimbals, Sliders, Shoulder Rigs</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="lighting" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Film & TV <span className="text-[#FACC15]">Lighting Equipment</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Professional <span className="text-[#FACC15]">film lighting</span> packages for commercials, documentaries, and television productions. LED, tungsten, and HMI fixtures with complete power distribution and control.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-gray-100 md:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>LED: ARRI SkyPanel, Aputure 600d, Litepanels Gemini</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Tungsten: ARRI 650W-2K, Mole-Richardson</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>HMI: ARRI M-Series, Joker Bug 800W</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Control: DMX consoles, Wireless DMX, Dimmers</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="grip-equipment" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Grip Equipment & <span className="text-[#FACC15]">Set Support</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Complete <span className="text-[#FACC15]">grip packages</span> for film and television production. Stands, flags, diffusion, and rigging equipment for professional productions across North America.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-gray-100 md:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Stands: C-Stands, Combo Stands, Mombo Combos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Modifiers: Flags, Nets, Diffusion Frames, 4x4, 8x8</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Support: Apple Boxes, Sand Bags, Clamps, Arms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Specialty: Dollies, Track, Jib Arms, Cranes</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="crew-services" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Experienced <span className="text-[#FACC15]">Production Crew</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Professional crew services for film and television production. Experienced <span className="text-[#FACC15]">camera operators</span>, <span className="text-[#FACC15]">gaffers</span>, <span className="text-[#FACC15]">grips</span>, and <span className="text-[#FACC15]">technical directors</span> across North America.
                  </p>
                  <ul className="mt-6 space-y-3 text-base text-gray-100 md:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Camera Department: DOPs, Camera Operators, 1st & 2nd ACs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Lighting: Gaffers, Best Boys, Lighting Technicians</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Grip: Key Grips, Best Boys, Dolly Grips</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                      <span>Audio: Sound Recordists, Boom Operators</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="service-areas" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.48)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Film & TV Production Services Across <span className="text-[#FACC15]">Canada</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Showmax Events provides professional <span className="text-[#FACC15]">film and television production services</span> across major production markets in Canada including <span className="text-[#FACC15]">Vancouver, Calgary, and Toronto</span>.
                  </p>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#FACC15] mb-3">British Columbia</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-gray-300">
                        <div>Vancouver (HQ)</div>
                        <div>Burnaby</div>
                        <div>Richmond</div>
                        <div>Surrey</div>
                        <div>Victoria</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Alberta</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-gray-300">
                        <div>Calgary</div>
                        <div>Edmonton</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#FACC15] mb-3">Ontario</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-gray-300">
                        <div>Toronto</div>
                        <div>Greater Toronto Area</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact-section" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-12 text-center">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Get a Quote for Your <span className="text-[#FACC15]">Film or TV Production</span></h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                    Contact us for equipment rental, crew booking, or complete production packages for your next film or television project.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                  >
                    Request a Production Quote
                  </Link>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

