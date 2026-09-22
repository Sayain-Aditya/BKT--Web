import QuoteForm from './QuoteForm';
import { phone } from '../../lib/data';

export const metadata = {
  title: 'Request a BKT OTR Tyre Quotation | MKS Concord LLP',
  description: 'Request BKT OTR tyre availability and quotation from MKS Concord LLP. Share tyre size, vehicle or equipment, application, quantity and location.',
};

export default function RequestQuotePage() {
  return (
    <main>
      <header className="site-header"><div className="container nav">
        <a className="brand" href="/" aria-label="M/s Madhwendra Authorized Distributor BKT">
          <img src="/images/bkt-logo.png" alt="BKT Tyres" className="bkt-logo" />
          <span className="brand-divider" />
          <img src="/images/mks-group-logo.jpeg" alt="MKS logo" className="mks-logo" />
          <span className="brand-divider" />
          <span className="brand-text"><strong>M/s Madhwendra</strong><small>Authorized Distributor BKT</small><small>Operated by MKS Concord LLP</small></span>
        </a>
        <nav className="desktop-nav"><a href="/">Home</a><a href="/bkt-otr-tyres">OTR Tyre Range</a><a href="/#applications">Applications</a><a href="/#faq">FAQ</a></nav>
        <a className="nav-cta" href={`tel:+91${phone}`}>Call MKS</a>
      </div></header>

      <section className="quote-page-hero">
        <div className="container quote-page-grid">
          <div>
            <p className="section-kicker light">BKT OTR TYRES • UTTAR PRADESH</p>
            <h1>Request a quotation for your tyre requirement.</h1>
            <p className="quote-page-lead">Tell us the BKT OTR tyre, vehicle or equipment and quantity you need. We will use the details to understand your requirement and respond with availability and quotation.</p>
            <div className="quote-benefits"><span>✓ No public pricing</span><span>✓ WhatsApp enquiry</span><span>✓ Supply across Uttar Pradesh</span><span>✓ Head Office: Gorakhpur</span></div>
          </div>
          <div className="quote-form-card"><QuoteForm /></div>
        </div>
      </section>

      <section className="quote-help-section"><div className="container quote-help-grid">
        <div><p className="section-kicker">CAN'T FIND YOUR TYRE?</p><h2>Share what you know.</h2></div>
        <p>You do not need to know the exact BKT model. If you have the tyre size, vehicle/equipment type, application or a photo of the existing tyre marking, contact us and our team can help with the enquiry.</p>
      </div></section>
    </main>
  );
}
