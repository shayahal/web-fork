# Substack import + "Where am I" section

Branch: `substack-import-where-am-i` (from `master`)

## 1. Import missing Substack posts as he/en pairs
Source: https://shayyahal.substack.com/feed (full HTML in RSS). Already on site: SF guide, Saturn, P(Bloom), 2026 predictions (= "year of friction"), evals.

| Substack | Folder | Translation |
|---|---|---|
| למה, בעצם, הם לא עוצרים? | `/Users/shayyahal/Code/web-fork/content/blog/why-dont-they-stop` | he → en |
| On Agents That Really, Really Want to Pass the Test / הסיפור האמיתי... | `/Users/shayyahal/Code/web-fork/content/blog/agents-passing-the-test` | both exist |
| Mathematics In The Age of Slop | `/Users/shayyahal/Code/web-fork/content/blog/mathematics-age-of-slop` | en → he |
| Monitoring agents with something that isn't one | `/Users/shayyahal/Code/web-fork/content/blog/monitoring-agents-non-agent` | en → he |
| So You Want to Monitor Your AI Agent's Thoughts | `/Users/shayyahal/Code/web-fork/content/blog/monitor-ai-agent-thoughts` | en → he |

Images downloaded from Substack CDN into each post folder.

## 2. "Where am I" on home pages
- Data: `/Users/shayyahal/Code/web-fork/content/subjects/events.json` — `[{date: 'YYYY-MM-DD', name, place, link}]`
- Component: `/Users/shayyahal/Code/web-fork/src/components/section-where-am-i/index.jsx` — splits upcoming/past by date; hidden when empty
- Wired into `index.jsx`, `index-en.jsx`, `index-he.jsx`
- Data source: Shay's Google Calendar (talks only). Blocked until the Calendar connector is reconnected to the main account.

## 3. Verify
`npm run build`, `npm run format`, dev server: both languages of each post render + appear in lists, home section renders.
