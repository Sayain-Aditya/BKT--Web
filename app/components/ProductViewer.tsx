"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProductViewerProps = {
  image: string;
  name: string;
  size: string;
  application: string;
};

export default function ProductViewer({ image, name, size, application }: ProductViewerProps) {
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const playRotation = () => {
    setActive(false);
    requestAnimationFrame(() => {
      setAngle((current) => current + 360);
      setActive(true);
    });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActive(false), 900);
  };

  return (
    <div className="viewer-shell product-viewer-shell">
      <div className="viewer-badge-row">
        <span className="viewer-badge">BKT OTR TYRE</span>
        <span className="viewer-interaction-hint">HOVER TO EXPLORE</span>
      </div>

      <div className="viewer-stage product-hero-stage product-viewer-stage">
        <div className="product-viewer-grid" aria-hidden="true" />
        <div className="product-viewer-ring product-viewer-ring-a" aria-hidden="true" />
        <div className="product-viewer-ring product-viewer-ring-b" aria-hidden="true" />
        <div className={`product-viewer-image ${active ? "is-rotating" : ""}`} style={{ transform: `rotate(${angle}deg)` }}>
          <Image src={image} alt={`${name} BKT OTR tyre, size ${size}`} width={900} height={900} priority sizes="(max-width: 900px) 88vw, 520px" />
        </div>
        <div className="product-viewer-spec-chip">
          <span>APPLICATION</span>
          <strong>{application}</strong>
        </div>
        <div className="product-viewer-size-chip">
          <small>SIZE</small>
          <strong>{size}</strong>
        </div>
      </div>

      <div className="viewer-controls product-viewer-controls">
        <button type="button" onClick={playRotation} className="viewer-action-button">
          <span>↻</span> Rotate tyre
        </button>
        <span>Product image</span>
        <span>BKT OTR range</span>
        <span>Quotation on enquiry</span>
      </div>
    </div>
  );
}
