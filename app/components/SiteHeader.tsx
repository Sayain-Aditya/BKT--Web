import Image from "next/image";
import Link from "next/link";
import { phone } from "../../lib/data";

type SiteHeaderProps = {
  active?: "home" | "range" | "applications" | "locations" | "quote";
  showTopbar?: boolean;
};

export default function SiteHeader({ active, showTopbar = true }: SiteHeaderProps) {
  return (
    <>
      {showTopbar && (
        <div className="topbar">
          <div className="mks-container topbar-inner">
            <span>Serving construction, mining &amp; heavy-equipment customers across Uttar Pradesh</span>
            <a href={`tel:+91${phone}`}>Call +91 91947 02099</a>
          </div>
        </div>
      )}
      <header className="site-header">
        <div className="mks-container nav">
          <Link className="brand" href="/" aria-label="MKS Concord LLP BKT OTR Tyres">
            <div className="brand-logos">
              <Image src="/images/mks-group-logo.jpeg" alt="MKS Group" width={118} height={44} className="mks-logo" priority />
              <Image src="/images/bkt-logo.png" alt="BKT Tyres" width={96} height={38} className="bkt-logo" style={{ width: "auto" }} priority />
            </div>
            <span className="brand-divider" />
            <span className="brand-text">
              <strong>M/S Madhwendra Kumar Singh</strong>
              <small>Authorized BKT OTR Distributor</small>
              <small>Operated by MKS Concord LLP</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link className={active === "home" ? "active-nav" : ""} href="/">Home</Link>
            <Link href="/#about">MKS Concord LLP</Link>
            <Link className={active === "range" ? "active-nav" : ""} href="/bkt-otr-tyres">OTR Tyre Range</Link>
            <Link className={active === "applications" ? "active-nav" : ""} href="/#applications">Applications</Link>
            <Link href="/#faq">FAQ</Link>
            <Link className={active === "locations" ? "active-nav" : ""} href="/locations">Locations</Link>
          </nav>

          <Link className="nav-cta" href="/request-quote">Request a Quote</Link>
          <details className="mobile-nav-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div className="mobile-nav-panel">
              <Link href="/">Home</Link>
              <Link href="/#about">MKS Concord LLP</Link>
              <Link href="/bkt-otr-tyres">BKT OTR Tyre Range</Link>
              <Link href="/#applications">Applications</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className={active === "locations" ? "active-nav" : ""} href="/locations">Locations</Link>
              <Link className="mobile-nav-quote" href="/request-quote">Request a Quote →</Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
