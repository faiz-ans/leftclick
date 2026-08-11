## ADDED Requirements

### Requirement: Single-scroll marketing page
The system SHALL provide a single-scroll static marketing page for Left Click that presents mission, outcomes, craft, process, pricing, and contact without requiring navigation to separate content pages for those sections.

#### Scenario: Visitor lands on the site
- **WHEN** a visitor opens the site root
- **THEN** they see a complete single-page layout with hero, outcomes, craft, how-it-works, pricing, contact, and footer sections available by scrolling

### Requirement: Outcomes-first messaging with supporting craft
The page SHALL lead with client outcomes (such as privacy, fewer subscriptions/bills, self-sufficiency, digital organization, and hardware reuse / less e-waste) and SHALL present the technical craft (such as NAS, HTPC, network/DNS/VPN, digital organization) as supporting detail rather than the primary headline story.

#### Scenario: Hero and outcomes emphasize results
- **WHEN** a visitor views the hero and outcomes sections
- **THEN** headlines and primary copy describe outcomes and quality-of-life results
- **AND** craft offerings are named as means to those outcomes, not as a deep technical catalog

#### Scenario: Advanced fringe stacks are not marketed
- **WHEN** a visitor reads marketing copy
- **THEN** the page does not emphasize advanced fringe tooling (such as Prometheus, Grafana, or GitOps) as a selling point

### Requirement: Service locality
The page SHALL state that Left Click serves Los Angeles only.

#### Scenario: Locality is visible
- **WHEN** a visitor views the hero or about/mission-adjacent content
- **THEN** Los Angeles (or clear LA-only wording) is visible without hunting through fine print alone

### Requirement: Transparent pricing display
The page SHALL display transparent service pricing: hourly rate of $60, a 3-hour minimum ($180), and that hardware/software costs are paid by the client. The page MUST NOT list a paid consultation product or consultation fee.

#### Scenario: Pricing section shows rates
- **WHEN** a visitor views the pricing section
- **THEN** they see $60/hour, the 3-hour minimum, and client-paid hardware/software
- **AND** they do not see a priced consultation SKU

### Requirement: How work proceeds
The page SHALL describe the working process, including that engagement starts with a free conversation, then scoping and build (preferring reuse of existing hardware when appropriate), client walkthrough and/or simplified documentation, and optional ongoing support.

#### Scenario: Process section sets expectations
- **WHEN** a visitor views the how-it-works section
- **THEN** they can understand the sequence from first contact through delivery and optional support
- **AND** free initial conversation is conveyed in process copy rather than as a priced line item

### Requirement: Dark brand presentation
The page SHALL use a dark canvas with the brand palette `#2B2B2B`, `#555555`, `#F08080`, `#FBC0B5`, and `#F5F5F5`, and SHALL display the existing Left Click logo as a primary brand mark.

#### Scenario: Brand colors and logo present
- **WHEN** a visitor views the page
- **THEN** the visual design uses the specified dark palette
- **AND** the Left Click logo is visible (e.g. header/hero)

### Requirement: Footer social and wink
The footer SHALL include a link to the YouTube channel `https://www.youtube.com/@TheLeftClick` and SHALL include a light political wink. Primary page sections above the footer MUST NOT center political messaging; political content is limited to minimal wink-level tone in the footer (name and logo may remain as existing brand double entendre).

#### Scenario: Footer links and wink
- **WHEN** a visitor views the footer
- **THEN** they can open the YouTube channel from a footer link
- **AND** a light political wink is present in the footer
- **AND** primary sections above the footer remain focused on service and outcomes

### Requirement: Static GitHub Pages deployability
The site SHALL be publishable as static files suitable for GitHub Pages with custom domain `theleft.click` (including a `CNAME` or equivalent Pages custom-domain configuration in the published output).

#### Scenario: Static artifacts exist
- **WHEN** the site is built or authored for deployment
- **THEN** it consists of static assets (HTML/CSS/JS/images) with no required application server
- **AND** custom domain configuration for `theleft.click` is included for Pages
