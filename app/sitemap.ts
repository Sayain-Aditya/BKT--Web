import type { MetadataRoute } from "next";
import { bktProducts } from "../lib/data";
import { applicationLandings } from "../lib/applications";
import { locations } from "../lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tyres`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/bkt-otr-tyres`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/request-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...locations.map((location) => ({
      url: `${base}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...applicationLandings.map((item) => ({
      url: `${base}/otr-tyres/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...bktProducts.map((product) => ({
      url: `${base}/bkt-otr-tyres/${product.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
