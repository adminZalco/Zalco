# Zalco Technologies — Website Audit & Fix Plan

Prepared: 23 Nov 2026 · Repo: `adminZalco/Zalco` (React 18 + Vite, deployed to GitHub Pages via `npm run deploy` → `gh-pages` branch) · Status: **in progress, see the Progress log below**

## Progress log

| Date | Item | Status | What changed |
|---|---|---|---|
| 23 Nov 2026 | P4 Fake testimonials | **Done (local)** | Deleted `TestimonialsSection.jsx` and its 6 invented testimonials. Added [WorkSection.jsx](src/components/WorkSection.jsx) ("Selected work. Built for real businesses.") with 4 real projects: **Triply** (Flix Logix), office cab platform · **Barosa**, authentic watch & antiques reseller · **SK Engineers**, construction management app (React Native, web, Spring Boot, PostgreSQL) · **Ink & Clink**, hamper business management + GST invoicing (Next.js, Supabase). A real-testimonials block is built in but **hidden until real quotes are added** to the `testimonials` array. |
| 23 Nov 2026 | P1 "Some text" | **Done (local)** | Removed as part of the new pricing section |
| 23 Nov 2026 | P2 Pricing too high | **Done (local)** | Replaced the single $5,000/month card with 3 tiers in [PricingSection.jsx](src/components/PricingSection.jsx): **Starter $999/mo (₹79,999 in India)** · **Growth $2,499/mo (₹1,99,999)**, "Most popular" · **Custom: "Let's talk"** for bigger and fixed-scope projects. Added a "Book a free 15-minute call" link under the tiers. |
| 23 Nov 2026 | P3 "slack" | **Done (local)** | Now "Dedicated Slack channel" |

| 23 Nov 2026 | L1 Direct URLs 404 | **Done** | `vite.config.js` now writes `dist/about/index.html`, `dist/services/index.html` and `dist/404.html` on every build |
| 23 Nov 2026 | L2/L3 Email & phone links | **Done** | Footer links now go to `mailto:admin@zalco.io` (the address the site already displays) and `tel:+918417842117` |
| 23 Nov 2026 | L4/L5 Social links | **Done** | LinkedIn icon and JSON-LD point to `linkedin.com/company/zalco-technologies`; Twitter icons removed (no account known) |
| 23 Nov 2026 | L6/L7 Logo & preview image | **Done** | Added `public/logo.png` (512 px) and `public/og-image.jpg` (1200×630); meta tags point to `https://www.zalco.io/...` |
| 23 Nov 2026 | L8 robots & sitemap | **Done** | `public/robots.txt`, `public/sitemap.xml` |
| 23 Nov 2026 | L9 Scroll position | **Done** | Changing page scrolls to the top; `/services#…` links still jump to their section |
| 23 Nov 2026 | L10 Per-page SEO | **Done** | Titles, descriptions and canonical URLs per page in `src/pageMeta.js` (used at build time and during navigation) |
| 23 Nov 2026 | Legal footer (Sec. 4.1) | **Done** | Footer shows legal name, CIN and registered office; JSON-LD has legalName, CIN, founding date, address |
| 23 Nov 2026 | P8 Inflated wording | **Done** | Removed "premier" and "elite product task force"; About hero now reads "Your product team for design, build and scale" and states founded in Lucknow in 2022 |
| 23 Nov 2026 | P10 Year | **Done** | © year is now automatic |
| 23 Nov 2026 | About "Get Started" button | **Done** | It pointed to a non-existent `/#contact`; it now opens the cal.com discovery call |
| 23 Nov 2026 | Accessibility 6.7 | **Done** | Header logo is no longer an `<h1>` (one `<h1>` per page) |
| 23 Nov 2026 | H1–H7 Repo hygiene | **Done** | `dist/` and `.DS_Store` untracked and ignored · `test_browser.mjs` deleted · unused `public/assets/process/*.png` (2.9 MB) deleted · unused `three`, `@react-three/*`, `animejs` removed · package renamed `zalco-website` 1.0.0 · README added |

