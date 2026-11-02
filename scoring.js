/* Works out the result from the answers. Used by index.html and by test-scoring.js. */
(function (root) {
  function scoreQuiz(quiz, answers) {
    var keys = Object.keys(quiz.outcomes), raw = {}, max = {};
    keys.forEach(function (k) { raw[k] = 0; max[k] = 0; });
    quiz.questions.forEach(function (q, i) {
      keys.forEach(function (k) {
        max[k] += Math.max.apply(null, q.a.map(function (opt) { return opt.s[k] || 0; }));
      });
      var pick = q.a[answers[i]];
      if (pick) Object.keys(pick.s).forEach(function (k) { raw[k] += pick.s[k]; });
    });
    // Ties go to the outcome the person picked most often as a main (2-point) match, then to the order listed.
    var firsts = {};
    keys.forEach(function (k) { firsts[k] = 0; });
    quiz.questions.forEach(function (q, i) {
      var pick = q.a[answers[i]];
      if (pick) Object.keys(pick.s).forEach(function (k) { if (pick.s[k] >= 2) firsts[k]++; });
    });
    var ranked = keys.map(function (k, idx) {
      return { key: k, pct: max[k] ? Math.round(raw[k] / max[k] * 100) : 0, exact: max[k] ? raw[k] / max[k] : 0, firsts: firsts[k], idx: idx };
    }).sort(function (a, b) { return (b.exact - a.exact) || (b.firsts - a.firsts) || (a.idx - b.idx); });
    return { top: ranked[0].key, runnerUp: ranked[1].key, ranked: ranked };
  }
  root.scoreQuiz = scoreQuiz;
  if (typeof module !== "undefined") module.exports = scoreQuiz;
})(typeof window !== "undefined" ? window : globalThis);
