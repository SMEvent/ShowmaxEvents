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
  eventName: string;
  location: string;
}

const slides: Slide[] = [
  {
    image: "/showmax-vancouver-Dan-Lok-event.jpg",
    alt: "ShowMax Events Vancouver - Dan Lok Event",
    title: "Professional AV Rental for Vancouver Events",
    titleHighlight: "Vancouver Events",
    description: "Enterprise-grade audio/visual equipment for corporate events, conferences, and live productions. Get a quote in minutes.",
    eventName: "Dan Lok Event",
    location: "Vancouver, BC",
  },
  {
    image: "/Cabriolet2018-2 - Gala.jpg",
    alt: "Professional Audio Visual Equipment Setup",
    title: "Premium Audio Systems for Every Event",
    titleHighlight: "Every Event",
    description: "State-of-the-art PA systems, mixers, and microphones that deliver crystal-clear sound for audiences of any size.",
    eventName: "Corporate Conference",
    location: "Vancouver Convention Centre",
  },
  {
    image: "/hero-slide-3.jpg",
    alt: "Video Production Equipment and Screens",
    title: "Cutting-Edge Video Solutions",
    titleHighlight: "Video Solutions",
    description: "High-definition projectors, LED screens, and professional cameras to capture and display your event in stunning detail.",
    eventName: "Tech Summit 2024",
    location: "Downtown Vancouver",
  },
  {
    image: "/hero-slide-4.jpg",
    alt: "Stage Lighting and Effects",
    title: "Dynamic Lighting & Stage Effects",
    titleHighlight: "Stage Effects",
    description: "Transform your venue with professional stage lighting, effects, and control systems that create the perfect atmosphere.",
    eventName: "Music Festival",
    location: "Stanley Park, Vancouver",
  },
  {
    image: "/hero-slide-5.jpg",
    alt: "Complete Event Production Services",
    title: "Full-Service Event Production",
    titleHighlight: "Event Production",
    description: "From equipment rental to technical support, we provide complete AV solutions for events across Vancouver and the Lower Mainland.",
    eventName: "Gala Dinner",
    location: "Vancouver, BC",
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
      className="relative bg-black pb-[270px] md:pb-[600px] overflow-hidden"
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
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Dynamic Text Overlay - Bottom Right */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 max-w-[85%] md:max-w-md text-right">
        <div
          key={currentIndex}
          className="animate-fade-in bg-black/70 backdrop-blur-md rounded-lg p-2 md:p-4 shadow-2xl border border-white/10"
        >
          <h2 className="mb-0.5 text-base md:text-xl font-bold text-white leading-tight">
            {slides[currentIndex].eventName}
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
            {slides[currentIndex].location}
          </p>
        </div>
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

