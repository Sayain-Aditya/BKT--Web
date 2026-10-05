import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { getLocation, locations } from "../../../lib/locations";

export function generateStaticParams() { return locations.map((location) => ({ slug: location.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location | MKS Concord LLP" };
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
  return {
    title: `${location.name}, Uttar Pradesh | MKS Concord LLP`,
    description: location.description,
    keywords: location.keywords,
    alternates: { canonical: `${base}/locations/${location.slug}` },
    openGraph: { title: `${location.name} | MKS Concord LLP`, description: location.description, type: "website", url: `${base}/locations/${location.slug}` }
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MKS Concord LLP",
    description: location.description,
    url: `${siteUrl}/locations/${location.slug}`,
    telephone: ["+91 91947 02099", "+91 77048 66437"],
    email: "as4316664@gmail.com",
    address: { "@type": "PostalAddress", streetAddress: location.address, addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    areaServed: { "@type": "State", name: "Uttar Pradesh" }
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader active="locations" />
    <div className="location-breadcrumb"><div className="container"><Link href="/locations">Locations</Link><span>/</span><span>{location.name}</span></div></div>
    <section className="location-detail-hero"><div className="container location-detail-grid"><div><p className="section-kicker">MKS CONCORD LLP / {location.name.toUpperCase()}</p><h1>BKT OTR tyre and equipment support in {location.name}.</h1><p>{location.description}</p><div className="location-detail-actions"><Link className="button button-primary" href="/request-quote">Request a Quote →</Link><Link className="button button-ghost" href="/bkt-otr-tyres">Browse OTR tyres</Link></div></div><aside className="location-address-card"><span>{location.type}</span><h2>{location.name}</h2><address>{location.address}</address><div><a href="tel:+919194702099">+91 91947 02099</a><a href="tel:+917704866437">+91 77048 66437</a></div></aside></div></section>

    <section className="section"><div className="container location-content-grid"><div><p className="section-kicker">WHAT WE SUPPORT</p><h2>Built around the needs of heavy-equipment customers.</h2></div><div className="location-support-list"><div><strong>BKT OTR tyres</strong><p>Tyre enquiries for construction, mining, earthmoving and infrastructure applications.</p></div><div><strong>Construction equipment</strong><p>Support for machine-related requirements and customer enquiries.</p></div><div><strong>Spare parts & service</strong><p>Enquiries for genuine OEM spare parts, machine inspection, hydraulic repair and field support.</p></div><div><strong>Requirement-based assistance</strong><p>Share your tyre size, machine/equipment, application, quantity and city for a focused response.</p></div></div></div></section>

    <section className="section location-detail-dark"><div className="container location-detail-links"><div><p className="section-kicker light">BKT OTR RANGE</p><h2>Find tyres for your application.</h2><p>Explore the published tyre range or send your exact requirement to MKS Concord LLP.</p></div><div className="location-application-links"><Link href="/otr-tyres/construction"><strong>Construction</strong><span>View options →</span></Link><Link href="/otr-tyres/mining"><strong>Mining</strong><span>View options →</span></Link><Link href="/otr-tyres/earthmoving"><strong>Earthmoving</strong><span>View options →</span></Link><Link href="/otr-tyres/infrastructure"><strong>Infrastructure</strong><span>View options →</span></Link></div></div></section>

    <section className="section location-nearby"><div className="container"><div className="section-head-row"><div><p className="section-kicker">OTHER LOCATIONS</p><h2>Connect with another MKS location.</h2></div><Link className="text-link" href="/locations">View all locations ↗</Link></div><div className="location-nearby-grid">{locations.filter((item) => item.slug !== location.slug).map((item) => <Link href={`/locations/${item.slug}`} key={item.slug}><span>{item.type}</span><strong>{item.name}</strong><b>Explore →</b></Link>)}</div></div></section>
  </main>;
}
