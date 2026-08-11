## Context

The Left Click site is a static single-scroll page under `site/` (HTML/CSS/JS on GitHub Pages). Copy is embedded in `index.html`. Primary nav is `display: none` below 760px. Body uses a multi-layer background with `background-attachment: fixed` and `min-height: 100vh` — a known source of white gaps / overscroll artifacts on mobile Safari and Chrome when scrolling from the top while the URL bar chrome resizes.

## Goals / Non-Goals

**Goals:**
- Edit page text in one content file without restructuring HTML.
- Provide a hamburger + expandable primary nav on small viewports (same destinations as desktop).
- Eliminate the transient white bottom bar on the first downward scroll from the top on phones.

**Non-Goals:**
- CMS, Markdown authoring pipeline, or SSG build step.
- Changing brand palette, pricing policy, or Formspree wiring.
- Multi-page IA or a design-system overhaul.
- Perfect iOS rubber-band physics beyond removing the white flash.

## Decisions

### 1. Content format: `content.js` (or `content.json` + tiny loader)
- **Choice:** `site/content.js` exporting a plain object (or assigning `window.SITE_CONTENT`), plus `site/content-bind.js` that maps keys to DOM via `data-content` attributes (and light structured binding for lists).
- **Why:** Works on static Pages with no build; easy to edit in any text editor; supports nested keys for lists (outcomes, craft, steps). Script load order: content → bind → other scripts.
- **Alternatives:**
  - JSON + `fetch()` — fine, but fails if opened as `file://` and needs async/FOUC handling; still viable if preferred at implement time.
  - HTML partials / SSG — heavier than needed.
- **Fallback:** Keep sensible hardcoded text in HTML as initial content; binder overwrites when content loads so a failed load still shows something.

### 2. Binding approach
- Mark text nodes’ containers with `data-content="path.to.key"` (e.g. `hero.title`, `nav.contact`).
- For repeated items (outcomes, craft, how-it-works steps), use a single list container with `data-content-list="outcomes"` and a `<template>` (or clear-and-rebuild) from an array in the content file.
- Meta `title` / `description` updated from content keys on bind.
- Do **not** put HTML with scripts in content strings; plain text / simple inline markup only if needed (`<strong>` etc. via careful `textContent` vs trusted static fragments — prefer `textContent` and separate fields for title/body).

### 3. Mobile navigation
- Keep desktop horizontal nav at `min-width: 760px` (or current breakpoint).
- Below breakpoint: show a hamburger button (`aria-expanded`, `aria-controls`) that toggles a panel containing the same links.
- Panel: dropdown from header or full-width sheet under header; close on link click, Escape, and resize to desktop.
- Focus management: move focus into menu when opened; return to button when closed.
- Match existing coral/dark styling; no new brand colors.

### 4. White bar fix
- **Primary fix:** Remove or gate `background-attachment: fixed` on coarse pointers / small viewports (`@media (hover: none), (max-width: …) { background-attachment: scroll; }`), or drop fixed attachment entirely if the parallax effect isn’t worth the bug.
- **Also:** Prefer `min-height: 100dvh` (with `100vh` fallback) for hero/body where viewport units matter; ensure `html`/`body` background color is `--canvas` (`#2B2B2B`) so any overscroll reveals dark, not white.
- **Optional:** `overscroll-behavior-y: none` on `html` if needed after testing — use sparingly.

## Risks / Trade-offs

- **[Risk] FOUC / empty text before bind** → Mitigation: leave current copy in HTML; binder replaces; or hide main until bound with a short timeout fallback.
- **[Risk] Content file syntax error breaks page** → Mitigation: try/catch around bind; console error; leave HTML fallback.
- **[Risk] List rebuild loses event listeners** → Mitigation: only content nodes; form stays outside content lists.
- **[Risk] Fixed-background removal slightly flattens desktop depth** → Mitigation: keep fixed only where `(hover: hover) and (min-width: 760px)` if desired.
- **[Trade-off] JS-dependent copy** → Acceptable; site already uses JS for form + reveals. Noscript users still see HTML fallback text.

## Migration Plan

1. Add content file with current copy migrated 1:1.
2. Annotate HTML with `data-content` / list hooks; add binder script.
3. Implement burger nav + CSS; verify keyboard/a11y.
4. Apply background/viewport CSS fixes; verify on iOS Safari and Android Chrome from scroll-top.
5. Rollback: revert commit; Pages redeploys previous `site/`.

## Open Questions

- JSON + fetch vs `content.js` — default to `content.js` unless implementer prefers JSON for stricter data-only editing.
- Whether desktop keeps `background-attachment: fixed` after mobile is fixed.
