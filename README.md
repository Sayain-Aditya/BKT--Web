# MKS Concord LLP — BKT OTR Tyres Website

V19 mobile, UI and performance polish.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the final production domain before deployment so sitemap and structured-data URLs use the real domain.

## V19 changes

- Improved mobile header sizing and removed mobile navigation overflow risk.
- Made major buttons/touch targets at least 44px high.
- Improved catalogue filter responsiveness.
- Improved mobile product/quote layouts.
- Added reduced-motion support.
- Added intrinsic dimensions to the homepage hero tyre image to reduce layout shift.
- Kept the vehicle/equipment filter removed; vehicle/equipment remains searchable and visible on product cards.
