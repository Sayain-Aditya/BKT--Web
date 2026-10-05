import type { Metadata } from "next";
import "./globals.css";
import TyreMotion from "./components/TyreMotion";
import ScrollAnimations from "./components/ScrollAnimations";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app"),
  title: "BKT OTR Tyres in Uttar Pradesh | MKS Concord LLP",
  description:
    "M/S Madhwendra Kumar Singh, an Authorized BKT OTR Distributor operated by MKS Concord LLP, supplies BKT OTR tyres for construction, mining, earthmoving, infrastructure and industrial applications across Uttar Pradesh.",
  keywords: [
    "BKT OTR tyres",
    "BKT tyres Uttar Pradesh",
    "OTR tyres",
    "construction tyres",
    "mining tyres",
    "earthmover tyres",
    "BKT OTR tyre distributor"
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "BKT OTR Tyres | M/S Madhwendra Kumar Singh | MKS Concord LLP",
    description:
      "BKT OTR tyre solutions for construction, mining, earthmoving, infrastructure and industrial applications across Uttar Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "MKS Concord LLP"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><TyreMotion /><ScrollAnimations />{children}</body>
    </html>
  );
}
