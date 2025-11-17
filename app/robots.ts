import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services",
          "/portfolio",
          "/equipment",
          "/contact",
          "/production",
          "/production/live-events",
          "/production/hybrid-events",
          "/production/virtual-events",
          "/rentals",
          "/installs"
        ],
        disallow: ["/dashboard", "/admin", "/api", "/studio"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

