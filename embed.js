/*
  Embeds the quiz on any page, such as a Phantom (GoHighLevel) funnel page:

    <art-selling-quiz></art-selling-quiz>
    <script src="https://quiz.michellefrost.com/embed.js"></script>

  Optional attributes on <art-selling-quiz>:
    signup-url="…"     your Phantom Inbound Webhook URL (overrides quiz-data.js)
    theme="auto"       follow the visitor's light/dark setting (default: always light)
    min-height="auto"  don't stretch the quiz to fill the screen
*/
(function () {
  var VERSION = "7";
  var script = document.currentScript;
  var base = script ? script.src.replace(/[^\/]*(\?.*)?$/, "") : "";

  // Web fonts must be declared on the page itself to be usable inside the quiz.
  if (!document.querySelector("link[data-art-quiz-font]")) {
    var font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap";
    font.setAttribute("data-art-quiz-font", "");
    document.head.appendChild(font);
  }

  function load(file) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.charset = "utf-8"; // in case the host page doesn't declare its encoding
      s.src = base + file + "?v=" + VERSION;
      s.onload = resolve;
      s.onerror = function () { reject(new Error("Couldn't load " + file)); };
      document.head.appendChild(s);
    });
  }
  var ready = window.ArtQuiz && window.ArtQuiz.mount && window.QUIZ && window.scoreQuiz ? Promise.resolve()
    : load("quiz-data.js").then(function () { return load("icons.js"); }).then(function () { return load("scoring.js"); }).then(function () { return load("app.js"); });

  function ArtSellingQuiz() { return Reflect.construct(HTMLElement, [], ArtSellingQuiz); }
  ArtSellingQuiz.prototype = Object.create(HTMLElement.prototype);
  ArtSellingQuiz.prototype.constructor = ArtSellingQuiz;
  ArtSellingQuiz.prototype.connectedCallback = function () {
    if (this._mounted) return;
    this._mounted = true;
    var host = this, root = this.attachShadow({ mode: "open" });
    var mh = host.getAttribute("min-height");
    if (mh) host.style.setProperty("--min-h", mh === "auto" ? "0" : mh);
    root.innerHTML = '<link rel="stylesheet" href="' + base + 'quiz.css?v=' + VERSION + '"><main class="stage" id="stage" aria-live="polite" style="visibility:hidden"></main>';
    var css = new Promise(function (resolve) { var l = root.querySelector("link"); l.onload = resolve; l.onerror = resolve; });
    Promise.all([ready, css]).then(function () {
      root.getElementById("stage").style.visibility = "";
      window.ArtQuiz.mount(host, root);
    }).catch(function (e) {
      root.getElementById("stage").style.visibility = "";
      root.getElementById("stage").textContent = "Sorry, the quiz couldn't load. Please refresh the page.";
      if (window.console) console.error(e);
    });
  };
  Object.setPrototypeOf(ArtSellingQuiz, HTMLElement);
  if (!customElements.get("art-selling-quiz")) customElements.define("art-selling-quiz", ArtSellingQuiz);
})();
