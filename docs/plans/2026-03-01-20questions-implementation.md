# 20 Questions Analysis Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate a data-driven analysis of the Israeli "20 Questions" game at `/20questions` with English and Hebrew language versions, and link it from the About page's Recent Projects section.

**Architecture:** Create a shared template component that renders the 20 questions HTML analysis (with embedded CSS and JavaScript) within the site's layout. Generate three page files (default, English, Hebrew) that each invoke the template with language-specific metadata. Update the About page to include a link to the analysis.

**Tech Stack:** Gatsby, React, TailwindCSS, vanilla JavaScript (for analysis animations)

---

## Task 1: Create the Template Component

**Files:**
- Create: `src/templates/20questions-template.jsx`

**Step 1: Create template file with imports and basic structure**

Create `/Users/shayyahal/Code/web-fork/src/templates/20questions-template.jsx` with:

```jsx
import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

const AnalysisTemplate = ({ language = 'en', htmlContent, metadata }) => {
  const getAlternateUrl = () => {
    if (language === 'en') return '/20questions-he';
    if (language === 'he') return '/20questions-en';
    return '/20questions-en';
  };

  const titles = {
    en: '20 Questions Analysis',
    he: 'ניתוח 20 שאלות',
  };

  const descriptions = {
    en: 'A comprehensive data-driven analysis of the Israeli 20 Questions game by Yoaana Gonen',
    he: 'ניתוח מקיף מונע נתונים של משחק 20 השאלות של הארץ מאת יוענה גונן',
  };

  return (
    <Layout>
      <SEO
        title={titles[language]}
        description={descriptions[language]}
      />
      <Header
        metadata={metadata}
        currentLanguage={language}
        alternateUrl={getAlternateUrl()}
      />
      <div className="analysis-container">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </Layout>
  );
};

export default AnalysisTemplate;
```

**Step 2: Verify file was created**

```bash
cat /Users/shayyahal/Code/web-fork/src/templates/20questions-template.jsx
```

Expected: File displays with imports and component definition

**Step 3: Commit**

```bash
cd /Users/shayyahal/Code/web-fork
git add src/templates/20questions-template.jsx
git commit -m "feat: create 20questions template component"
```

---

## Task 2: Extract HTML Content as String

**Files:**
- Create: `src/data/20questions-html.js`

**Step 1: Create data file with the HTML content**

Read the HTML file from Downloads and extract the full HTML as a JavaScript string. Create `/Users/shayyahal/Code/web-fork/src/data/20questions-html.js`:

```javascript
export const analysisHTML = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>20 שאלות של הארץ — מחקר</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
[... paste entire <style> block from the HTML file ...]
</style>
</head>
<body>
[... paste entire <body> content from the HTML file ...]
</body>
</html>`;
```

**Note:** Copy the complete HTML from `/Users/shayyahal/Downloads/20 Questions HTML Conversion.html` into this file. This preserves all embedded CSS and JavaScript.

**Step 2: Verify file structure**

```bash
wc -l /Users/shayyahal/Code/web-fork/src/data/20questions-html.js
```

Expected: File should have 800+ lines (entire HTML content)

**Step 3: Commit**

```bash
cd /Users/shayyahal/Code/web-fork
git add src/data/20questions-html.js
git commit -m "feat: add 20questions analysis HTML content"
```

---

## Task 3: Create Default Page File (20questions.jsx)

**Files:**
- Create: `src/pages/20questions.jsx`

**Step 1: Create the default page file**

Create `/Users/shayyahal/Code/web-fork/src/pages/20questions.jsx`:

```jsx
import React from 'react';
import { graphql } from 'gatsby';
import AnalysisTemplate from '../templates/20questions-template';
import { analysisHTML } from '../data/20questions-html';

const TwentyQuestionsPage = ({ data }) => {
  return (
    <AnalysisTemplate
      language="en"
      htmlContent={analysisHTML}
      metadata={data.site.siteMetadata}
    />
  );
};

export default TwentyQuestionsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        author
      }
    }
  }
`;
```

**Step 2: Verify file was created**

```bash
ls -lh /Users/shayyahal/Code/web-fork/src/pages/20questions.jsx
```

Expected: File exists and is readable

**Step 3: Commit**

```bash
cd /Users/shayyahal/Code/web-fork
git add src/pages/20questions.jsx
git commit -m "feat: create default 20questions page route"
```

---

## Task 4: Create English Variant (20questions-en.jsx)

**Files:**
- Create: `src/pages/20questions-en.jsx`

**Step 1: Create the English page file**

