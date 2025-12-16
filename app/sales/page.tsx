import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SalesContent from "./SalesContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Professional AV Equipment Sales - New, Used & Installed | Showmax Events",
  description: "Trusted supplier of professional AV equipment across Canada and the US. New equipment sales, pre-owned gear, and permanent AV installations. LED walls, audio systems, lighting, video equipment, and full integration services.",
  keywords: [
    "AV equipment sales",
    "professional audio visual equipment",
    "used audio equipment",
    "pre-owned lighting",
    "LED wall for sale",
    "AV installation services",
    "permanent AV integration",
    "d&b audiotechnik",
    "ROE Visual",
    "Robe lighting",
    "production equipment Canada",
    "buy AV gear Vancouver",
    "professional audio sales",
    "touring grade equipment",
    "broadcast equipment sales"
  ],
  openGraph: {
    title: "Professional AV Equipment Sales - New, Used & Installed | Showmax Events",
    description: "New and pre-owned professional AV equipment sales, plus permanent AV installations across North America. Expert guidance, competitive pricing, reliable support.",
    url: `${siteUrl}/sales`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: `${siteUrl}/sales`
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SalesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense
        fallback={
          <main className="flex-1 bg-black pt-24">
            <div className="container mx-auto flex h-[60vh] items-center justify-center px-4">
              <span className="text-white">Loading...</span>
            </div>
          </main>
        }
      >
        <SalesContent />
      </Suspense>
      <Footer />
    </div>
  );
}

