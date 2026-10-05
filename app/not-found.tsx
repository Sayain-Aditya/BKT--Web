import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <main>
      <SiteHeader showTopbar={false} />
      <section className="section not-found-page">
        <div className="container not-found-content">
          <p className="section-kicker">404 / PAGE NOT FOUND</p>
          <h1>That tyre page could not be found.</h1>
          <p>
            The page may have moved or the product reference may no longer be available.
            Browse the current BKT OTR range or send MKS Concord LLP your requirement.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/bkt-otr-tyres">Explore BKT OTR Tyres →</Link>
            <Link className="button button-ghost" href="/request-quote">Request a Quote →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
