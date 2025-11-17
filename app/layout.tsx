import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { FontLoader } from "@/components/common/FontLoader";

export const metadata: Metadata = {
  title: "ShowMax Events - Professional AV Rental Vancouver",
  description: "Professional audio/visual equipment rental services in Vancouver. Enterprise-grade equipment for corporate events, conferences, and live productions.",
  keywords: ["AV rental", "Vancouver", "audio visual", "event production", "equipment rental"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-white">
        <FontLoader />
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
