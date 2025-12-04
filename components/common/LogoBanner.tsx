"use client";

import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface LogoBannerProps {
  brands: Brand[];
}

export function LogoBanner({ brands }: LogoBannerProps) {
  // Duplicate brands array for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-label="Client brand logos"
    >
      <div
        className="flex items-center gap-8 md:gap-12 animate-logo-scroll"
        style={{
          width: "fit-content",
          willChange: "transform",
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 w-auto px-4"
          >
            <div className="relative w-24 md:w-32 h-full">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 96px, 128px"
                unoptimized={brand.logo.endsWith('.svg')}
                style={{
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
