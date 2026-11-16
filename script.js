/* ============================================================
   script.js – comportements du site (Vanilla JS).
   Les contenus viennent de data.js (objet DATA).
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const D = DATA;
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------- Thème clair / sombre ---------- */
const root = document.documentElement;
try { root.dataset.theme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); }
catch (e) { root.dataset.theme = 'light'; }
$('#theme').onclick = () => {
  const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = t;
  try { localStorage.setItem('theme', t); } catch (e) {}
};

/* ---------- Navigation par rubriques (hash) + burger ---------- */
const views = $$('.view');
function route() {
  const v = views.find(x => x.id === location.hash.slice(1)) || views[0];
  views.forEach(x => x.hidden = x !== v);
  $$('#nav a').forEach(a => a.classList.toggle('on', a.hash === '#' + v.id));
  $('#nav').classList.remove('open');
  $('#burger').setAttribute('aria-expanded', 'false');
  scrollTo(0, 0);
}
addEventListener('hashchange', route);
$('#burger').onclick = e => e.currentTarget.setAttribute('aria-expanded', $('#nav').classList.toggle('open'));

/* ---------- Accueil : modules + recherche globale ---------- */
$('#modules').innerHTML = D.modules.map(m => `<a class="card ${m.cls}" href="${m.href}"><h3>${m.t}</h3><p>${m.d}</p></a>`).join('');
const index = [
  ...D.glossary.map(g => ({t: g.t, x: g.d, cat: 'Glossaire', h: '#fondamentaux'})),
  ...D.enjeux.map(g => ({t: g.t, x: g.d, cat: 'Enjeux', h: '#ethique'})),
  ...D.steps.map(g => ({t: g.t, x: g.q, cat: 'Démarche', h: '#ethique'})),
  ...D.tools.map(g => ({t: g.n, x: g.u, cat: 'Outils', h: '#outils'}))
];
$('#q').oninput = e => {
  const q = norm(e.target.value.trim());
  const r = q.length < 2 ? [] : index.filter(i => norm(i.t + ' ' + i.x).includes(q)).slice(0, 8);
  $('#results').innerHTML = q.length < 2 ? '' : r.length
    ? r.map(i => `<li><a href="${i.h}">${i.t}</a> <span class="tag">${i.cat}</span></li>`).join('')
    : '<li>Aucun résultat. Essaie un autre mot.</li>';
};

/* ---------- Fondamentaux : analogie, frise, glossaire ---------- */
$('#auto').innerHTML = `<p><strong>${D.autocomplete.start}</strong></p>` +
  D.autocomplete.options.map(([w, p]) => `<div class="bar" style="width:${Math.max(p, 8)}%">${w} ${p} %</div>`).join('') +
  `<p class="mut">${D.autocomplete.note}</p>`;
$('#timeline').innerHTML = D.timeline.map(t => `<details><summary>${t.y} · ${t.t}</summary><p>${t.d}</p></details>`).join('');

