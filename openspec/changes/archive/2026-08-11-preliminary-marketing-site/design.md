## Context

Greenfield repo for Left Click (`theleft.click`), a Los Angeles–only home digital-makeover service (homeservers, HTPC/NAS/network setups, digital organization). Brand assets already exist: logo (coral disc + left-pointing cursor) and YouTube channel [@TheLeftClick](https://www.youtube.com/@TheLeftClick). The site must be static and hostable on GitHub Pages. No portfolio yet; trust comes from clear mission, transparent pricing, process, and contactability.

## Goals / Non-Goals

**Goals:**
- Ship a dark, single-scroll marketing page that states mission, outcomes (with supporting craft), how work proceeds, transparent pricing, and LA locality.
- Dual contact: Formspree form + `mailto:contact@theleft.click`.
- Brand continuity with logo and palette; YouTube in footer; one light political wink in footer only.
- Deployable via GitHub Pages with custom domain `theleft.click`.

**Non-Goals:**
- Paid consultation SKU, calendar booking (Cal.com/Calendly), or payment checkout.
- Client portfolio, case studies, or blog/CMS.
- Political manifesto or culture-war messaging in primary copy.
- Backend app, auth, booking system, or dynamic server rendering.
- Emphasizing fringe advanced stacks (Prometheus/GitOps/etc.) in marketing.

## Decisions

### 1. Static stack: plain HTML/CSS/JS (no SSG required for v1)
- **Choice:** Hand-authored static files (`index.html`, CSS, minimal JS if needed for form UX), plus logo asset.
- **Why:** Smallest surface for a single scroll; GitHub Pages serves it directly; no build pipeline required for a preliminary site.
- **Alternatives:** Astro/Eleventy — better if content grows; deferred until multi-page or component needs appear.

### 2. Visual system
- **Canvas:** Dark page background `#2B2B2B`.
- **Palette:** `#F08080` (primary/CTA), `#FBC0B5` (secondary accent), `#555555` (muted surfaces/borders), `#F5F5F5` (text).
- **Logo:** Existing mark as nav/favicon; coral aligns with `#F08080`.
- **Typography:** Expressive, non-default stack (avoid Inter/Roboto/Arial/system-only). Pair a distinctive display face for brand/headlines with a readable body face; load via Google Fonts or similar static-friendly CDN, or self-host font files in the repo.
- **Layout:** One composition in the first viewport — brand, one headline, one short supporting sentence, one CTA, dominant visual plane (logo-forward or atmospheric full-bleed — not a dashboard, not cards in the hero). Outcomes and craft live below the fold in dedicated sections.
- **Motion:** 2–3 intentional motions (e.g. fade/slide-in on scroll for sections, subtle CTA hover) — presence, not noise.

### 3. Information architecture (single scroll)
1. **Hero** — Brand + outcomes-led headline + LA + primary CTA to contact
2. **Outcomes** — Privacy, fewer subscriptions/bills, self-sufficiency, organization, reuse/e-waste — craft named as support, not a parts catalog
3. **Craft (light)** — Short “what I build” list (NAS, HTPC, network/DNS/VPN, digital organization) without deep technical marketing
4. **How it works** — Free conversation → scope → build (reuse preferred) → walkthrough/docs → optional ongoing support
5. **Pricing** — `$60/hr`, 3-hour minimum (`$180`), hardware/software client-paid; no consultation fee listed
6. **Contact** — Formspree form + visible `mailto:contact@theleft.click`
7. **Footer** — YouTube link, light political wink, copyright/brand

### 4. Contact: Formspree + mailto
- **Form:** POST to Formspree endpoint; form ID via config/placeholder documented in README (e.g. `https://formspree.io/f/{FORM_ID}`).
- **Mailto:** `contact@theleft.click` always available as fallback.
- **No** calendar embeds.

### 5. Hosting: GitHub Pages + custom domain
- Publish from `main` (root or `/docs` — prefer repo root or a `docs/`/`site/` folder decided at implement time; simplest is site files at repo root or under `docs/` if keeping OpenSpec at root clean).
- **Recommendation:** put site files under `site/` (or `docs/` for Pages “docs folder” mode) so OpenSpec planning stays separate; configure Pages accordingly. Include `CNAME` file with `theleft.click`.
- DNS (apex/www) is operator-owned outside the repo; document required records in README.

### 6. Politics & messaging
- Primary copy = service + outcomes. “Reject Big Tech” reframed as ownership, privacy, fewer subscriptions, run-at-home.
- Footer wink only (subtle; those who get it get it). Name + left-pointing logo already carry the double entendre.

### 7. Trust without portfolio
- Transparency (pricing, process, LA-only) + clear contact + YouTube as soft proof of voice — not client case studies.

## Risks / Trade-offs

- **[Risk] Formspree free-tier limits / spam** → Mitigation: Formspree built-in protections; keep mailto visible; monitor inbox.
- **[Risk] Form ID missing at first deploy** → Mitigation: placeholder + README setup steps; mailto still works.
- **[Risk] Custom domain misconfigured** → Mitigation: document DNS + `CNAME`; verify HTTPS after Pages attach.
- **[Risk] Dark-site contrast / a11y** → Mitigation: ensure `#F5F5F5` on `#2B2B2B` and coral CTAs meet contrast; focus states on form controls.
- **[Trade-off] No SSG** → Faster ship; revisit if pages/components multiply.
- **[Trade-off] Free consult not on pricing** → Mention only in How it works so pricing stays simple.

## Migration Plan

1. Implement static site in chosen folder; add logo and fonts.
2. Create Formspree form → wire endpoint.
3. Enable GitHub Pages; add `CNAME`; point DNS for `theleft.click`.
4. Verify form submission and mailto on production URL.
5. Rollback: disable Pages or revert commit; DNS can remain.

## Open Questions

- Exact footer wink wording (finalize at copy time).
- Whether Pages serves from `/docs` vs `/site` + Actions — implementer picks simplest path that keeps OpenSpec root tidy.
- Confirmation that `contact@theleft.click` mailbox is live before launch (ops, not code).
