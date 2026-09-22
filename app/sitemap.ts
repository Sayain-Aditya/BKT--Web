import type { MetadataRoute } from "next";
import { bktProducts } from "../lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/bkt-otr-tyres`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/request-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...bktProducts.map((product) => ({
      url: `${base}/bkt-otr-tyres/${product.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
