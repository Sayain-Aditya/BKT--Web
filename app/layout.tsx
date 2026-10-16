import type { Metadata } from "next";
import "./globals.css";
import TyreMotion from "./components/TyreMotion";
import ScrollAnimations from "./components/ScrollAnimations";
import { absoluteUrl, defaultOgImage, siteDescription, siteName, organizationSchema, websiteSchema, jsonLdGraph } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app"),
  title: {
    default: "BKT OTR Tyres in Uttar Pradesh | MKS Concord LLP",
    template: "%s | MKS Concord LLP"
  },
  description: siteDescription,
  keywords: ["BKT OTR tyres", "BKT tyres Uttar Pradesh", "OTR tyres", "construction tyres", "mining tyres", "earthmoving tyres", "BKT OTR tyre distributor"],
  verification: { google: "tAxwI0Hcb2VkLTSWQzInDckn_ZHTKM9iuY3qEsbgW0c" },
  robots: { index: true, follow: true },
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "BKT OTR Tyres in Uttar Pradesh | MKS Concord LLP",
    description: siteDescription,
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/"),
    siteName,
    images: [{ url: absoluteUrl(defaultOgImage), alt: "BKT OTR Tyres - MKS Concord LLP" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BKT OTR Tyres in Uttar Pradesh | MKS Concord LLP",
    description: siteDescription,
    images: [absoluteUrl(defaultOgImage)]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph([organizationSchema(), websiteSchema()])) }} /><TyreMotion /><ScrollAnimations />{children}</body>
    </html>
  );
}
