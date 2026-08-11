## Purpose

TBD

## Requirements

### Requirement: Inquiry form via Formspree
The site SHALL provide an inquiry form that submits to Formspree so visitors can send a message without leaving the page. The Formspree endpoint MUST be configurable (documented placeholder acceptable until the live form ID is set).

#### Scenario: Visitor submits the inquiry form
- **WHEN** a visitor completes the inquiry form with required fields and submits it
- **THEN** the form posts to the configured Formspree endpoint
- **AND** the visitor receives on-page feedback indicating success or failure of the submission attempt

#### Scenario: Form is reachable from primary CTA
- **WHEN** a visitor activates the primary contact CTA
- **THEN** they are taken to the contact section containing the inquiry form (e.g. in-page anchor)

### Requirement: Mailto contact path
The site SHALL provide a visible `mailto:contact@theleft.click` contact path in addition to the form.

#### Scenario: Visitor uses email link
- **WHEN** a visitor chooses the mailto contact option
- **THEN** the link targets `contact@theleft.click`

### Requirement: No calendar booking embeds
The contact experience MUST NOT embed or require Cal.com, Calendly, or similar scheduling widgets for v1.

#### Scenario: Contact section has no scheduler
- **WHEN** a visitor views the contact section
- **THEN** they see form and mailto options only
- **AND** they do not see a third-party calendar booking embed
