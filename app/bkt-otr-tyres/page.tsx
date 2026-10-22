import SiteHeader from "../components/SiteHeader";
import { bktProducts } from "../../lib/data";
import { applicationLandings } from "../../lib/applications";
import CatalogueClient from "./CatalogueClient";
import { buildMetadata, absoluteUrl, breadcrumbSchema, jsonLdGraph } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "OTR Tyres & BKT Tyres in Uttar Pradesh | MKS Concord LLP",
  description: "Explore OTR tyres and BKT tyres by size, model and application. MKS Concord LLP supplies off-the-road tyres for construction, mining, earthmoving and industrial equipment across Uttar Pradesh. Ask for availability and a quotation.",
  path: "/bkt-otr-tyres",
  keywords: ["OTR tyres", "tyres Uttar Pradesh", "tyres Gorakhpur", "tyre supplier Uttar Pradesh", "BKT tyres", "BKT OTR tyre range", "BKT OTR tyres Uttar Pradesh", "construction equipment tyres", "construction OTR tyres", "mining OTR tyres", "earthmoving tyres", "industrial tyres"]
});

export default function OtrRangePage() {
  const schema = jsonLdGraph([
    { "@type": "CollectionPage", name: "BKT OTR Tyre Range", url: absoluteUrl("/bkt-otr-tyres"), description: "Explore the published BKT OTR tyre range by size, model and application.", mainEntity: { "@type": "ItemList", numberOfItems: bktProducts.length, itemListElement: bktProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: absoluteUrl(`/bkt-otr-tyres/${product.id}`) })) } },
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "BKT OTR Tyres", path: "/bkt-otr-tyres" }])
  ]);
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader active="range" />
    <section className="catalog-hero"><div className="mks-container"><div className="catalog-hero-grid"><div><p className="mks-section-kicker">TYRE CATALOGUE / BKT OTR</p><h1>Explore OTR tyres by size and application.</h1><p>Browse BKT off-the-road tyres for construction, mining, earthmoving, road construction and industrial equipment. Search by tyre size, model or application, then ask MKS Concord LLP about availability and a quotation.</p><div className="catalog-tools"><span>{bktProducts.length} catalogue entries</span><span>Prices on enquiry</span><span>Supply across Uttar Pradesh</span></div></div><div className="catalog-hero-side"><span>01</span><strong>BKT OTR</strong><p>Construction • Mining • Earthmoving • Infrastructure</p></div></div></div></section>
    <section className="section products-section" suppressHydrationWarning><div className="mks-container"><CatalogueClient products={bktProducts} /></div></section>
  </main>;
}
