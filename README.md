# ZECO Construction — Website

Marketing website for **ZECO Construction**, a building, maintenance, and civil works company serving Gauteng, South Africa (Pretoria, Johannesburg, Midrand, and surrounds).

- **Live URL:** https://www.zecoconstruction.co.za
- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS
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
```

---

## Brand Reference

| | |
|---|---|
| **Company name** | ZECO Construction |
| **Phone** | +27 74 850 9727 |
| **WhatsApp** | wa.me/27748509727 |
| **Email** | info@zecoconstruction.co.za |
| **Location** | Gauteng, South Africa (Johannesburg locality — no public street address) |
| **Primary color (theme/mask-icon)** | `#f26a1b` |
| **Logo mark** | Dark rounded-square badge with orange "Z" — see `/public/logo.png`, `/public/logo-icon.png` |
| **Certifications** | NHBRC Registered, CIDB Graded, SABS Compliant, ECSA Certified |
| **Years in operation** | 10+ |

Keep any new copy consistent with this reference — in particular, don't reintroduce the old Goshen Projects Solutions branding, the old phone number (`+27 61 382 1561` / `061 530 7314`), or a specific street address.

---

## Project Structure

```
app/
├── layout.tsx                          # Root layout, metadata, JSON-LD, WhatsApp button
├── page.tsx                            # Homepage
├── about/                              # About page
├── contact/                            # Contact page
├── services/                           # Services overview (/services)
├── service-areas/                      # Service area hub + per-suburb pages
├── privacy-policy/
│
├── building-construction-renovations/  # Service page
├── property-maintenance/               # Service page
├── plumbing-services/                  # Service page
├── electrical-services/                # Service page
├── roofing-roof-leak-repairs/          # Service page
├── waterproofing-services/             # Service page
├── carpentry-services/                 # Service page
├── kitchen-bathroom-cupboards/         # Service page
├── painting-tiling-finishing/          # Service page
├── paving-driveways-surfacing/         # Service page
└── concrete-works-bricklaying/         # Service page (see TODO below)

components/
├── header.tsx                          # Nav, services dropdown, contact bar
├── footer.tsx                          # Footer nav, service list, contact info
├── whatsapp-button.tsx                 # Floating WhatsApp CTA (rendered in layout.tsx)
├── service-page-template.tsx           # Shared wrapper for all /service pages
├── service-area-template.tsx           # Shared wrapper for all /service-areas/[suburb] pages
└── home/
    ├── hero-section.tsx
    ├── services-overview.tsx
    └── cta-section.tsx

public/
├── favicon.ico, favicon-16x16.png, favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png, android-chrome-512x512.png
├── safari-pinned-tab.svg
├── site.webmanifest
├── logo.png, logo-icon.png, logo-square.png
```

---

## Current Services (10)

The active service list, consistent across the header nav, homepage grid, and `/services` page:

1. Building Construction & Renovations
2. Property Maintenance
3. Plumbing Services
4. Electrical Services
5. Roofing & Roof Leak Repairs
6. Waterproofing Services
7. Carpentry Services
8. Kitchen & Bathroom Cupboards
9. Painting, Tiling & Finishing
10. Paving, Driveways & Surfacing

**Removed services** (folders deleted, all references cleaned from nav/footer/homepage): Air Conditioning Services, CCTV/Alarm/Surveillance, Fencing/Gates/Access Control, Road Construction & Civil Works, Solar & Energy Solutions.

---

## URL Structure

- Service pages: `/service-name` (e.g. `/plumbing-services`)
- Service areas: `/service-areas/[suburb]` (e.g. `/service-areas/sandton`)

---

## Known TODOs

- [ ] **`concrete-works-bricklaying` page** — still has old Goshen Projects Solutions branding, address, and phone number. Every other service page has been rebranded; this one hasn't been sent through yet.
- [ ] **`og-image.jpg`** — referenced in `layout.tsx` Open Graph tags but not yet created. Needs an actual project photo with the logo overlaid (1200×630).
- [ ] **Unconfirmed stats** — "500+ happy clients" and "50+ professionals" are carried over placeholders from the original template and haven't been confirmed as accurate for ZECO. Search the codebase for `// TODO: confirm` comments.
- [ ] **Google/Bing/Yandex verification codes** — placeholder values (`your-google-verification-code`) still in `layout.tsx` metadata.
- [ ] **`services/page.tsx` service count** — currently shows 11 services (includes Concrete Works & Bricklaying, which the header's 10-service dropdown doesn't). Decide on one master list of 10 or 11 and align both.
- [ ] **`safari-pinned-tab.svg`** — a simplified placeholder "Z" silhouette, not a true vector trace of the real logo. Fine for now, but replace with a properly traced version if you want pixel-perfect accuracy.

---

## Notes for Future Edits

- The **`ServicePageTemplate`** and **`ServiceAreaTemplate`** components in `components/` are shared wrappers — editing them affects *every* service page or every service-area page at once. Check there first before assuming a bug is page-specific.
- When adding or removing a service, update it in **all** of these places: `components/header.tsx`, `components/footer.tsx`, `components/home/services-overview.tsx`, `app/services/page.tsx`, and any `relatedServices` arrays on individual service pages that might link to it.
- Bulk find-and-replace across the repo (e.g. for a phone number change) works well from Git Bash:
  ```bash
  find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" \
    -exec sed -i 's/OLD_VALUE/NEW_VALUE/g' {} +
  ```
  Always `grep -r` first to preview matches before running the replace.
