## 1. Editable content file

- [x] 1.1 Create `site/content.js` with current page copy migrated 1:1 (meta, nav, hero, outcomes, craft, how-it-works, pricing, contact, footer)
- [x] 1.2 Add `data-content` / list binding hooks and templates in `site/index.html` while keeping HTML fallback text
- [x] 1.3 Implement `site/content-bind.js` to apply content keys and rebuild content-driven lists
- [x] 1.4 Wire script order (content → bind → existing scripts) and verify fallback if content fails

## 2. Mobile hamburger navigation

- [x] 2.1 Add hamburger button markup and mobile nav panel in the header (ARIA expanded/controls)
- [x] 2.2 Style hamburger + dropdown/sheet for small viewports; keep horizontal nav at large breakpoints
- [x] 2.3 Add toggle JS: open/close, Escape, link-click close, resize-to-desktop close, basic focus handling
- [x] 2.4 Verify keyboard operability and that all primary destinations remain reachable on mobile

## 3. Mobile scroll white-bar fix

- [x] 3.1 Set `html`/`body` background color to canvas `#2B2B2B` so overscroll is never white
- [x] 3.2 Disable or gate `background-attachment: fixed` on mobile/coarse pointers; use `100dvh` with `100vh` fallback where needed
- [x] 3.3 Manually verify first downward scroll from top on a phone (or mobile emulator) no longer shows a white bottom bar

## 4. Smoke check

- [x] 4.1 Confirm editing `content.js` updates rendered copy after reload
- [x] 4.2 Confirm desktop nav, mobile burger menu, contact form, and mailto still work
