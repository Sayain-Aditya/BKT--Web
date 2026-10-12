import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";
import SiteHeader from '../components/SiteHeader';
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a BKT OTR Tyre Quotation | MKS Concord LLP",
  description: "Request BKT OTR tyre availability and quotation from MKS Concord LLP. Share tyre size, vehicle or equipment, application, quantity and location.",
  path: "/request-quote",
  keywords: ["BKT OTR tyre quotation", "BKT tyre enquiry", "OTR tyre quote Uttar Pradesh"]
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
            <h1>Request a quotation for your tyre requirement.</h1>
            <p className="quote-page-lead">Tell us the BKT OTR tyre, vehicle or equipment and quantity you need. We will use the details to understand your requirement and respond with availability and quotation.</p>
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
