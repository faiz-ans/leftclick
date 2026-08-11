## ADDED Requirements

### Requirement: Editable content source file
The site SHALL keep visitor-facing page text in a dedicated content source file under `site/` (separate from structural HTML) that an editor can update without modifying element layout markup.

#### Scenario: Content lives outside HTML structure
- **WHEN** an editor opens the content source file
- **THEN** they can change page copy (including hero, section headings/body, list item titles and descriptions, nav labels, pricing blurbs, contact intro, footer wink, and document title/description) in that file
- **AND** they do not need to edit HTML tag structure to change that copy

### Requirement: Content binds into page elements
On page load, the site SHALL populate the corresponding HTML elements from the content source so the rendered page shows the file’s text.

#### Scenario: Bound fields reflect content file
- **WHEN** a visitor loads the site and the content source loads successfully
- **THEN** elements marked for content binding display the values from the content source
- **AND** list sections driven by content arrays render one item per array entry

#### Scenario: Fallback if content fails to load
- **WHEN** the content source fails to load or bind
- **THEN** the page still presents readable fallback text from the HTML
- **AND** the failure does not break unrelated page behavior (navigation, contact form)
