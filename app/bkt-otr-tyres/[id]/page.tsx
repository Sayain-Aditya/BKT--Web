import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import ProductViewer from "../../components/ProductViewer";
import { notFound } from "next/navigation";
import { bktProducts, whatsapp, phone } from "../../../lib/data";
import { buildMetadata, breadcrumbSchema, jsonLdGraph, absoluteUrl } from "../../../lib/seo";

export function generateStaticParams() {
  return bktProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = bktProducts.find((item) => item.id === id);
  if (!product) return { title: "BKT OTR Tyre | MKS Concord LLP" };
  return buildMetadata({ title: `${product.name} | BKT OTR Tyres | MKS Concord LLP`, description: `${product.name} — ${product.size}. BKT OTR tyre for ${product.application.toLowerCase()}. Contact MKS Concord LLP for availability and quotation across Uttar Pradesh.`, path: `/bkt-otr-tyres/${product.id}`, keywords: [product.name, product.size, "BKT OTR tyres", product.application, product.machinery] });
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = bktProducts.find((item) => item.id === id);
  if (!product) notFound();

  const quoteText = `Hello MKS Concord LLP, I am enquiring about the BKT OTR tyre ${product.name}. Tyre size: ${product.size}. Vehicle/equipment: ${product.machinery}. Application: ${product.application}. Please share availability and quotation.`;
  const quoteLink = `${whatsapp}?text=${encodeURIComponent(quoteText)}`;
  const related = bktProducts.filter((item) => item.id !== product.id && (item.application === product.application || item.type === product.type)).slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
  const productSchema = {
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
  const pageSchema = jsonLdGraph([
    productSchema,
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "BKT OTR Tyres", path: "/bkt-otr-tyres" }, { name: product.name, path: `/bkt-otr-tyres/${product.id}` }])
  ]);

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    <SiteHeader active="range" showTopbar={false} />

    <nav className="product-breadcrumb" aria-label="Breadcrumb">
      <div className="mks-container product-breadcrumb-inner">
        <Link href="/">Home</Link>
        <span className="product-breadcrumb-separator" aria-hidden="true">›</span>
        <Link href="/bkt-otr-tyres">BKT OTR Tyres</Link>
        <span className="product-breadcrumb-separator" aria-hidden="true">›</span>
        <span className="product-breadcrumb-current" aria-current="page">{product.name} {product.size}</span>
      </div>
    </nav>

    <section className="section product-detail"><div className="mks-container product-detail-grid">
      <ProductViewer
        image={product.image}
        name={product.name}
        size={product.size}
        application={product.application}
      />

      <div className="detail-copy">
        <p className="product-label">BKT OTR TYRE</p>
        <div className="detail-model">{product.name.replace(`${product.size} `, "")}</div>
        <h1>{product.size}</h1>
        <p className="detail-lead">A BKT OTR tyre option for <strong>{product.application.toLowerCase()}</strong>. Confirm the tyre against your machine, operating conditions and requirement with our team.</p>

        <div className="detail-highlights">
          <div><b>TYRE SIZE</b><span>{product.size}</span></div>
          <div><b>TYPE</b><span>{product.type}</span></div>
          <div><b>APPLICATION</b><span>{product.application}</span></div>
          <div><b>VEHICLE / EQUIPMENT</b><span>{product.machinery}</span></div>
        </div>

        <div className="detail-note"><strong>Need price or availability?</strong><span>This tyre is carried into the quote form automatically, so you can send your exact requirement without re-entering the model and size.</span></div>
        <div className="hero-actions"><a className="mks-button mks-button-primary" href={quoteLink} target="_blank" rel="noreferrer">Ask for Price on WhatsApp ↗</a><Link className="mks-button mks-button-ghost" href={`/request-quote?model=${encodeURIComponent(product.name)}&size=${encodeURIComponent(product.size)}&vehicle=${encodeURIComponent(product.machinery)}&application=${encodeURIComponent(product.application)}`}>Request Quote ↗</Link></div>
        <p className="product-service-note">Supplied by MKS Concord LLP across Uttar Pradesh • Head Office: Gorakhpur</p>
      </div>
    </div></section>

    <section className="section product-fit-section"><div className="mks-container product-fit-grid">
      <div><p className="mks-section-kicker">NEED HELP CHOOSING?</p><h2>Can't find your exact requirement?</h2></div>
      <div><p>Our catalogue is designed to help you identify a BKT OTR tyre by size, application and vehicle/equipment information. If your requirement is not listed, contact MKS Concord LLP and share your tyre size or machine details.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Talk to us on WhatsApp ↗</a></div>
    </div></section>

    {related.length > 0 && <section className="section related-products"><div className="mks-container"><div className="section-head-row"><div><p className="mks-section-kicker">RELATED BKT OPTIONS</p><h2>More tyres to explore.</h2></div><Link className="text-link" href="/bkt-otr-tyres">View complete range ↗</Link></div><div className="related-grid">{related.map((item) => <Link className="related-card" href={`/bkt-otr-tyres/${item.id}`} key={item.id}><div className="related-image tyre-related-image"><Image src={item.image} alt={`${item.name} BKT OTR tyre`} width={500} height={500} loading="lazy" sizes="(max-width: 700px) 90vw, 260px" /></div><div><span>{item.size}</span><h3>{item.name}</h3><small>{item.application}</small></div></Link>)}</div></div></section>}

    <section className="section product-final-cta"><div className="mks-container"><div><p className="mks-section-kicker">BKT OTR TYRES • UTTAR PRADESH</p><h2>Ready to enquire about this tyre?</h2><p>Send us the tyre size, vehicle/equipment and quantity. We'll help with availability and quotation.</p></div><Link className="mks-button mks-button-primary" href={`/request-quote?model=${encodeURIComponent(product.name)}&size=${encodeURIComponent(product.size)}&vehicle=${encodeURIComponent(product.machinery)}&application=${encodeURIComponent(product.application)}`}>Request Quotation ↗</Link></div></section>
  </main>;
}
