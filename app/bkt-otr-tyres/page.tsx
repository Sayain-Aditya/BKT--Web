import Link from "next/link";
import { bktProducts, whatsapp } from "../../lib/data";
import CatalogueClient from "./CatalogueClient";

export const metadata = {
  title: "BKT OTR Tyre Range in Uttar Pradesh | MKS Concord LLP",
  description: "Explore BKT OTR tyres by size and application. MKS Concord LLP supplies BKT Off-The-Road tyres across Uttar Pradesh. Ask for availability and quotation.",
  keywords: ["BKT OTR tyre range", "BKT OTR tyres Uttar Pradesh", "BKT tyres Gorakhpur", "construction OTR tyres", "mining OTR tyres", "earthmoving tyres"]
};

export default function OtrRangePage() {
  return <main>
    <div className="topbar"><div className="container topbar-inner"><span>BKT OTR Tyres • Construction • Mining • Earthmoving • Industrial</span><a href="tel:+919194702099">Call +91 91947 02099</a></div></div>
    <header className="site-header"><div className="container nav"><Link className="brand" href="/"><span className="range-brand-mark">BKT</span><span className="brand-divider"/><span className="brand-text"><strong>M/s Madhwendra</strong><small>Authorized Distributor BKT</small><small>Operated by MKS Concord LLP</small></span></Link><nav className="desktop-nav"><Link href="/">Home</Link><Link href="/#about">MKS Concord LLP</Link><Link className="active-nav" href="/bkt-otr-tyres">OTR Tyre Range</Link><Link href="/#applications">Applications</Link></nav><a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Enquiry</a></div></header>
    <section className="catalog-hero"><div className="container"><p className="section-kicker">BKT OTR TYRE CATALOGUE</p><h1>Explore the BKT OTR tyre range.</h1><p>Browse the verified BKT OTR tyre catalogue by tyre size and application. Use the vehicle/equipment information on each tyre card to help identify a suitable option. If your requirement is not listed, contact MKS Concord LLP for assistance.</p><div className="catalog-tools"><span>{bktProducts.length} catalogue entries</span><span>Prices not displayed</span><span>Availability on enquiry</span></div></div></section>
    <section className="section products-section"><div className="container"><CatalogueClient products={bktProducts} /></div></section>
  </main>;
}
