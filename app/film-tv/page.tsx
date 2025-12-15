import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import FilmTVContent from "./FilmTVContent";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

export const metadata: Metadata = {
  title: "Film & Television Production Services Vancouver, Calgary, Toronto | Showmax Events",
  description: "Professional film and television production services across North America. Camera packages, lighting, grip equipment, and crew for commercials, documentaries, and TV productions in Las Vegas, Seattle, Vancouver, Calgary, Toronto.",
  keywords: [
    "film production Vancouver",
    "television production Calgary",
    "camera rental Toronto",
    "film lighting rental",
    "grip equipment Canada",
    "production crew Vancouver",
    "commercial production",
    "documentary production",
    "TV production services",
    "film equipment rental BC"
  ],
  openGraph: {
    title: "Film & Television Production Services | Showmax Events",
    description: "Professional film and television production services across North America. Camera packages, lighting, grip equipment, and crew.",
    url: `${siteUrl}/film-tv`,
    siteName: "Showmax Events",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: `${siteUrl}/film-tv`
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FilmTVPage() {
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
        <FilmTVContent />
      </Suspense>
      <Footer />
    </div>
  );
}

