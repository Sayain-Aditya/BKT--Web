"use client";

import { useEffect, useState } from "react";

export default function ScrollAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section, .section-heading, .trust-strip-inner, .tyre-finder, .why-mks-grid article, .solution-card, .application-card, .product-feature, .mks-card, .catalog-card, .application-product-card, .application-related-grid > a, .quote-form, .quote-selected-summary"
      )
    );

    targets.forEach((el, index) => {
      el.classList.add("scroll-reveal");
      el.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
    });

    root.classList.add("motion-enhanced");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-enhanced");
    };
  }, [mounted]);

  return null;
}