Create `/Users/shayyahal/Code/web-fork/src/pages/20questions-en.jsx`:

```jsx
import React from 'react';
import { graphql } from 'gatsby';
import AnalysisTemplate from '../templates/20questions-template';
import { analysisHTML } from '../data/20questions-html';

const TwentyQuestionsEnPage = ({ data }) => {
  return (
    <AnalysisTemplate
      language="en"
      htmlContent={analysisHTML}
      metadata={data.site.siteMetadata}
    />
  );
};

export default TwentyQuestionsEnPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        author
      }
    }
  }
`;
```

**Step 2: Verify file was created**

```bash
diff /Users/shayyahal/Code/web-fork/src/pages/20questions.jsx /Users/shayyahal/Code/web-fork/src/pages/20questions-en.jsx
```

Expected: Files are identical (both render English version)

**Step 3: Commit**

```bash
cd /Users/shayyahal/Code/web-fork
git add src/pages/20questions-en.jsx
git commit -m "feat: create English language variant of 20questions page"
```

---

## Task 5: Create Hebrew Variant (20questions-he.jsx)

**Files:**
- Create: `src/pages/20questions-he.jsx`

**Step 1: Create the Hebrew page file**

Create `/Users/shayyahal/Code/web-fork/src/pages/20questions-he.jsx`:

```jsx
import React from 'react';
import { graphql } from 'gatsby';
import AnalysisTemplate from '../templates/20questions-template';
import { analysisHTML } from '../data/20questions-html';

const TwentyQuestionsHePage = ({ data }) => {
  return (
    <AnalysisTemplate
      language="he"
      htmlContent={analysisHTML}
      metadata={data.site.siteMetadata}
    />
  );
};

export default TwentyQuestionsHePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        author
      }
    }
  }
`;
```

**Step 2: Verify file was created**

```bash
cat /Users/shayyahal/Code/web-fork/src/pages/20questions-he.jsx | grep "language="
```

Expected: Output shows `language="he"`

**Step 3: Commit**

```bash
cd /Users/shayyahal/Code/web-fork
git add src/pages/20questions-he.jsx
git commit -m "feat: create Hebrew language variant of 20questions page"
```

---

## Task 6: Update About Page with Link

**Files:**
- Modify: `src/pages/about.jsx`

**Step 1: Read the current about.jsx**

```bash
cat /Users/shayyahal/Code/web-fork/src/pages/about.jsx
```

**Step 2: Find where to add the link**

Look for the "Recent Projects" section or where project links are displayed. Based on the structure, this might be in a markdown content or a component section.

**Step 3: Check about.md content**

```bash
find /Users/shayyahal/Code/web-fork/content -name "*about*" -type f
```

Expected: Find `content/about.md` or similar

**Step 4: Read the about markdown file**

```bash
cat /Users/shayyahal/Code/web-fork/content/about.md
```

**Step 5: Add link to Recent Projects section**

Edit the about.md file to add the 20 questions link in the Recent Projects section. Add:

```markdown
- [20Questions](/20questions) — A comprehensive analysis of the 20 questions by Yoaana Gonen
```

If no Recent Projects section exists, create one:

```markdown
## Recent Projects

- [20Questions](/20questions) — A comprehensive analysis of the 20 questions by Yoaana Gonen
```

**Step 6: Verify the edit**

```bash
grep -n "20Questions" /Users/shayyahal/Code/web-fork/content/about.md
```

Expected: Line shows the new link text

**Step 7: Commit**

```bash
cd /Users/shayyahal/Code/web-fork
git add content/about.md
git commit -m "feat: add 20questions link to about page recent projects"
```

---

## Task 7: Test Local Development

**Files:**
- Test: All pages locally

**Step 1: Clean Gatsby cache**

```bash
cd /Users/shayyahal/Code/web-fork
npm run clean
```

Expected: `.cache/` directory removed

**Step 2: Start development server**

```bash
cd /Users/shayyahal/Code/web-fork
npm start
```

Expected: Server starts on `http://localhost:8000`

**Step 3: Test default route**

Open browser and navigate to:
```
http://localhost:8000/20questions
```

Expected:
- Page loads without errors
- Header displays correctly
- Analysis content renders
- Dark theme styling visible
- Layout component wraps content properly

**Step 4: Test English variant**

Navigate to:
```
http://localhost:8000/20questions-en
```

Expected: Same as default route, content loads

**Step 5: Test Hebrew variant**

Navigate to:
```
http://localhost:8000/20questions-he
```

Expected:
- Page loads
- RTL layout applied (Hebrew direction)
- Content displays correctly

