## ADDED Requirements

### Requirement: No transient white bar on mobile top-scroll
When a visitor on a small/mobile viewport is fully scrolled to the top of the page and scrolls downward, the page MUST NOT show a transient white bar along the bottom of the screen during that scroll motion. Overscroll or browser chrome resize MUST reveal the dark canvas color (`#2B2B2B`) rather than an unstyled white gap.

#### Scenario: First downward scroll from top on phone
- **WHEN** a mobile visitor is scrolled to the top of the page and performs a downward scroll
- **THEN** no white bar appears at the bottom of the viewport during the scroll
- **AND** any visible overscroll region matches the dark page canvas

#### Scenario: Desktop appearance remains acceptable
- **WHEN** a visitor views the site on a large desktop viewport
- **THEN** the dark branded background presentation remains intact
- **AND** the page does not regress to a flat broken layout due to the mobile scroll fix
