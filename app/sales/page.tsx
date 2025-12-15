import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SalesContent from "./SalesContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Equipment Sales - New & Pre-Owned AV Equipment | Showmax Events",
  description: "Purchase new and pre-owned professional AV equipment. Audio systems, lighting, LED walls, and production gear for sale across North America.",
  keywords: [
    "AV equipment sales",
    "used audio equipment",
    "pre-owned lighting",
    "LED wall for sale",
    "production equipment Canada",
    "buy AV gear Vancouver",
    "professional audio sales"
  ],
  openGraph: {
    title: "Equipment Sales - New & Pre-Owned AV Equipment | Showmax Events",
    description: "Purchase new and pre-owned professional AV equipment across North America.",
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

