import Link from "next/link";
import { notFound } from "next/navigation";
import { bktProducts, whatsapp, phone } from "../../../lib/data";

export function generateStaticParams() {
  return bktProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = bktProducts.find((item) => item.id === id);
  if (!product) return { title: "BKT OTR Tyre | MKS Concord LLP" };
  return {
    title: `${product.name} | BKT OTR Tyres | MKS Concord LLP`,
    description: `${product.name} — ${product.size}. BKT OTR tyre for ${product.application.toLowerCase()}. Contact MKS Concord LLP for availability and quotation across Uttar Pradesh.`
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = bktProducts.find((item) => item.id === id);
  if (!product) notFound();

  const quoteText = `Hello MKS Concord LLP, I am enquiring about the BKT OTR tyre ${product.name}. Tyre size: ${product.size}. Vehicle/equipment: ${product.machinery}. Application: ${product.application}. Please share availability and quotation.`;
  const quoteLink = `${whatsapp}?text=${encodeURIComponent(quoteText)}`;
  const related = bktProducts.filter((item) => item.id !== product.id && (item.application === product.application || item.type === product.type)).slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `BKT OTR tyre ${product.name} in size ${product.size}, listed for ${product.application.toLowerCase()}. Contact MKS Concord LLP for availability and quotation.`,
    image: [product.image],
    brand: { "@type": "Brand", name: "BKT" },
    category: "Off-The-Road Tyres",
    sku: product.id,
    url: `${siteUrl}/bkt-otr-tyres/${product.id}`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Tyre size", value: product.size },
      { "@type": "PropertyValue", name: "Type", value: product.type },
      { "@type": "PropertyValue", name: "Application", value: product.application },
      { "@type": "PropertyValue", name: "Vehicle / Equipment", value: product.machinery }
    ]
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    <header className="site-header"><div className="container nav"><Link className="brand" href="/"><span className="range-brand-mark">BKT</span><span className="brand-divider"/><span className="brand-text"><strong>M/s Madhwendra</strong><small>Authorized Distributor BKT</small><small>Operated by MKS Concord LLP</small></span></Link><nav className="desktop-nav"><Link href="/">Home</Link><Link href="/#about">MKS Concord LLP</Link><Link className="active-nav" href="/bkt-otr-tyres">OTR Tyre Range</Link><Link href="/#applications">Applications</Link></nav><a className="nav-cta" href="/request-quote">Request a Quote</a></div></header>

    <div className="product-breadcrumb"><div className="container"><Link href="/">Home</Link><span>›</span><Link href="/bkt-otr-tyres">BKT OTR Tyres</Link><span>›</span><strong>{product.name}</strong></div></div>

    <section className="section product-detail"><div className="container product-detail-grid">
      <div className="viewer-shell">
        <div className="viewer-badge">BKT OTR TYRE</div>
        <div className="viewer-stage product-hero-stage"><img src={product.image} alt={`${product.name} BKT OTR tyre`} /></div>
        <div className="viewer-controls"><span>Product image</span><span>BKT OTR range</span><span>Quotation on enquiry</span></div>
      </div>

      <div className="detail-copy">
        <p className="product-label">BKT OTR TYRE</p>
        <h1>{product.name}</h1>
        <p className="detail-lead">A BKT OTR tyre option for <strong>{product.application.toLowerCase()}</strong>. Confirm the tyre against your machine, operating conditions and requirement with our team.</p>

        <div className="detail-highlights">
          <div><b>TYRE SIZE</b><span>{product.size}</span></div>
          <div><b>TYPE</b><span>{product.type}</span></div>
          <div><b>APPLICATION</b><span>{product.application}</span></div>
          <div><b>VEHICLE / EQUIPMENT</b><span>{product.machinery}</span></div>
        </div>

        <div className="detail-note"><strong>Need the price or availability?</strong><span>Send us the tyre requirement through WhatsApp or call us. We can check availability and provide a quotation.</span></div>
        <div className="hero-actions"><a className="button button-primary" href={quoteLink} target="_blank" rel="noreferrer">Ask for Price on WhatsApp ↗</a><a className="button button-ghost" href={`tel:+91${phone}`}>Call MKS Concord LLP</a></div>
        <p className="product-service-note">MKS Concord LLP supplies BKT OTR tyres across Uttar Pradesh. Head Office: Gorakhpur, Uttar Pradesh.</p>
      </div>
    </div></section>

    <section className="section product-fit-section"><div className="container product-fit-grid">
      <div><p className="section-kicker">NEED HELP CHOOSING?</p><h2>Can't find your exact requirement?</h2></div>
      <div><p>Our catalogue is designed to help you identify a BKT OTR tyre by size, application and vehicle/equipment information. If your requirement is not listed, contact MKS Concord LLP and share your tyre size or machine details.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Talk to us on WhatsApp ↗</a></div>
    </div></section>

    {related.length > 0 && <section className="section related-products"><div className="container"><div className="section-head-row"><div><p className="section-kicker">RELATED BKT OPTIONS</p><h2>More tyres to explore.</h2></div><Link className="text-link" href="/bkt-otr-tyres">View complete range ↗</Link></div><div className="related-grid">{related.map((item) => <Link className="related-card" href={`/bkt-otr-tyres/${item.id}`} key={item.id}><div className="related-image"><img src={item.image} alt={item.name} /></div><div><span>{item.size}</span><h3>{item.name}</h3><small>{item.application}</small></div></Link>)}</div></div></section>}

    <section className="section product-final-cta"><div className="container"><div><p className="section-kicker">BKT OTR TYRES • UTTAR PRADESH</p><h2>Ready to enquire about this tyre?</h2><p>Send us the tyre size, vehicle/equipment and quantity. We'll help with availability and quotation.</p></div><a className="button button-primary" href={quoteLink} target="_blank" rel="noreferrer">Request Quotation ↗</a></div></section>
  </main>;
}
