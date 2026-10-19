# Substack import

Branch: `substack-import-where-am-i` (from `master`)

## 1. Import missing Substack posts
Source: https://shayyahal.substack.com/feed (full HTML in RSS). Already on site: SF guide, Saturn, P(Bloom), 2026 predictions (= "year of friction"), evals.

| Substack | Folder | Translation |
|---|---|---|
| למה, בעצם, הם לא עוצרים? | `/Users/shayyahal/Code/web-fork/content/blog/why-dont-they-stop` | he → en |
| On Agents That Really, Really Want to Pass the Test / הסיפור האמיתי... | `/Users/shayyahal/Code/web-fork/content/blog/agents-passing-the-test` | both exist |
| Mathematics In The Age of Slop | `/Users/shayyahal/Code/web-fork/content/blog/mathematics-age-of-slop` | English only (no en→he translation) |
| Monitoring agents with something that isn't one | `/Users/shayyahal/Code/web-fork/content/blog/monitoring-agents-non-agent` | English only (no en→he translation) |
| So You Want to Monitor Your AI Agent's Thoughts | `/Users/shayyahal/Code/web-fork/content/blog/monitor-ai-agent-thoughts` | English only (no en→he translation) |

Images downloaded from Substack CDN into each post folder.

## 2. Verify
`npm run build`, `npm run format`, dev server: both languages of each post render + appear in lists. Also: evals-psychometrics got an English version (he → en).
