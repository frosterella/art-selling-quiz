/*
  The quiz itself. embed.js loads this file and calls ArtQuiz.mount() for each <art-selling-quiz> on the page.
  Everything is drawn inside the element's shadow root, so the host page's styles can't change it.
*/
window.ArtQuiz = window.ArtQuiz || {};
window.ArtQuiz.mount = function (host, root) {
  var Q = window.QUIZ, OUT = Q.outcomes, QS = Q.questions;
  // Settings can be overridden on the element itself, e.g. <art-selling-quiz signup-url="…">.
  var S = Object.assign({}, Q.settings);
  if (host.getAttribute("signup-url")) S.signupUrl = host.getAttribute("signup-url");
  // signup="shopify": sign people up as Shopify email subscribers. Only works when the quiz sits on a page of the Shopify store itself.
  if (host.getAttribute("signup")) S.signupTo = host.getAttribute("signup");
  var collectsEmail = S.signupTo === "shopify" || !!S.signupUrl;
  var stage = root.getElementById("stage");
  var answers = [], current = 0, result = null, lead = { name: "", email: "" };
  function $(id) { return root.getElementById(id); }
  function track(event, data) { try { if (typeof window.fbq === "function") window.fbq("track", event, data || {}); } catch (x) {} }

  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function show(html, cls) {
    stage.innerHTML = '<section class="screen ' + (cls || "") + '">' + html + "</section>";
    // Bring the top of the quiz into view when it has scrolled off the top of the screen.
    var top = host.getBoundingClientRect().top;
    if (top < 0) window.scrollBy(0, top);
    var f = stage.querySelector("[data-focus]");
    if (f) f.focus({ preventScroll: true });
  }
  function shapes(dot) { return '<span class="shape s-sun" aria-hidden="true"></span><span class="shape s-arc" aria-hidden="true"></span>' + (dot ? '<span class="shape s-dot" aria-hidden="true"></span>' : ""); }
  function colorVar(k) { return "var(--" + (OUT[k].color || "teal") + ")"; }

  /* ---------- built-in mid-century illustrations ---------- */
  var ART = {
    sunrise: '<rect x="0" y="118" width="320" height="62" rx="10" fill="var(--line)"/><circle cx="160" cy="118" r="58" fill="var(--mustard)"/><path d="M40 118 v-46 l40 -22 l40 22 v46" fill="var(--teal)"/><path d="M200 118 v-46 l40 -22 l40 22 v46" fill="var(--orange)"/><path d="M40 72 h80 M200 72 h80" stroke="var(--surface)" stroke-width="6" stroke-dasharray="10 10"/>',
    speech: '<rect x="40" y="30" width="150" height="80" rx="40" fill="var(--teal)"/><path d="M80 104 l-20 34 l44 -26z" fill="var(--teal)"/><rect x="150" y="80" width="130" height="66" rx="33" fill="var(--mustard)"/><path d="M240 140 l22 28 l-6 -34z" fill="var(--mustard)"/><circle cx="90" cy="70" r="7" fill="var(--surface)"/><circle cx="115" cy="70" r="7" fill="var(--surface)"/><circle cx="140" cy="70" r="7" fill="var(--surface)"/>',
    shapes: '<circle cx="90" cy="92" r="56" fill="var(--teal)"/><rect x="170" y="44" width="40" height="40" rx="6" fill="var(--orange)"/><rect x="222" y="44" width="40" height="40" rx="6" fill="var(--orange)"/><rect x="170" y="96" width="40" height="40" rx="6" fill="var(--orange)"/><rect x="222" y="96" width="40" height="40" rx="6" fill="var(--mustard)"/><path d="M60 160 h200" stroke="var(--line)" stroke-width="8" stroke-linecap="round"/>',
    eye: '<path d="M30 90 Q160 -10 290 90 Q160 190 30 90z" fill="var(--mustard)"/><circle cx="160" cy="90" r="44" fill="var(--teal)"/><circle cx="160" cy="90" r="18" fill="var(--ink)"/><circle cx="172" cy="78" r="7" fill="var(--surface)"/>',
    star: '<circle cx="160" cy="90" r="74" fill="var(--teal)"/><path d="M160 34 l15 40 h42 l-34 25 l13 41 l-36 -25 l-36 25 l13 -41 l-34 -25 h42z" fill="var(--mustard)"/><circle cx="262" cy="36" r="12" fill="none" stroke="var(--orange)" stroke-width="6"/><circle cx="56" cy="146" r="9" fill="var(--orange)"/>',
    ledger: '<rect x="70" y="24" width="180" height="140" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="4"/><path d="M96 60 h80 M96 88 h120 M96 116 h60" stroke="var(--line)" stroke-width="10" stroke-linecap="round"/><circle cx="236" cy="140" r="36" fill="var(--mustard)"/><circle cx="236" cy="140" r="22" fill="none" stroke="var(--surface)" stroke-width="5"/><circle cx="64" cy="48" r="20" fill="var(--teal)"/>',
    laptop: '<rect x="80" y="30" width="160" height="104" rx="10" fill="var(--teal)"/><rect x="92" y="42" width="136" height="80" rx="4" fill="var(--surface)"/><path d="M56 140 h208 l-14 18 h-180z" fill="var(--line)"/><rect x="104" y="54" width="52" height="40" rx="4" fill="var(--mustard)"/><path d="M166 58 h48 M166 72 h36 M166 86 h44 M104 106 h110" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/><circle cx="262" cy="40" r="14" fill="var(--orange)"/>',
    repeat: (function () { var s = "", c = ["var(--teal)", "var(--mustard)", "var(--orange)", "var(--olive)"]; for (var r = 0; r < 4; r++) for (var i = 0; i < 9; i++) s += '<circle cx="' + (40 + i * 30) + '" cy="' + (36 + r * 36) + '" r="11" fill="' + c[(i + r) % 4] + '"/>'; return s; })(),
    calendar: '<rect x="60" y="30" width="200" height="130" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="4"/><rect x="60" y="30" width="200" height="34" rx="14" fill="var(--teal)"/><g fill="var(--line)"><rect x="80" y="80" width="22" height="22" rx="5"/><rect x="112" y="80" width="22" height="22" rx="5"/><rect x="144" y="80" width="22" height="22" rx="5"/><rect x="80" y="114" width="22" height="22" rx="5"/><rect x="112" y="114" width="22" height="22" rx="5"/><rect x="144" y="114" width="22" height="22" rx="5"/></g><rect x="184" y="80" width="56" height="56" rx="10" fill="var(--mustard)"/><circle cx="290" cy="40" r="16" fill="var(--orange)"/>',
    hearts: '<circle cx="110" cy="78" r="34" fill="var(--teal)"/><rect x="72" y="116" width="76" height="50" rx="30" fill="var(--teal)"/><circle cx="210" cy="78" r="34" fill="var(--orange)"/><rect x="172" y="116" width="76" height="50" rx="30" fill="var(--orange)"/><path d="M160 60 c-10 -16 -34 -8 -28 10 c4 12 28 26 28 26 s24 -14 28 -26 c6 -18 -18 -26 -28 -10z" fill="var(--mustard)"/>',
    envelope: '<rect x="60" y="44" width="200" height="120" rx="12" fill="var(--teal)"/><path d="M60 56 l100 64 l100 -64" fill="none" stroke="var(--surface)" stroke-width="6" stroke-linejoin="round"/><circle cx="258" cy="46" r="26" fill="var(--mustard)"/><path d="M247 46 l8 8 l14 -16" fill="none" stroke="#2A2320" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  function picture(q) {
    if (q.image) return '<img class="photo" src="' + esc(q.image) + '" alt="' + esc(q.imageAlt || "") + '">';
    if (q.art && ART[q.art]) return '<div class="art" aria-hidden="true"><svg viewBox="0 0 320 180">' + ART[q.art] + "</svg></div>";
    return "";
  }

  function answerPic(a) {
    if (a.image) return '<span class="pic"><img src="' + esc(a.image) + '" alt="' + esc(a.alt || "") + '"></span>';
    var art = window.ANSWER_ART && window.ANSWER_ART[a.art];
    return art ? '<span class="pic" aria-hidden="true"><svg viewBox="0 0 100 100">' + art + '</svg></span>' : "";
  }

  /* ---------- screens ---------- */
  function intro() {
    show('<div class="card">' + shapes(true) +
      '<p class="byline">' + esc(S.byline) + '</p>' +
      '<h1>' + esc(S.title) + '</h1>' +
      '<p class="lede">' + esc(S.intro) + '</p>' +
      '<div class="meta"><span>' + QS.length + ' questions</span><span>About 3 minutes</span><span>Six possible results</span></div>' +
      '<button class="btn" id="start" data-focus>Start the quiz</button></div>');
    $("start").onclick = function () { answers = []; current = 0; question(); };
  }

  function question() {
    var q = QS[current], n = current + 1, keys = "ABCDEFGH";
    show(
      '<div class="progress"><div class="progress-top"><span>Question ' + n + ' of ' + QS.length + '</span><span>' + (QS.length - n === 0 ? 'Last one!' : (QS.length - n) + ' to go') + '</span></div>' +
      '<div class="bar"><i style="width:' + (current / QS.length * 100) + '%"></i></div></div>' +
      picture(q) +
      '<h2 class="question" tabindex="-1" data-focus>' + esc(q.q) + '</h2>' +
      '<ul class="answers">' + q.a.map(function (a, i) {
        return '<li><button class="answer' + (answers[current] === i ? " chosen" : "") + '" data-i="' + i + '">' + answerPic(a) + '<span class="txt"><span class="key">' + keys[i] + '</span><span>' + esc(a.t) + '</span></span></button></li>';
      }).join("") + '</ul>' +
      '<div class="qfoot">' + (current > 0 ? '<button class="linkish" id="back">← Back</button>' : '<span></span>') +
      '<span class="hint">Tip: press ' + keys.slice(0, q.a.length).split("").join(", ") + ' to answer</span></div>', "top");
    requestAnimationFrame(function () { var b = stage.querySelector(".bar i"); if (b) b.style.width = (n / QS.length * 100) + "%"; });
    stage.querySelectorAll(".answer").forEach(function (b) { b.onclick = function () { choose(+b.dataset.i); }; });
    var back = $("back");
    if (back) back.onclick = function () { current--; question(); };
  }

  var locked = false;
  function choose(i) {
    if (locked) return;
    locked = true;
    answers[current] = i;
    stage.querySelectorAll(".answer").forEach(function (b) { b.classList.toggle("chosen", +b.dataset.i === i); });
    setTimeout(function () {
      locked = false;
      current++;
      if (current >= QS.length) return matching();
      if (S.breatherAfter && current === S.breatherAfter && !breatherSeen) return breather();
      question();
    }, 380);
  }

  var breatherSeen = false;
  function breather() {
    breatherSeen = true;
    show('<div class="card center">' + shapes(true) +
      '<p class="byline">Halfway there</p>' +
      '<h1>Nice work. Your picture is coming together.</h1>' +
      '<p class="lede">There are no right answers. Go with your gut, not the answer you think a “real artist” would give.</p>' +
      '<button class="btn" id="go" data-focus>Keep going</button></div>');
    $("go").onclick = question;
  }

  function matching() {
    result = scoreQuiz(Q, answers);
    show('<div class="orbit" aria-hidden="true"><span></span><span></span><span></span></div><p class="status" id="status">Reading your answers…</p>', "center");
    var lines = ["Weighing up crowds and quiet studios…", "Checking your making style…", "Finding where you'll shine…"], k = 0;
    var t = setInterval(function () { var el = $("status"); if (el && k < lines.length) el.textContent = lines[k++]; }, 650);
    setTimeout(function () { clearInterval(t); reveal(); }, 2600);
  }

  function heroCard(key, who) {
    var o = OUT[key];
    return '<div class="card hero" style="--oc:' + colorVar(key) + '">' + shapes(true) +
      '<p class="byline">' + esc(S.byline) + '</p>' +
      '<p class="you-are">' + who + '</p>' +
      '<h1>' + esc(o.name) + '</h1>' +
      '<span class="place">Best place to sell: ' + esc(o.place) + '</span>' +
      '<p class="tagline">' + esc(o.tagline) + '</p></div>';
  }

  // Step 1: reveal the result's name, then offer the full breakdown and checklist in exchange for an email.
  function reveal() {
    var o = OUT[result.top], ask = collectsEmail;
    show(heroCard(result.top, "You're") +
      '<div class="unlock" style="--oc:' + colorVar(result.top) + '">' +
        '<p class="eyebrow">Your full breakdown is ready</p>' +
        '<h2>Get your full breakdown, plus a free checklist made for you</h2>' +
        '<ul class="gets">' +
          '<li>Your selling personality profile and strengths</li>' +
          '<li>Why this way of selling suits you, and what to watch out for</li>' +
          '<li>Your first three steps</li>' +
          '<li>Your runner-up, and how you match all six</li>' +
          '<li class="bonus"><span><strong>Free printable:</strong> ' + esc(o.checklist.title) + '</span></li>' +
        '</ul>' +
        '<form id="lead" novalidate>' +
          (ask ? '<div class="fields"><div class="field"><label for="fn">First name</label><input id="fn" type="text" autocomplete="given-name" required></div>' +
                 '<div class="field"><label for="em">Email</label><input id="em" type="email" autocomplete="email" required></div></div>' : "") +
          '<button class="btn" type="submit">' + (ask ? "Send me my breakdown" : "See my full breakdown") + '</button>' +
          '<div class="err" id="err" role="alert"></div>' +
          (ask ? '<p class="small">' + esc(S.unlockNote) + ' ' + esc(S.privacyNote) + '</p>' : "") +
        '</form>' +
      '</div>' +
      '<div class="actions"><button class="linkish" id="again">Retake the quiz</button></div>', "top");
    $("again").onclick = restart;
    $("lead").onsubmit = function (e) {
      e.preventDefault();
      if (!ask) return showResult(result);
      var name = $("fn").value.trim(), email = $("em").value.trim(), err = $("err");
      if (!name) { err.textContent = "Please add your first name."; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = "Please check your email address."; return; }
      lead.name = name; lead.email = email;
      var btn = e.target.querySelector("button[type=submit]"); btn.disabled = true; btn.textContent = "One moment…";
      send(name, email).then(function () { showResult(result); });
    };
  }

  // A shared link shows only the result's name, with an invitation to take the quiz.
  function sharedView(key) {
    show(heroCard(key, "A friend's selling personality is") +
      '<div class="panel center"><h2>What\'s yours?</h2><p>Answer ' + QS.length + ' quick questions to find the place to sell your art that suits you best.</p>' +
      '<button class="btn" id="again">Take the quiz</button></div>', "top");
    $("again").onclick = restart;
  }

  function restart() { try { history.replaceState(null, "", location.pathname); } catch (x) {} breatherSeen = false; lead.name = ""; intro(); }

  // Signs the person up as a Shopify subscriber, using the store's own newsletter sign-up (the same as a footer sign-up form).
  // Tags: "art-quiz", the result (e.g. "quiz-market") and the runner-up (e.g. "quiz-also-online"), which the email automation uses.
  function sendToShopify(name, email) {
    var body = new URLSearchParams();
    body.append("form_type", "customer");
    body.append("utf8", "\u2713");
    body.append("contact[email]", email);
    body.append("contact[first_name]", name);
    var tags = ["art-quiz", "quiz-" + result.top];
    if (result.runnerUp) tags.push("quiz-also-" + result.runnerUp);
    body.append("contact[tags]", tags.join(", "));
    track("Lead", { content_name: OUT[result.top].name });
    var timeout = new Promise(function (r) { setTimeout(r, 6000); });
    var post = fetch("/contact#contact_form", { method: "POST", body: body, credentials: "same-origin" })
      .then(function (res) { if (/challenge/.test(res.url) && window.console) console.warn("Shopify asked for a captcha; the sign-up may not have been saved."); })
      .catch(function () {});
    return Promise.race([post, timeout]);
  }

  function send(name, email) {
    if (S.signupTo === "shopify") return sendToShopify(name, email);
    if (!S.signupUrl) return Promise.resolve();
    var body = new URLSearchParams();
    body.append(S.fieldEmail, email);
    body.append(S.fieldName, name);
    body.append(S.fieldResult, OUT[result.top].name);
    body.append("quiz_result_key", result.top);
    body.append("quiz_runner_up", result.runnerUp ? OUT[result.runnerUp].name : "");
    body.append("source", "art-selling-quiz");
    track("Lead", { content_name: OUT[result.top].name });
    // no-cors: the email tool receives the details even though the browser can't read its reply.
    var timeout = new Promise(function (r) { setTimeout(r, 4000); });
    return Promise.race([fetch(S.signupUrl, { method: "POST", mode: "no-cors", body: body }).catch(function () {}), timeout]);
  }

  // Adds the person's name and email to the checkout link, so the order form is already filled in.
  function guideUrl(url) {
    if (!url || url === "#" || !S.prefillCheckout || !lead.email) return url;
    try {
      var u = new URL(url, location.href);
      u.searchParams.set("email", lead.email);
      u.searchParams.set("first_name", lead.name);
      return u.toString();
    } catch (x) { return url; }
  }

  // Opens the checklist on its own clean page and starts printing (or saving as PDF).
  function printChecklist(o) {
    var w = window.open("", "_blank");
    if (!w) return;
    var items = o.checklist.items.map(function (t) { return '<li><span class="box"></span><span>' + esc(t) + "</span></li>"; }).join("");
    w.document.write('<!doctype html><html lang="en"><head><meta charset="utf-8"><title>' + esc(o.checklist.title) + '</title>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap">' +
      '<style>body{font-family:Jost,Futura,"Century Gothic",system-ui,sans-serif;color:#2A2320;margin:48px auto;max-width:640px;padding:0 24px;line-height:1.5}' +
      'p.k{color:#C4572C;font-weight:600;letter-spacing:.14em;text-transform:uppercase;font-size:12px;margin:0}h1{font-size:28px;margin:6px 0 4px;font-weight:600}' +
      'p.s{color:#6B5F57;margin:0 0 20px}ul{list-style:none;padding:0;margin:0}li{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #E4D8C6;break-inside:avoid}' +
      '.box{flex:0 0 18px;height:18px;border:2px solid #2A2320;border-radius:4px;margin-top:3px}footer{margin-top:24px;color:#6B5F57;font-size:13px}</style></head><body>' +
      '<p class="k">Your free checklist</p><h1>' + esc(o.checklist.title) + '</h1><p class="s">' + esc(o.name) + ' · ' + esc(o.place) + '</p><ul>' + items + '</ul>' +
      '<footer>' + esc(S.byline) + '</footer><script>window.onload=function(){setTimeout(function(){window.print()},400)}<\/script></body></html>');
    w.document.close();
  }

  // Step 2: the full breakdown.
  function showResult(r) {
    var o = OUT[r.top], ru = OUT[r.runnerUp], c = colorVar(r.top);
    var mix = r.ranked ? '<div class="panel"><p class="eyebrow">Your selling mix</p><h2>How you match all six</h2><div class="mix">' +
      r.ranked.map(function (x, i) {
        return '<div class="mix-row' + (i === 0 ? " top" : "") + '"><span>' + esc(OUT[x.key].name) + '</span><div class="track"><i data-w="' + x.pct + '" style="background:' + colorVar(x.key) + '"></i></div><b>' + x.pct + '%</b></div>';
      }).join("") + '</div></div>' : "";
    show(
      heroCard(r.top, lead.name ? esc(lead.name) + ", you're" : "You're") +
      '<div class="panel"><p class="eyebrow">Your selling personality</p><p>' + esc(o.profile) + '</p><ul class="chips">' + o.traits.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + '</ul></div>' +
      '<div class="two"><div class="panel"><p class="eyebrow">Why it suits you</p><p>' + esc(o.whyItFits) + '</p></div>' +
      '<div class="panel"><p class="eyebrow">Watch out for</p><p>' + esc(o.watchOut) + '</p></div></div>' +
      '<div class="panel"><p class="eyebrow">Your first three steps</p><ol class="steps">' + o.steps.map(function (s) { return "<li><span>" + esc(s) + "</span></li>"; }).join("") + '</ol></div>' +
      '<div class="panel checklist" id="checklist"><div class="cl-head"><div><p class="eyebrow">Your free checklist</p><h2>' + esc(o.checklist.title) + '</h2></div>' +
        '<button class="btn ghost small-btn" id="print">Print or save as PDF</button></div>' +
        '<ul class="cl">' + o.checklist.items.map(function (t, i) { return '<li><input type="checkbox" id="cl' + i + '"><label for="cl' + i + '">' + esc(t) + '</label></li>'; }).join("") + '</ul></div>' +
      (ru ? '<div class="panel"><p class="eyebrow">Your runner-up</p><h2>A streak of ' + esc(ru.name) + '</h2><p>You also lean towards <strong>' + esc(ru.place) + '</strong>. ' + esc(ru.tagline) + ' Many makers combine two ways of selling, and this one pairs well with your main result.</p></div>' : "") +
      mix +
      '<div class="upsell" style="--oc:' + c + '"><div class="book" aria-hidden="true"></div><div class="u-body"><p class="eyebrow">Ready for the next step?</p><h2>' + esc(o.guide.title) + '</h2><p>' + esc(o.guide.blurb) + '</p><p class="price">' + esc(o.guide.price) + '</p>' +
        '<a class="btn" id="guide" href="' + esc(guideUrl(o.guide.url)) + '">Get the guide</a></div></div>' +
      '<div class="actions">' + '<button class="btn dark" id="share">Share my result</button><button class="btn ghost" id="again">Retake the quiz</button>' + '<span class="toast" id="toast" role="status"></span></div>' +
      '<footer>' + esc(S.byline) + '</footer>', "top");
    requestAnimationFrame(function () { setTimeout(function () { stage.querySelectorAll(".track i").forEach(function (i) { i.style.width = i.dataset.w + "%"; }); }, 120); });
    $("again").onclick = restart;
    $("print").onclick = function () { printChecklist(o); };
    $("guide").onclick = function () { track("InitiateCheckout", { content_name: o.guide.title, value: parseFloat(String(o.guide.price).replace(/[^0-9.]/g, "")) || 0, currency: S.currency || "CAD" }); };
    var share = $("share");
    if (share) share.onclick = function () {
      var url = location.origin + location.pathname + "?result=" + r.top, text = "I'm " + o.name + "! Find out where you should sell your art:";
      if (navigator.share) navigator.share({ title: S.title, text: text, url: url }).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(text + " " + url).then(function () { $("toast").textContent = "Link copied!"; });
    };
  }

  /* ---------- keyboard: A–D or 1–4 answers the current question ---------- */
  document.addEventListener("keydown", function (e) {
    if (!stage.querySelector(".answers") || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = (e.composedPath && e.composedPath()[0]) || e.target;
    if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "")) return;
    var r = host.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    var k = e.key.toUpperCase(), i = "ABCDEFGH".indexOf(k);
    if (i < 0 && /^[1-8]$/.test(k)) i = +k - 1;
    if (i >= 0 && i < QS[current].a.length) choose(i);
  });

  /* ---------- start: a shared result link opens that result, otherwise the welcome screen ---------- */
  var params = new URLSearchParams(location.search), shared = params.get("result");
  if (shared && OUT[shared]) sharedView(shared);
  else intro();
};
