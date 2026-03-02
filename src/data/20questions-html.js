export const analysisHTML = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>20 שאלות של הארץ — מחקר</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0a0f;
  --surface: rgba(255,255,255,0.04);
  --surface-hover: rgba(255,255,255,0.07);
  --border: rgba(255,255,255,0.08);
  --border-bright: rgba(255,255,255,0.16);
  --text: #f0f0f5;
  --muted: rgba(240,240,245,0.45);
  --accent1: #7b6ef6;   /* violet */
  --accent2: #f0616b;   /* rose */
  --accent3: #f5a623;   /* amber */
  --accent4: #34d399;   /* emerald */
  --accent5: #60a5fa;   /* sky */
  --mono: 'DM Mono', monospace;
  --sans: 'Heebo', sans-serif;
  --radius: 20px;
  --radius-sm: 12px;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.65;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ── NOISE TEXTURE OVERLAY ── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}

/* ── GRADIENT ORBS ── */
.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.18;
}
.orb-1 { width: 600px; height: 600px; background: var(--accent1); top: -200px; right: -200px; }
.orb-2 { width: 500px; height: 500px; background: var(--accent2); bottom: 10%; left: -200px; }
.orb-3 { width: 400px; height: 400px; background: var(--accent4); top: 50%; left: 50%; transform: translate(-50%,-50%); opacity: 0.08; }

/* ── LAYOUT ── */
.wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 28px;
  position: relative;
  z-index: 1;
}

/* ── HEADER ── */
header {
  padding: 100px 0 80px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(123,110,246,0.15);
  border: 1px solid rgba(123,110,246,0.3);
  border-radius: 99px;
  padding: 6px 16px;
  font-size: 0.72rem;
  font-family: var(--mono);
  letter-spacing: 1.5px;
  color: var(--accent1);
  text-transform: uppercase;
  margin-bottom: 32px;
}

.chip::before { content: '●'; font-size: 0.55rem; }

h1 {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -2px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-accent {
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 480px;
  margin: 0 auto;
  font-weight: 300;
}

/* ── SECTION ── */
section {
  margin-bottom: 80px;
}

.section-tag {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--accent1);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  opacity: 0.8;
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.5px;
  margin-bottom: 6px;
  line-height: 1.15;
}

.section-desc {
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 28px;
}

/* ── GLASS CARD ── */
.glass {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.glass:hover {
  border-color: var(--border-bright);
  box-shadow: 0 0 40px rgba(123,110,246,0.08);
}

.glass-inner { padding: 32px; }

/* ── BAR CHART ── */
.bar-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.bar-label {
  width: 150px;
  font-size: 0.8rem;
  color: var(--muted);
  text-align: right;
  flex-shrink: 0;
  transition: color 0.2s;
}

.bar-row:hover .bar-label { color: var(--text); }

.bar-track {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 99px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 99px;
  width: 0;
  transition: width 1.4s cubic-bezier(0.4,0,0.2,1);
}

.bar-fill.loaded { width: var(--w); }

.bar-val {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  width: 36px;
  text-align: left;
  flex-shrink: 0;
}

/* ── STAT PILLS ── */
.stat-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.stat-pill {
  flex: 1;
  min-width: 130px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 22px 20px;
  text-align: center;
  transition: border-color 0.2s;
}

.stat-pill:hover { border-color: var(--border-bright); }

.stat-num {
  font-size: 2.6rem;
  font-weight: 900;
  line-height: 1;
  display: block;
  letter-spacing: -1px;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--muted);
  margin-top: 6px;
  display: block;
}

/* ── SVG PIE CHART ── */
.pie-wrap {
  display: flex;
  align-items: center;
  gap: 36px;
  flex-wrap: wrap;
}

.pie-svg { flex-shrink: 0; }

.pie-legend { flex: 1; min-width: 200px; }

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 0.82rem;
}

.legend-dot {
  width: 10px; height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
}

.legend-name { color: var(--muted); flex: 1; }
.legend-pct {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text);
}

