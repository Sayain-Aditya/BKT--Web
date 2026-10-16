"use client";

import Image from "next/image";

type ProductViewerProps = {
  image: string;
  name: string;
  size: string;
  application: string;
};

export default function ProductViewer({ image, name, size, application }: ProductViewerProps) {

  return (
    <div className="viewer-shell product-viewer-shell">
      <div className="viewer-badge-row">
        <span className="viewer-badge">BKT OTR TYRE</span>
      </div>

      <div className="viewer-stage product-hero-stage product-viewer-stage">
        <div className="product-viewer-grid" aria-hidden="true" />
        <div className="product-viewer-ring product-viewer-ring-a" aria-hidden="true" />
        <div className="product-viewer-ring product-viewer-ring-b" aria-hidden="true" />
        <div className="product-viewer-image">
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
        <span>Product image</span>
        <span>BKT OTR range</span>
        <span>Quotation on enquiry</span>
      </div>
    </div>
  );
}
