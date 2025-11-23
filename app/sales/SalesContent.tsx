"use client";

import { useEffect } from "react";
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

// Placeholder equipment data
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
            <section id="sales" className="mx-auto max-w-3xl scroll-mt-24 text-center">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Equipment Sales - <span className="text-[#FACC15]">New & Pre-Owned</span>
              </h1>
              <p className="mt-6 text-lg text-gray-200 md:text-xl">
                Purchase professional <span className="text-[#FACC15]">AV equipment</span> from Showmax Events. We sell new and carefully maintained pre-owned audio, lighting, video, and production equipment across Canada.
              </p>
            </section>

            <div className="mt-20 space-y-16 md:space-y-20">
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

              <section id="why-buy" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Why Buy from <span className="text-[#FACC15]">Showmax Events</span></h2>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Quality Assurance</h3>
                      <p className="text-base text-gray-300">
                        All pre-owned equipment is professionally maintained and tested by our experienced technicians.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Expert Support</h3>
                      <p className="text-base text-gray-300">
                        Technical consultation and support to ensure you select the right equipment for your needs.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Competitive Pricing</h3>
                      <p className="text-base text-gray-300">
                        Fair market pricing on both new and pre-owned professional AV equipment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">Canadian Service</h3>
                      <p className="text-base text-gray-300">
                        Local sales and support across British Columbia, Alberta, and Ontario.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact-sales" className="scroll-mt-24">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-12 text-center">
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">Interested in <span className="text-[#FACC15]">Purchasing Equipment</span>?</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg max-w-2xl mx-auto">
                    Contact our sales team for detailed specifications, pricing, availability, and to arrange equipment inspection or demonstration.
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

