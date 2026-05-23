import { MetadataRoute } from "next";

const siteUrl = "https://haykelh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: siteUrl, changeFrequency: "weekly" as const, priority: 1.0, lastModified: now },
    { url: `${siteUrl}/sobre-mi`, changeFrequency: "monthly" as const, priority: 0.9, lastModified: now },
    { url: `${siteUrl}/conferencias`, changeFrequency: "monthly" as const, priority: 0.9, lastModified: now },
    { url: `${siteUrl}/prensa`, changeFrequency: "weekly" as const, priority: 0.8, lastModified: now },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8, lastModified: now },
    { url: `${siteUrl}/contacto`, changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    // Versión en inglés
    { url: `${siteUrl}/en`, changeFrequency: "weekly" as const, priority: 0.9, lastModified: now },
  ];

  return staticPages;
}
