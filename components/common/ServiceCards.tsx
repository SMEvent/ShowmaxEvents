"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      title: "Our Services",
      gif: "/icons/stage.gif",
      delay: "0ms",
      href: "/events"
    },
    {
      title: "Where we work",
      gif: "/icons/location.gif",
      delay: "100ms",
      href: "/events#service-areas"
    },
    {
      title: "Rental booking",
      gif: "/icons/booking.gif",
      delay: "200ms"
    },
    {
      title: "Our team",
      gif: "/icons/team.gif",
      delay: "300ms"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black py-[44px] md:py-[76px] overflow-hidden"
    >
      {/* Animated Background Lights */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large light - top left */}
        <div className="service-light-1 absolute animate-light-1" />
        
        {/* Medium light - top right */}
        <div className="service-light-2 absolute animate-light-2" />
        
        {/* Medium light - top center */}
        <div className="service-light-3 absolute animate-light-3" />
        
        {/* Small light - top left middle */}
        <div className="service-light-4 absolute animate-light-4" />
        
        {/* Small light - top right middle */}
        <div className="service-light-5 absolute animate-light-5" />
        
        {/* Medium light - middle */}
        <div className="service-light-6 absolute animate-light-1" />
        
        {/* Small light - bottom (reduced) */}
        <div className="service-light-7 absolute animate-light-2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const CardContent = (
              <Card 
                key={card.title}
                className={`border-0 text-white hover:scale-105 active:scale-105 transition-all duration-300 relative overflow-hidden group cursor-pointer border border-transparent hover:border-primary/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  backdropFilter: 'blur(20px)', 
                  WebkitBackdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  transitionDelay: isVisible ? card.delay : '0ms',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-300"
                  style={{ 
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)', 
                    backgroundColor: 'rgba(250, 204, 21, 0.3)',
                    background: 'radial-gradient(circle at center, rgba(250, 204, 21, 0.4) 0%, rgba(250, 204, 21, 0.2) 50%, rgba(250, 204, 21, 0.1) 100%)',
                    willChange: 'opacity',
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)'
                  }}
                />
                <CardHeader className="relative z-10 p-6 md:p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-6 sm:p-5 md:p-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                      <Image
                        src={card.gif}
                        alt={card.title}
                        width={64}
                        height={64}
                        className="h-12 w-12 md:h-10 md:w-10 object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-white group-hover:text-black active:text-black text-center transition-colors duration-300">
                    {card.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            );

            return card.href ? (
              <Link key={card.title} href={card.href} className="block">
                {CardContent}
              </Link>
            ) : (
              CardContent
            );
          })}
        </div>
      </div>
    </section>
  );
}

