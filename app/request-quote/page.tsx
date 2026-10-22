import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";
import SiteHeader from '../components/SiteHeader';
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tyre Price & Availability Enquiry | MKS Concord LLP",
  description: "Enquire about tyre prices, availability and BKT OTR tyre options from MKS Concord LLP. Share the tyre size, equipment, application, quantity and location for a quotation.",
  path: "/request-quote",
  keywords: ["tyre price enquiry", "tyre quotation Uttar Pradesh", "tyre availability", "OTR tyre quote", "BKT tyre enquiry", "BKT OTR tyre quotation"]
});

export default async function RequestQuotePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const get = (key: string) => { const value = params[key]; return Array.isArray(value) ? value[0] ?? '' : value ?? ''; };
  const initial = { model: get('model'), size: get('size'), vehicle: get('vehicle'), application: get('application'), quantity: get('quantity'), company: get('company'), location: get('location') };
  return (
    <main>
      <SiteHeader active="quote" />

      <section className="quote-page-hero">
        <div className="mks-container quote-page-grid">
          <div>
            <p className="mks-section-kicker mks-section-kicker-light">BKT OTR TYRES • UTTAR PRADESH</p>
            <h1>Ask about tyre prices and availability.</h1>
            <p className="quote-page-lead">Tell us the tyre size, BKT OTR model if known, equipment, application and quantity you need. We will review your requirement and respond with availability and a quotation.</p>
            <div className="quote-form-points"><span>01 Contact details</span><span>02 Tyre requirement</span><span>03 WhatsApp enquiry</span></div>
            <div className="quote-benefits"><span>✓ No public pricing</span><span>✓ WhatsApp enquiry</span><span>✓ Supply across Uttar Pradesh</span><span>✓ Head Office: Gorakhpur</span></div>
          </div>
          <div className="quote-form-card"><QuoteForm initial={initial} /></div>
        </div>
      </section>

      <section className="quote-help-section"><div className="mks-container quote-help-grid">
        <div><p className="mks-section-kicker">CAN'T FIND YOUR TYRE?</p><h2>Share what you know.</h2></div>
        <p>You do not need to know the exact BKT model. If you have the tyre size, vehicle/equipment type, application or a photo of the existing tyre marking, contact us and our team can help with the enquiry.</p>
      </div></section>
    </main>
  );
}
