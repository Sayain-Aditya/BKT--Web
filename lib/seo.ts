import type { Metadata } from "next";
import { locations } from "./locations";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
export const siteName = "MKS Concord LLP";
export const distributorName = "M/S Madhwendra Kumar Singh";
export const siteDescription =
  "Looking for tyres in Uttar Pradesh? M/S Madhwendra Kumar Singh, operated by MKS Concord LLP, supplies BKT OTR tyres for construction, mining, earthmoving, roadwork and industrial equipment. Explore tyre sizes and applications or request availability and a quotation.";

export const defaultOgImage = "/images/bkt-logo.png";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  image = defaultOgImage
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName,
      locale: "en_IN",
      images: [{ url: imageUrl, alt: `${siteName} - BKT OTR Tyres` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: siteName,
    url: siteUrl,
    logo: absoluteUrl("/images/mks-group-logo.jpeg"),
    email: "as4316664@gmail.com",
    telephone: ["+91 9194702099", "+91 7704866437"],
    sameAs: []
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-IN"
  };
}

export function localBusinessSchema(location = locations[0]) {
  return {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/locations/${location.slug}#localbusiness`,
    name: siteName,
    description: location.description,
    url: absoluteUrl(`/locations/${location.slug}`),
    telephone: ["+91 9194702099", "+91 7704866437"],
    email: "as4316664@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    areaServed: { "@type": "State", name: "Uttar Pradesh" },
    parentOrganization: { "@id": `${siteUrl}/#organization` }
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function jsonLdGraph(graph: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": graph };
}
