# Blackout Busters — Website

Marketing website for **Blackout Busters**, an electrical installation, repair, and solar/backup power solutions company serving Gauteng, South Africa (Johannesburg, Pretoria, Kempton Park, and surrounds).

- **Live URL:** https://www.blackoutbusterssa.co.za/
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Package manager:** pnpm
- **Deployment:** Vercel

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

```bash
pnpm build   # production build
pnpm start   # run the production build locally
pnpm lint    # run eslint
```

---

## Brand Reference

| | |
|---|---|
| **Company name** | Blackout Busters |
| **Phone** | +27 83 617 1112 |
| **WhatsApp** | wa.me/27836171112 |
| **Email** | [info@blackoutbusterssa.co.za)|
| **Address** | Kempton Park |
| **Primary color** | `#0B2545` (deep charcoal navy) |
| **Accent color** | `#FFB800` (electric amber) |
| **Alert / CTA color** | `#D62828` (warm red — emergency callout buttons) |
| **Logo mark** | TBD — see `/public/logo-icon.png`, `/public/logo-square.png` once added |
| **Positioning** | Reliable electrical and solar solutions — installations, repairs, backup power, and compliance, done right the first time |
| **Years in operation** | Not confirmed, do not state a specific figure until provided |

Keep any new copy consistent with this reference. This site replaces the previous Jero Fire Solutions build — fire-safety content, copy, and branding should not carry over.

---

## Services (14)

1. Electrical Installation
2. Electrical Repairs
3. Solar Installation
4. Maintenance
5. Backup Power Systems (Inverter & Battery Installation)
6. Generator Installation & Servicing
7. DB Board Upgrades / Compliance Certificates (COC)
8. Load Shedding Solutions & Consultations
9. Geyser Installation & Repairs
10. CCTV & Security System Installation
11. Fault Finding / Electrical Inspections
12. Prepaid Meter Installation
13. Emergency / 24-Hour Callout Service
14. Commercial & Industrial Electrical Work

If Blackout Busters does not actually offer all fourteen (or offers more), confirm and edit this list now rather than after every page and nav reference exists.

---

## Project Structure

```
app/
├── layout.tsx                                   # Root layout, metadata, JSON-LD, WhatsApp button
├── page.tsx                                     # Homepage
├── about/                                       # About page
├── contact/                                     # Contact page
├── services/                                    # Services overview, /services
├── service-areas/                               # Service area hub + per-suburb pages
├── privacy-policy/
├── terms-of-service/
│
├── electrical-installation/                     # Service page
├── electrical-repairs/                          # Service page
├── solar-installation/                          # Service page
├── maintenance/                                 # Service page
├── backup-power-inverter-battery/               # Service page
├── generator-installation-servicing/            # Service page
├── db-board-upgrades-compliance-certificates/   # Service page (not yet built)
├── load-shedding-solutions/                     # Service page (not yet built)
├── geyser-installation-repairs/                 # Service page (not yet built)
├── cctv-security-installation/                  # Service page (not yet built)
├── fault-finding-inspections/                   # Service page (not yet built)
├── prepaid-meter-installation/                  # Service page (not yet built)
├── emergency-247-callout/                       # Service page (not yet built)
└── commercial-industrial-electrical/            # Service page (not yet built)

components/
├── header.tsx                                   # Nav, services dropdown, contact bar
├── footer.tsx                                   # Footer nav, service list, contact info
├── whatsapp-button.tsx                          # Floating WhatsApp CTA
├── breadcrumbs.tsx                              # Shared breadcrumb trail, supports variant="onDark"
├── contact-form.tsx                             # Contact / quote request form
├── service-page-template.tsx                    # Shared wrapper for all service pages
├── service-area-template.tsx                    # Shared wrapper for all service area pages
└── icons/
    └── whatsapp-icon.tsx

public/
├── favicon.ico, favicon-16x16.png, favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png, android-chrome-512x512.png
├── safari-pinned-tab.svg
├── site.webmanifest
├── logo-icon.png, logo-square.png, logo-icon.svg, logo-wordmark.svg
├── og-image.png
├── robots.txt, llms.txt
└── service photography (electrical, solar, backup power, generators, geysers, CCTV, etc. — mostly placeholder references pending real photos)
```

---

## Service Areas

Not yet confirmed. Likely candidates based on the previous build: Johannesburg, Pretoria, Kempton Park, and Midrand as featured areas, with Sandton, Centurion, Fourways, Randburg, Bedfordview, and Rosebank as additional coverage — but confirm this list before building `/service-areas` pages, since it may not match Blackout Busters' actual footprint.

---

## URL Structure

- Service pages: `/service-name` (e.g. `/electrical-installation`)
- Service areas: `/service-areas/[suburb]`

---

## SEO Files

- **`app/sitemap.ts`** — must include the homepage, core pages, all 14 service pages, and every service area page once confirmed.
- **`public/robots.txt`**
- **`public/llms.txt`** — should summarize the business, real service list, and real service areas once confirmed.
- **`app/layout.tsx`** — holds global metadata, Open Graph/Twitter tags, and Organization + LocalBusiness JSON-LD. Update all Jero-specific values (name, phone, email, address, colors) here first.

---

## Known TODOs

- [ ] Confirm live domain / URL
- [ ] Confirm business email and physical address
- [ ] Confirm the full service list (14 assumed from client conversation — verify before launch)
- [ ] Confirm the service area list (suburbs/regions actually covered)
- [ ] Replace all remaining fire-safety pages, copy, and imagery with Blackout Busters content
- [ ] **No fabricated stats** — do not add "X years in business" or "hundreds of clients served" style claims anywhere without a real, confirmed number
- [ ] **Real photography** — replace every placeholder image reference across About, Services, and service pages
- [ ] Update logo assets and favicon set for the new brand
- [ ] Update JSON-LD (Organization + LocalBusiness schema) once domain/address are confirmed
- [ ] Update search engine verification codes in `layout.tsx`

---

## Notes for Future Edits

- The **`ServicePageTemplate`** component in `components/` is a shared wrapper. Editing it affects *every* service page at once, so check there first before assuming a bug is page specific.
- When adding or removing a service, it needs to be updated in **all** of these places: `components/header.tsx`, `components/footer.tsx`, `app/services/page.tsx`, `app/sitemap.ts`, `public/llms.txt`, and any `relatedServices` arrays on individual service pages that link to it.
- Contact details (phone `+27 83 617 1112`, WhatsApp `wa.me/27836171112`, info@blackoutbusterssa.co.za) need to be updated together across `app/about/page.tsx`, `app/contact/page.tsx`, `app/services/page.tsx`, `components/service-page-template.tsx`, `header.tsx`, `footer.tsx`, and `layout.tsx`.
- Bulk find and replace across the repo works well from Git Bash:
  ```bash
  find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" \
    -exec sed -i 's/OLD_VALUE/NEW_VALUE/g' {} +
  ```
  Always `grep -r` first to preview matches before running the replace — this is how you'll swap every remaining "Jero Fire Solutions" reference for "Blackout Busters," and every old contact detail/color for the new ones.
