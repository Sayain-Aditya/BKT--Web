import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { getLocation, locations } from "../../../lib/locations";
import { buildMetadata, breadcrumbSchema, jsonLdGraph, localBusinessSchema, absoluteUrl } from "../../../lib/seo";

export function generateStaticParams() { return locations.map((location) => ({ slug: location.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location | MKS Concord LLP" };
  return buildMetadata({ title: `${location.name}, Uttar Pradesh | MKS Concord LLP`, description: location.description, path: `/locations/${location.slug}`, keywords: location.keywords });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  const schema = jsonLdGraph([
    localBusinessSchema(location),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }, { name: location.name, path: `/locations/${location.slug}` }])
  ]);

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader active="locations" />
    <div className="location-breadcrumb"><div className="mks-container"><Link href="/locations">Locations</Link><span>/</span><span>{location.name}</span></div></div>
    <section className="location-detail-hero"><div className="mks-container location-detail-grid"><div><p className="mks-section-kicker">MKS CONCORD LLP / {location.name.toUpperCase()}</p><h1>BKT OTR tyre and equipment support in {location.name}.</h1><p>{location.description}</p><div className="location-detail-actions"><Link className="mks-button mks-button-primary" href="/request-quote">Request a Quote →</Link><Link className="mks-button mks-button-ghost" href="/bkt-otr-tyres">Browse OTR tyres</Link></div></div><aside className="location-address-card"><span>{location.type}</span><h2>{location.name}</h2><address>{location.address}</address><div><a href="tel:+919194702099">+91 91947 02099</a><a href="tel:+917704866437">+91 77048 66437</a></div></aside></div></section>

    <section className="section"><div className="mks-container location-content-grid"><div><p className="mks-section-kicker">WHAT WE SUPPORT</p><h2>Built around the needs of heavy-equipment customers.</h2></div><div className="location-support-list"><div><strong>BKT OTR tyres</strong><p>Tyre enquiries for construction, mining, earthmoving and infrastructure applications.</p></div><div><strong>Construction equipment</strong><p>Support for machine-related requirements and customer enquiries.</p></div><div><strong>Spare parts & service</strong><p>Enquiries for genuine OEM spare parts, machine inspection, hydraulic repair and field support.</p></div><div><strong>Requirement-based assistance</strong><p>Share your tyre size, machine/equipment, application, quantity and city for a focused response.</p></div></div></div></section>

    <section className="section location-detail-dark"><div className="mks-container location-detail-links"><div><p className="mks-section-kicker mks-section-kicker-light">BKT OTR RANGE</p><h2>Find tyres for your application.</h2><p>Explore the published tyre range or send your exact requirement to MKS Concord LLP.</p></div><div className="location-application-links"><Link href="/otr-tyres/construction"><strong>Construction</strong><span>View options →</span></Link><Link href="/otr-tyres/mining"><strong>Mining</strong><span>View options →</span></Link><Link href="/otr-tyres/earthmoving"><strong>Earthmoving</strong><span>View options →</span></Link><Link href="/otr-tyres/infrastructure"><strong>Infrastructure</strong><span>View options →</span></Link></div></div></section>

    <section className="section location-nearby"><div className="mks-container"><div className="section-head-row"><div><p className="mks-section-kicker">OTHER LOCATIONS</p><h2>Connect with another MKS location.</h2></div><Link className="text-link" href="/locations">View all locations ↗</Link></div><div className="location-nearby-grid">{locations.filter((item) => item.slug !== location.slug).map((item) => <Link href={`/locations/${item.slug}`} key={item.slug}><span>{item.type}</span><strong>{item.name}</strong><b>Explore →</b></Link>)}</div></div></section>
  </main>;
}
