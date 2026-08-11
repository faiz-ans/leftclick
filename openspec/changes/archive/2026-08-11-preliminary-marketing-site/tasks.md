## 1. Project scaffolding

- [x] 1.1 Create `site/` directory for static assets (keep OpenSpec at repo root)
- [x] 1.2 Add `site/index.html` skeleton with section anchors (hero, outcomes, craft, how-it-works, pricing, contact, footer)
- [x] 1.3 Add `site/styles.css` with CSS variables for palette `#2B2B2B` `#555555` `#F08080` `#FBC0B5` `#F5F5F5`
- [x] 1.4 Copy Left Click logo into `site/assets/` and wire favicon + header mark
- [x] 1.5 Choose and load distinctive display + body fonts (non-default stack)

## 2. Marketing page content and layout

- [x] 2.1 Build dark hero: brand, outcomes-led headline, supporting sentence, LA locality, CTA to `#contact`
- [x] 2.2 Write outcomes section (privacy, bills/subscriptions, self-sufficiency, organization, reuse/e-waste) with craft as supporting lines
- [x] 2.3 Add light craft section naming NAS, HTPC, network/DNS/VPN, digital organization (no fringe stack marketing)
- [x] 2.4 Add how-it-works section: free conversation → scope → build (reuse preferred) → walkthrough/docs → optional support
- [x] 2.5 Add pricing section: $60/hr, 3-hour minimum ($180), client-paid hardware/software; no consultation fee
- [x] 2.6 Add footer with YouTube link (`https://www.youtube.com/@TheLeftClick`), light political wink, and copyright
- [x] 2.7 Add 2–3 intentional motion/hover treatments; verify mobile layout and contrast

## 3. Contact paths

- [x] 3.1 Build contact section with inquiry form fields (name, email, message at minimum)
- [x] 3.2 Wire form `action` to Formspree placeholder endpoint; document replacing `{FORM_ID}` in README
- [x] 3.3 Add success/error feedback for form submission
- [x] 3.4 Add visible `mailto:contact@theleft.click` link alongside the form
- [x] 3.5 Confirm no Cal.com/Calendly or other scheduler embeds

## 4. GitHub Pages and domain

- [x] 4.1 Add `site/CNAME` with `theleft.click`
- [x] 4.2 Configure GitHub Pages to publish the `site/` folder (docs folder or Actions — pick simplest)
- [x] 4.3 Add README with local preview steps, Formspree setup, and DNS notes for `theleft.click`
- [x] 4.4 Smoke-check production URL: sections, form POST, mailto, YouTube footer link
