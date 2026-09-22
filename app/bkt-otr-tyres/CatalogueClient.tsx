"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BktProduct } from "../../lib/data";

const whatsappNumber = "9194702099";

function quoteUrl(product: BktProduct) {
  const text = `Hello MKS Concord LLP, I am enquiring about the BKT OTR tyre ${product.name}.\nTyre size: ${product.size}\nVehicle/equipment: ${product.machinery}\nApplication: ${product.application}\nPlease share availability and quotation.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function CatalogueClient({ products }: { products: BktProduct[] }) {
  const [query, setQuery] = useState("");
  const [application, setApplication] = useState("All applications");
  const applications = useMemo(() => Array.from(new Set(products.map((p) => p.application))), [products]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const searchable = `${p.name} ${p.size} ${p.type} ${p.application} ${p.machinery}`.toLowerCase();
      return (!q || searchable.includes(q)) &&
        (application === "All applications" || p.application === application);
    });
  }, [products, query, application]);

  return <>
    <div className="catalog-filter-panel">
      <div className="catalog-search">
        <label htmlFor="tyre-search">Search by tyre, size or vehicle / equipment</label>
        <input id="tyre-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. 23.5R25, loader, grader..." />
      </div>
      <div className="catalog-select">
        <label htmlFor="application">Application</label>
        <select id="application" value={application} onChange={(e) => setApplication(e.target.value)}>
          <option>All applications</option>
          {applications.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <button type="button" className="filter-reset" onClick={() => { setQuery(""); setApplication("All applications"); }}>Reset</button>
    </div>

    <div className="catalog-result-bar"><strong>{filtered.length}</strong> tyre {filtered.length === 1 ? "option" : "options"} shown <span>• Prices are available on enquiry</span></div>

    <div className="catalog-grid">
      {filtered.map((product) => <article className="catalog-card" key={product.id}>
        <Link href={`/bkt-otr-tyres/${product.id}`} className="catalog-card-main">
          <div className="product-image"><img src={product.image} alt={`${product.name} BKT OTR tyre`} loading="lazy"/><span>BKT OTR</span></div>
          <div className="product-info">
            <p>{product.type}</p>
            <h2>{product.name}</h2>
            <div className="product-size"><b>TYRE SIZE</b>{product.size}</div>
            <div className="product-meta"><span><b>APPLICATION</b>{product.application}</span><span><b>VEHICLE / EQUIPMENT</b>{product.machinery}</span></div>
          </div>
        </Link>
        <div className="catalog-card-actions"><Link className="catalog-link" href={`/bkt-otr-tyres/${product.id}`}>View details →</Link><a className="quote-button" href={quoteUrl(product)} target="_blank" rel="noreferrer">Ask for Price ↗</a></div>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="empty-catalog"><h2>No matching tyre found</h2><p>Can't find your vehicle or tyre requirement? Contact us and our team can help with your enquiry.</p><a className="button button-primary" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello MKS Concord LLP, I could not find my BKT OTR tyre requirement in the online range. Please help me identify the suitable tyre.")}`} target="_blank" rel="noreferrer">Ask MKS on WhatsApp ↗</a></div>}
  </>;
}
