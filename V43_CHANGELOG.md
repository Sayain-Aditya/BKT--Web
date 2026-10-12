# V43 — Product Page UI & Tyre Hover Polish

## Changes
- Improved product-page breadcrumb spacing, separators, wrapping, and current-page semantics.
- Rebalanced the product viewer/details layout and improved responsive spacing at tablet/mobile breakpoints.
- Refined viewer sizing, spec-row spacing, quote action spacing, and text wrapping to reduce clipping/overflow.
- Removed the automatic full rotation triggered just by hovering over the viewer. The tyre stays centered; hover applies a restrained image-only scale/lighting effect while decorative rings remain stationary.
- Kept the explicit “Rotate tyre” control, which rotates the tyre around its own center.
- Preserved reduced-motion handling and existing product data, quote/WhatsApp flow, SEO, and other routes.

## Validation
- Source changes were inspected after editing.
- ZIP excludes `.next` build cache and `node_modules` so it is portable across environments.
- A full Next.js production build was not run in this environment; run `npm install` and `npm run build` locally to verify against the installed dependencies.
