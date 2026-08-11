## ADDED Requirements

### Requirement: Hamburger navigation on small viewports
On small viewports where the horizontal primary nav would otherwise be hidden, the site SHALL provide a hamburger (menu) button that expands a menu containing the same primary navigation destinations available on large viewports.

#### Scenario: Menu available on mobile
- **WHEN** a visitor views the site at a small viewport width
- **THEN** a hamburger control is visible in the header
- **AND** activating it reveals navigation links to the primary page sections (including contact)

#### Scenario: Menu closes after navigation
- **WHEN** a visitor opens the hamburger menu and activates a section link
- **THEN** the menu closes
- **AND** the page scrolls/jumps to the target section as before

### Requirement: Desktop nav unchanged at large viewports
At large viewports, the site SHALL continue to show the horizontal primary navigation without requiring the hamburger control.

#### Scenario: Wide viewport shows full nav
- **WHEN** a visitor views the site at a large viewport width
- **THEN** the horizontal primary nav links are visible
- **AND** the hamburger control is not required for navigation

### Requirement: Accessible menu toggle
The hamburger control SHALL expose expanded/collapsed state to assistive technologies and be operable by keyboard.

#### Scenario: Keyboard and ARIA state
- **WHEN** a visitor toggles the menu with pointer or keyboard
- **THEN** the control’s accessible expanded state reflects open vs closed
- **AND** the visitor can open and close the menu without a pointer
