import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app"),
  alternates: { canonical: "/" },
  title: "BKT OTR Tyres in Uttar Pradesh | M/s Madhwendra Authorized Distributor BKT",
  description:
    "M/s Madhwendra Authorized Distributor BKT, operated by MKS Concord LLP, supplies BKT OTR tyres for construction, mining, earthmoving, infrastructure and industrial applications across Uttar Pradesh.",
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
  openGraph: {
    title: "BKT OTR Tyres | M/s Madhwendra Authorized Distributor BKT",
    description:
      "BKT OTR tyre solutions for construction, mining, earthmoving, infrastructure and industrial applications across Uttar Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "M/s Madhwendra Authorized Distributor BKT"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
