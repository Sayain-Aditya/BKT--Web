import SiteHeader from "../components/SiteHeader";
import { bktProducts } from "../../lib/data";
import { applicationLandings } from "../../lib/applications";
import CatalogueClient from "./CatalogueClient";
import { buildMetadata, absoluteUrl, breadcrumbSchema, jsonLdGraph } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "BKT OTR Tyre Range in Uttar Pradesh | MKS Concord LLP",
  description: "Explore BKT OTR tyres by size, model and application. MKS Concord LLP supplies BKT Off-The-Road tyres across Uttar Pradesh. Ask for availability and quotation.",
  path: "/bkt-otr-tyres",
  keywords: ["BKT OTR tyre range", "BKT OTR tyres Uttar Pradesh", "BKT tyres Gorakhpur", "construction OTR tyres", "mining OTR tyres", "earthmoving tyres"]
});

export default function OtrRangePage() {
  const schema = jsonLdGraph([
    { "@type": "CollectionPage", name: "BKT OTR Tyre Range", url: absoluteUrl("/bkt-otr-tyres"), description: "Explore the published BKT OTR tyre range by size, model and application.", mainEntity: { "@type": "ItemList", numberOfItems: bktProducts.length, itemListElement: bktProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: absoluteUrl(`/bkt-otr-tyres/${product.id}`) })) } },
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "BKT OTR Tyres", path: "/bkt-otr-tyres" }])
  ]);
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader active="range" />
    <section className="catalog-hero"><div className="mks-container"><div className="catalog-hero-grid"><div><p className="mks-section-kicker">BKT OTR TYRE CATALOGUE</p><h1>Find the right BKT OTR tyre for the job.</h1><p>Browse the current BKT OTR tyre range by size, model and application. Vehicle/equipment information is shown on each card to help you identify a suitable option.</p><div className="catalog-tools"><span>{bktProducts.length} catalogue entries</span><span>Prices on enquiry</span><span>Supply across Uttar Pradesh</span></div></div><div className="catalog-hero-side"><span>01</span><strong>BKT OTR</strong><p>Construction • Mining • Earthmoving • Infrastructure</p></div></div></div></section>
    <section className="section products-section" suppressHydrationWarning><div className="mks-container"><CatalogueClient products={bktProducts} /></div></section>
  </main>;
}
