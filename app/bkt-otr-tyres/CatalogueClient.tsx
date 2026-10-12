"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BktProduct } from "../../lib/data";

const whatsappNumber = "9194702099";


export default function CatalogueClient({ products }: { products: BktProduct[] }) {
  const [query, setQuery] = useState("");
  const [application, setApplication] = useState("All applications");
  const applications = useMemo(() => Array.from(new Set(products.map((p) => p.application))), [products]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const searchable = `${p.name} ${p.size} ${p.type} ${p.application} ${p.machinery}`.toLowerCase();
      return (!q || searchable.includes(q)) && (application === "All applications" || p.application === application);
    });
  }, [products, query, application]);
  const clearFilters = () => { setQuery(""); setApplication("All applications"); };

  return (
    <>
      <div className="catalog-filter-panel" aria-label="Catalogue search and filter">
        <div className="catalog-search">
          <label htmlFor="tyre-search">Search tyre, size, model or equipment</label>
          <div className="catalog-search-field"><span aria-hidden="true">⌕</span><input id="tyre-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. 23.5R25, Earthmax, grader..." /></div>
        </div>
        <div className="catalog-select"><label htmlFor="application">Application</label><select id="application" value={application} onChange={(e) => setApplication(e.target.value)}><option>All applications</option>{applications.map((item) => <option key={item}>{item}</option>)}</select></div>
        <button type="button" className="filter-reset" onClick={clearFilters}>Reset</button>
      </div>

      <div className="catalog-result-bar"><div><strong>{filtered.length}</strong> {filtered.length === 1 ? "tyre option" : "tyre options"} shown</div><span>Search by model, size, application or equipment</span></div>

      <div className="catalog-grid">
        {filtered.map((product, index) => {
          return <article className="catalog-card" key={product.id} suppressHydrationWarning>
            <Link href={`/bkt-otr-tyres/${product.id}`} className="catalog-card-main">
              <div className="product-image tyre-card-image"><span className="catalog-index">{String(index + 1).padStart(2, "0")}</span><Image src={product.image} alt={`${product.name} BKT OTR tyre`} width={700} height={700} loading="lazy" sizes="(max-width: 700px) 90vw, 320px" /><span className="catalog-product-badge">BKT OTR</span></div>
              <div className="product-info"><p>{product.type}</p><h2>{product.name}</h2><div className="product-size"><b>TYRE SIZE</b>{product.size}</div><div className="product-meta"><span><b>APPLICATION</b>{product.application}</span><span><b>VEHICLE / EQUIPMENT</b>{product.machinery}</span></div></div>
            </Link>
            <div className="catalog-card-actions"><Link className="catalog-link" href={`/bkt-otr-tyres/${product.id}`}>View details <b>→</b></Link><div className="catalog-action-row"><Link className="quote-button" href={`/request-quote?model=${encodeURIComponent(product.name)}&size=${encodeURIComponent(product.size)}&vehicle=${encodeURIComponent(product.machinery)}&application=${encodeURIComponent(product.application)}`}>Request Quote ↗</Link></div></div>
          </article>;
        })}
      </div>

      {filtered.length === 0 && <div className="empty-catalog"><span className="empty-catalog-label">NO MATCHING OPTION</span><h2>We may still be able to help.</h2><p>Try another tyre size, model or application. If your requirement is not listed, send the machine or tyre details to MKS Concord LLP.</p><div className="empty-catalog-actions"><button type="button" className="mks-button mks-button-ghost" onClick={clearFilters}>Clear search</button><a className="mks-button mks-button-primary" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello MKS Concord LLP, I could not find my BKT OTR tyre requirement in the online range. Please help me identify the suitable tyre.")}`} target="_blank" rel="noreferrer">Ask MKS on WhatsApp ↗</a></div></div>}
    </>
  );
}
