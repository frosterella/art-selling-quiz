// Checks the quiz is balanced: run with `node test-scoring.js`.
global.window = global;
require("./quiz-data.js");
const scoreQuiz = require("./scoring.js");
const quiz = window.QUIZ, keys = Object.keys(quiz.outcomes);
let ok = true;
const fail = (m) => { ok = false; console.log("FAIL: " + m); };

// 1. Every answer points at real outcomes.
quiz.questions.forEach((q, i) => q.a.forEach(o => Object.keys(o.s).forEach(k => { if (!keys.includes(k)) fail(`Q${i + 1} uses unknown outcome "${k}"`); })));

// 2. How often each outcome is the main (2-point) and secondary (1-point) match.
const main = {}, second = {};
keys.forEach(k => { main[k] = 0; second[k] = 0; });
quiz.questions.forEach(q => q.a.forEach(o => Object.entries(o.s).forEach(([k, v]) => (v >= 2 ? main : second)[k]++)));
console.log("Main / secondary answers per outcome:");
keys.forEach(k => console.log(`  ${k.padEnd(11)} ${main[k]} / ${second[k]}`));

// 3. Every outcome can be reached: picking its answers wherever possible gives that result.
keys.forEach(k => {
  const answers = quiz.questions.map(q => { let best = 0; q.a.forEach((o, j) => { if ((o.s[k] || 0) > (q.a[best].s[k] || 0)) best = j; }); return best; });
  const r = scoreQuiz(quiz, answers);
  if (r.top !== k) fail(`"${k}" can't win even with its best answers (got ${r.top})`);
});

// 4. Answering at random spreads results fairly evenly across all six.
const N = 200000, wins = {};
keys.forEach(k => wins[k] = 0);
for (let n = 0; n < N; n++) wins[scoreQuiz(quiz, quiz.questions.map(q => Math.floor(Math.random() * q.a.length))).top]++;
console.log(`Results from ${N} random quiz-takers:`);
keys.forEach(k => { const p = wins[k] / N * 100; console.log(`  ${k.padEnd(11)} ${p.toFixed(1)}%`); if (p < 11 || p > 23) fail(`${k} wins ${p.toFixed(1)}% of random runs (want 11–23%)`); });
console.log(ok ? "All checks passed." : "Some checks failed.");
process.exit(ok ? 0 : 1);
