import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { locations } from "../../lib/locations";

export const metadata = {
  title: "MKS Concord LLP Locations in Uttar Pradesh | Gorakhpur, Ayodhya, Anpara & Varanasi",
  description: "Find MKS Concord LLP locations in Gorakhpur, Ayodhya, Anpara and Varanasi, Uttar Pradesh. Explore local support for BKT OTR tyres and construction-equipment requirements.",
  keywords: ["MKS Concord LLP locations", "BKT OTR tyres Uttar Pradesh", "BKT tyres Gorakhpur", "BKT tyres Ayodhya", "BKT tyres Anpara", "BKT tyres Varanasi"],
  alternates: { canonical: "/locations" },
  openGraph: { title: "MKS Concord LLP Locations | Uttar Pradesh", description: "Gorakhpur, Ayodhya, Anpara and Varanasi locations supporting BKT OTR tyre and construction-equipment enquiries.", type: "website", url: "/locations" }
};

export default function LocationsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MKS Concord LLP Locations",
    url: `${siteUrl}/locations`,
    description: metadata.description,
    mainEntity: { "@type": "ItemList", itemListElement: locations.map((location, index) => ({ "@type": "ListItem", position: index + 1, name: location.name, url: `${siteUrl}/locations/${location.slug}` })) }
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader active="locations" />
    <section className="locations-hero">
      <div className="container locations-hero-grid">
        <div>
          <p className="section-kicker">MKS CONCORD LLP / LOCATIONS</p>
          <h1>Local support for heavy-duty work across Uttar Pradesh.</h1>
          <p>Our locations help customers connect with MKS Concord LLP for BKT OTR tyres, construction-equipment requirements, spare parts and service support.</p>
          <div className="catalog-tools"><span>Gorakhpur Head Office</span><span>Ayodhya</span><span>Anpara</span><span>Varanasi</span></div>
        </div>
        <div className="locations-hero-card"><span>UP</span><strong>4 locations</strong><p>Customer coordination across construction, mining, earthmoving and infrastructure applications.</p></div>
      </div>
    </section>

    <section className="section locations-list-section">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">FIND MKS NEAR YOU</p><h2>Our current Uttar Pradesh locations.</h2></div><p>Contact the team before visiting if you need product availability, tyre selection help or a service requirement checked.</p></div>
        <div className="locations-grid">
          {locations.map((location, index) => <article className="location-card" key={location.slug}>
            <div className="location-card-top"><span>0{index + 1}</span><b>{location.type}</b></div>
            <h3>{location.name}</h3>
            <p>{location.shortDescription}</p>
            <address>{location.address}</address>
            <div className="location-card-actions"><Link className="button button-primary" href={`/locations/${location.slug}`}>Explore location →</Link><Link className="text-link" href="/request-quote">Request a quote</Link></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section location-service-area">
      <div className="container location-service-grid"><div><p className="section-kicker light">SERVICE COVERAGE</p><h2>Need support outside these locations?</h2></div><div><p>Our website supports enquiries from customers across Uttar Pradesh. Send your tyre size, machine or application and city/district, and the MKS team can review the requirement.</p><div className="location-service-actions"><Link className="button button-primary" href="/request-quote">Tell us your requirement →</Link><Link className="button button-ghost light-button" href="/bkt-otr-tyres">Browse BKT OTR range</Link></div></div></div>
    </section>

    <section className="section"><div className="container location-links"><div><p className="section-kicker">EXPLORE</p><h2>BKT OTR tyres for demanding applications.</h2></div><div className="location-link-grid"><Link href="/otr-tyres/construction"><strong>Construction</strong><span>Explore tyres →</span></Link><Link href="/otr-tyres/mining"><strong>Mining</strong><span>Explore tyres →</span></Link><Link href="/otr-tyres/earthmoving"><strong>Earthmoving</strong><span>Explore tyres →</span></Link><Link href="/otr-tyres/infrastructure"><strong>Infrastructure</strong><span>Explore tyres →</span></Link></div></div></section>
  </main>;
}
