# Jero Fire Solutions — Website

Marketing website for **Jero Fire Solutions**, a fire detection, suppression, and safety compliance company serving Gauteng, South Africa (Johannesburg, Pretoria, Kempton Park, and surrounds).

- **Live URL:** https://www.jerofiresolutions.com
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
| **Company name** | Jero Fire Solutions |
| **Phone** | +27 78 133 6684 |
| **WhatsApp** | wa.me/27781336684 |
| **Email** | 014@jerofiresolutions.co.za (also mabena@jerofiresolutions.co.za) |
| **Address** | 18 Profusa Street, Aston Manor, Kempton Park, Johannesburg, Gauteng, South Africa |
| **Primary color** | `#5C0000` (deep red/maroon) |
| **Accent color** | `#D4A017` (gold) |
| **Logo mark** | See `/public/logo-icon.png`, `/public/logo-square.png`, `/public/logo-icon.svg` (vector source) |
| **Positioning** | Certified technicians, honest compliance documentation, same day quotes and 24 hour emergency callouts |
| **Years in operation** | Not confirmed, do not state a specific figure until provided |

Keep any new copy consistent with this reference. This site replaces Jero's previous Wix site, there is no prior branding to avoid reintroducing. Written copy on the site intentionally avoids the "-" character in body text (headings, paragraphs, button labels), though it is fine in code, URLs, file paths, and this README.

---

## Project Structure

```
app/
├── layout.tsx                                # Root layout, metadata, JSON-LD, WhatsApp button (not yet built)
├── page.tsx                                   # Homepage (not yet built)
├── about/                                      # About page (done)
├── contact/                                    # Contact page (done)
├── services/                                   # Services overview, /services (done)
├── service-areas/                              # Service area hub + per-suburb pages (not yet built)
├── privacy-policy/                             # (not yet built)
├── terms-of-service/                           # (not yet built)
│
├── fire-detection-alarm-systems/               # Service page (done)
├── fire-extinguisher-supply-servicing/         # Service page (not yet built)
├── sprinkler-suppression-systems/              # Service page (not yet built)
├── fire-safety-training-compliance/            # Service page (done)
├── fire-equipment-maintenance-contracts/        # Service page (done)
└── fire-hydrant-installation-testing/          # Service page (done)

components/
├── header.tsx                                  # Nav, services dropdown, contact bar (not yet built)
├── footer.tsx                                  # Footer nav, service list, contact info (not yet built)
├── whatsapp-button.tsx                         # Floating WhatsApp CTA (not yet built)
├── breadcrumbs.tsx                             # Shared breadcrumb trail, supports variant="onDark" (done)
├── contact-form.tsx                            # Contact / quote request form (assumed present, referenced by contact page)
├── service-page-template.tsx                   # Shared wrapper for all service pages (done)
├── service-area-template.tsx                   # Shared wrapper for all service area pages (not yet built)
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
├── robots.txt, llms.txt (not yet built)
└── service photography (fire detection, extinguisher, sprinkler, training, hydrant, etc., mostly placeholder references pending real photos)
```

---

## Current Services (6, assumed list, confirm or edit with the client)

1. Fire Detection & Alarm Systems
2. Fire Extinguisher Supply & Servicing
3. Sprinkler & Suppression Systems
4. Fire Safety Training & Compliance
5. Fire Equipment Maintenance Contracts
6. Fire Hydrant Installation & Testing

If Jero does not actually offer all six, trim the list now rather than after every page and nav reference exists.

---

## Service Areas

Not yet built. The contact page references Johannesburg, Pretoria, Kempton Park, and Midrand as featured areas, with Sandton, Centurion, Fourways, Randburg, Bedfordview, and Rosebank as additional coverage, but no `/service-areas` hub or per-suburb pages exist yet. Confirm this list before building those pages.

---

## URL Structure

- Service pages: `/service-name` (e.g. `/fire-detection-alarm-systems`)
- Service areas: `/service-areas/[suburb]` (not yet built)

---

## SEO Files

- **`app/sitemap.ts`** — not yet built. Once created, it must include the homepage, core pages, all 6 service pages, and every service area page.
- **`public/robots.txt`** — not yet built.
- **`public/llms.txt`** — not yet built. Should summarize the business, real service list, and real service areas once confirmed.
- **`app/layout.tsx`** — not yet built. Will hold global metadata, Open Graph/Twitter tags, and Organization + LocalBusiness JSON-LD, following the same pattern used on the Cold Fix Services build.

---

## Known TODOs

- [ ] **Confirm the service list** — the six services above are assumed from the original brief, not confirmed by the client.
- [ ] **Confirm the service area list** — suburbs referenced only appear on the contact page so far.
- [ ] **No fabricated stats** — do not add "X years in business" or "hundreds of clients served" style claims anywhere without a real, confirmed number. The service page template and about page were deliberately written to avoid this.
- [ ] **Real photography** — every image reference across the About, Services, and service pages is a placeholder filename with a comment describing what real photo should replace it.
- [ ] **Region confirmation** — the original brief marked "Gauteng, South Africa" as assumed, confirm this is correct.
- [ ] **`layout.tsx`, `header.tsx`, `footer.tsx`, `whatsapp-button.tsx`, `page.tsx`** — foundation files not yet built, needed before the site can run.
- [ ] **Search verification codes** — placeholder values will need real ones once `layout.tsx` exists.

---

## Notes for Future Edits

- The **`ServicePageTemplate`** component in `components/` is a shared wrapper. Editing it affects *every* service page at once, so check there first before assuming a bug is page specific.
- When adding or removing a service, it needs to be updated in **all** of these places once they exist: `components/header.tsx`, `components/footer.tsx`, `app/services/page.tsx`, `app/sitemap.ts`, `public/llms.txt`, and any `relatedServices` arrays on individual service pages that link to it. Right now that means `app/services/page.tsx` and the `relatedServices` array on each of the four built service pages.
- Contact details (phone `+27 78 133 6684`, WhatsApp `wa.me/27781336684`, email `014@jerofiresolutions.co.za`) currently appear in `app/about/page.tsx`, `app/contact/page.tsx`, `app/services/page.tsx`, and `components/service-page-template.tsx`. Change all of them together once the header, footer, and layout files exist too.
- Bulk find and replace across the repo works well from Git Bash:
  ```bash
  find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" \
    -exec sed -i 's/OLD_VALUE/NEW_VALUE/g' {} +
  ```
  Always `grep -r` first to preview matches before running the replace.