let gcat = 'Tous';
const cats = ['Tous', ...new Set(D.glossary.map(g => g.c))];
$('#gfilters').innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === gcat}" data-c="${c}">${c}</button>`).join(' ');
function renderGlossary() {
  const q = norm($('#gq').value);
  const r = D.glossary.filter(g => (gcat === 'Tous' || g.c === gcat) && norm(g.t + g.d).includes(q));
  $('#glossary').innerHTML = r.length ? r.map(g => `<dt>${g.t}<span class="tag">${g.c}</span></dt><dd>${g.d}</dd>`).join('') : '<p>Aucun terme trouvé.</p>';
}
$('#gfilters').onclick = e => {
  if (!e.target.dataset.c) return;
  gcat = e.target.dataset.c;
  $$('#gfilters .chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.c === gcat));
  renderGlossary();
};
$('#gq').oninput = renderGlossary;
renderGlossary();

/* ---------- Éthique : enjeux + checklist ---------- */
$('#enjeux').innerHTML = D.enjeux.map(e => `<details><summary>${e.t}</summary><p>${e.d}</p><p class="keep"><strong>À retenir :</strong> ${e.k}</p></details>`).join('');
$('#steps').innerHTML = D.steps.map((s, i) => `<li><label><input type="checkbox" data-i="${i}">${s.t}</label><small>${s.q}</small></li>`).join('');
const updFiche = () => $('#fprog').textContent = $$('#steps input:checked').length + ' / ' + D.steps.length;
$('#steps').onchange = updFiche;
$('#freset').onclick = () => { $$('#steps input').forEach(c => c.checked = false); updFiche(); };
$('#fprint').onclick = () => print();

/* ---------- Outils : fiches + Prompt Lab ---------- */
$('#tools').innerHTML = D.tools.map(t => `<article class="card"><h3>${t.n}</h3><p>${t.u}</p>
  <strong>Forces</strong><ul>${t.f.map(x => `<li>${x}</li>`).join('')}</ul>
  <strong>Limites</strong><ul>${t.l.map(x => `<li>${x}</li>`).join('')}</ul></article>`).join('');
$('#fields').innerHTML = D.promptFields.map(f => `<label for="f-${f.k}">${f.l}</label><textarea id="f-${f.k}" data-k="${f.k}" placeholder="${f.p}"></textarea>`).join('');
$('#examples').innerHTML = D.promptExamples.map((x, i) => `<button class="ghost" data-i="${i}">${x.n}</button>`).join('');
function buildPrompt() {
  const v = k => $('#f-' + k).value.trim();
  const parts = [['Rôle', 'role'], ['Contexte', 'ctx'], ['Tâche', 'task'], ['Format attendu', 'fmt'], ['Itération', 'iter']]
    .filter(([, k]) => v(k)).map(([l, k]) => `${l} : ${v(k)}`);
  $('#preview').textContent = parts.length ? parts.join('\n\n') : 'Remplis les champs ou choisis un exemple : le prompt apparaît ici.';
}
$('#fields').oninput = buildPrompt;
$('#examples').onclick = e => {
  const x = D.promptExamples[e.target.dataset.i]; if (!x) return;
  D.promptFields.forEach(f => $('#f-' + f.k).value = x[f.k]);
  buildPrompt();
};
$('#copy').onclick = async () => {
  const txt = $('#preview').textContent;
  try { await navigator.clipboard.writeText(txt); }
  catch (e) { const r = document.createRange(); r.selectNodeContents($('#preview')); getSelection().removeAllRanges(); getSelection().addRange(r); document.execCommand('copy'); }
  $('#copied').textContent = 'Prompt copié ✓';
  $('#copy').textContent = 'Copié ✓';
  setTimeout(() => { $('#copied').textContent = ''; $('#copy').textContent = 'Copier le prompt'; }, 2000);
};
buildPrompt();

/* ---------- Entraînement : onglets ---------- */
$('.tabs').onclick = e => {
  const t = e.target.dataset.tab; if (!t) return;
  $$('.tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === t));
  $$('.panel').forEach(p => p.hidden = p.id !== t);
};

/* ----- Flashcards (flip 3D, maîtrise / à revoir, aléatoire, progression) ----- */
let queue, mastered, flipped;
function startFlash(random) {
  queue = D.flashcards.map((_, i) => i);
  if (random) queue = shuffle(queue);
  mastered = 0; flipped = false; renderFlash();
}
function renderFlash() {
  const el = $('#flash'), n = D.flashcards.length;
  const bar = `<div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${mastered}"><i style="width:${mastered / n * 100}%"></i></div><p>${mastered} / ${n} maîtrisées</p>`;
  if (!queue.length) { el.innerHTML = bar + '<p><strong>Bravo, tu maîtrises toutes les cartes.</strong></p><button id="fr">Recommencer</button>'; $('#fr').onclick = () => startFlash(false); return; }
  const c = D.flashcards[queue[0]];
  el.innerHTML = bar + `<div class="flip${flipped ? ' on' : ''}" id="card" tabindex="0" role="button" aria-label="Retourner la carte"><div><div class="face"><h3>${c.q}</h3></div><div class="face back"><p>${c.a}</p></div></div></div>
  <div class="row"><button id="fok">Je maîtrise</button><button id="fko" class="ghost">À revoir</button><button id="frnd" class="ghost">Mode aléatoire</button></div>`;
  const flip = () => { flipped = !flipped; $('#card').classList.toggle('on', flipped); };
  $('#card').onclick = flip;
  $('#card').onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } };
  $('#fok').onclick = () => { queue.shift(); mastered++; flipped = false; renderFlash(); };
  $('#fko').onclick = () => { queue.push(queue.shift()); flipped = false; renderFlash(); };
  $('#frnd').onclick = () => startFlash(true);
}
startFlash(false);