Checked: production build passes. The built site was tested as static files (like GitHub Pages): `/about`, `/services`, `/services#devops-cloud` and `/` all open directly with the correct title and canonical URL, navigation scrolls to the top, and all footer links are correct, with no console errors. New sections were reviewed in light and dark mode at 1440 px and 390 px.

**Not done yet (needs your input or decision):** P5 logo strip · P6 team photos and director titles · P7 FAQ photo · P9 "99.9%" stats · Contact page, Privacy, Terms, Refund pages · real client quotes · UI items 6.1–6.6, 6.8 · off-site items (Google Business Profile, Search Console). ESLint has no config file in the repo, so `npm run lint` does not run. The old single-card pricing CSS is still in `index.css`, unused.

**Still open from this step**
- Send real client quotes (text, name, role, optional photo) to switch the testimonials block on.
- Optional: client logos or screenshots for the 4 project cards.
- Confirm the INR prices (₹79,999 / ₹1,99,999 are rounded, India-friendly numbers, not live conversions) and whether prices include or exclude GST.
- The section order is unchanged (Pricing → Work). Moving Work above Pricing is item 6.6.
- The old single-card pricing CSS (`.pricing-card-subscription`, `.pricing-card-single`, etc.) is now unused and can be removed in the hygiene pass.


This repo is the source of the live site at www.zalco.io (the live bundle `index-mUQ8iRvk.js` matches `dist/` here).

---

## 1. Verified company facts (to put on the site)