/* pie slice animation */
.pie-slice {
  stroke-dasharray: 0 1000;
  transition: stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1);
}
.pie-slice.loaded { stroke-dasharray: var(--dash) 1000; }

/* ── STRATEGY TABLE ── */
.strat-table { width: 100%; border-collapse: collapse; }

.strat-table th {
  padding: 10px 16px;
  font-size: 0.72rem;
  font-family: var(--mono);
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
  text-align: right;
  background: rgba(255,255,255,0.02);
}

.strat-table td {
  padding: 14px 16px;
  font-size: 0.85rem;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
  text-align: right;
}

.strat-table tr:last-child td { border-bottom: none; }
.strat-table tr:hover td { background: rgba(255,255,255,0.03); }

.td-cat {
  font-weight: 700;
  color: var(--accent1);
  white-space: nowrap;
}

/* ── PARLIAMENT GRID ── */
.parliament-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.parl-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 22px;
  text-align: center;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: default;
}

.parl-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-bright);
  box-shadow: 0 16px 40px rgba(0,0,0,0.3);
}

.parl-emoji { font-size: 3rem; margin-bottom: 12px; display: block; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }

.parl-role {
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 4px;
}

.parl-subjects {
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 16px;
}

.parl-bar-wrap {
  background: rgba(255,255,255,0.06);
  border-radius: 99px;
  height: 5px;
  overflow: hidden;
  margin-bottom: 6px;
}

.parl-bar {
  height: 100%;
  border-radius: 99px;
  width: 0;
  transition: width 1.4s cubic-bezier(0.4,0,0.2,1);
}

.parl-bar.loaded { width: var(--w); }

.parl-pct {
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 500;
}

/* ── ROI LIST ── */
.roi-list { list-style: none; }

.roi-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}
.roi-item:last-child { border-bottom: none; }

.roi-num {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: rgba(255,255,255,0.15);
  width: 24px;
  flex-shrink: 0;
}

.roi-name { flex: 1; font-size: 0.88rem; font-weight: 500; }

.roi-badge {
  font-family: var(--mono);
  font-size: 0.7rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  border-radius: 99px;
  padding: 3px 10px;
  color: var(--muted);
  white-space: nowrap;
}

/* ── MISCONCEPTIONS ── */
.myth-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}
.myth-item:last-child { border-bottom: none; }

.myth-q {
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--accent4);
  margin-bottom: 6px;
}
.myth-a { font-size: 0.85rem; color: var(--muted); }
.myth-a strong { color: var(--text); }

/* ── GEO BUBBLES ── */
.geo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.geo-bubble {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 99px;
  border: 1px solid;
  font-size: 0.82rem;
  font-weight: 600;
}

.geo-pct {
  font-family: var(--mono);
  font-size: 0.72rem;
  opacity: 0.65;
}

/* ── FUN FACT ── */
.fun-fact {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: rgba(240,97,107,0.08);
  border: 1px solid rgba(240,97,107,0.2);
  border-radius: var(--radius-sm);
  padding: 18px 20px;
  margin-top: 24px;
}
.fun-fact .ico { font-size: 1.4rem; flex-shrink: 0; }
.fun-fact p { font-size: 0.84rem; color: var(--muted); }
.fun-fact strong { color: var(--accent2); }

/* ── DIVIDER ── */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
  margin: 20px 0 28px;
}

/* ── FOOTER ── */
footer {
  text-align: center;
  padding: 48px 0;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--muted);
  position: relative;
  z-index: 1;
}
footer a { color: var(--accent1); text-decoration: none; }

/* ── SCROLL ANIMATION ── */
.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-up.visible { opacity: 1; transform: translateY(0); }

/* ── RESPONSIVE ── */
@media (max-width: 640px) {
  h1 { letter-spacing: -1px; }
  .parliament-grid { grid-template-columns: repeat(2, 1fr); }
  .bar-label { width: 100px; }
  .pie-wrap { flex-direction: column; }
}
</style>
</head>
<body>

