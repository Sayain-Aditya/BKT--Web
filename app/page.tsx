import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import TyreFinder from "./components/TyreFinder";
import MobileQuoteBar from "./components/MobileQuoteBar";
import { applications, faqs, featuredProducts, phone, whatsapp } from "../lib/data";
import { organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema, jsonLdGraph } from "../lib/seo";
import { locations } from "../lib/locations";

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
    ...localBusinessSchema(locations[0]),
    name: "M/S Madhwendra Kumar Singh",
    brand: { "@type": "Brand", name: "BKT" },
    telephone: "+91 9194702428",
    email: "madhwendra.bkt@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Siddhartha Enclave, 162B, adjacent to Lakme Salon, Taramandal",
      addressLocality: "Gorakhpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "273017",
      addressCountry: "IN"
    },
    areaServed: { "@type": "State", name: "Uttar Pradesh" },
    knowsAbout: ["tyres", "BKT OTR tyres", "off-the-road tyres", "construction equipment tyres", "mining tyres", "earthmoving tyres", "industrial tyres", "heavy-duty tyres", "road construction tyres"]
  };
  const siteGraph = jsonLdGraph([
    organizationSchema(),
    websiteSchema(),
    businessSchema,
    breadcrumbSchema([{ name: "Home", path: "/" }])
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
      <SiteHeader active="home" />

      <section className="hero hero-v2">
        <div className="hero-v2-bg" />
        <div className="hero-v2-grid" />
        <div className="mks-container hero-v2-content">
          <div className="hero-v2-copy">
            <div className="hero-v2-brandline">
              <span className="hero-v2-line" />
              <span>MKS CONCORD LLP</span>
              <b>×</b>
              <span>BKT OTR TYRES</span>
            </div>
            <p className="hero-v2-kicker">BKT OFF-THE-ROAD TYRES • UTTAR PRADESH</p>
            <h1>Tyres for demanding<br /><em>heavy-duty work.</em></h1>
            <p className="hero-v2-lead">Looking for tyres in Uttar Pradesh? MKS Concord LLP supplies BKT Off-The-Road (OTR) tyres for construction, mining, earthmoving, road construction, infrastructure and industrial equipment. Explore tyre sizes and applications or ask our team about availability and quotations.</p>
            <div className="hero-v2-company"><strong>M/S Madhwendra Kumar Singh</strong><span>Authorized BKT OTR Distributor • Operated by MKS Concord LLP</span></div>
            <div className="hero-actions">
              <Link className="mks-button mks-button-primary" href="/tyres">Explore Tyre Range <span>→</span></Link>
              <a className="mks-button mks-button-ghost" href={`tel:+91${phone}`}>Talk to MKS</a>
            </div>
            <div className="hero-v2-points"><span>01 / BKT OTR TYRES</span><span>02 / UP SUPPLY</span><span>03 / QUOTATION SUPPORT</span></div>
          </div>

          <div className="hero-v2-visual">
            <div className="hero-v2-glow" />
            <div className="hero-v2-ring ring-a" />
            <div className="hero-v2-ring ring-b" />
            <div className="hero-v2-image-frame">
              <div className="tyre-orbit-carrier" aria-hidden="true">
                <Image src="https://storage.googleapis.com/bkt-prod-storage/43d2798f-59c8-44ea-b8c4-8af13852515b" alt="BKT OTR tyre for heavy construction and industrial applications" width={900} height={900} priority sizes="(max-width: 900px) 72vw, 460px" />
              </div>
            </div>
            <div className="hero-v2-tag tag-top"><small>OFF-THE-ROAD</small><strong>BKT TYRES</strong></div>
            <div className="hero-v2-tag tag-bottom"><span>OTR</span><div><strong>Ready for work.</strong><small>Ask MKS for availability</small></div></div>
            <div className="hero-v2-number">01</div>
          </div>
        </div>
        <div className="hero-v2-bottom"><div className="mks-container"><span>BKT OTR Tyres</span><span>Construction</span><span>Mining & Quarry</span><span>Earthmoving</span><span>Industrial Applications</span></div></div>
      </section>

      <section className="trust-strip scroll-reveal" aria-label="BKT OTR tyre focus"><div className="mks-container trust-strip-inner"><div className="trust-intro"><span>02 / BKT OTR FOCUS</span><strong>Tyres for demanding off-road applications</strong></div><div className="trust-brands"><div><b>CONSTRUCTION</b><span>OTR APPLICATIONS</span></div><div><b>MINING</b><span>HEAVY-DUTY WORK</span></div><div><b>EARTHMOVING</b><span>OFF-ROAD EQUIPMENT</span></div><div><b>INFRASTRUCTURE</b><span>PROJECT WORKSITES</span></div><div><b>INDUSTRIAL</b><span>HEAVY APPLICATIONS</span></div></div></div></section>

      <TyreFinder />

      <section className="section about-section about-v2 scroll-reveal" id="about"><div className="mks-container about-v2-head"><div><p className="mks-section-kicker">03 / ABOUT MKS CONCORD LLP</p><h2>One focused range for demanding off-road applications.</h2></div><div className="about-v2-intro"><p><strong>MKS Concord LLP</strong>, established in 2020, operates the BKT OTR tyre distribution business serving customers across Uttar Pradesh.</p><p><strong>M/S Madhwendra Kumar Singh</strong> focuses on BKT Off-The-Road tyres for construction, mining, earthmoving, infrastructure and industrial applications. Other MKS business activities remain separate from this BKT-focused website.</p></div></div><div className="mks-container about-v2-panel"><div className="about-v2-statement"><span>OUR APPROACH</span><strong>Practical support for demanding worksites.</strong><p>We connect product knowledge with field support so customers can discuss their machine, tyre size, application and operating conditions with one team.</p><a href={`tel:+91${phone}`}>Talk to MKS →</a></div><div className="about-v2-metrics"><div><strong>2020</strong><span>Established</span></div><div><strong>UP</strong><span>Regional reach</span></div><div><strong>OTR</strong><span>Tyre focus</span></div><div><strong>05</strong><span>Core service areas</span></div></div></div><div className="mks-container mks-card-grid"><article className="mks-card"><span>01</span><h3>BKT OTR Tyre Range</h3><p>Explore BKT OTR tyre options by size and application for demanding off-road work.</p></article><article className="mks-card"><span>02</span><h3>Tyre Selection Support</h3><p>Share your tyre size, equipment and application so our team can assist with your requirement.</p></article><article className="mks-card"><span>03</span><h3>Supply Across Uttar Pradesh</h3><p>Based in Gorakhpur, MKS Concord LLP supplies BKT OTR tyres to customers across Uttar Pradesh.</p></article><article className="mks-card"><span>04</span><h3>Quotation on Enquiry</h3><p>Ask for availability and pricing by WhatsApp or phone. Public product pages do not display prices.</p></article></div></section>

      <section className="section why-mks-section scroll-reveal" id="why-mks"><div className="mks-container"><div className="section-heading"><div><p className="mks-section-kicker">04 / WHY MKS CONCORD LLP</p><h2>A practical tyre enquiry partner for demanding applications.</h2></div><p>From identifying a suitable BKT OTR option to preparing a quotation, the website is built around a straightforward customer enquiry journey.</p></div><div className="why-mks-grid"><article><span>01</span><div><h3>BKT OTR Focus</h3><p>A focused online range of BKT Off-The-Road tyres for construction, mining, earthmoving, infrastructure and industrial applications.</p></div></article><article><span>02</span><div><h3>Application Guidance</h3><p>Share your tyre size, vehicle or equipment and working application so the team can understand your requirement.</p></div></article><article><span>03</span><div><h3>Uttar Pradesh Supply</h3><p>Head office in Gorakhpur with BKT OTR tyre supply support for customers across Uttar Pradesh.</p></div></article><article><span>04</span><div><h3>Quotation Support</h3><p>Prices are provided on enquiry. Send the exact tyre requirement through the website or WhatsApp for availability and quotation.</p></div></article></div><div className="why-mks-cta"><div><strong>Already know the tyre?</strong><span>Send the model and size directly into the enquiry form.</span></div><Link className="mks-button mks-button-primary" href="/request-quote">Request a Quote <span>→</span></Link></div></div></section>

      <section className="section solutions-section scroll-reveal" id="solutions"><div className="mks-container"><div className="section-heading"><div><p className="mks-section-kicker">05 / HOW WE HELP</p><h2>From tyre requirement to quotation.</h2></div><p>This website is focused on helping customers find and enquire about BKT OTR tyres supplied by MKS Concord LLP across Uttar Pradesh.</p></div><div className="solutions-grid"><article className="solution-card solution-featured"><span>01</span><div><small>EXPLORE</small><h3>Browse BKT OTR Tyres</h3><p>Explore the catalogue by tyre size and application, with vehicle or equipment information shown where available.</p><Link href="/bkt-otr-tyres">Explore tyre range →</Link></div></article><article className="solution-card"><span>02</span><div><small>IDENTIFY</small><h3>Check Your Requirement</h3><p>Use the tyre size, application and equipment information to narrow down the relevant BKT OTR option.</p></div></article><article className="solution-card"><span>03</span><div><small>ASSISTANCE</small><h3>Ask MKS for Help</h3><p>If your tyre or equipment is not listed, contact our team with your requirement for assistance.</p></div></article><article className="solution-card"><span>04</span><div><small>AVAILABILITY</small><h3>Confirm Availability</h3><p>Send the tyre model or size, quantity and location so the team can check the requirement.</p></div></article><article className="solution-card"><span>05</span><div><small>QUOTATION</small><h3>Request a Quote</h3><p>Pricing is shared on enquiry through WhatsApp or phone rather than displayed publicly.</p><Link href="/request-quote">Request a quote →</Link></div></article></div></div></section>

      <section className="section dark-section tyre-applications-section scroll-reveal" id="applications"><div className="mks-container"><div className="section-heading"><div><p className="mks-section-kicker mks-section-kicker-light">06 / APPLICATIONS</p><h2>Where BKT OTR tyres go to work.</h2></div><p>Explore tyre solutions by working environment and equipment application.</p></div><div className="application-grid">{applications.map(([num,title,text], index) => <article className={`application-card application-${index + 1}`} key={num}><div className="application-visual" aria-hidden="true"><span>{num}</span><i>{index === 0 ? "BUILD" : index === 1 ? "EXTRACT" : index === 2 ? "MOVE" : index === 3 ? "CONNECT" : "PERFORM"}</i><b /></div><div className="application-copy"><span>{num} / APPLICATION</span><h3>{title}</h3><p>{text}</p><a href={`/otr-tyres/${["construction","mining","earthmoving","infrastructure","industrial"][index]}`}>Explore application →</a></div></article>)}</div></div></section>

      <section className="section products-section products-v2 scroll-reveal"><div className="mks-container"><div className="products-v2-head"><div><p className="mks-section-kicker">07 / FEATURED BKT OTR TYRES</p><h2>Selected tyres. Clear applications. One dedicated range.</h2></div><div className="products-v2-intro"><p>Explore a focused selection from the BKT OTR range. Each product card shows the core information you need before opening the full catalogue.</p><div className="catalog-stat"><strong>33</strong><span>catalogue entries</span></div></div></div><div className="product-showcase">{featuredProducts.slice(0,3).map((product, index) => <article className="product-feature" key={product.id}><div className="product-feature-visual"><span className="product-index">0{index + 1}</span><span className="product-badge">BKT OTR</span><Image src={product.image} alt={`${product.name} BKT OTR tyre`} width={700} height={700} loading="lazy" sizes="(max-width: 900px) 90vw, 360px"/><div className="product-orbit" /></div><div className="product-feature-copy"><p className="product-type">{product.type}</p><h3>{product.name}</h3><div className="feature-size"><span>SIZE</span><strong>{product.size}</strong></div><div className="feature-facts"><div><span>APPLICATION</span><strong>{product.application}</strong></div><div><span>MACHINERY</span><strong>{product.machinery}</strong></div></div><Link href={`/bkt-otr-tyres/${product.id}`}>View product details <b>↗</b></Link></div></article>)}</div><div className="products-v2-footer"><div><span>COMPLETE OTR RANGE</span><strong>Explore tyres by size and application.</strong><small>Public product pages do not display prices.</small></div><Link className="mks-button mks-button-primary" href="/bkt-otr-tyres">Explore Full Catalogue <span>→</span></Link></div></div></section>

      <section className="section customers-v2 scroll-reveal" id="customers"><div className="mks-container"><div className="customers-v2-head"><div><p className="mks-section-kicker">08 / WHO WE SERVE</p><h2>Built around the industries that keep Uttar Pradesh moving.</h2></div><div><p className="section-copy">From contractors and equipment owners to mining operators and rental companies, MKS supports businesses that depend on heavy equipment every day.</p><a className="text-link" href={`tel:+91${phone}`}>Discuss your application →</a></div></div><div className="customer-visual-grid">{[["01","CONSTRUCTION","Projects, contractors & heavy equipment","BUILD"],["02","INFRASTRUCTURE","Roads, civil works & project sites","CONNECT"],["03","MINING & QUARRY","Extraction, hauling & rugged terrain","EXTRACT"],["04","INDUSTRIAL","Industrial operations & material handling","PERFORM"],["05","EQUIPMENT OWNERS","Owners, operators & fleet users","OPERATE"],["06","RENTAL & DEALERS","Rental companies, dealers & workshops","SUPPORT"]].map(([num,title,text,word])=><article className="customer-visual-card" key={num}><div className="customer-visual-top"><span>{num}</span><b>{word}</b><i /></div><div className="customer-visual-copy"><p>{title}</p><h3>{text}</h3><span>OTR • EQUIPMENT • SUPPORT</span></div></article>)}</div></div></section>

      <section className="section locations-section scroll-reveal"><div className="mks-container"><div className="section-heading presence-heading"><div><p className="mks-section-kicker">09 / PRESENCE</p><h2>Based in Gorakhpur. Supplying across Uttar Pradesh.</h2></div><p>MKS Concord LLP has its head office in Gorakhpur and supplies BKT OTR tyres to customers across Uttar Pradesh.</p></div><div className="presence-grid"><article className="presence-card presence-hq"><div className="presence-top"><span>HQ / 01</span><b>HEAD OFFICE</b></div><h3>Gorakhpur</h3><p>Siddhartha Enclave, Taramandal, Gorakhpur, Uttar Pradesh 273017</p><a href="https://www.google.com/maps/search/?api=1&query=Siddhartha%20Enclave%20Taramandal%20Gorakhpur%20Uttar%20Pradesh%20273017" target="_blank" rel="noreferrer">Open location ↗</a></article><article className="presence-card"><div className="presence-top"><span>02</span><b>UP PRESENCE</b></div><h3>Ayodhya</h3><p>Customer and distribution support in the Ayodhya region.</p></article><article className="presence-card"><div className="presence-top"><span>03</span><b>UP PRESENCE</b></div><h3>Varanasi</h3><p>Customer and distribution support in the Varanasi region.</p></article><article className="presence-card"><div className="presence-top"><span>04</span><b>UP PRESENCE</b></div><h3>Anpara</h3><p>Customer and distribution support in the Anpara region.</p></article></div></div></section>

      <section className="section faq-section scroll-reveal" id="faq"><div className="mks-container faq-layout"><div><p className="mks-section-kicker">10 / FAQ</p><h2>Questions about BKT OTR tyres?</h2><p className="section-copy">Here are the key things to know before enquiring. If your vehicle or requirement is not listed, contact us and our team can help.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Ask us on WhatsApp →</a></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="quote-section scroll-reveal" id="quote"><div className="mks-container quote-box"><div><p className="mks-section-kicker mks-section-kicker-light">11 / REQUEST A QUOTATION</p><h2>Tell us which BKT OTR tyre you need.</h2><p>Prices are not displayed publicly. Send us the tyre size, vehicle or equipment type, application and quantity through WhatsApp or call us. We can check the requirement and send you the applicable quotation.</p><div className="quote-checklist"><span>✓ Tyre size or model</span><span>✓ Vehicle / equipment type</span><span>✓ Application</span><span>✓ Quantity</span></div></div><div className="quote-actions"><Link className="button button-light inline-flex items-center justify-center gap-2" href="/request-quote">Request a Quote ↗</Link><a className="button button-outline-light inline-flex items-center justify-center gap-2" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Enquiry ↗</a><a className="button button-outline-light inline-flex items-center justify-center gap-2" href={`tel:+91${phone}`}>Call +91 91947 02428</a><small>Can't find your vehicle in the range? Contact us for assistance.</small></div></div></section>

      <footer className="footer"><div className="mks-container footer-grid"><div className="footer-brand"><div className="footer-logos"><Image src="/images/MKS Logo (1).png" alt="MKS logo" width={120} height={82}/><Image src="/images/bkt-logo.png" alt="BKT Tyres" width={120} height={82}/></div><h3>M/S Madhwendra Kumar Singh</h3><p>Operated by MKS Concord LLP</p></div><div><h4>Explore</h4><a href="#about">MKS Concord LLP</a><Link href="/tyres">Tyres</Link><Link href="/bkt-otr-tyres">OTR Tyre Range</Link><a href="#applications">Applications</a><a href="#faq">FAQ</a></div><div><h4>Contact</h4><a href={`tel:+91${phone}`}>+91 91947 02428</a><Link href="/request-quote">Request a Quote</Link><a href="mailto:madhwendra.bkt@gmail.com">madhwendra.bkt@gmail.com</a></div><div><h4>Head Office</h4><p>Siddhartha Enclave, 162B,<br/>Taramandal, Gorakhpur,<br/>Uttar Pradesh – 273017</p></div></div><div className="mks-container footer-bottom"><span>© 2026 MKS Concord LLP. All rights reserved.</span><span>BKT OTR Tyres • Uttar Pradesh</span></div></footer>
      <MobileQuoteBar />
    </main>
    </>
  );
}
