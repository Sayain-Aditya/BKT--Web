import SiteHeader from "../components/SiteHeader";
import { bktProducts } from "../../lib/data";
import { applicationLandings } from "../../lib/applications";
import CatalogueClient from "./CatalogueClient";

export const metadata = {
  title: "BKT OTR Tyre Range in Uttar Pradesh | MKS Concord LLP",
  description: "Explore BKT OTR tyres by size and application. MKS Concord LLP supplies BKT Off-The-Road tyres across Uttar Pradesh. Ask for availability and quotation.",
  keywords: ["BKT OTR tyre range", "BKT OTR tyres Uttar Pradesh", "BKT tyres Gorakhpur", "construction OTR tyres", "mining OTR tyres", "earthmoving tyres"],
  alternates: { canonical: "/bkt-otr-tyres" },
  openGraph: { title: "BKT OTR Tyre Range | MKS Concord LLP", description: "Explore BKT OTR tyres by size and application across Uttar Pradesh.", type: "website", url: "/bkt-otr-tyres" }
};

export default function OtrRangePage() {
  return <main>
    <SiteHeader active="range" />
    <section className="catalog-hero"><div className="container"><div className="catalog-hero-grid"><div><p className="section-kicker">BKT OTR TYRE CATALOGUE</p><h1>Find the right BKT OTR tyre for the job.</h1><p>Browse the current BKT OTR tyre range by size, model and application. Vehicle/equipment information is shown on each card to help you identify a suitable option.</p><div className="catalog-tools"><span>{bktProducts.length} catalogue entries</span><span>Prices on enquiry</span><span>Supply across Uttar Pradesh</span></div></div><div className="catalog-hero-side"><span>01</span><strong>BKT OTR</strong><p>Construction • Mining • Earthmoving • Infrastructure</p></div></div></div></section>
    <section className="section products-section"><div className="container"><CatalogueClient products={bktProducts} /></div></section>
  </main>;
}