<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<!-- ════════ HEADER ════════ -->
<header>
  <div class="wrap">
    <div class="chip">מחקר נתונים · 20 שאלות של הארץ</div>
    <h1>נמאס לך<br>להפסיד ב<span class="hero-accent">20 שאלות</span><br>של הארץ?</h1>
    <p class="hero-sub">גם לנו. אז החלטנו לנתח את החידון כדי לדעת מה הכי כדאי ללמוד כדי לנצח ולהרשים את כולם בארוחת שישי.</p>
  </div>
</header>

<div class="wrap">

<!-- ════════ S1: TOPICS ════════ -->
<section class="fade-up">
  <p class="section-tag">01 · נושאים</p>
  <h2>מה כדאי ללמוד?</h2>
  <p class="section-desc">אחוז החידונים שבהם הופיעה לפחות שאלה אחת מהנושא</p>

  <div class="glass">
    <div class="glass-inner">
      <div class="bar-row"><span class="bar-label">קולנוע ותרבות</span><div class="bar-track"><div class="bar-fill" style="--w:95%; background:linear-gradient(90deg,var(--accent1),var(--accent5));"></div></div><span class="bar-val">95%</span></div>
      <div class="bar-row"><span class="bar-label">מוזיקה</span><div class="bar-track"><div class="bar-fill" style="--w:90%; background:linear-gradient(90deg,var(--accent1),var(--accent5));"></div></div><span class="bar-val">90%</span></div>
      <div class="bar-row"><span class="bar-label">היסטוריה עולמית</span><div class="bar-track"><div class="bar-fill" style="--w:86%; background:linear-gradient(90deg,var(--accent1),var(--accent5));"></div></div><span class="bar-val">86%</span></div>
      <div class="bar-row"><span class="bar-label">ספרות</span><div class="bar-track"><div class="bar-fill" style="--w:83%; background:linear-gradient(90deg,var(--accent4),var(--accent5));"></div></div><span class="bar-val">83%</span></div>
      <div class="bar-row"><span class="bar-label">השפה העברית</span><div class="bar-track"><div class="bar-fill" style="--w:81%; background:linear-gradient(90deg,var(--accent4),var(--accent5));"></div></div><span class="bar-val">81%</span></div>
      <div class="bar-row"><span class="bar-label">גיאוגרפיה</span><div class="bar-track"><div class="bar-fill" style="--w:76%; background:linear-gradient(90deg,var(--accent3),var(--accent2));"></div></div><span class="bar-val">76%</span></div>
      <div class="bar-row"><span class="bar-label">מדע</span><div class="bar-track"><div class="bar-fill" style="--w:70%; background:linear-gradient(90deg,var(--accent3),var(--accent2));"></div></div><span class="bar-val">70%</span></div>
      <div class="bar-row"><span class="bar-label">תרבות ישראלית</span><div class="bar-track"><div class="bar-fill" style="--w:65%; background:linear-gradient(90deg,var(--accent2),var(--accent3));"></div></div><span class="bar-val">65%</span></div>
      <div class="bar-row"><span class="bar-label">דיפלומטיה</span><div class="bar-track"><div class="bar-fill" style="--w:42%; background:linear-gradient(90deg,var(--accent2),rgba(240,97,107,0.5));"></div></div><span class="bar-val">42%</span></div>
      <div class="bar-row"><span class="bar-label">טכנולוגיה</span><div class="bar-track"><div class="bar-fill" style="--w:35%; background:rgba(255,255,255,0.3);"></div></div><span class="bar-val">35%</span></div>
      <div class="bar-row"><span class="bar-label">צבא וביטחון</span><div class="bar-track"><div class="bar-fill" style="--w:32%; background:rgba(255,255,255,0.25);"></div></div><span class="bar-val">32%</span></div>
      <div class="bar-row"><span class="bar-label">ספורט</span><div class="bar-track"><div class="bar-fill" style="--w:26%; background:rgba(255,255,255,0.2);"></div></div><span class="bar-val">26%</span></div>
      <div class="bar-row"><span class="bar-label">אמנות</span><div class="bar-track"><div class="bar-fill" style="--w:20%; background:rgba(255,255,255,0.15);"></div></div><span class="bar-val">20%</span></div>
      <div class="bar-row"><span class="bar-label">דת</span><div class="bar-track"><div class="bar-fill" style="--w:18%; background:rgba(255,255,255,0.12);"></div></div><span class="bar-val">18%</span></div>
      <div class="bar-row"><span class="bar-label">סביבה / אדריכלות</span><div class="bar-track"><div class="bar-fill" style="--w:5%; background:rgba(255,255,255,0.08);"></div></div><span class="bar-val">5%</span></div>
    </div>
  </div>
