"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { bktProducts, type BktProduct } from "../../lib/data";

const whatsappNumber = "9194702099";
const applications = ["Construction", "Mining & Quarry", "Earthmoving", "Infrastructure", "Industrial"];

function matchesApplication(product: BktProduct, selected: string) {
  if (selected === "Mining & Quarry") {
    return /mining|quarry|surface mining|heavy otr/i.test(`${product.application} ${product.machinery} ${product.name}`);
  }
  if (selected === "Earthmoving") {
    return /earthmoving|loading|wheel loader|loader|dozer|grader/i.test(`${product.application} ${product.machinery}`);
  }
  if (selected === "Industrial") {
    return /industrial/i.test(`${product.application} ${product.machinery} ${product.name}`);
  }
  if (selected === "Infrastructure") {
    return /grader|construction/i.test(`${product.application} ${product.machinery}`);
  }
  return /construction/i.test(`${product.application} ${product.machinery}`);
}

function quoteUrl(product: BktProduct) {
  const text = `Hello MKS Concord LLP, I am enquiring about the BKT OTR tyre ${product.name}.\nTyre size: ${product.size}\nVehicle/equipment: ${product.machinery}\nApplication: ${product.application}\nPlease share availability and quotation.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function TyreFinder() {
  const [application, setApplication] = useState("");
  const [equipment, setEquipment] = useState("");
  const [size, setSize] = useState("");

  const applicationProducts = useMemo(
    () => (application ? bktProducts.filter((product) => matchesApplication(product, application)) : []),
    [application]
  );

  const equipmentOptions = useMemo(
    () => Array.from(new Set(applicationProducts.map((product) => product.machinery))).sort(),
    [applicationProducts]
  );

  const equipmentProducts = useMemo(
    () => (equipment ? applicationProducts.filter((product) => product.machinery === equipment) : applicationProducts),
    [applicationProducts, equipment]
  );

  const sizeOptions = useMemo(
    () => Array.from(new Set(equipmentProducts.map((product) => product.size))).sort(),
    [equipmentProducts]
  );

  const matches = useMemo(
    () => (size ? equipmentProducts.filter((product) => product.size === size) : equipmentProducts.slice(0, 3)),
    [equipmentProducts, size]
  );

  const reset = () => {
    setApplication("");
    setEquipment("");
    setSize("");
  };

  const chooseApplication = (value: string) => {
    setApplication(value);
    setEquipment("");
    setSize("");
  };

  const chooseEquipment = (value: string) => {
    setEquipment(value);
    setSize("");
  };

  return (
    <section className="tyre-finder" id="tyre-finder">
      <div className="mks-container">
        <div className="tyre-finder-header">
          <div>
            <p className="mks-section-kicker">04 / FIND YOUR BKT OTR TYRE</p>
            <h2>Tell us how the tyre works. We&apos;ll show you where to start.</h2>
          </div>
          <p>Choose the working application, equipment and tyre size from the current online range. If your requirement is not listed, contact MKS for assistance.</p>
        </div>

        <div className="tyre-finder-shell">
          <div className="tyre-finder-steps">
            <div className={`tyre-finder-step ${application ? "is-complete" : "is-active"}`}>
              <div className="finder-step-number">01</div>
              <div>
                <span>APPLICATION</span>
                <strong>{application || "Where will the tyre work?"}</strong>
              </div>
            </div>
            <div className={`tyre-finder-step ${equipment ? "is-complete" : application ? "is-active" : ""}`}>
              <div className="finder-step-number">02</div>
              <div>
                <span>VEHICLE / EQUIPMENT</span>
                <strong>{equipment || "What machine is it for?"}</strong>
              </div>
            </div>
            <div className={`tyre-finder-step ${size ? "is-complete" : equipment ? "is-active" : ""}`}>
              <div className="finder-step-number">03</div>
              <div>
                <span>TYRE SIZE</span>
                <strong>{size || "Which size do you need?"}</strong>
              </div>
            </div>
          </div>

          <div className="finder-selector-grid">
            <div className="finder-selector finder-selector-wide">
              <label>01 / Application</label>
              <div className="finder-choice-grid">
                {applications.map((item) => (
                  <button type="button" key={item} className={application === item ? "is-selected" : ""} onClick={() => chooseApplication(item)}>
                    <span>{item}</span><b>↗</b>
                  </button>
                ))}
              </div>
            </div>

            <div className={`finder-selector ${application ? "" : "is-disabled"}`}>
              <label>02 / Vehicle / Equipment</label>
              <select value={equipment} onChange={(event) => chooseEquipment(event.target.value)} disabled={!application}>
                <option value="">Select equipment</option>
                {equipmentOptions.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              {!application && <small>Choose an application first.</small>}
            </div>

            <div className={`finder-selector ${equipment ? "" : "is-disabled"}`}>
              <label>03 / Tyre Size</label>
              <select value={size} onChange={(event) => setSize(event.target.value)} disabled={!equipment}>
                <option value="">Any size</option>
                {sizeOptions.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
              {!equipment && <small>Select equipment to see available sizes.</small>}
            </div>
          </div>

          <div className="finder-results-head">
            <div>
              <span>MATCHING BKT OTR OPTIONS</span>
              <strong>{application ? `${matches.length} option${matches.length === 1 ? "" : "s"}` : "Start with an application"}</strong>
            </div>
            {(application || equipment || size) && <button type="button" onClick={reset}>Reset finder ×</button>}
          </div>

          {application && matches.length > 0 && (
            <div className="finder-results-grid">
              {matches.map((product) => (
                <article className="finder-result-card" key={product.id}>
                  <div className="finder-result-image">
                    <span>BKT OTR</span>
                    <Image src={product.image} alt={`${product.name} BKT OTR tyre`} width={600} height={600} loading="lazy" sizes="(max-width: 700px) 90vw, 300px" />
                  </div>
                  <div className="finder-result-copy">
                    <p>{product.type}</p>
                    <h3>{product.name}</h3>
                    <div><span>SIZE</span><strong>{product.size}</strong></div>
                    <small>{product.application} · {product.machinery}</small>
                    <div className="finder-result-actions">
                      <Link href={`/bkt-otr-tyres/${product.id}`}>View tyre →</Link>
                      <a href={quoteUrl(product)} target="_blank" rel="noreferrer">Ask MKS ↗</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {application && matches.length === 0 && (
            <div className="finder-no-match">
              <strong>No exact option is currently shown for this selection.</strong>
              <span>Send your machine, tyre size or application to MKS and the team can help identify the requirement.</span>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello MKS Concord LLP, I need help finding a BKT OTR tyre. Please help me with the suitable option.")}`} target="_blank" rel="noreferrer">Ask MKS on WhatsApp ↗</a>
            </div>
          )}

          {!application && (
            <div className="finder-empty-state">
              <div className="finder-tyre-mark">BKT</div>
              <div><strong>Start with the working environment.</strong><span>The finder uses the tyre range already published on this website. It does not replace MKS&apos; application guidance.</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
