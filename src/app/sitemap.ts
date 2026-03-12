import type { MetadataRoute } from "next";
import subjects from "@/lib/subjects.json";

const siteUrl = "https://canarapucollege.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/admission`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/facilities`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/management`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/founder`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/achievements`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/question-bank`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/e-magazine`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/buzz`, lastModified: now, changeFrequency: "daily", priority: 0.6 },
    { url: `${siteUrl}/exam-circulars`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${siteUrl}/exam-results`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${siteUrl}/fee-portal`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/conduct`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/footprints`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${siteUrl}/mat-kabaddi`, lastModified: now, changeFrequency: "weekly", priority: 0.4 },
  ];

  const streamRoutes: MetadataRoute.Sitemap = subjects.streams.map((s) => ({
    url: `${siteUrl}/streams/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...streamRoutes];
}

