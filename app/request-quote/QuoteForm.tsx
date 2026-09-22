'use client';

import { FormEvent, useState } from 'react';
import { phone, whatsapp } from '../../lib/data';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const contact = String(form.get('contact') || '').trim();
    const size = String(form.get('size') || '').trim();
    const model = String(form.get('model') || '').trim();
    const vehicle = String(form.get('vehicle') || '').trim();
    const application = String(form.get('application') || '').trim();
    const quantity = String(form.get('quantity') || '').trim();
    const location = String(form.get('location') || '').trim();

    const message = [
      'Hello MKS Concord LLP, I would like a quotation for BKT OTR tyres.',
      `Name: ${name}`,
      `Phone / WhatsApp: ${contact}`,
      `Tyre size: ${size || 'Not specified'}`,
      `BKT model: ${model || 'Not specified'}`,
      `Vehicle / equipment: ${vehicle || 'Not specified'}`,
      `Application: ${application || 'Not specified'}`,
      `Quantity: ${quantity || 'Not specified'}`,
      `Location in Uttar Pradesh: ${location || 'Not specified'}`,
      '',
      'Please share availability and quotation.'
    ].join('\n');

    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  return <form className="quote-form" onSubmit={submit}>
    <div className="quote-form-head"><span>01 / YOUR REQUIREMENT</span><strong>Send enquiry on WhatsApp</strong></div>
    <div className="form-grid">
      <label><span>Name *</span><input name="name" required placeholder="Your name" /></label>
      <label><span>Phone / WhatsApp *</span><input name="contact" required type="tel" placeholder="Your phone number" /></label>
      <label><span>Tyre size</span><input name="size" placeholder="e.g. 23.5R25" /></label>
      <label><span>BKT model</span><input name="model" placeholder="If known" /></label>
      <label><span>Vehicle / equipment</span><input name="vehicle" placeholder="e.g. Wheel loader" /></label>
      <label><span>Application</span><select name="application" defaultValue=""><option value="">Select application</option><option>Construction</option><option>Mining & Quarry</option><option>Earthmoving</option><option>Infrastructure</option><option>Industrial</option><option>Other</option></select></label>
      <label><span>Quantity</span><input name="quantity" type="number" min="1" placeholder="e.g. 4" /></label>
      <label><span>Location in Uttar Pradesh</span><input name="location" placeholder="City / district" /></label>
    </div>
    <p className="form-note">You can provide either the tyre size, BKT model, vehicle/equipment or application. If you are unsure, send the information you have.</p>
    <button className="button button-primary quote-submit" type="submit">Continue to WhatsApp ↗</button>
    {submitted && <p className="form-success">WhatsApp enquiry opened. If it did not open, call <a href={`tel:+91${phone}`}>+91 {phone}</a>.</p>}
    <p className="form-privacy">We use the details you enter only to understand your tyre enquiry and respond to you.</p>
  </form>;
}
