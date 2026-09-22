import Image from "next/image";
import { applications, faqs, featuredProducts, mksServices, phone, whatsapp } from "../lib/data";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bkt-web.vercel.app";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "M/s Madhwendra Authorized Distributor BKT",
    brand: { "@type": "Brand", name: "MKS Concord LLP" },
    description: "BKT OTR tyre distributor operated by MKS Concord LLP, supplying BKT Off-The-Road tyres across Uttar Pradesh.",
    url: siteUrl,
    telephone: "+91 9194702099",
    email: "as4316664@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Siddhartha Enclave, 162B, Taramandal",
      addressLocality: "Gorakhpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "273017",
      addressCountry: "IN"
    },
    areaServed: { "@type": "State", name: "Uttar Pradesh" },
    knowsAbout: ["BKT OTR tyres", "construction tyres", "mining tyres", "earthmoving tyres", "industrial tyres"]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
      <div className="topbar"><div className="container topbar-inner"><span>Serving construction, mining & heavy-equipment customers across Uttar Pradesh</span><a href={`tel:+91${phone}`}>Call +91 91947 02099</a></div></div>
      <header className="site-header"><div className="container nav">
        <a className="brand" href="/" aria-label="M/s Madhwendra Authorized Distributor BKT operated by MKS Concord LLP">
          <div className="brand-logos">
            <Image src="/images/mks-group-logo.jpeg" alt="MKS logo" width={130} height={44} className="mks-logo" priority />
            <Image src="/images/bkt-logo.png" alt="BKT Tyres" width={100} height={38} className="bkt-logo" priority />
          </div>
          <span className="brand-divider" />
          <span className="brand-text"><strong>M/s Madhwendra</strong><small>Authorized Distributor BKT</small><small>Operated by MKS Concord LLP</small></span>
        </a>
        <nav className="desktop-nav"><a href="#about">MKS Concord LLP</a><a href="#applications">Applications</a><a href="/bkt-otr-tyres">OTR Tyre Range</a><a href="#customers">Customers</a><a href="#faq">FAQ</a></nav>
        <a className="nav-cta" href="/request-quote">Request a Quote</a>
      </div></header>

      <section className="hero hero-v2">
        <div className="hero-v2-bg" />
        <div className="hero-v2-grid" />
        <div className="container hero-v2-content">
          <div className="hero-v2-copy">
            <div className="hero-v2-brandline">
              <span className="hero-v2-line" />
              <span>MKS CONCORD LLP</span>
              <b>×</b>
              <span>BKT OTR TYRES</span>
            </div>
            <p className="hero-v2-kicker">CONSTRUCTION • MINING • EARTHMOVING • INFRASTRUCTURE</p>
            <h1>Built for the<br /><em>toughest jobs.</em></h1>
            <p className="hero-v2-lead">BKT Off-The-Road tyres for construction, mining, earthmoving, infrastructure and industrial applications, supplied by MKS Concord LLP across Uttar Pradesh.</p>
            <div className="hero-v2-company"><strong>M/s Madhwendra Authorized Distributor BKT</strong><span>Operated by MKS Concord LLP</span></div>
            <div className="hero-actions">
              <a className="button button-primary" href="/bkt-otr-tyres">Explore BKT OTR Range <span>→</span></a>
              <a className="button button-ghost" href={`tel:+91${phone}`}>Talk to MKS</a>
            </div>
            <div className="hero-v2-points"><span>01 / BKT OTR TYRES</span><span>02 / UP SUPPLY</span><span>03 / QUOTATION SUPPORT</span></div>
          </div>

          <div className="hero-v2-visual">
            <div className="hero-v2-glow" />
            <div className="hero-v2-ring ring-a" />
            <div className="hero-v2-ring ring-b" />
            <div className="hero-v2-image-frame">
              <img src="https://storage.googleapis.com/bkt-prod-storage/43d2798f-59c8-44ea-b8c4-8af13852515b" alt="BKT OTR tyre for heavy construction and industrial applications" width="900" height="900" loading="eager" />
            </div>
            <div className="hero-v2-tag tag-top"><small>OFF-THE-ROAD</small><strong>BKT TYRES</strong></div>
            <div className="hero-v2-tag tag-bottom"><span>OTR</span><div><strong>Ready for work.</strong><small>Ask MKS for availability</small></div></div>
            <div className="hero-v2-number">01</div>
          </div>
        </div>
        <div className="hero-v2-bottom"><div className="container"><span>BKT OTR Tyres</span><span>Construction</span><span>Mining &amp; Quarry</span><span>Earthmoving</span><span>Industrial</span></div></div>
      </section>

      <section className="trust-strip" aria-label="BKT OTR tyre distribution"><div className="container trust-strip-inner"><div className="trust-intro"><span>02 / BKT OTR DISTRIBUTION</span><strong>Focused support for off-road tyre requirements</strong></div><div className="trust-brands"><div><b>BKT</b><span>OTR TYRES</span></div><div><b>33</b><span>CATALOGUE ENTRIES</span></div><div><b>UP</b><span>SUPPLY ACROSS UTTAR PRADESH</span></div><div><b>GKP</b><span>HEAD OFFICE</span></div><div><b>QUOTE</b><span>WHATSAPP OR CALL</span></div></div></div></section>

      <section className="section about-section about-v2" id="about"><div className="container about-v2-head"><div><p className="section-kicker">03 / ABOUT MKS CONCORD LLP</p><h2>Built around the machines, people and work that keep projects moving.</h2></div><div className="about-v2-intro"><p><strong>MKS Concord LLP</strong>, established in 2020, is a construction-focused business serving customers across Uttar Pradesh.</p><p><strong>M/s Madhwendra Authorized Distributor BKT</strong>, operated by MKS Concord LLP, focuses on supplying BKT OTR tyre solutions for heavy construction and industrial equipment across Uttar Pradesh.</p></div></div><div className="container about-v2-panel"><div className="about-v2-statement"><span>OUR APPROACH</span><strong>Practical support for demanding worksites.</strong><p>Customers can discuss their tyre size, vehicle or equipment type, application and operating conditions with our team to identify a suitable BKT OTR tyre requirement.</p><a href={`tel:+91${phone}`}>Talk to MKS →</a></div><div className="about-v2-metrics"><div><strong>2020</strong><span>Established</span></div><div><strong>UP</strong><span>Regional reach</span></div><div><strong>OTR</strong><span>Tyre focus</span></div><div><strong>33</strong><span>Catalogue entries</span></div></div></div><div className="container mks-card-grid">{mksServices.map(([num,title,text]) => <article className="mks-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section solutions-section" id="solutions"><div className="container"><div className="section-heading"><div><p className="section-kicker">04 / OUR SOLUTIONS</p><h2>One team for the products and support your equipment needs.</h2></div><p>From tyres and equipment to genuine parts and field support, MKS Concord LLP brings practical solutions together for demanding worksites.</p></div><div className="solutions-grid"><article className="solution-card solution-featured"><span>01</span><div><small>CORE FOCUS</small><h3>BKT OTR Tyres</h3><p>Off-The-Road tyre solutions for construction, mining, earthmoving, quarry and infrastructure applications.</p><a href="/bkt-otr-tyres">Explore tyre range →</a></div></article><article className="solution-card"><span>02</span><div><small>EQUIPMENT</small><h3>Construction Equipment</h3><p>Equipment solutions for customers working across construction and infrastructure environments.</p></div></article><article className="solution-card"><span>03</span><div><small>PARTS</small><h3>Genuine OEM Spare Parts</h3><p>Genuine spare parts kept in stock where available, with ordering support for required components.</p></div></article><article className="solution-card"><span>04</span><div><small>FIELD SUPPORT</small><h3>Machine Services</h3><p>Machine inspection, field service, hydraulic repairs and emergency support for working equipment.</p></div></article><article className="solution-card"><span>05</span><div><small>LUBRICANTS</small><h3>Volvoline Lubricants</h3><p>Hydraulic oil, engine oil, gear oil, transmission oil, grease and coolant for equipment applications.</p></div></article></div></div></section>

      <section className="section dark-section" id="applications"><div className="container"><div className="section-heading"><div><p className="section-kicker light">05 / APPLICATIONS</p><h2>Where BKT OTR tyres go to work.</h2></div><p>Explore tyre solutions by working environment and equipment application.</p></div><div className="application-grid">{applications.map(([num,title,text], index) => <article className={`application-card application-${index + 1}`} key={num}><div className="application-visual" aria-hidden="true"><span>{num}</span><i>{index === 0 ? "BUILD" : index === 1 ? "EXTRACT" : index === 2 ? "MOVE" : index === 3 ? "CONNECT" : "PERFORM"}</i><b /></div><div className="application-copy"><span>{num} / APPLICATION</span><h3>{title}</h3><p>{text}</p><a href="/bkt-otr-tyres">Explore OTR range →</a></div></article>)}</div></div></section>

      <section className="section products-section products-v2"><div className="container"><div className="products-v2-head"><div><p className="section-kicker">06 / FEATURED BKT OTR TYRES</p><h2>Selected tyres. Clear applications. One dedicated range.</h2></div><div className="products-v2-intro"><p>Explore a focused selection from the BKT OTR range. Each product card shows the core information you need before opening the full catalogue.</p><div className="catalog-stat"><strong>33</strong><span>catalogue entries</span></div></div></div><div className="product-showcase">{featuredProducts.slice(0,3).map((product, index) => <article className="product-feature" key={product.id}><div className="product-feature-visual"><span className="product-index">0{index + 1}</span><span className="product-badge">BKT OTR</span><img src={product.image} alt={`${product.name} BKT OTR tyre`} loading="lazy"/><div className="product-orbit" /></div><div className="product-feature-copy"><p className="product-type">{product.type}</p><h3>{product.name}</h3><div className="feature-size"><span>SIZE</span><strong>{product.size}</strong></div><div className="feature-facts"><div><span>APPLICATION</span><strong>{product.application}</strong></div><div><span>MACHINERY</span><strong>{product.machinery}</strong></div></div><a href={`/bkt-otr-tyres/${product.id}`}>View product details <b>↗</b></a></div></article>)}</div><div className="products-v2-footer"><div><span>COMPLETE OTR RANGE</span><strong>Explore BKT OTR tyres by size and application.</strong><small>Public product pages do not display prices.</small></div><a className="button button-primary" href="/bkt-otr-tyres">Explore Full Catalogue <span>→</span></a></div></div></section>

      <section className="section customers-v2" id="customers"><div className="container"><div className="customers-v2-head"><div><p className="section-kicker">07 / WHO WE SERVE</p><h2>Built around the industries that keep Uttar Pradesh moving.</h2></div><div><p className="section-copy">From contractors and equipment owners to mining operators and rental companies, MKS supports businesses that depend on heavy equipment every day.</p><a className="text-link" href={`tel:+91${phone}`}>Discuss your application →</a></div></div><div className="customer-visual-grid">{[["01","CONSTRUCTION","Projects, contractors & heavy equipment","BUILD"],["02","INFRASTRUCTURE","Roads, civil works & project sites","CONNECT"],["03","MINING & QUARRY","Extraction, hauling & rugged terrain","EXTRACT"],["04","INDUSTRIAL","Industrial operations & material handling","PERFORM"],["05","EQUIPMENT OWNERS","Owners, operators & fleet users","OPERATE"],["06","RENTAL & DEALERS","Rental companies, dealers & workshops","SUPPORT"]].map(([num,title,text,word])=><article className="customer-visual-card" key={num}><div className="customer-visual-top"><span>{num}</span><b>{word}</b><i /></div><div className="customer-visual-copy"><p>{title}</p><h3>{text}</h3><span>OTR • EQUIPMENT • SUPPORT</span></div></article>)}</div></div></section>

      <section className="section locations-section"><div className="container"><div className="section-heading presence-heading"><div><p className="section-kicker">08 / PRESENCE</p><h2>Based in Gorakhpur. Supplying across Uttar Pradesh.</h2></div><p>MKS Concord LLP has its head office in Gorakhpur and supplies BKT OTR tyres to customers across Uttar Pradesh.</p></div><div className="presence-grid"><article className="presence-card presence-hq"><div className="presence-top"><span>HQ / 01</span><b>HEAD OFFICE</b></div><h3>Gorakhpur</h3><p>Siddhartha Enclave, Taramandal, Gorakhpur, Uttar Pradesh 273017</p><a href="https://www.google.com/maps/search/?api=1&query=Siddhartha%20Enclave%20Taramandal%20Gorakhpur%20Uttar%20Pradesh%20273017" target="_blank" rel="noreferrer">Open location ↗</a></article><article className="presence-card"><div className="presence-top"><span>02</span><b>UP PRESENCE</b></div><h3>Ayodhya</h3><p>Customer and distribution support in the Ayodhya region.</p></article><article className="presence-card"><div className="presence-top"><span>03</span><b>UP PRESENCE</b></div><h3>Varanasi</h3><p>Customer and distribution support in the Varanasi region.</p></article><article className="presence-card"><div className="presence-top"><span>04</span><b>UP PRESENCE</b></div><h3>Anpara</h3><p>Customer and distribution support in the Anpara region.</p></article></div></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-layout"><div><p className="section-kicker">09 / FAQ</p><h2>Questions about BKT OTR tyres?</h2><p className="section-copy">Here are the key things to know before enquiring. If your vehicle or requirement is not listed, contact us and our team can help.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Ask us on WhatsApp →</a></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="quote-section" id="quote"><div className="container quote-box"><div><p className="section-kicker light">10 / REQUEST A QUOTATION</p><h2>Tell us which BKT OTR tyre you need.</h2><p>Prices are not displayed publicly. Send us the tyre size, vehicle or equipment type, application and quantity through WhatsApp or call us. We can check the requirement and send you the applicable quotation.</p><div className="quote-checklist"><span>✓ Tyre size or model</span><span>✓ Vehicle / equipment type</span><span>✓ Application</span><span>✓ Quantity</span></div></div><div className="quote-actions"><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Request Quote on WhatsApp ↗</a><a className="button button-outline-light" href={`tel:+91${phone}`}>Call +91 91947 02099</a><small>Can't find your vehicle in the range? Contact us for assistance.</small></div></div></section>

      <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><div className="footer-logos"><Image src="/images/mks-group-logo.jpeg" alt="MKS logo" width={120} height={82}/><Image src="/images/bkt-logo.png" alt="BKT Tyres" width={120} height={82}/></div><h3>M/s Madhwendra Authorized Distributor BKT</h3><p>Operated by MKS Concord LLP</p></div><div><h4>Explore</h4><a href="#about">MKS Concord LLP</a><a href="/bkt-otr-tyres">OTR Tyre Range</a><a href="#applications">Applications</a><a href="#faq">FAQ</a></div><div><h4>Contact</h4><a href={`tel:+91${phone}`}>+91 91947 02099</a><a href="/request-quote">Request a Quote</a><a href="mailto:as4316664@gmail.com">as4316664@gmail.com</a></div><div><h4>Head Office</h4><p>Siddhartha Enclave, 162B,<br/>Taramandal, Gorakhpur,<br/>Uttar Pradesh – 273017</p></div></div><div className="container footer-bottom"><span>© 2026 MKS Concord LLP. All rights reserved.</span><span>BKT OTR Tyres • Uttar Pradesh</span></div></footer>
    </main>
    </>
  );
}
