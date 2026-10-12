'use client';

import { FormEvent, useState } from 'react';
import { phone, whatsapp } from '../../lib/data';

type QuoteInitial = { model?: string; size?: string; vehicle?: string; application?: string; quantity?: string; company?: string; location?: string };

export default function QuoteForm({ initial = {} }: { initial?: QuoteInitial }) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const contact = String(form.get('contact') || '').trim();
    const company = String(form.get('company') || '').trim();
    const size = String(form.get('size') || '').trim();
    const model = String(form.get('model') || '').trim();
    const vehicle = String(form.get('vehicle') || '').trim();
    const application = String(form.get('application') || '').trim();
    const quantity = String(form.get('quantity') || '').trim();
    const location = String(form.get('location') || '').trim();
    const messageNote = String(form.get('message') || '').trim();

    const message = [
      'Hello MKS Concord LLP, I would like a quotation for BKT OTR tyres.',
      `Contact person: ${name}`,
      `Company / firm: ${company || 'Not specified'}`,
      `Phone / WhatsApp: ${contact}`,
      `Tyre size: ${size || 'Not specified'}`,
      `BKT model: ${model || 'Not specified'}`,
      `Vehicle / equipment: ${vehicle || 'Not specified'}`,
      `Application: ${application || 'Not specified'}`,
      `Quantity: ${quantity || 'Not specified'}`,
      `City / district: ${location || 'Not specified'}`,
      `Additional message: ${messageNote || 'None'}`,
      '',
      'Please share availability and quotation.'
    ].join('\n');

    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  return <form className="quote-form" onSubmit={submit}>
    <div className="quote-form-head"><span>01 / YOUR REQUIREMENT</span><strong>Send enquiry on WhatsApp</strong></div>
    {(initial.model || initial.size) && <div className="quote-selected-summary"><span>SELECTED BKT TYRE</span><strong>{initial.model || 'BKT OTR Tyre'}</strong><small>{initial.size}{initial.vehicle ? ` • ${initial.vehicle}` : ''}{initial.application ? ` • ${initial.application}` : ''}</small></div>}
    <div className="form-grid">
      <label><span>Contact person *</span><input name="name" required placeholder="Your name" /></label>
      <label><span>Company / Firm Name</span><input name="company" defaultValue={initial.company || ""} placeholder="Your company or firm" /></label>
      <label><span>Phone / WhatsApp *</span><input name="contact" required type="tel" placeholder="Your phone number" /></label>
      <label><span>Tyre size</span><input name="size" defaultValue={initial.size || ""} placeholder="e.g. 23.5R25" /></label>
      <label><span>BKT model</span><input name="model" defaultValue={initial.model || ""} placeholder="If known" /></label>
      <label><span>Vehicle / equipment</span><input name="vehicle" defaultValue={initial.vehicle || ""} placeholder="e.g. Wheel loader" /></label>
      <label><span>Application</span><select name="application" defaultValue={initial.application || ""}><option value="">Select application</option><option>Construction</option><option>Mining & Quarry</option><option>Earthmoving</option><option>Infrastructure</option><option>Industrial</option><option>Other</option></select></label>
      <label><span>Quantity</span><input name="quantity" type="number" min="1" defaultValue={initial.quantity || ""} placeholder="e.g. 4" /></label>
      <label><span>Your City / District</span><input name="location" defaultValue={initial.location || ""} placeholder="e.g. Gorakhpur" /></label>
      <label className="form-full"><span>Additional message (optional)</span><textarea name="message" rows={3} placeholder="e.g. Need 4 tyres urgently / Please suggest a suitable tyre" /></label>
    </div>
    <p className="form-note">Share the tyre details you know. If you are unsure about the exact BKT model, our team can help identify the requirement.</p>
    <p className="form-note">You can provide either the tyre size, BKT model, vehicle/equipment or application. If you are unsure, send the information you have.</p>
    <button className="mks-button mks-button-primary quote-submit" type="submit">Continue to WhatsApp ↗</button>
    {submitted && <p className="form-success">WhatsApp enquiry opened. If it did not open, call <a href={`tel:+91${phone}`}>+91 {phone}</a>.</p>}
    <p className="form-privacy">We use the details you enter only to understand your tyre enquiry and respond to you.</p>
  </form>;
}