From public MCA data as listed on [companydetails.in](https://www.companydetails.in/company/zalco-technologies-private-limited). Zauba Corp and LinkedIn block automated reading, so please confirm these on the MCA portal.

| Field | Value |
|---|---|
| Legal name | ZALCO TECHNOLOGIES PRIVATE LIMITED |
| CIN | U72900UP2022PTC175108 |
| Incorporated | 15 Dec 2022 · ROC Kanpur · Active |
| Registered office | 387/54 Kachha Bagh, Sahadatganj, Near Old Chabutra, Lucknow, UP 226003 |
| Directors | Prateek Kumar Singh (DIN 09825749), Poornanand Verma (DIN 09825750) |
| Email on MCA record | info@zalco.io |
| LinkedIn | https://www.linkedin.com/company/zalco-technologies |

Indian companies must show their **name, CIN, registered office, phone and email** on their website (Companies Act 2013, Sec. 12(3)(c)). The site shows none of the CIN or address today. This is the single biggest legitimacy fix.

---

## 2. Placeholder & dummy content (exact locations)

| # | File:line | Problem | Proposed fix |
|---|---|---|---|
| P1 | ~~PricingSection.jsx:51~~ | ~~Literal "Some text" bullet~~ | **Done**, see Progress log |
| P2 | ~~PricingSection.jsx:41~~ | ~~`$5,000 / month`, USD only~~ | **Done**: Starter $999 / Growth $2,499 / Custom, USD + INR |
| P3 | ~~PricingSection.jsx:50~~ | ~~"Direct slack channel"~~ | **Done** |
| P4 | ~~TestimonialsSection.jsx~~ | ~~6 invented testimonials with stock faces~~ | **Done**: replaced by real projects in [WorkSection.jsx](src/components/WorkSection.jsx); quote block hidden until real quotes arrive |
| P5 | [LogoCloud.jsx:6-11](src/components/LogoCloud.jsx#L6-L11), [:19](src/components/LogoCloud.jsx#L19) | "Trusted by many" + template logos "Luminary", "21 45 Degrees*", "Codecraft_.", "frequencil" (not real clients) | Real client names/logos, or remove the section |
| P6 | [AboutPage.jsx:57-98](src/pages/AboutPage.jsx#L57-L98) | Team uses cartoon `dicebear` avatars; directors are listed only as "Senior Software Engineer" / "Senior Product Designer" | Real photos; label Poornanand Verma and Prateek Kumar Singh as **Co-founder & Director**; add LinkedIn links |
| P7 | [FAQSection.jsx:72](src/components/FAQSection.jsx#L72) and its CTA text | Random stock face (`pravatar img=11`) with "Give me a shout…" (first person, unnamed) | A real founder's photo and name, or "Give us a shout" |
| P8 | [AboutPage.jsx:172](src/pages/AboutPage.jsx#L172), [index.html:11](index.html#L11) | "elite product task force", "premier product studio" | Factual wording: what you do, since 2022, from Lucknow |
| P9 | [ServicesPage.jsx:220-228](src/pages/ServicesPage.jsx#L220-L228) | "99.9%" / "0.01%" metric badges | Keep only if these are real; otherwise label as an illustration or remove |
| P10 | [App.jsx:142](src/App.jsx#L142), [:247](src/App.jsx#L247) | `© 2026` hard-coded | Use the current year automatically |

---

## 3. Broken & wrong links

| # | File:line | Problem | Fix |
|---|---|---|---|
| L1 | Deployment (no `public/404.html`) | **/about and /services return 404** when opened directly, refreshed or shared | Add the standard GitHub Pages SPA fallback (`404.html` redirect), or move hosting to Netlify/Vercel/Cloudflare Pages with rewrites |
| L2 | [App.jsx:237](src/App.jsx#L237) | Shows `admin@zalco.io` but links to `mailto:support@zalco.com` (wrong domain) | `mailto:info@zalco.io` (one email everywhere) |
| L3 | [App.jsx:238](src/App.jsx#L238) | Shows +91 841 784 2117 but links to `tel:+1023722742444` (invalid) | `tel:+918417842117` |
| L4 | [App.jsx:139-140](src/App.jsx#L139-L140), [:240-241](src/App.jsx#L240-L241) | LinkedIn and Twitter icons are `href="#"` | LinkedIn → `linkedin.com/company/zalco-technologies`; remove Twitter unless an account exists |
| L5 | [index.html:57](index.html#L57) | JSON-LD `sameAs` → `linkedin.com/company/zalco` (a different company) | Correct LinkedIn URL |
| L6 | [index.html:55](index.html#L55) | Logo URL `/src/assets/logos/ZalcoLogo.svg` (dev path, 404 in production) | Put the logo in `public/` and reference that |
| L7 | [index.html:21](index.html#L21), [:28](index.html#L28) | `og-image.jpg` does not exist, so shared links show no preview image | Create `public/og-image.jpg` (1200×630) |
| L8 | — | `robots.txt`, `sitemap.xml` missing | Add to `public/` |
| L9 | [App.jsx:148](src/App.jsx#L148) (Routes) | Changing page via the menu does not scroll to the top | Add scroll-to-top on route change |
| L10 | [index.html](index.html) | Same `<title>`/description on every page | Per-page titles and descriptions |

Working: cal.com/zalco/15min and /30min.

---

## 4. Missing trust & legal pieces

1. **Footer company block**: legal name, CIN, registered address, email, phone, LinkedIn.
2. **Contact page** (`/contact`): there isn't one; "Contact" only opens cal.com. Add a form, email, phone, WhatsApp, address, and a Google Map of Lucknow.
3. **Privacy Policy** and **Terms of Service** pages (needed for the DPDP Act 2023, cal.com bookings and any form). Add a **Refund/Cancellation policy** since a paid retainer is advertised.
4. **Real proof**: 2–4 case studies or portfolio items. Replace invented testimonials and logos.
5. **About page**: founding story (incorporated Dec 2022, Lucknow), directors with photos, company facts box.
6. **Consistent contact data**: today there are three emails (admin@, support@ .com, info@ on MCA). Use **info@zalco.io** everywhere.
7. **Off-site**: Google Business Profile for the Lucknow address, Google Search Console, LinkedIn page showing www.zalco.io; check SPF/DKIM/DMARC for zalco.io email.
8. Optional: GSTIN / Udyam (MSME) number in the footer.

---

## 5. Repo & build hygiene

| # | Item | Fix |
|---|---|---|
| H1 | `dist/` is committed to `main` and also deployed to `gh-pages` | Add `dist/` to `.gitignore`; deploy only via `npm run deploy` |
| H2 | `.DS_Store`, `src/.DS_Store` committed | Remove and ignore |
| H3 | `test_browser.mjs` uses `puppeteer`, which isn't in `package.json` | Delete, or add it as a dev dependency |
| H4 | `public/assets/process/*.png`: 584–852 KB each (~2.9 MB total) | Convert to WebP/AVIF, ~100 KB each |
| H5 | `three` + `@react-three/*` + `animejs`: ~290 KB JS bundle | Check whether three.js is still used; remove if not; lazy-load pages |
| H6 | `package.json` name `zalco-new`, version `0.0.0` | Cosmetic: rename to `zalco-website` |
| H7 | No README | Short README: how to run, build and deploy |

---

## 6. UI / UX improvement suggestions

1. **Hero**: "Unfair advantage for your product" is catchy but vague. Add one line saying who you are and where: "Design, development and DevOps for startups · Lucknow, India".
2. **Contact**: add WhatsApp (common for Indian clients) next to "Book a call"; add a `/contact` route in the nav.
3. **Portfolio / Work section** on the home page, before Pricing.
4. **Trust strip** under the hero: real client logos, "Since 2022", real project count.
5. **Pricing**: show the "Fixed Scope Project" and "Retainer" options side by side with "Starting from", plus ₹ and $.
6. **Section order**: Services → Work → Process → Testimonials → Pricing → FAQ (proof before price).
7. **Accessibility**: the header logo is an `<h1>` while the hero also has an `<h1>` ([App.jsx:111](src/App.jsx#L111)). Keep one per page. Check contrast in dark mode and keyboard focus on the FAQ accordion.
8. **Mobile**: test the menu, pricing card and bento footer at 360 px.
9. **Performance**: target Lighthouse 90+ on mobile (images H4, bundle H5).

---

## 7. Phased plan

**Phase 1: Critical fixes (~1 day)**
~~P1~~ (done), P10, L1–L9, and create `public/og-image.jpg`, `robots.txt`, `sitemap.xml`. Redeploy.

**Phase 2: Legitimacy (~2–3 days, needs your inputs from Section 8)**
Footer company block · Contact page · Privacy, Terms, Refund pages · real About/team · replace or remove testimonials and logos (P4–P7) · copy fixes (P8, P9) · valid JSON-LD with address and CIN · per-page SEO (L10).

**Phase 3: Polish (~2 days)**
UI items in Section 6 · image and bundle optimisation · repo hygiene (Section 5) · analytics.

**Phase 4: Verify**
Run a link checker and Lighthouse; test direct URLs and refresh on every route; test link previews on WhatsApp and LinkedIn; test the contact form end to end.

---

## 8. Inputs needed from you

1. ~~Real clients~~ Answered: Triply (Flix Logix), Barosa, SK Engineers, Ink & Clink. Still needed: **real quotes** from any of them, and whether the "Trusted by many" logo strip (P5) should show these 4 names instead.
2. ~~Pricing~~ Answered: Starter $999 / Growth $2,499 / Custom, USD + INR. Still needed: GST inclusive or exclusive?
3. Public **email and phone**: info@zalco.io and +91 84178 42117?
4. Is the **registered office** also the visiting address?
5. **Team photos** and correct roles (are all 8 people current?), plus each person's LinkedIn.
6. **GSTIN / Udyam** numbers to show?
7. Any **Twitter/X, Instagram, GitHub** accounts? If not, we remove those icons.
8. Contact form destination (which inbox), and OK to use a free form service (Formspree/Web3Forms)?
9. Stay on GitHub Pages (with the 404 workaround) or move to Netlify/Vercel/Cloudflare Pages?

---

### Sources
- Live site checked 23 Nov 2026: https://www.zalco.io
- Company record: https://www.companydetails.in/company/zalco-technologies-private-limited
- Please verify on https://www.mca.gov.in with CIN U72900UP2022PTC175108 (Zauba Corp and LinkedIn could not be read automatically).
