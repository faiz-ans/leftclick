## Why

Left Click needs a public face at `theleft.click` so Los Angeles clients can understand the service, see transparent pricing, and get in touch. The domain is reserved and a YouTube brand/logo already exist; a preliminary static site on GitHub Pages is the fastest credible presence before portfolio work exists.

## What Changes

- Add a single-scroll dark marketing site for Left Click (mission, outcomes-led story with supporting craft, how it works, transparent pricing, contact).
- Host as a static site on GitHub Pages with custom domain `theleft.click`.
- Provide dual contact paths: Formspree inquiry form and `mailto:contact@theleft.click`.
- Apply the existing logo and agreed palette; include YouTube as a footer social link and a light political wink in the footer only.
- Do **not** list paid consultation as a product (consultations are free while starting out); do **not** use Cal.com/Calendly.

## Capabilities

### New Capabilities
- `marketing-site`: Single-scroll public marketing page — branding, outcomes-first messaging, craft support, process, pricing, LA locality, footer (YouTube + light wink).
- `contact`: Inquiry form (Formspree) and mailto fallback to `contact@theleft.click`.

### Modified Capabilities
- (none — greenfield)

## Impact

- New static site project in this repo (no existing app code).
- Depends on GitHub Pages + custom domain DNS for `theleft.click`.
- Depends on a Formspree form endpoint (form ID configured at deploy time).
- Uses existing logo asset and YouTube channel `https://www.youtube.com/@TheLeftClick` as brand continuity.
- No backend application, auth, or portfolio content in scope.
