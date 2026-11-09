/*
  Rebuilds the six printable checklists in /checklists from the words in quiz-data.js.

    node tools/make-checklists.js

  Needs Playwright with Chromium installed. Run it after changing any checklist in quiz-data.js.
*/
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "quiz-data.js"));
const Q = window.QUIZ;

const COLORS = { teal: "#1F6F6B", mustard: "#E2A72E", orange: "#C4572C", olive: "#74863A", plum: "#7B4B6E", rose: "#B8575F" };
const FILES = {
  market: "market-maker", cafe: "local-favourite", gallery: "studio-devotee",
  wholesale: "production-pro", online: "online-independent", commission: "custom-collaborator"
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function page(o) {
  const c = COLORS[o.color] || COLORS.teal;
  const items = o.checklist.items.map((t, i) =>
    `<li><span class="box"></span><span class="n">${i + 1}</span><span>${esc(t)}</span></li>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
@font-face { font-family: Jost; src: url("jost.woff2") format("woff2"); font-weight: 100 900; }
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; }
body { font-family: Jost, sans-serif; color: #2A2320; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 8.5in; height: 11in; position: relative; overflow: hidden; background: #FFFDF9; padding: 0.85in 0.75in 0.7in; }
.sun { position: absolute; width: 2.9in; height: 2.9in; border-radius: 50%; background: ${c}; right: -0.9in; top: -1.25in; }
.ring { position: absolute; width: 0.62in; height: 0.62in; border-radius: 50%; border: 6px solid #E2A72E; right: 1.05in; top: 0.5in; }
.dot { position: absolute; width: 1.3in; height: 1.3in; border-radius: 50%; background: #1F6F6B; left: -0.75in; bottom: -0.85in; }
.k { color: ${c}; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; font-size: 10pt; margin: 0 0 8px; }
h1 { font-size: 25pt; line-height: 1.15; margin: 0 0 8px; font-weight: 600; max-width: 5.6in; }
.s { color: #6B5F57; margin: 0 0 18px; font-size: 11pt; }
ul { list-style: none; padding: 0; margin: 0; }
li { display: flex; align-items: flex-start; gap: 12px; padding: 7px 0; border-bottom: 1px solid #E4D8C6; font-size: 11pt; line-height: 1.45; }
.box { flex: 0 0 13px; height: 13px; border: 1.6px solid #2A2320; border-radius: 3px; margin-top: 3px; }
.n { flex: 0 0 22px; color: ${c}; font-weight: 600; }
.more { margin-top: 18px; background: #FBEDCF; border-radius: 10px; padding: 12px 16px; font-size: 11pt; }
.foot { position: absolute; left: 0.75in; right: 0.75in; bottom: 0.45in; display: flex; justify-content: space-between; color: #6B5F57; font-size: 9pt; }
</style></head><body><div class="page">
<span class="sun"></span><span class="ring"></span><span class="dot"></span>
<p class="k">Your free checklist · ${esc(o.name)}</p>
<h1>${esc(o.checklist.title)}</h1>
<p class="s">Best place to sell: ${esc(o.place)}</p>
<ul>${items}</ul>
<div class="more"><strong>Ready for more?</strong> ${esc(o.guide.title)} takes every step further.</div>
<div class="foot"><span>Where Should You Sell Your Art? · by Michelle Frost</span><span>michellefrost.com</span></div>
</div></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const p = await browser.newPage();
  for (const [key, file] of Object.entries(FILES)) {
    const o = Q.outcomes[key];
    const tmp = path.join(__dirname, `_${file}.html`);
    fs.writeFileSync(tmp, page(o));
    await p.goto("file://" + tmp);
    await p.evaluate(() => document.fonts.ready);
    await p.pdf({ path: path.join(root, "checklists", `${file}-checklist.pdf`), format: "Letter", printBackground: true, preferCSSPageSize: true });
    fs.unlinkSync(tmp);
    console.log("made", file);
  }
  await browser.close();
})();