/* ----- Quiz ----- */
let qi, score, answered;
function startQuiz() { qi = 0; score = 0; answered = false; renderQuiz(); }
function renderQuiz() {
  const el = $('#quiz');
  if (qi >= D.quiz.length) { el.innerHTML = `<h3>Score final : ${score} / ${D.quiz.length}</h3><p>${score === D.quiz.length ? 'Parfait !' : 'Relis les explications, puis réessaie.'}</p><button id="qr">Recommencer</button>`; $('#qr').onclick = startQuiz; return; }
  const q = D.quiz[qi];
  el.innerHTML = `<p class="mut">Question ${qi + 1} / ${D.quiz.length} · ${q.type}</p><h3>${q.q}</h3>` +
    q.o.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join('') + '<div id="fb" aria-live="polite"></div>';
  answered = false;
}
$('#quiz').onclick = e => {
  const b = e.target.closest('.opt');
  if (b && !answered) {
    answered = true;
    const q = D.quiz[qi], i = +b.dataset.i;
    if (i === q.a) score++;
    $$('#quiz .opt').forEach(x => { x.disabled = true; x.classList.add(+x.dataset.i === q.a ? 'ok' : (x === b ? 'ko' : 'opt')); });
    $('#fb').innerHTML = `<div class="debrief"><strong>${i === q.a ? 'Bonne réponse !' : 'Pas tout à fait.'}</strong> ${q.e}</div><p><button id="qn">${qi + 1 < D.quiz.length ? 'Question suivante' : 'Voir mon score'}</button></p>`;
    $('#qn').onclick = () => { qi++; renderQuiz(); };
  }
};
startQuiz();

/* ----- Mises en situation (arbres de décision) ----- */
function renderScenarioMenu() {
  $('#scen').innerHTML = '<p>Choisis une situation :</p><div class="row">' + D.scenarios.map(s => `<button data-s="${s.id}">${s.title}</button>`).join('') + '</div>';
}
function showNode(s, id) {
  const n = s.nodes[id];
  $('#scen').innerHTML = `<h3>${s.title}</h3><div class="card"><p>${n.t}</p></div>` + (n.end
    ? `<div class="debrief"><strong>${n.title}</strong><p><strong>Solution attendue :</strong> ${n.sol}</p></div><div class="row"><button data-s="${s.id}">Rejouer</button><button class="ghost" data-menu="1">Autres situations</button></div>`
    : n.c.map(([l, nx]) => `<button class="opt" data-s="${s.id}" data-n="${nx}">${l}</button>`).join(''));
}
$('#scen').onclick = e => {
  const d = e.target.dataset; if (!d) return;
  if (d.menu) return renderScenarioMenu();
  const s = D.scenarios.find(x => x.id === d.s); if (!s) return;
  showNode(s, d.n || s.start);
};
renderScenarioMenu();

/* ---------- Démarrage ---------- */
route();
