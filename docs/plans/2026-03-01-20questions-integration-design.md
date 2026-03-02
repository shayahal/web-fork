# Design: 20 Questions Analysis Page Integration

**Date**: March 1, 2026
**Status**: Approved
**Project**: web-fork

## Overview

Add a data-driven analysis page for the Israeli "20 Questions" game (הארץ - 20 שאלות של הארץ) at `/20questions` with English and Hebrew language versions. The page will be linked from the "Recent Projects" section on the About page.

## Motivation

- Showcase an analysis of the popular Israeli quiz game
- Provide a comprehensive data-driven exploration with interactive visualizations
- Maintain multilingual support consistent with web-fork's design pattern
- Credit Yoaana Gonen as the original quiz creator

## Architecture

### Page Structure

Three new page files following the site's established language routing pattern:

- **`src/pages/20questions.jsx`** - Default/primary route (`/20questions`)
- **`src/pages/20questions-en.jsx`** - English language version (`/20questions-en`)
- **`src/pages/20questions-he.jsx`** - Hebrew language version (`/20questions-he`)

All three pages will use a shared template component to avoid duplication.

### Template Component

**File**: `src/templates/20questions-template.jsx`

**Responsibilities**:
- Accept HTML content as a prop (the full analysis HTML/CSS/JS)
- Wrap the analysis within the Layout component (preserves site header/nav)
- Render using `dangerouslySetInnerHTML` to preserve embedded JavaScript
- Handle language-specific metadata (title, description, SEO)
- Provide language switcher links between `/20questions`, `/20questions-en`, `/20questions-he`

**Key Implementation Pattern**:
```jsx
const AnalysisTemplate = ({ language, htmlContent }) => (
  <Layout>
    <SEO title="20 Questions Analysis" ... />
    <Header language={language} alternateUrl={getAlternateUrl(language)} />
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </Layout>
);
```

### About Page Integration

**Location**: Recent Projects section in the About page

**Link Format**:
```
20Questions — A comprehensive analysis of the 20 questions by Yoaana Gonen
```

**Implementation**:
- Add link to `/20questions` in the existing "Recent Projects" section
- If section doesn't exist, create new component or add to appropriate location
- Ensure link is placed consistently with other project links

## Content Integration

### HTML Asset Management

The 20 questions analysis HTML includes:
- Embedded CSS with custom design system (dark theme, gradients, animations)
- Embedded JavaScript for:
  - Intersection Observer scroll animations
  - SVG pie chart generation
  - Bar chart animations
- RTL support for Hebrew content

**Strategy**: Store the complete HTML content in the template and render via `dangerouslySetInnerHTML` to preserve all functionality.

## Language-Specific Considerations

### English Version (`20questions-en.jsx`)
- Use English title/description in SEO
- Link to Hebrew version via alternate URL
- Content: Analysis in English (default HTML)

### Hebrew Version (`20questions-he.jsx`)
- Use Hebrew title/description in SEO
- Link to English version via alternate URL
- Content: Analysis in Hebrew with RTL styling (already in HTML)

### Default Version (`20questions.jsx`)
- Acts as primary route
- Can redirect to `/20questions-en` or serve as English default
- Consistent with site's pattern

## Technical Details

### Styling Preservation
- Embedded CSS in HTML includes custom variables, animations, and responsive design
- No TailwindCSS changes needed—styles are fully self-contained
- Animations (fade-up, bar fills, pie charts) triggered by Intersection Observer

### JavaScript Functionality
- Pie chart generation via JavaScript (creates SVG circles)
- Intersection Observer triggers animations on scroll
- No external dependencies beyond vanilla JavaScript
- Must be preserved in `dangerouslySetInnerHTML` rendering

### SEO Metadata
Each page version includes:
- Language-specific title: "20 Questions Analysis" (EN) / "ניתוח 20 שאלות" (HE)
- Description linking to Yoaana Gonen credit
- Canonical URLs for language versions
- Alternate language links

## Navigation & Routing

### Gatsby Page Routing
- Automatic routing via filename: `20questions.jsx` → `/20questions`
- Language variants accessible at `/20questions-en` and `/20questions-he`
- Header component displays language switcher (following existing pattern)

### About Page Link
- Text: "20Questions"
- URL: `/20questions`
- Location: Recent Projects section
- Fallback to English version via routing

## Implementation Checklist

- [ ] Create template component: `src/templates/20questions-template.jsx`
- [ ] Create page files: `20questions.jsx`, `20questions-en.jsx`, `20questions-he.jsx`
- [ ] Extract and integrate HTML content into template
- [ ] Update About page with link in Recent Projects section
- [ ] Test language switching between en/he versions
- [ ] Verify animations and interactivity work correctly
- [ ] Test SEO metadata for each language version
- [ ] Deploy and verify `/20questions` route works

## Success Criteria

✓ Analysis accessible at `/20questions` with full interactivity
✓ Language versions work at `/20questions-en` and `/20questions-he`
✓ About page displays link in Recent Projects
✓ All animations (scroll, pie charts, bars) function correctly
✓ SEO metadata correct for each language version
✓ Navigation between languages smooth and intuitive
✓ No styling conflicts with site's TailwindCSS framework

## Dependencies

- No new npm packages required
- Existing `Layout`, `Header`, `SEO` components
- Gatsby's built-in routing system
- Vanilla JavaScript (already embedded in HTML)

## Notes

- The HTML file is self-contained with no external dependencies beyond Google Fonts
- All styling is embedded, making it portable and independent
- JavaScript uses modern APIs (Intersection Observer, SVG manipulation) available in all modern browsers
- RTL styling already present for Hebrew version
