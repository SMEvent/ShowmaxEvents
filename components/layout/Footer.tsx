import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // JSON-LD Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ShowMax Events",
    "url": "https://www.showmaxevents.com",
    "logo": "https://www.showmaxevents.com/showmax_logo.png",
    "description": "Professional event production and AV rental company specializing in audio, lighting, LED walls, video, staging, and rigging for corporate events, concerts, festivals, and film/TV productions across North America.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-604-555-0123",
      "contactType": "Customer Service",
      "email": "contact@showmaxevents.com",
      "availableLanguage": ["English"],
      "areaServed": ["CA", "US"]
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://linkedin.com",
      "https://twitter.com"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": [
      {
        "@type": "City",
        "name": "Vancouver",
        "containedInPlace": {
          "@type": "State",
          "name": "British Columbia"
        }
      },
      {
        "@type": "City",
        "name": "Calgary",
        "containedInPlace": {
          "@type": "State",
          "name": "Alberta"
        }
      },
      {
        "@type": "City",
        "name": "Edmonton",
        "containedInPlace": {
          "@type": "State",
          "name": "Alberta"
        }
      },
      {
        "@type": "City",
        "name": "Toronto",
        "containedInPlace": {
          "@type": "State",
          "name": "Ontario"
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <footer 
        className="border-t border-primary/25 bg-black/90 text-white/85"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info - Enhanced SEO Description */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-lg font-bold text-primary uppercase tracking-wide">ShowMax Events</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                30+ years delivering professional event production and AV rental services. Specializing in audio, lighting, LED walls, video, staging, and rigging for corporate events, concerts, festivals, and film/TV across North America.
              </p>
            </div>

            {/* Services - New Section */}
            <div>
              <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Services</h4>
              <nav aria-label="Services navigation">
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/events" className="hover:text-primary transition-colors">
                      Events & Conferences
                    </Link>
                  </li>
                  <li>
                    <Link href="/rentals" className="hover:text-primary transition-colors">
                      Equipment Rentals
                    </Link>
                  </li>
                  <li>
                    <Link href="/production" className="hover:text-primary transition-colors">
                      Production Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/film-tv" className="hover:text-primary transition-colors">
                      Film & TV Production
                    </Link>
                  </li>
                  <li>
                    <Link href="/installs" className="hover:text-primary transition-colors">
                      Permanent Installations
                    </Link>
                  </li>
                  <li>
                    <Link href="/sales" className="hover:text-primary transition-colors">
                      AV Sales & Consulting
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Quick Links</h4>
              <nav aria-label="Quick links navigation">
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/rentals" className="hover:text-primary transition-colors">
                      Equipment
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-primary transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/production" className="hover:text-primary transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Support</h4>
              <nav aria-label="Support navigation">
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/contact" className="hover:text-primary transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
                      Sitemap
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
              </nav>
            </div>

            {/* Service Locations - New Section */}
            <div>
              <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Service Locations</h4>
              <nav aria-label="Service locations navigation">
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link href="/locations/las-vegas" className="hover:text-primary transition-colors">
                      Las Vegas, NV
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/seattle" className="hover:text-primary transition-colors">
                      Seattle, WA
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/vancouver" className="hover:text-primary transition-colors">
                      Vancouver, BC
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/calgary" className="hover:text-primary transition-colors">
                      Calgary, AB
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/edmonton" className="hover:text-primary transition-colors">
                      Edmonton, AB
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/toronto" className="hover:text-primary transition-colors">
                      Toronto, ON
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Connect Section - Full Width Below */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-semibold mb-4 text-primary uppercase tracking-wide text-xs">Connect With Us</h4>
                <div className="flex gap-4 text-white/70 mb-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Visit our Instagram profile"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Visit our LinkedIn page"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    aria-label="Visit our Twitter profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                <div className="text-sm text-white/60">
                  <p className="font-semibold text-primary">24/7 Event Support Available</p>
                </div>
              </div>
              
              <div className="text-sm text-white/60 md:text-right">
                <p className="seo-highlight font-semibold text-white/80 mb-1">Vancouver, BC</p>
                <p className="mb-1">
                  <a href="mailto:contact@showmaxevents.com" className="hover:text-primary transition-colors">
                    contact@showmaxevents.com
                  </a>
                </p>
                <p>
                  <a href="tel:+16045550123" className="hover:text-primary transition-colors">
                    (604) 555-0123
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider" />

          <div className="mt-10 text-center text-sm text-white/60">
            <p>&copy; {currentYear} ShowMax Events. All rights reserved. Professional AV rental and event production services across North America.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

