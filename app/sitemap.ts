import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/events", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/film-tv", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rentals", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sales", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/installs", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/venues", priority: 0.7, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Location pages - Major Cities (higher priority for SEO)
  const majorLocationRoutes = [
    "/locations/vancouver",
    "/locations/calgary",
    "/locations/toronto",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Location pages - Regional Cities and Markets
  const locationRoutes = [
    // Vancouver Region
    "/locations/richmond",
    "/locations/burnaby",
    "/locations/surrey",
    "/locations/north-vancouver",
    "/locations/west-vancouver",
    "/locations/coquitlam",
    "/locations/port-coquitlam",
    "/locations/port-moody",
    "/locations/new-westminster",
    "/locations/langley",
    "/locations/abbotsford",
    // BC Regional
    "/locations/victoria",
    "/locations/kelowna",
    // Alberta
    "/locations/edmonton",
    // Resort Destinations
    "/locations/whistler",
    "/locations/banff",
    "/locations/lake-louise",
    "/locations/jasper",
    // US Markets
    "/locations/seattle",
    "/locations/san-francisco",
    "/locations/los-angeles",
    "/locations/san-diego",
    "/locations/palm-springs",
    "/locations/las-vegas",
    "/locations/phoenix",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...majorLocationRoutes, ...locationRoutes];
}

