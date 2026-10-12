import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { bktProducts } from "../../../lib/data";
import { applicationLandings, getApplication, getApplicationProducts } from "../../../lib/applications";
import { buildMetadata, breadcrumbSchema, jsonLdGraph, absoluteUrl } from "../../../lib/seo";

export function generateStaticParams() { return applicationLandings.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getApplication(slug);
  if (!item) return { title: "BKT OTR Application | MKS Concord LLP" };
  return buildMetadata({ title: item.title, description: `${item.description} MKS Concord LLP supplies BKT OTR tyres across Uttar Pradesh.`, path: `/otr-tyres/${item.slug}`, keywords: item.keywords });
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getApplication(slug);
  if (!item) notFound();
  const products = getApplicationProducts(slug);
  const collectionSchema = jsonLdGraph([
    { "@type": "CollectionPage", name: item.title, url: absoluteUrl(`/otr-tyres/${item.slug}`), description: item.description, mainEntity: { "@type": "ItemList", numberOfItems: products.length, itemListElement: products.slice(0, 12).map((p, index) => ({ "@type": "ListItem", position: index + 1, name: p.name, url: absoluteUrl(`/bkt-otr-tyres/${p.id}`) })) } },
    { "@type": "Service", name: item.title, description: item.description, provider: { "@type": "Organization", name: "MKS Concord LLP", url: absoluteUrl("/") }, areaServed: { "@type": "State", name: "Uttar Pradesh" }, serviceType: "BKT OTR tyre supply enquiry" },
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "BKT OTR Tyres", path: "/bkt-otr-tyres" }, { name: item.title, path: `/otr-tyres/${item.slug}` }])
  ]);
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} /><SiteHeader active="range" showTopbar={false} />
    <section className="application-landing-hero"><div className="mks-container"><div className="application-landing-kicker"><span> BKT OTR TYRES / APPLICATION</span><b>{item.eyebrow}</b></div><h1>{item.title}</h1><p>{item.description}</p><div className="application-landing-actions"><Link className="mks-button mks-button-primary" href="/bkt-otr-tyres">Browse full OTR range →</Link><Link className="mks-button mks-button-ghost" href="/request-quote">Request a quote</Link></div></div></section>
    <section className="section application-landing-products"><div className="mks-container"><div className="section-heading"><div><p className="mks-section-kicker">PUBLISHED RANGE / {products.length} OPTIONS</p><h2>BKT tyres currently listed for this application.</h2></div><p>These results are drawn from the tyre range published on this website. Confirm suitability for your machine and operating conditions with MKS before ordering.</p></div>{products.length ? <div className="application-product-grid">{products.map((product) => <article className="application-product-card" key={product.id}><Link href={`/bkt-otr-tyres/${product.id}`}><div className="application-product-image"><Image src={product.image} alt={`${product.name} BKT OTR tyre`} width={600} height={600} loading="lazy" sizes="(max-width: 700px) 90vw, 300px" /></div><div className="application-product-copy"><span>{product.type}</span><h3>{product.name}</h3><strong>{product.size}</strong><p>{product.application} · {product.machinery}</p><em>View tyre →</em></div></Link></article>)}</div> : <div className="empty-catalog"><h2>No published option matched this application.</h2><p>Send your machine, tyre size or application to MKS for assistance.</p><Link className="mks-button mks-button-primary" href="/request-quote">Request assistance →</Link></div>}</div></section>
    <section className="section application-landing-help"><div className="mks-container application-help-grid"><div><p className="mks-section-kicker">NOT SURE WHICH TYRE?</p><h2>Use the tyre finder or send your requirement.</h2></div><div><p>Start with the working application, equipment and tyre size. If the exact combination is not shown, MKS Concord LLP can review your enquiry.</p><div className="application-help-actions"><Link className="mks-button mks-button-primary" href="/#tyre-finder">Find Your Tyre →</Link><Link className="mks-button mks-button-ghost" href="/request-quote">Request a Quote</Link></div></div></div></section>
    <section className="section application-related"><div className="mks-container"><div className="section-head-row"><div><p className="mks-section-kicker">OTHER APPLICATIONS</p><h2>Explore another working environment.</h2></div><Link className="text-link" href="/bkt-otr-tyres">View complete range ↗</Link></div><div className="application-related-grid">{applicationLandings.filter(a => a.slug !== slug).map(a => <Link key={a.slug} href={`/otr-tyres/${a.slug}`}><span>{a.eyebrow}</span><strong>{a.title.replace("BKT OTR Tyres for ", "")}</strong><b>Explore →</b></Link>)}</div></div></section>
  </main>;
}
