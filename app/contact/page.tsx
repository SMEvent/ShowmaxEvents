import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - ShowMax Events",
  description: "Get in touch with ShowMax Events for AV rental inquiries, quotes, and event support in Vancouver.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-black pt-16 text-white">
        {/* Hero Section */}
        <section className="section-glow relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-b h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.32)_0%,_transparent_78%)] blur-3xl"
              style={{ animationDuration: "20s" }}
            />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Let&apos;s Connect</p>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Contact <span className="seo-highlight">ShowMax Events</span>
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                Get in touch for quotes, inquiries, or technical support
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact Form and Info */}
        <section className="section-glow relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div
              className="glow-sphere glow-variant-d h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.2)_0%,_transparent_85%)] blur-3xl"
              style={{ animationDuration: "24s", animationDelay: "-6s" }}
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="text-white/85">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary">Send Us an Inquiry</CardTitle>
                  <CardDescription className="text-white/70">
                    Fill out the form below and we'll get back to you shortly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InquiryForm />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="text-white/85">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-primary">Get in Touch</CardTitle>
                    <CardDescription className="text-white/70">
                      Reach out to us through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-white/70">
                          (604) 555-0123
                        </div>
                        <div className="text-xs text-white/50">
                          Mon-Fri: 9am-6pm PST
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-white/70">
                          contact@showmaxevents.com
                        </div>
                        <div className="text-xs text-white/50">
                          We reply within 24 hours
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-white/85">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-primary">Our Offices</CardTitle>
                    <CardDescription className="text-white/70">
                      Serving Canada and the United States
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-primary">Canada (HQ)</div>
                        <div className="text-sm text-white/70">
                          Vancouver, BC<br />
                          Canada
                        </div>
                        <div className="text-xs text-white/50">
                          Serving BC, Alberta, Ontario
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-primary">United States</div>
                        <div className="text-sm text-white/70">
                          Seattle, WA<br />
                          United States
                        </div>
                        <div className="text-xs text-white/50">
                          Serving West Coast & National
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-white/85">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-primary">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-white/70">
                    <div className="flex justify-between uppercase tracking-wide text-xs text-white/60">
                      <span>Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between uppercase tracking-wide text-xs text-white/60">
                      <span>Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between uppercase tracking-wide text-xs text-white/60">
                      <span>Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                    <div className="pt-2 text-xs text-white/50 border-t border-white/10">
                      * 24/7 emergency support available for active rentals
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

