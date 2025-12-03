"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  alt: string;
  title: string;
  titleHighlight?: string; // Optional specific text to highlight
  description: string;
}

const slides: Slide[] = [
  {
    image: "/showmax-vancouver-Dan-Lok-event.jpg",
    alt: "ShowMax Events Vancouver - Dan Lok Event",
    title: "Professional Event Production for Vancouver",
    titleHighlight: "Event Production",
    description: "Full-service event production including audio, video, lighting, staging, rigging, and drape. Enterprise solutions for corporate events, conferences, and live shows.",
  },
  {
    image: "/Cabriolet2018-2 - Gala.jpg",
    alt: "Professional Event Production Equipment Setup",
    title: "Complete Production Services for Every Event",
    titleHighlight: "Every Event",
    description: "Premium audio systems, LED video walls, intelligent lighting, staging, drape, and certified rigging for events of any scale.",
  },
  {
    image: "/Showmax-carousel-crew-5.jpg",
    alt: "Professional event production control room with technical crew managing live broadcast",
    title: "Expert Technical Crew & Production Control",
    titleHighlight: "Technical Crew",
    description: "Experienced production teams managing multi-camera broadcasts, live streaming, and complex AV systems for seamless event execution.",
  },
  {
    image: "/Showmax-carousel-img-3jpg.jpg",
    alt: "Professional event production with LED screens and atmospheric lighting",
    title: "Atmospheric Event Design & Production",
    titleHighlight: "Event Design",
    description: "Transform venues with professional lighting, LED displays, and scenic elements that create memorable experiences for corporate events and conferences.",
  },
  {
    image: "/Showmax-carouselle-bmw-4.jpg",
    alt: "Virtual production studio with LED volume wall for film and television production",
    title: "Virtual Production & Volume LED Studios",
    titleHighlight: "Virtual Production",
    description: "State-of-the-art LED volume walls and virtual production technology for film, television, and automotive content creation.",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section
      className="relative bg-black pb-[270px] md:pb-[600px] lg:pb-[700px] xl:pb-[800px] 2xl:pb-[900px] overflow-hidden min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[90vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      aria-label="Hero image carousel"
    >
      {/* Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
            style={{
              willChange: index === currentIndex || index === (currentIndex + 1) % slides.length || index === (currentIndex - 1 + slides.length) % slides.length ? 'opacity' : 'auto',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)'
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
              style={{
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                objectPosition: 'center center'
              }}
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2" aria-label="Slide indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  );
}