</section>

<!-- ════════ S2: ROI ════════ -->
<section class="fade-up">
  <p class="section-tag">02 · השקעה</p>
  <h2>איפה כדאי להשקיע?</h2>
  <p class="section-desc">הנושאים עם הכי הרבה שאלות — ה-ROI הטוב ביותר</p>
  <div class="glass">
    <div class="glass-inner">
      <ul class="roi-list">
        <li class="roi-item"><span class="roi-num">01</span><span class="roi-name">🎵 מוזיקה ישראלית — מודרנית ופופ</span><span class="roi-badge">165 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">02</span><span class="roi-name">🔤 מילים בעברית שהגיעו מארמית</span><span class="roi-badge">150 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">03</span><span class="roi-name">🏛️ היסטוריה פוליטית של ישראל</span><span class="roi-badge">108 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">04</span><span class="roi-name">🫀 אנטומיה</span><span class="roi-badge">102 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">05</span><span class="roi-name">🗺️ גיאוגרפיה של ישראל</span><span class="roi-badge">87 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">06</span><span class="roi-name">🏙️ ערי בירה</span><span class="roi-badge">71 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">07</span><span class="roi-name">🌏 גיאוגרפיה של אסיה</span><span class="roi-badge">70 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">08</span><span class="roi-name">📖 היסטוריה תנ"כית</span><span class="roi-badge">67 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">09</span><span class="roi-name">💡 ממציאים מפורסמים</span><span class="roi-badge">62 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">10</span><span class="roi-name">🌿 בוטניקה וביולוגיה של צמחים</span><span class="roi-badge">52 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">11</span><span class="roi-name">✡️ שואה ומלחה"ע השנייה</span><span class="roi-badge">47 שאלות</span></li>
        <li class="roi-item"><span class="roi-num">12</span><span class="roi-name">🇺🇸 נשיאי ארה"ב</span><span class="roi-badge">38 שאלות</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- ════════ S3: מה משותף ════════ -->
