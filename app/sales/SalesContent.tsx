"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

// Equipment categories for Available Equipment section
const equipmentCategories = [
  {
    name: "Audio Equipment",
    items: [
      { name: "d&b audiotechnik J8 Line Array", condition: "Pre-Owned", price: "Contact for pricing" },
      { name: "DiGiCo SD10 Mixing Console", condition: "Pre-Owned", price: "Contact for pricing" },
      { name: "Shure Axient Digital Wireless System", condition: "New", price: "Contact for pricing" },
    ]
  },
  {
    name: "Lighting Equipment",
    items: [
      { name: "Robe BMFL Spot", condition: "Pre-Owned", price: "Contact for pricing" },
      { name: "Martin MAC Axiom Hybrid", condition: "New", price: "Contact for pricing" },
      { name: "MA Lighting grandMA3 Console", condition: "Pre-Owned", price: "Contact for pricing" },
    ]
  },
  {
    name: "Video Equipment",
    items: [
      { name: "ROE Visual LED Panels", condition: "Pre-Owned", price: "Contact for pricing" },
      { name: "Barco E2 Event Master", condition: "Pre-Owned", price: "Contact for pricing" },
      { name: "Blackmagic URSA Mini Pro Camera", condition: "New", price: "Contact for pricing" },
    ]
  }
];

// New equipment manufacturer categories
const newEquipmentCategories = [
  {
    name: "LED Walls & Processing",
    manufacturers: ["ROE Visual", "Unilumin", "Brompton Technology", "Colorlight"]
  },
  {
    name: "Professional Audio",
    manufacturers: ["d&b audiotechnik", "QSC", "Shure", "Allen & Heath", "Midas", "Pioneer", "Clear-Com", "K&M"]
  },
  {
    name: "Lighting Systems",
    manufacturers: ["Robe", "Chauvet", "Martin", "Elation", "Ultratec", "Le Maitre", "Showven", "Leprecon"]
  },
  {
    name: "Video & Broadcast",
    manufacturers: ["Barco", "Epson", "Eiki", "Blackmagic Design", "Sony", "Datavideo", "Draper"]
  },
  {
    name: "Power Distribution",
    manufacturers: ["Theatrixx", "Cable Factory"]
  },
  {
    name: "Rigging & Truss",
    manufacturers: ["Eurotruss", "Tyler Truss", "Columbus McKinnon", "Unisson", "Skjonberg"]
  },
  {
    name: "Drapery & Soft Goods",
    manufacturers: ["Innovative Systems", "KAD Fab"]
  }
];

const preOwnedBenefits = [
  "30-day warranty on all used equipment",
  "Fully tested and maintained by certified technicians",
  "Competitive pricing on touring-grade gear",
  "Equipment history you can trust"
];

const preOwnedCategories = [
  "LED walls and processors",
  "Audio systems and consoles",
  "Lighting fixtures and control",
  "Video and broadcast equipment",
  "Power distribution",
  "Rigging and truss",
  "Drapery and hardware"
];

const installationMarkets = [
  "Theatres and performance venues",
  "Houses of worship",
  "Nightclubs and entertainment venues",
  "Corporate facilities",
  "Event centres and convention spaces"
];

const installationServices = [
  "System design and consultation",
  "Technology selection and budgeting",
  "Equipment supply and installation",
  "Rigging, power, audio, video, and lighting integration",
  "Post-installation support and service"
];

const selectedInstallations = [
  "Stanley Theatre – audio systems",
  "Coastal Church (multiple locations) – audio, lighting, LED walls",
  "Aurum Event Centre – audio, lighting, rigging, power",
  "Midtown Church – audio, lighting, video",
  "Rocky Mountaineer Station – complete AV integration",
  "Harbour Event Centre & Harbour Convention Centre – full AV systems"
];

// Collapsible Section Component
function CollapsibleSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors text-left"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-black/20">
          {children}
        </div>
      )}
    </div>
  );
}

