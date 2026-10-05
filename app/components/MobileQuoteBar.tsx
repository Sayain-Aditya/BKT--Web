'use client';

import Link from "next/link";

import { useEffect, useState } from 'react';

export default function MobileQuoteBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return visible ? (
    <div className="mobile-quote-bar" aria-label="Request a BKT OTR tyre quotation">
      <span><b>Need a BKT OTR tyre?</b><small>Get availability & quotation</small></span>
      <Link href="/request-quote">Request Quote ↗</Link>
    </div>
  ) : null;
}
