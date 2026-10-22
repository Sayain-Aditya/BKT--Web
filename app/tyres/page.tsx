import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { applicationLandings } from "../../lib/applications";
import { absoluteUrl, breadcrumbSchema, buildMetadata, jsonLdGraph, organizationSchema } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Tyres in Uttar Pradesh | Heavy-Duty & OTR Tyres",
  description: "Looking for tyres in Uttar Pradesh? MKS Concord LLP supplies BKT OTR tyres for construction, mining, earthmoving, roadwork and industrial equipment. Browse tyre applications or request availability and a quotation.",
  path: "/tyres",
  keywords: ["tyres", "tyres Uttar Pradesh", "tyre supplier Uttar Pradesh", "tyres Gorakhpur", "heavy-duty tyres", "OTR tyres", "off-the-road tyres", "construction equipment tyres", "mining tyres", "earthmoving tyres", "industrial tyres", "BKT tyres"]
});

export default function TyresPage() {
  const schema = jsonLdGraph([
    {
      "@type": "CollectionPage",
      name: "Tyres in Uttar Pradesh — Heavy-Duty and OTR Tyres",
      url: absoluteUrl("/tyres"),
      description: "Explore BKT off-the-road tyres for construction, mining, earthmoving, road construction and industrial equipment.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: applicationLandings.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: absoluteUrl(`/otr-tyres/${item.slug}`)
        }))
      }
    },
    organizationSchema(),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Tyres", path: "/tyres" }])
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader active="range" />
      <section className="catalog-hero">
        <div className="mks-container">
          <div className="catalog-hero-grid">
            <div>
              <p className="mks-section-kicker">TYRES / UTTAR PRADESH</p>
              <h1>Tyres for construction, mining and heavy-duty equipment.</h1>
              <p>MKS Concord LLP supplies BKT Off-The-Road (OTR) tyres for businesses and equipment owners across Uttar Pradesh. If you are searching for tyres for earthmoving, road construction, mining, quarry or industrial equipment, explore the relevant application or contact our team to discuss size, availability and quotation.</p>
              <div className="catalog-tools"><span>Heavy-duty OTR tyres</span><span>Application-based browsing</span><span>Prices on enquiry</span></div>
              <div className="hero-actions">
                <Link className="mks-button mks-button-primary" href="/bkt-otr-tyres">Browse BKT OTR Tyres <span>→</span></Link>
                <Link className="mks-button mks-button-ghost" href="/request-quote">Ask for a Quote</Link>
              </div>
            </div>
            <div className="catalog-hero-side"><span>OTR</span><strong>HEAVY-DUTY TYRES</strong><p>Construction • Mining • Earthmoving • Industrial</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="mks-container">
          <div className="section-heading">
            <div><p className="mks-section-kicker">BROWSE BY APPLICATION</p><h2>Find tyres for the work your equipment does.</h2></div>
            <p>Our published range focuses on off-the-road tyres rather than passenger car or motorcycle tyres. Confirm tyre size and suitability for your machine before ordering.</p>
          </div>
          <div className="location-link-grid">
            {applicationLandings.map((item) => (
              <Link key={item.slug} href={`/otr-tyres/${item.slug}`}>
                <strong>{item.title}</strong><span>Explore options →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section location-service-area">
        <div className="mks-container location-service-grid">
          <div><p className="mks-section-kicker mks-section-kicker-light">TYRE ENQUIRIES</p><h2>Need help identifying the right tyre?</h2></div>
          <div><p>Share the tyre size, equipment or machine type, application, quantity and your city or district. MKS Concord LLP can review your requirement and advise on the next step for BKT OTR tyre availability and quotation.</p><div className="location-service-actions"><Link className="mks-button mks-button-primary" href="/request-quote">Request a Quote →</Link><Link className="button button-ghost light-button" href="/locations">View Locations</Link></div></div>
        </div>
      </section>
    </main>
  );
}