**Step 6: Test animations**

On any 20questions page:
- Scroll down slowly
- Watch for bar animations and pie chart animations to trigger
- Verify Intersection Observer animations work

Expected: Bars fill with animation, pie slices draw as you scroll

**Step 7: Test About page link**

Navigate to:
```
http://localhost:8000/about
```

Expected:
- Recent Projects section visible
- "20Questions" link appears
- Clicking link navigates to `/20questions`

**Step 8: Stop development server**

```bash
# Press Ctrl+C in terminal
```

---

## Task 8: Build and Test Production

**Files:**
- Build: Production bundle

**Step 1: Build for production**

```bash
cd /Users/shayyahal/Code/web-fork
npm run build
```

Expected: Build completes without errors, `public/` directory created

**Step 2: Check for build warnings**

```bash
npm run build 2>&1 | grep -i "warn\|error"
```

Expected: No warnings or errors related to 20questions pages

**Step 3: Serve production build locally**

```bash
cd /Users/shayyahal/Code/web-fork
npm run serve
```

Expected: Server starts (usually on `http://localhost:9000`)

**Step 4: Test production pages**

Navigate to:
- `http://localhost:9000/20questions`
- `http://localhost:9000/20questions-en`
- `http://localhost:9000/20questions-he`

Expected: All pages load and function identically to development

**Step 5: Test animations in production**

Scroll through each page and verify:
- Bar charts animate
- Pie charts render and animate
- Intersection Observer triggers correctly
- No console errors

Expected: All animations work smoothly

**Step 6: Stop serve**

```bash
# Press Ctrl+C in terminal
```

---

## Task 9: Verify Git History and Create Final Commit

**Files:**
- Review: All changes

**Step 1: Check git status**

```bash
cd /Users/shayyahal/Code/web-fork
git status
```

Expected: No uncommitted changes (all previous commits completed)

**Step 2: View commit log**

```bash
git log --oneline -10
```

Expected: Shows recent commits including:
- `feat: create 20questions template component`
- `feat: add 20questions analysis HTML content`
- `feat: create default 20questions page route`
- `feat: create English language variant of 20questions page`
- `feat: create Hebrew language variant of 20questions page`
- `feat: add 20questions link to about page recent projects`

**Step 3: Create a summary commit (optional)**

If you want a summary commit for the entire feature:

```bash
cd /Users/shayyahal/Code/web-fork
git log --oneline origin/main..HEAD | wc -l
```

If more than 5 commits, consider creating an interactive rebase, but typically individual commits are preferred for clarity.

**Step 4: Verify all tests pass**

If the project has any test suite:

```bash
npm test
```

Expected: All tests pass (or no tests if not configured)

---

## Task 10: Deploy

**Files:**
- Deploy: Production build

**Step 1: Ensure main branch is up to date**

```bash
cd /Users/shayyahal/Code/web-fork
git pull origin main
```

Expected: No conflicts

**Step 2: Push to GitHub**

```bash
git push origin HEAD
```

Expected: Changes pushed to repository

**Step 3: Deploy to GitHub Pages**

```bash
npm run deploy
```

Expected:
- Build runs
- Files deployed to `gh-pages` branch
- Site updated at `https://shayahal.github.io/web-fork/`

**Step 4: Verify deployment**

After 1-2 minutes, visit:
```
https://shayahal.github.io/web-fork/20questions
https://shayahal.github.io/web-fork/20questions-en
https://shayahal.github.io/web-fork/20questions-he
```

Expected: All pages load and display correctly

**Step 5: Test About page link on live site**

Visit: `https://shayahal.github.io/web-fork/about`

Expected:
- Recent Projects section visible
- "20Questions" link works
- Navigates to `/20questions` page

---

## Implementation Summary

**Total Tasks:** 10
**Estimated Time:** 30-45 minutes
**Key Deliverables:**
- ✓ Template component for reusable analysis page rendering
- ✓ Three page files for language routing (default, en, he)
- ✓ HTML content integration with embedded CSS/JS
- ✓ About page link in Recent Projects section
- ✓ Local testing and verification
- ✓ Production build and deployment
- ✓ Git history with clear commits

**Rollback Plan:** If issues occur, revert recent commits with:
```bash
git revert HEAD~N
npm run clean && npm run build
```

**Success Indicators:**
- All three routes (`/20questions`, `/20questions-en`, `/20questions-he`) load and display correctly
- Animations (scroll bars, pie charts) function on all pages
- About page includes clickable link to the analysis
- Production deployment works without errors
