"use client";

import { useEffect, useState } from "react";

export default function TyreMotion() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-wrap" role="status" aria-label="Loading">
      <div className="loader-grid" aria-hidden="true" />

      <div className="loader-center" aria-hidden="true">
        <div className="loader-glow" />
        <div className="loader-tyre">
          <div className="loader-tyre-inner" />
          <div className="loader-tyre-hub"><em>BKT</em></div>
        </div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
      </div>

      <div className="loader-foot" aria-hidden="true">
        <p className="loader-label">M/s Madhwendra <em>Authorized Distributor BKT</em></p>
        <p className="loader-sub">OTR TYRES • CONSTRUCTION • MINING • EARTHMOVING</p>
      </div>
    </div>
  );
}
