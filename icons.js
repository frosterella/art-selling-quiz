/*
  Answer illustrations, mid-century style. Each is drawn in a 100 × 100 box using the page's colours.
  To use one, give an answer art: "name". To use your own picture instead, give it image: "photos/file.jpg".
*/
window.ANSWER_ART = (function () {
  var T = "var(--teal)", M = "var(--mustard)", O = "var(--orange)", V = "var(--olive)", P = "var(--plum)", R = "var(--rose)",
      L = "var(--line)", W = "var(--paper)", I = "var(--ink)", Q = "var(--muted)";
  function awning(y, a, b) {
    var s = "";
    for (var i = 0; i < 4; i++) {
      var c = i % 2 ? b : a;
      s += '<rect x="' + (14 + i * 18) + '" y="' + y + '" width="18" height="12" fill="' + c + '"/><circle cx="' + (23 + i * 18) + '" cy="' + (y + 12) + '" r="9" fill="' + c + '"/>';
    }
    return s;
  }
  return {
    // Q1
    stall: '<rect x="18" y="30" width="4" height="56" fill="' + I + '"/><rect x="78" y="30" width="4" height="56" fill="' + I + '"/>' + awning(22, O, M) +
      '<rect x="12" y="66" width="76" height="8" rx="2" fill="' + T + '"/><circle cx="30" cy="59" r="7" fill="' + M + '"/><rect x="43" y="50" width="12" height="16" rx="2" fill="' + V + '"/><circle cx="69" cy="58" r="8" fill="' + R + '"/>',
    easel: '<path d="M50 14 L30 90 M50 14 L70 90 M50 14 V90" stroke="' + I + '" stroke-width="4" stroke-linecap="round"/><rect x="24" y="24" width="52" height="42" rx="2" fill="' + W + '" stroke="' + L + '" stroke-width="3"/>' +
      '<circle cx="40" cy="44" r="10" fill="' + M + '"/><rect x="52" y="34" width="14" height="22" rx="2" fill="' + T + '"/><rect x="20" y="66" width="60" height="6" rx="2" fill="' + O + '"/>',
    cups: '<path d="M22 38 q5 -7 0 -14 M34 38 q5 -7 0 -14 M64 38 q5 -7 0 -14" stroke="' + Q + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<rect x="12" y="44" width="32" height="30" rx="8" fill="' + T + '"/><circle cx="46" cy="58" r="7" fill="none" stroke="' + T + '" stroke-width="4"/>' +
      '<rect x="54" y="44" width="28" height="30" rx="8" fill="' + O + '"/><circle cx="84" cy="58" r="6" fill="none" stroke="' + O + '" stroke-width="4"/><rect x="8" y="76" width="84" height="5" rx="2.5" fill="' + L + '"/>',
    checklist: '<rect x="22" y="16" width="56" height="72" rx="6" fill="' + W + '" stroke="' + L + '" stroke-width="3"/><rect x="38" y="10" width="24" height="12" rx="4" fill="' + T + '"/>' +
      '<path d="M31 36 l5 5 l9 -10 M31 54 l5 5 l9 -10 M31 72 l5 5 l9 -10" stroke="' + O + '" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M52 38 h18 M52 56 h14 M52 74 h18" stroke="' + L + '" stroke-width="5" stroke-linecap="round"/>',
    // Q2
    phone: '<rect x="30" y="10" width="40" height="80" rx="9" fill="' + I + '"/><rect x="35" y="19" width="30" height="58" rx="2" fill="' + W + '"/><circle cx="49" cy="36" r="7" fill="' + M + '"/>' +
      '<path d="M35 77 L47 58 L54 66 L65 54 V77 Z" fill="' + T + '"/><circle cx="50" cy="83" r="2.5" fill="' + Q + '"/>',
    shy: '<rect x="22" y="22" width="56" height="36" rx="18" fill="' + L + '"/><path d="M36 56 l-6 16 l16 -14 z" fill="' + L + '"/><circle cx="38" cy="40" r="4" fill="' + Q + '"/><circle cx="50" cy="40" r="4" fill="' + Q + '"/><circle cx="62" cy="40" r="4" fill="' + Q + '"/>' +
      '<circle cx="74" cy="76" r="9" fill="' + M + '"/><path d="M70 79 q4 3 8 0" stroke="' + I + '" stroke-width="2" fill="none" stroke-linecap="round"/>',
    pin: '<rect x="10" y="30" width="80" height="56" rx="8" fill="' + L + '"/><path d="M10 62 H90 M36 30 V86 M66 30 V86" stroke="' + W + '" stroke-width="5"/>' +
      '<path d="M50 12 a16 16 0 0 1 16 16 c0 12 -16 32 -16 32 s-16 -20 -16 -32 a16 16 0 0 1 16 -16z" fill="' + O + '"/><circle cx="50" cy="28" r="6" fill="' + W + '"/>',
    browser: '<rect x="12" y="18" width="76" height="64" rx="7" fill="' + W + '" stroke="' + T + '" stroke-width="4"/><path d="M12 25 a7 7 0 0 1 7 -7 h62 a7 7 0 0 1 7 7 v9 h-76z" fill="' + T + '"/>' +
      '<circle cx="21" cy="26" r="2.4" fill="' + W + '"/><circle cx="28" cy="26" r="2.4" fill="' + W + '"/><circle cx="35" cy="26" r="2.4" fill="' + W + '"/>' +
      '<rect x="20" y="41" width="17" height="16" rx="2" fill="' + M + '"/><rect x="41.5" y="41" width="17" height="16" rx="2" fill="' + O + '"/><rect x="63" y="41" width="17" height="16" rx="2" fill="' + V + '"/>' +
      '<rect x="20" y="60" width="17" height="16" rx="2" fill="' + R + '"/><rect x="41.5" y="60" width="17" height="16" rx="2" fill="' + P + '"/><rect x="63" y="60" width="17" height="16" rx="2" fill="' + T + '"/>',
    // Q3
    original: '<rect x="18" y="14" width="64" height="72" rx="3" fill="' + O + '"/><rect x="26" y="22" width="48" height="56" fill="' + W + '"/><circle cx="46" cy="46" r="15" fill="' + T + '"/>' +
      '<path d="M26 78 Q46 56 74 66 V78z" fill="' + M + '"/><circle cx="64" cy="32" r="4" fill="' + R + '"/>',
    batch: (function () { var s = ""; [12, 38, 64].forEach(function (x) { s += '<rect x="' + (x + 6) + '" y="34" width="12" height="12" fill="' + T + '"/><rect x="' + x + '" y="42" width="24" height="36" rx="9" fill="' + T + '"/><rect x="' + x + '" y="56" width="24" height="5" fill="' + M + '"/>'; }); return s + '<rect x="8" y="78" width="84" height="5" rx="2.5" fill="' + L + '"/>'; })(),
    sizes: '<rect x="10" y="18" width="42" height="56" rx="2" fill="' + O + '"/><rect x="16" y="24" width="30" height="44" fill="' + W + '"/><circle cx="31" cy="44" r="9" fill="' + M + '"/>' +
      '<rect x="58" y="18" width="32" height="26" rx="2" fill="' + T + '"/><rect x="63" y="23" width="22" height="16" fill="' + W + '"/><rect x="58" y="50" width="22" height="24" rx="2" fill="' + V + '"/><rect x="62" y="54" width="14" height="16" fill="' + W + '"/>' +
      '<rect x="8" y="80" width="84" height="4" rx="2" fill="' + L + '"/>',
    gift: '<rect x="22" y="44" width="56" height="40" rx="4" fill="' + R + '"/><rect x="18" y="34" width="64" height="13" rx="3" fill="' + O + '"/><rect x="46" y="34" width="8" height="50" fill="' + M + '"/>' +
      '<ellipse cx="40" cy="27" rx="11" ry="7" fill="' + M + '" transform="rotate(-20 40 27)"/><ellipse cx="60" cy="27" rx="11" ry="7" fill="' + M + '" transform="rotate(20 60 27)"/>',
    // Q4
    burst: '<path d="M50 8 V22 M50 78 V92 M8 50 H22 M78 50 H92 M20 20 L30 30 M70 70 L80 80 M80 20 L70 30 M20 80 L30 70" stroke="' + O + '" stroke-width="6" stroke-linecap="round"/><circle cx="50" cy="50" r="19" fill="' + M + '"/>' +
      '<circle cx="44" cy="46" r="2.5" fill="' + I + '"/><circle cx="56" cy="46" r="2.5" fill="' + I + '"/><path d="M42 55 q8 8 16 0" stroke="' + I + '" stroke-width="3" fill="none" stroke-linecap="round"/>',
    tag: '<path d="M14 32 h48 l22 18 l-22 18 h-48z" fill="' + M + '"/><circle cx="66" cy="50" r="5" fill="' + W + '"/><path d="M24 44 h28 M24 56 h20" stroke="' + I + '" stroke-width="4" stroke-linecap="round" opacity=".55"/>' +
      '<path d="M71 50 q14 -20 18 -30" stroke="' + Q + '" stroke-width="2" fill="none"/>',
    door: '<rect x="28" y="12" width="44" height="76" rx="3" fill="' + T + '"/><rect x="34" y="18" width="32" height="30" rx="2" fill="none" stroke="' + W + '" stroke-width="2" opacity=".5"/><circle cx="64" cy="58" r="3.5" fill="' + M + '"/>' +
      '<rect x="42" y="50" width="18" height="26" rx="3" fill="' + O + '"/><circle cx="51" cy="55" r="3" fill="' + T + '"/><path d="M46 64 h10 M46 69 h7" stroke="' + W + '" stroke-width="2.5" stroke-linecap="round"/><rect x="18" y="88" width="64" height="4" rx="2" fill="' + L + '"/>',
    bulb: '<path d="M50 6 V14 M20 18 l6 6 M80 18 l-6 6 M12 44 h8 M80 44 h8" stroke="' + O + '" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="42" r="21" fill="' + M + '"/>' +
      '<rect x="41" y="60" width="18" height="16" rx="3" fill="' + L + '"/><path d="M43 81 h14" stroke="' + Q + '" stroke-width="4" stroke-linecap="round"/><path d="M44 46 l6 -8 l6 8" stroke="' + W + '" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    // Q5
    town: (function () { var s = ""; [[8, T], [36, O], [64, V]].forEach(function (h) { var x = h[0]; s += '<path d="M' + x + ' 46 L' + (x + 14) + ' 30 L' + (x + 28) + ' 46 V84 H' + x + 'z" fill="' + h[1] + '"/><rect x="' + (x + 7) + '" y="54" width="14" height="12" rx="1" fill="' + W + '"/><rect x="' + (x + 10) + '" y="57" width="8" height="6" fill="' + M + '"/>'; }); return s + '<rect x="4" y="84" width="92" height="4" rx="2" fill="' + L + '"/>'; })(),
    spotlight: '<rect x="44" y="6" width="12" height="7" rx="2" fill="' + I + '"/><path d="M47 13 L22 44 H78 L53 13z" fill="' + M + '" opacity=".45"/><rect x="24" y="36" width="52" height="48" rx="2" fill="' + T + '"/>' +
      '<rect x="31" y="43" width="38" height="34" fill="' + W + '"/><circle cx="50" cy="60" r="9" fill="' + O + '"/><rect x="40" y="88" width="20" height="5" rx="2" fill="' + L + '"/>',
    moon: '<path d="M38 12 a22 22 0 1 0 22 30 a17 17 0 1 1 -22 -30z" fill="' + M + '"/><circle cx="70" cy="18" r="2.5" fill="' + M + '"/><circle cx="84" cy="34" r="2" fill="' + M + '"/>' +
      '<rect x="50" y="56" width="38" height="30" rx="3" fill="' + O + '"/><rect x="66" y="56" width="6" height="30" fill="' + W + '" opacity=".7"/><path d="M56 70 h6" stroke="' + W + '" stroke-width="3" stroke-linecap="round"/>',
    shelf: '<rect x="10" y="44" width="80" height="4" rx="2" fill="' + L + '"/><rect x="10" y="82" width="80" height="4" rx="2" fill="' + L + '"/>' +
      '<rect x="16" y="26" width="12" height="18" rx="2" fill="' + T + '"/><circle cx="41" cy="36" r="8" fill="' + O + '"/><rect x="54" y="20" width="10" height="24" rx="2" fill="' + M + '"/><rect x="70" y="30" width="14" height="14" rx="2" fill="' + R + '"/>' +
      '<rect x="16" y="64" width="14" height="18" rx="2" fill="' + V + '"/><rect x="36" y="58" width="10" height="24" rx="2" fill="' + P + '"/><circle cx="60" cy="74" r="8" fill="' + T + '"/><rect x="72" y="66" width="12" height="16" rx="2" fill="' + M + '"/>',
    // Q6
    crown: '<path d="M18 72 V34 L34 50 L50 24 L66 50 L82 34 V72z" fill="' + M + '"/><rect x="18" y="70" width="64" height="12" rx="3" fill="' + O + '"/>' +
      '<circle cx="50" cy="58" r="5" fill="' + R + '"/><circle cx="33" cy="62" r="3.5" fill="' + T + '"/><circle cx="67" cy="62" r="3.5" fill="' + T + '"/>',
    chat: '<rect x="8" y="18" width="50" height="30" rx="15" fill="' + T + '"/><path d="M20 46 l-4 14 l14 -12z" fill="' + T + '"/><rect x="42" y="48" width="50" height="30" rx="15" fill="' + O + '"/><path d="M80 76 l4 14 l-14 -12z" fill="' + O + '"/>' +
      '<path d="M20 33 h26 M54 63 h26" stroke="' + W + '" stroke-width="4" stroke-linecap="round"/>',
    hammock: '<circle cx="78" cy="20" r="9" fill="' + M + '"/><rect x="12" y="28" width="5" height="60" rx="2" fill="' + I + '"/><rect x="83" y="28" width="5" height="60" rx="2" fill="' + I + '"/>' +
      '<path d="M17 40 Q50 84 83 40 Q50 66 17 40z" fill="' + T + '"/><path d="M17 40 Q50 66 83 40" stroke="' + O + '" stroke-width="3" fill="none"/><rect x="6" y="88" width="88" height="4" rx="2" fill="' + L + '"/>',
    cog: (function () { var s = ""; for (var a = 0; a < 360; a += 45) s += '<rect x="44" y="14" width="12" height="16" rx="2" fill="' + T + '" transform="rotate(' + a + ' 50 50)"/>'; return s + '<circle cx="50" cy="50" r="24" fill="' + T + '"/><circle cx="50" cy="50" r="10" fill="' + W + '"/><circle cx="82" cy="80" r="7" fill="' + M + '"/>'; })(),
    // Q7
    laptop: '<rect x="20" y="24" width="60" height="42" rx="4" fill="' + T + '"/><rect x="25" y="29" width="50" height="32" rx="1" fill="' + W + '"/><rect x="30" y="34" width="16" height="12" rx="1" fill="' + M + '"/>' +
      '<path d="M51 36 h18 M51 42 h12 M30 53 h38" stroke="' + L + '" stroke-width="3.5" stroke-linecap="round"/><path d="M10 70 h80 l-7 9 h-66z" fill="' + L + '"/><circle cx="84" cy="22" r="7" fill="' + O + '"/>',
    camera: '<rect x="34" y="24" width="22" height="12" rx="3" fill="' + I + '"/><rect x="12" y="32" width="76" height="50" rx="9" fill="' + T + '"/><circle cx="50" cy="57" r="18" fill="' + W + '"/><circle cx="50" cy="57" r="11" fill="' + O + '"/>' +
      '<circle cx="46" cy="53" r="3" fill="' + W + '" opacity=".8"/><circle cx="76" cy="42" r="3.5" fill="' + M + '"/>',
    people: '<circle cx="28" cy="40" r="9" fill="' + O + '"/><rect x="17" y="51" width="22" height="34" rx="11" fill="' + O + '"/><circle cx="72" cy="40" r="9" fill="' + M + '"/><rect x="61" y="51" width="22" height="34" rx="11" fill="' + M + '"/>' +
      '<circle cx="50" cy="32" r="10" fill="' + T + '"/><rect x="38" y="44" width="24" height="42" rx="12" fill="' + T + '"/>',
    unplugged: '<path d="M8 76 C20 76 18 52 24 52" stroke="' + I + '" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="22" y="40" width="22" height="24" rx="4" fill="' + T + '"/><rect x="44" y="44" width="10" height="4" rx="1" fill="' + Q + '"/><rect x="44" y="56" width="10" height="4" rx="1" fill="' + Q + '"/>' +
      '<rect x="68" y="32" width="22" height="40" rx="6" fill="' + L + '"/><rect x="74" y="44" width="3" height="7" fill="' + I + '"/><rect x="81" y="44" width="3" height="7" fill="' + I + '"/>' +
      '<path d="M58 34 l4 -6 M60 52 h6 M58 68 l4 6" stroke="' + O + '" stroke-width="3" stroke-linecap="round"/>',
    // Q8
    dots: (function () { var s = "", c = [T, M, O, V]; for (var r = 0; r < 4; r++) for (var i = 0; i < 4; i++) s += '<circle cx="' + (23 + i * 18) + '" cy="' + (23 + r * 18) + '" r="7" fill="' + c[(i + r) % 4] + '"/>'; return s; })(),
    palette: '<path d="M50 14 C26 14 10 30 10 50 C10 70 26 86 46 86 C54 86 57 80 53 74 C49 67 53 61 61 61 H72 C83 61 90 54 90 44 C90 27 72 14 50 14z" fill="' + M + '"/>' +
      '<circle cx="30" cy="42" r="6.5" fill="' + O + '"/><circle cx="44" cy="28" r="6.5" fill="' + T + '"/><circle cx="62" cy="28" r="6.5" fill="' + R + '"/><circle cx="75" cy="42" r="6.5" fill="' + P + '"/><circle cx="31" cy="64" r="7" fill="' + W + '"/>',
    swirl: '<path d="M50 50 m-4 0 a4 4 0 1 1 8 0 a10 10 0 1 1 -20 0 a16 16 0 1 1 32 0 a22 22 0 1 1 -44 0 a28 28 0 1 1 56 0" stroke="' + O + '" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="84" cy="18" r="5" fill="' + M + '"/>',
    heart: '<path d="M50 84 C22 64 12 50 12 36 a19 19 0 0 1 38 -6 a19 19 0 0 1 38 6 c0 14 -10 28 -38 48z" fill="' + R + '"/><path d="M28 34 a8 8 0 0 1 10 -6" stroke="' + W + '" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>',
    // Q9
    clock: '<circle cx="28" cy="24" r="9" fill="' + O + '"/><circle cx="72" cy="24" r="9" fill="' + O + '"/><path d="M30 84 l6 -8 M70 84 l-6 -8" stroke="' + I + '" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="50" cy="52" r="29" fill="' + M + '"/><circle cx="50" cy="52" r="22" fill="' + W + '"/><path d="M50 52 V36 M50 52 L61 58" stroke="' + I + '" stroke-width="4" stroke-linecap="round"/>',
    parcel: '<path d="M6 46 h12 M2 58 h16 M8 70 h10" stroke="' + L + '" stroke-width="4" stroke-linecap="round"/><rect x="24" y="30" width="62" height="50" rx="3" fill="' + O + '"/><rect x="51" y="30" width="8" height="50" fill="' + M + '"/>' +
      '<rect x="64" y="62" width="16" height="11" rx="1" fill="' + W + '"/><path d="M24 40 h62" stroke="' + I + '" stroke-width="2" opacity=".25"/>',
    tote: '<path d="M36 42 V32 a14 14 0 0 1 28 0 V42" stroke="' + V + '" stroke-width="5" fill="none"/><path d="M20 42 h60 l-5 44 h-50z" fill="' + V + '"/><circle cx="50" cy="63" r="10" fill="' + M + '"/><circle cx="50" cy="63" r="4" fill="' + O + '"/>',
    hourglass: '<rect x="26" y="12" width="48" height="7" rx="3" fill="' + O + '"/><rect x="26" y="81" width="48" height="7" rx="3" fill="' + O + '"/>' +
      '<path d="M32 19 H68 L53 50 L68 81 H32 L47 50 Z" fill="' + W + '" stroke="' + T + '" stroke-width="4" stroke-linejoin="round"/><path d="M40 27 H60 L51 44 H49z" fill="' + M + '"/><path d="M37 79 Q50 62 63 79z" fill="' + M + '"/>',
    // Q10
    faces: '<circle cx="36" cy="46" r="21" fill="' + M + '"/><circle cx="29" cy="42" r="2.5" fill="' + I + '"/><circle cx="42" cy="42" r="2.5" fill="' + I + '"/><path d="M28 52 q8 7 16 0" stroke="' + I + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="68" cy="56" r="19" fill="' + T + '"/><circle cx="62" cy="52" r="2.5" fill="' + W + '"/><circle cx="74" cy="52" r="2.5" fill="' + W + '"/><path d="M61 61 q7 6 14 0" stroke="' + W + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M76 16 c-3 -5 -11 -3 -9 3 c1 4 9 9 9 9 s8 -5 9 -9 c2 -6 -6 -8 -9 -3z" fill="' + R + '"/>',
    collector: '<path d="M12 46 L50 16 L88 46 V86 H12z" fill="' + T + '"/><rect x="26" y="48" width="48" height="30" fill="' + W + '"/><rect x="36" y="52" width="28" height="20" rx="1" fill="' + O + '"/><rect x="40" y="56" width="20" height="12" fill="' + W + '"/><circle cx="50" cy="62" r="4" fill="' + M + '"/>',
    sofa: '<rect x="32" y="10" width="36" height="26" rx="2" fill="' + O + '"/><rect x="37" y="15" width="26" height="16" fill="' + W + '"/><circle cx="50" cy="23" r="5" fill="' + T + '"/>' +
      '<rect x="20" y="48" width="60" height="24" rx="8" fill="' + T + '"/><rect x="10" y="52" width="16" height="28" rx="7" fill="' + T + '"/><rect x="74" y="52" width="16" height="28" rx="7" fill="' + T + '"/><rect x="18" y="66" width="64" height="14" rx="5" fill="' + T + '"/>' +
      '<rect x="28" y="54" width="18" height="12" rx="5" fill="' + M + '"/><rect x="18" y="80" width="4" height="7" fill="' + I + '"/><rect x="78" y="80" width="4" height="7" fill="' + I + '"/>',
    store: '<rect x="12" y="32" width="76" height="54" fill="' + W + '" stroke="' + L + '" stroke-width="3"/>' + awning(20, T, M) +
      '<rect x="56" y="52" width="20" height="34" rx="2" fill="' + T + '"/><rect x="20" y="52" width="28" height="20" rx="2" fill="' + L + '"/><circle cx="28" cy="64" r="4" fill="' + O + '"/><rect x="34" y="58" width="8" height="10" fill="' + R + '"/>',
    // Q11
    cup: '<path d="M36 34 q5 -7 0 -14 M48 34 q5 -7 0 -14 M60 34 q5 -7 0 -14" stroke="' + Q + '" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="26" y="40" width="40" height="36" rx="10" fill="' + O + '"/>' +
      '<circle cx="70" cy="56" r="8" fill="none" stroke="' + O + '" stroke-width="5"/><ellipse cx="48" cy="80" rx="30" ry="5" fill="' + L + '"/><path d="M46 52 c-3 -4 -9 -2 -7 2 c1 3 7 7 7 7 s6 -4 7 -7 c2 -4 -4 -6 -7 -2z" fill="' + W + '"/>',
    invite: '<rect x="26" y="14" width="48" height="40" rx="2" fill="' + W + '" stroke="' + L + '" stroke-width="2"/><path d="M50 22 l3.5 7 l7.5 1 l-5.5 5 l1.5 7.5 l-7 -3.5 l-7 3.5 l1.5 -7.5 l-5.5 -5 l7.5 -1z" fill="' + M + '"/>' +
      '<path d="M14 40 L50 64 L86 40 V84 H14z" fill="' + T + '"/><path d="M14 84 L42 60 M86 84 L58 60" stroke="' + W + '" stroke-width="2" opacity=".35"/>',
    bell: '<path d="M50 16 c-15 0 -23 11 -23 25 v15 l-9 11 h64 l-9 -11 v-15 c0 -14 -8 -25 -23 -25z" fill="' + M + '"/><circle cx="50" cy="74" r="6" fill="' + M + '"/>' +
      '<circle cx="73" cy="24" r="13" fill="' + O + '"/><text x="73" y="29.5" text-anchor="middle" font-size="16" font-weight="700" font-family="Jost, sans-serif" fill="#FFFBF4">3</text>',
    boxes: '<rect x="12" y="54" width="36" height="30" rx="2" fill="' + O + '"/><rect x="52" y="54" width="36" height="30" rx="2" fill="' + O + '"/><rect x="31" y="22" width="38" height="32" rx="2" fill="' + T + '"/>' +
      '<path d="M30 54 V84 M70 54 V84 M50 22 V54" stroke="' + M + '" stroke-width="5"/><rect x="8" y="84" width="84" height="4" rx="2" fill="' + L + '"/>'
  };
})();
