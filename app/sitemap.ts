import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmaxevents.com";

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/equipment", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/production", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/production/live-events", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/production/hybrid-events", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/production/virtual-events", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rentals", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/installs", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/login", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/signup", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return routes;
}

