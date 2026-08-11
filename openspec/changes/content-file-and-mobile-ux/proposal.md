## Why

Editing copy currently means hunting through HTML markup; mobile visitors lose primary navigation below the desktop breakpoint; and the first downward scroll from the top of the page on phones shows a transient white bar — a jarring break in the dark brand experience.

## What Changes

- Extract page text (headings, body copy, nav labels, meta, etc.) into a dedicated editable content file that the static site loads to populate matching HTML elements.
- Replace the current “hide nav on small screens” behavior with a hamburger button that opens a dropdown/overlay menu of the same links.
- Fix the mobile white bar that appears during the first downward scroll from the fully scrolled-up position (likely viewport/`background-attachment: fixed` interaction).

## Capabilities

### New Capabilities
- `editable-content`: Separate content source file and client-side binding so HTML structure stays stable while copy is edited in one place.
- `mobile-navigation`: Responsive primary navigation with a hamburger control and expandable menu on small viewports.

### Modified Capabilities
- `marketing-site`: Mobile viewport presentation must not show a transient white bottom bar when scrolling down from the top of the page.

## Impact

- Touches `site/index.html`, `site/styles.css`, and new content + small JS modules under `site/`.
- Remains static / GitHub Pages compatible (no build step required unless we choose one; prefer fetchable JSON/JS content or inline data file).
- Content edits become a non-developer-friendly workflow after this lands.
- Does not change Formspree endpoint, domain, or pricing/policy copy intent — only where copy lives and how mobile chrome behaves.