export default function SalesContent() {
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
            {/* Hero Section */}
            <section id="sales" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Professional AV <span className="text-[#FACC15]">Equipment Sales</span>
              </h1>
              <p className="mt-4 text-xl font-semibold text-gray-200 md:text-2xl">
                New, Used & Installed Audio Visual Solutions
              </p>
              <p className="mt-6 text-base text-gray-300 md:text-lg leading-relaxed">
                Showmax is a trusted supplier of professional audio visual equipment for live events, venues, studios, and permanent installations across Canada and the United States. With decades of experience and millions of dollars in equipment purchases, we help clients select the right technology for their application, budget, and long-term goals.
              </p>
              <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                Whether you&apos;re purchasing new AV equipment, sourcing pre-owned professional gear, or planning a permanent AV installation, Showmax delivers expert guidance, competitive pricing, and reliable after-sales support.
              </p>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
              {/* New AV Equipment Sales Section */}
              <section id="new-equipment" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    New AV <span className="text-[#FACC15]">Equipment Sales</span>
                  </h2>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                    Purchasing professional AV equipment can be complex and costly if done incorrectly. Showmax provides consultation-driven AV equipment sales, ensuring you invest in technology that meets your technical, operational, and budget requirements.
                  </p>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                    We work directly with leading manufacturers to supply touring-grade, broadcast-ready, and installation-approved equipment, backed by fast service and long-term support.
                  </p>

                  <h3 className="mt-8 text-2xl font-semibold text-white mb-4">New Equipment Categories</h3>
                  <div className="space-y-3">
                    {newEquipmentCategories.map((category) => (
                      <CollapsibleSection key={category.name} title={category.name}>
                        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {category.manufacturers.map((manufacturer, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <span className="mr-2 text-primary">•</span>
                              {manufacturer}
                            </li>
                          ))}
                        </ul>
                      </CollapsibleSection>
                    ))}
                  </div>

                  <p className="mt-8 text-base text-gray-300 md:text-lg leading-relaxed">
                    We offer competitive pricing, reliable lead times, and fast after-sales support for all new equipment purchases.
                  </p>
                </div>
              </section>

              {/* Pre-Owned Equipment Section */}
              <section id="pre-owned-equipment" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Pre-Owned (Used) AV <span className="text-[#FACC15]">Equipment Sales</span>
                  </h2>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                    Showmax is a leading source for professionally maintained pre-owned AV equipment. Unlike brokered or unknown used gear, our pre-owned inventory is company-owned, tested, and used internally by Showmax before being offered for sale.
                  </p>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                    This allows clients to access high-end professional AV equipment at a significant cost savings without compromising reliability.
                  </p>

                  <div className="mt-8 space-y-3">
                    <CollapsibleSection title="Pre-Owned Equipment Benefits" defaultOpen={false}>
                      <div className="grid gap-4 md:grid-cols-2">
                        {preOwnedBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <span className="mr-3 text-primary text-xl">✓</span>
                            <p className="text-base text-gray-300">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Available Categories" defaultOpen={false}>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {preOwnedCategories.map((category, index) => (
                          <div key={index} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <p className="text-base text-gray-300">{category}</p>
                          </div>
                        ))}
                      </div>
                    </CollapsibleSection>
                  </div>

                  <p className="mt-6 text-base text-gray-300 md:text-lg leading-relaxed">
                    A current pre-owned equipment list with pricing is available upon request.
                  </p>
                </div>
              </section>

              {/* Available Equipment Section */}
              <section id="available-equipment" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center mb-8">
                    Available <span className="text-[#FACC15]">Equipment</span>
                  </h2>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {equipmentCategories.map((category) => (
                      <Card key={category.name} className="text-white/85">
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-primary">{category.name}</CardTitle>
                          <CardDescription className="text-white/70">
                            New and pre-owned equipment available
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {category.items.map((item, index) => (
                              <li key={index} className="border-b border-white/10 pb-3 last:border-0">
                                <div className="font-medium text-white">{item.name}</div>
                                <div className="text-sm text-gray-400 mt-1">
                                  <span className={item.condition === "New" ? "text-green-400" : "text-blue-400"}>
                                    {item.condition}
                                  </span>
                                </div>
                                <div className="text-sm text-primary mt-1">{item.price}</div>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p className="mt-8 text-center text-base text-gray-300 md:text-lg">
                    Inventory changes regularly. Contact us for current availability, detailed specifications, and pricing.
                  </p>
                </div>
              </section>

              {/* Permanent AV Installations Section */}
              <section id="installations" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Permanent AV <span className="text-[#FACC15]">Installations & Integration</span>
                  </h2>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                    Showmax provides full-service AV integration for permanent installations, acting as your single point of responsibility from concept to commissioning.
                  </p>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
                    We manage the technical, logistical, and operational complexity involved in permanent AV projects, including coordination with contractors, inspectors, and stakeholders.
                  </p>

                  <div className="mt-8 space-y-3">
                    <CollapsibleSection title="Installation Markets" defaultOpen={false}>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {installationMarkets.map((market, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span className="text-base text-gray-300">{market}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    <CollapsibleSection title="Installation Services" defaultOpen={false}>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {installationServices.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span className="text-base text-gray-300">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    <CollapsibleSection title="Selected Installation Experience" defaultOpen={false}>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {selectedInstallations.map((installation, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span className="text-base text-gray-300">{installation}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>
                  </div>
                </div>
              </section>

              {/* Why Buy Section */}
              <section id="why-buy" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl text-center">
                    Why Buy AV Equipment from <span className="text-[#FACC15]">Showmax</span>
                  </h2>
                  <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    From LED walls and audio systems to lighting, video, and full AV installations, Showmax is your long-term equipment partner.
                  </p>
                  <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-start">
                      <span className="mr-3 text-primary text-xl flex-shrink-0">✓</span>
                      <div>
                        <p className="text-base font-semibold text-white">Decades of real-world production experience</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-primary text-xl flex-shrink-0">✓</span>
                      <div>
                        <p className="text-base font-semibold text-white">Touring, broadcast, and installation-grade inventory</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-primary text-xl flex-shrink-0">✓</span>
                      <div>
                        <p className="text-base font-semibold text-white">Honest, application-based recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-primary text-xl flex-shrink-0">✓</span>
                      <div>
                        <p className="text-base font-semibold text-white">Strong manufacturer relationships</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-primary text-xl flex-shrink-0">✓</span>
                      <div>
                        <p className="text-base font-semibold text-white">Reliable after-sales service and support</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-primary text-xl flex-shrink-0">✓</span>
                      <div>
                        <p className="text-base font-semibold text-white">Complete AV solutions from start to finish</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact-sales" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-12 text-center">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Looking to Purchase Professional <span className="text-[#FACC15]">AV Equipment</span>?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg max-w-2xl mx-auto">
                    Contact Showmax to discuss new equipment sales, pre-owned inventory, or permanent AV installations. Our experienced team is ready to help you select the right technology for your project.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fff1b2] transition hover:bg-primary/30"
                  >
                    Contact Sales Team
                  </Link>
                  <div className="mt-8 text-sm text-gray-400">
                    <p>Email: sales@showmaxevents.com</p>
                    <p className="mt-1">Phone: (604) 555-0123</p>
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