<section class="fade-up">
  <p class="section-tag">03 · שאלות טריקיות</p>
  <h2>"מה משותף ל?"</h2>

  <div class="stat-row" style="margin-bottom:24px;">
    <div class="stat-pill">
      <span class="stat-num" style="color:var(--accent1);">76%</span>
      <span class="stat-label">מהחידונים עם לפחות שאלה אחת כזו</span>
    </div>
    <div class="stat-pill">
      <span class="stat-num" style="color:var(--accent2);">9%</span>
      <span class="stat-label">מכלל השאלות הן "מה משותף ל?"</span>
    </div>
    <div class="stat-pill">
      <span class="stat-num" style="color:var(--accent3);">20%</span>
      <span class="stat-label">מהתשובות — "קרויים על שם אותו אדם"</span>
    </div>
  </div>

  <div class="glass">
    <div class="glass-inner">
      <table class="strat-table">
        <thead>
          <tr><th>קטגוריה</th><th>ניחוש מומלץ</th></tr>
        </thead>
        <tbody>
          <tr><td class="td-cat">דמויות היסטוריות</td><td>גורל דומה / אותה התקופה</td></tr>
          <tr><td class="td-cat">יצירות אמנות</td><td>אותו יוצר.ת, או אותו לוקיישן (עיר)</td></tr>
          <tr><td class="td-cat">מילים</td><td>הגיעו מאותה שפה. אם מעורבות — קשר אטימולוגי</td></tr>
          <tr><td class="td-cat">מקומות</td><td>קרויים על שם אותו האדם (הימור #1 סטטיסטי)</td></tr>
          <tr><td class="td-cat">ריק מוחלט</td><td>"קרויים על שם אותו אדם/מקום" — 20% מהזמן מנצח</td></tr>
        </tbody>
      </table>
      <div class="fun-fact">
        <span class="ico">🤯</span>
        <p><strong>Fun fact:</strong> ב-10 ביוני 2021 חידון עם 7(!) שאלות "מה משותף ל?" — עד היום לא נמצא הסבר הגיוני.</p>
      </div>
    </div>
  </div>
</section>

<!-- ════════ S4: LITERATURE PIE ════════ -->
<section class="fade-up">
  <p class="section-tag">04 · ספרות</p>
  <h2>שאלות על ספרות</h2>
  <p class="section-desc">50% סיכוי ששאלת הבונוס בנושא קולנוע או ספרות · 10% מהשאלות הן "איזה ספר מתחיל כך..."</p>

  <div class="glass">
    <div class="glass-inner">
      <div class="pie-wrap">
        <svg class="pie-svg" width="200" height="200" viewBox="0 0 200 200" id="litPie">
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="40"/>
          <!-- slices drawn by JS -->
        </svg>
        <div class="pie-legend" id="litLegend"></div>
      </div>
    </div>
  </div>
</section>

<!-- ════════ S5: CINEMA PIE ════════ -->
<section class="fade-up">
  <p class="section-tag">05 · קולנוע</p>
  <h2>שאלות על קולנוע</h2>
  <p class="section-desc">45% מהשאלות על סרטים זוכי אוסקר · 49 שאלות על פרסי האוסקר עצמם</p>

  <div class="stat-row" style="margin-bottom:24px;">
    <div class="stat-pill" style="text-align:right; padding: 18px 20px;">
      <span style="font-size:0.72rem; color:var(--muted); font-family:var(--mono);">שווה ללמוד</span>
      <p style="font-size:0.85rem; margin-top:6px; font-weight:600; line-height:1.5;">קובריק · שפילברג · היצ'קוק · סקורסזה · טרנטינו · צ'פלין · הפבורן · ברנדו</p>
    </div>
  </div>

  <div class="glass">
    <div class="glass-inner">
      <div class="pie-wrap">
        <svg class="pie-svg" width="200" height="200" viewBox="0 0 200 200" id="cinPie">
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="40"/>
        </svg>
        <div class="pie-legend" id="cinLegend"></div>
      </div>
    </div>
  </div>
</section>

<!-- ════════ S6: GEOGRAPHY ════════ -->
<section class="fade-up">
  <p class="section-tag">06 · גיאוגרפיה</p>
  <h2>שאלות על גיאוגרפיה</h2>
  <p class="section-desc">77% גיאופוליטיקה · 23% מאפיינים גיאולוגיים · אירוצנטרי מאוד</p>

  <div class="glass">
    <div class="glass-inner">
      <div class="pie-wrap">
        <svg class="pie-svg" width="200" height="200" viewBox="0 0 200 200" id="geoPie">
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="40"/>
        </svg>
        <div class="pie-legend" id="geoLegend"></div>
      </div>
      <div class="divider" style="margin-top:28px;"></div>
      <p style="font-size:0.82rem; color:var(--muted); margin-bottom:10px; font-weight:600;">כדאי ללמוד:</p>
      <div class="geo-grid">
        <div class="geo-bubble" style="border-color:rgba(123,110,246,0.3); color:var(--accent1);">ציוויליזציות עתיקות — מצרים, יוון, רומא</div>
        <div class="geo-bubble" style="border-color:rgba(96,165,250,0.3); color:var(--accent5);">ארצות הברית</div>
        <div class="geo-bubble" style="border-color:rgba(240,97,107,0.3); color:var(--accent2);">צרפת</div>
        <div class="geo-bubble" style="border-color:rgba(52,211,153,0.3); color:var(--accent4);">הממלכה הבריטית</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════ S7: PARLIAMENT ════════ -->
<section class="fade-up">
  <p class="section-tag">07 · הצוות האידיאלי</p>
  <h2>הפרלמנט האולטימטיבי</h2>
  <p class="section-desc">הצוות שיענה על 80% מהשאלות — לפי תחום מומחיות</p>

  <div class="parliament-grid">

    <div class="parl-card">
      <span class="parl-emoji">👩‍🏫</span>
      <div class="parl-role">היסטוריונית</div>
      <div class="parl-subjects">היסטוריה · פוליטיקה</div>
      <div class="parl-bar-wrap"><div class="parl-bar" style="--w:90%; background:linear-gradient(90deg,var(--accent1),var(--accent5));"></div></div>
      <div class="parl-pct" style="color:var(--accent1);">22.5%</div>
    </div>

    <div class="parl-card">
      <span class="parl-emoji">📰</span>
      <div class="parl-role">עיתונאית</div>
      <div class="parl-subjects">אקטואליה · תרבות</div>
      <div class="parl-bar-wrap"><div class="parl-bar" style="--w:72%; background:linear-gradient(90deg,var(--accent5),var(--accent4));"></div></div>
      <div class="parl-pct" style="color:var(--accent5);">18%</div>
    </div>

    <div class="parl-card">
      <span class="parl-emoji">⚖️</span>
      <div class="parl-role">עורך דין</div>
      <div class="parl-subjects">חוק · ממשל</div>
      <div class="parl-bar-wrap"><div class="parl-bar" style="--w:68%; background:linear-gradient(90deg,var(--accent3),var(--accent2));"></div></div>
      <div class="parl-pct" style="color:var(--accent3);">17%</div>
    </div>

    <div class="parl-card">
      <span class="parl-emoji">🎙️</span>
      <div class="parl-role">פודקאסטר</div>
      <div class="parl-subjects">מוזיקה · קולנוע · TV</div>
      <div class="parl-bar-wrap"><div class="parl-bar" style="--w:48%; background:linear-gradient(90deg,var(--accent2),var(--accent3));"></div></div>
      <div class="parl-pct" style="color:var(--accent2);">12%</div>
    </div>

    <div class="parl-card">
      <span class="parl-emoji">🕍</span>
      <div class="parl-role">רב</div>
      <div class="parl-subjects">דת · היסטוריה יהודית</div>
      <div class="parl-bar-wrap"><div class="parl-bar" style="--w:44%; background:linear-gradient(90deg,var(--accent4),var(--accent5));"></div></div>
      <div class="parl-pct" style="color:var(--accent4);">11%</div>
    </div>

    <div class="parl-card">
      <span class="parl-emoji">🩺</span>
      <div class="parl-role">רופאה</div>
      <div class="parl-subjects">אנטומיה · מדעי החיים</div>
      <div class="parl-bar-wrap"><div class="parl-bar" style="--w:40%; background:linear-gradient(90deg,#a78bfa,var(--accent1));"></div></div>
      <div class="parl-pct" style="color:#a78bfa;">10%</div>
    </div>

  </div>
</section>

<!-- ════════ S8: MYTHS ════════ -->
<section class="fade-up">
  <p class="section-tag">08 · קונספציות</p>
  <h2>כל האגדות על החידון</h2>

  <div class="glass">
    <div class="glass-inner">
      <div class="myth-item">
        <div class="myth-q">☑️ האם כדאי לקרוא את כל העיתון של השבוע?</div>
        <div class="myth-a"><strong>כן!</strong> 5% מהשאלות קשורות לאירועים עדכניים, בעיקר מישראל.</div>
      </div>
      <div class="myth-item">
        <div class="myth-q">☑️ מה הסיכוי ששאלה קשורה לשאלה הקודמת?</div>
        <div class="myth-a">בערך <strong>7% מהשאלות</strong> — אותו אדם / מקום / נושאים דומים / שאלות follow-up.</div>
      </div>
      <div class="myth-item">
        <div class="myth-q">☑️ על כמה שאלות בת 31 בהייטק עונה בממוצע?</div>
        <div class="myth-a">בערך <strong>2.8</strong> — בעיקר טכנולוגיה, עסקים, סרטים. חלשה ב: כתבי דת, שירה קלאסית.</div>
      </div>
    </div>
  </div>
</section>

</div><!-- /wrap -->

<footer>
  <p>מחקר ע"י <a href="https://www.shayahal.com/">shayahal.com</a> · ניתוח חידוני הארץ לאורך שנים</p>
  <p style="margin-top:12px; font-size:0.78rem; opacity:0.5;">כל הזכויות שמורות ליוענה גונן, אנחנו אוהבים אותך אל תפסיקי לעולם ♡</p>
</footer>

<script>
// ═══ PIE CHART ENGINE ═══
const PIE_COLORS = ['#7b6ef6','#f0616b','#f5a623','#34d399','#60a5fa','#f472b6','#fb923c'];
const TWO_PI = Math.PI * 2;
const CX = 100, CY = 100, R = 70, STROKE = 40;
const CIRC = TWO_PI * R;

function buildPie(svgId, legendId, data) {
  const svg = document.getElementById(svgId);
  const leg = document.getElementById(legendId);
  const total = data.reduce((s,d) => s + d.v, 0);
  let offset = 0;

  data.forEach((d, i) => {
    const pct = d.v / total;
    const dash = pct * CIRC;
    const col = PIE_COLORS[i % PIE_COLORS.length];

    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx', CX);
    circle.setAttribute('cy', CY);
    circle.setAttribute('r', R);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', col);
    circle.setAttribute('stroke-width', STROKE);
    circle.setAttribute('stroke-dasharray', '0 ' + CIRC);
    circle.setAttribute('stroke-dashoffset', -(offset * CIRC));
    circle.style.transition = 'stroke-dasharray 1.3s cubic-bezier(0.4,0,0.2,1) ' + (i*0.08) + 's';
    circle.setAttribute('transform', 'rotate(-90 ' + CX + ' ' + CY + ')');
    circle.dataset.dash = dash;
    svg.appendChild(circle);
    offset += pct;

    // legend
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<div class="legend-dot" style="background:' + col + '"></div><span class="legend-name">' + d.label + '</span><span class="legend-pct">' + d.v + '%</span>';
    leg.appendChild(item);
  });
}

buildPie('litPie','litLegend', [
  {label:'פרוזה עולמית', v:34.5},
  {label:'ספרות עברית', v:23.6},
  {label:'שירה', v:20.7},
  {label:'טקסט דתי', v:10.1},
  {label:'מחזות', v:6.4},
  {label:'ספרי ילדים', v:4.7},
]);

buildPie('cinPie','cinLegend', [
  {label:'קלאסיקות 40s–60s', v:27},
  {label:'סרטים ישראלים 60–90', v:25},
  {label:'1990s–2000s', v:24},
  {label:'1970s–1980s', v:13},
  {label:'2010s+', v:11},
]);

buildPie('geoPie','geoLegend', [
  {label:'ישראל', v:29},
  {label:'המזרח התיכון', v:18},
  {label:'אירופה', v:15},
  {label:'אסיה', v:12},
  {label:'אמריקה', v:9},
  {label:'אפריקה', v:6},
  {label:'אוסטרליה ופסיפיק', v:3},
  {label:'אנטרקטיקה', v:1},
]);

// ═══ INTERSECTION OBSERVER ═══
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add('visible');

    // bars
    el.querySelectorAll('.bar-fill').forEach(b => setTimeout(() => b.classList.add('loaded'), 80));
    el.querySelectorAll('.parl-bar').forEach(b => setTimeout(() => b.classList.add('loaded'), 80));

    // pie slices inside this section
    el.querySelectorAll('circle[data-dash]').forEach(c => {
      setTimeout(() => {
        c.setAttribute('stroke-dasharray', c.dataset.dash + ' ' + CIRC);
      }, 150);
    });

    io.unobserve(el);
  });
}, {threshold: 0.12});

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
</script>
</body>
</html>
`;
