import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/25 bg-black/90 text-white/85">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary uppercase tracking-wide">ShowMax Events</h3>
            <p className="text-sm text-white/70">
              Professional AV rental services in Vancouver. Enterprise-grade equipment for your events.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/equipment" className="hover:text-primary transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Connect</h4>
            <div className="flex gap-4 text-white/70">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-white/60">
              <p className="seo-highlight">Vancouver, BC</p>
              <p>contact@showmaxevents.com</p>
              <p>(604) 555-0123</p>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        <div className="mt-10 text-center text-sm text-white/60">
          <p>&copy; {currentYear} ShowMax Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

