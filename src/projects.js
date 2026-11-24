/* ==========================================================
   PROJECT CASE STUDIES — shown in a modal over the page
   Edit texts here. To use real images, set `cover` / `gallery`
   to paths in /public/img/projects/ (e.g. '/img/projects/eneos-1.jpg').
   Until then, `art` classes render grayscale placeholders.
   ========================================================== */
export const PROJECTS = {
  eneos: {
    name: 'ENEOS Romania',
    logo: '/logos/eneos.png', logoH: 34,
    art: ['art-1', 'art-4', 'art-2'],
    cover: null, gallery: [],
    url: 'https://www.eneos.us/',
    en: {
      industry: 'Automotive · Lubricants',
      scope: ['Branding', 'Digital design'],
      intro: 'Brand and digital design support for ENEOS Romania — visual materials and digital assets that keep a global brand consistent and recognisable in the local market.',
      challenge: 'Bringing a global brand to a local audience without losing consistency.',
      approach: 'We worked inside the existing brand system, adapting layouts, campaign visuals and digital assets to local channels while keeping every touchpoint on-brand.'
    },
    ro: {
      industry: 'Auto · Lubrifianți',
      scope: ['Branding', 'Design digital'],
      intro: 'Suport de brand și design digital pentru ENEOS Romania — materiale vizuale și asset-uri digitale care păstrează un brand global consecvent și ușor de recunoscut pe piața locală.',
      challenge: 'Un brand global adus aproape de publicul local, fără să-și piardă consecvența.',
      approach: 'Am lucrat în sistemul de brand existent, adaptând layout-uri, vizualuri de campanie și asset-uri digitale pentru canalele locale, cu fiecare punct de contact fidel brandului.'
    }
  },
  holcim: {
    name: 'Holcim',
    logo: '/logos/holcim.svg', logoH: 40,
    art: ['art-2', 'art-1', 'art-3'],
    cover: null, gallery: [],
    url: 'https://www.holcim.md/ro',
    en: {
      industry: 'Construction · Building materials',
      scope: ['Design', 'Web'],
      intro: 'Design and web work for Holcim — clear, structured communication for one of the world’s leading building-materials companies.',
      challenge: 'Making technical, product-heavy content easy to scan and understand.',
      approach: 'We focused on hierarchy and clarity: clean layouts, consistent components and a web experience that guides people to the information they need.'
    },
    ro: {
      industry: 'Construcții · Materiale de construcție',
      scope: ['Design', 'Web'],
      intro: 'Design și web pentru Holcim — comunicare clară și structurată pentru una dintre cele mai mari companii de materiale de construcție din lume.',
      challenge: 'Conținut tehnic, cu multe produse, ușor de parcurs și de înțeles.',
      approach: 'Ne-am concentrat pe ierarhie și claritate: layout-uri curate, componente consecvente și o experiență web care duce oamenii rapid la informația de care au nevoie.'
    }
  },
  purcari: {
    name: 'Purcari',
    logo: '/logos/purcari.svg', logoH: 52,
    art: ['art-3', 'art-2', 'art-1'],
    cover: null, gallery: [],
    url: 'https://purcariwineries.com/',
    en: {
      industry: 'Wine · Premium FMCG',
      scope: ['Branding', 'Visual design'],
      intro: 'Brand and visual design for Purcari Wineries — premium visuals that reflect the heritage and craft behind one of the region’s best-known wine houses.',
      challenge: 'Expressing heritage and premium quality while staying fresh and contemporary.',
      approach: 'A restrained, elegant visual language — generous whitespace, refined typography and imagery that lets the product and its story lead.'
    },
    ro: {
      industry: 'Vinuri · FMCG premium',
      scope: ['Branding', 'Design vizual'],
      intro: 'Brand și design vizual pentru Purcari Wineries — vizualuri premium care reflectă tradiția și meșteșugul din spatele uneia dintre cele mai cunoscute case de vinuri din regiune.',
      challenge: 'Tradiție și calitate premium, exprimate într-un mod proaspăt și contemporan.',
      approach: 'Un limbaj vizual reținut și elegant — mult spațiu alb, tipografie rafinată și imagini care lasă produsul și povestea lui să conducă.'
    }
  },
  navix: {
    name: 'Navix',
    logo: null, logoH: 0,
    art: ['art-4', 'art-3', 'art-2'],
    cover: null, gallery: [],
    url: null,
    en: {
      industry: 'Logistics · SaaS',
      scope: ['Product design', 'UI/UX'],
      intro: 'Product UI for Navix, a Transport Management Software (TMS) platform — interfaces that make complex logistics operations feel simple.',
      challenge: 'Dense, data-heavy workflows that dispatchers use all day.',
      approach: 'We designed a clear information hierarchy and a reusable component system, so key actions are always one step away and the product scales as features grow.'
    },
    ro: {
      industry: 'Logistică · SaaS',
      scope: ['Product design', 'UI/UX'],
      intro: 'UI de produs pentru Navix, o platformă de Transport Management Software (TMS) — interfețe care fac operațiunile logistice complexe să pară simple.',
      challenge: 'Fluxuri dense, pline de date, folosite de dispeceri toată ziua.',
      approach: 'Am construit o ierarhie clară a informației și un sistem de componente reutilizabile, astfel încât acțiunile importante sunt mereu la un pas, iar produsul crește ușor odată cu funcționalitățile.'
    }
  }
};

const L = {
  en: { intro: 'Introduction', client: 'Client', industry: 'Industry', scope: 'Scope of work', challenge: 'Challenge', live: 'Visit website', next: 'Next project', close: 'Close' },
  ro: { intro: 'Introducere', client: 'Client', industry: 'Industrie', scope: 'Servicii', challenge: 'Provocare', live: 'Vezi site-ul', next: 'Proiectul următor', close: 'Închide' }
};

const ORDER = Object.keys(PROJECTS);
const pm = document.getElementById('pm');
const body = document.getElementById('pm-body');
const panel = pm.querySelector('.pm-panel');
let current = null, lastFocus = null;

const lang = () => (document.documentElement.lang === 'ro' ? 'ro' : 'en');

function visual(p, i, cls) {
  const src = i === 0 ? p.cover : p.gallery[i - 1];
  const bg = src ? `<img class="proj-img" src="${src}" alt="">` : `<div class="art ${p.art[i % p.art.length]}"></div>`;
  const mark = i === 0 ? (p.logo ? `<img class="proj-logo" src="${p.logo}" alt="${p.name}" style="--h:${p.logoH}px">` : `<span class="proj-word">${p.name}</span>`) : '';
  return `<div class="pm-media grain ${cls}">${bg}${mark}</div>`;
}

function render(id) {
  const p = PROJECTS[id], l = lang(), t = p[l], k = L[l];
  const next = ORDER[(ORDER.indexOf(id) + 1) % ORDER.length], np = PROJECTS[next];
  current = id;
  pm.querySelector('.pm-close').setAttribute('aria-label', k.close);
  body.innerHTML = `
    <h2 class="pm-title" id="pm-title">${p.name}.</h2>
    <div class="pm-grid">
      <span class="eyebrow">${k.intro}</span>
      <p class="pm-intro">${t.intro}</p>
    </div>
    <dl class="pm-meta">
      <div><dt>${k.client}</dt><dd>${p.name}</dd></div>
      <div><dt>${k.industry}</dt><dd>${t.industry}</dd></div>
      <div><dt>${k.scope}</dt><dd>${t.scope.map(s => `<span>/ ${s}</span>`).join('')}</dd></div>
    </dl>
    ${visual(p, 0, 'pm-cover')}
    <div class="pm-grid pm-challenge">
      <span class="eyebrow">${k.challenge}</span>
      <div>
        <p class="pm-lead">${t.challenge}</p>
        <p class="pm-text">${t.approach}</p>
        ${p.url ? `<a class="pill" href="${p.url}" target="_blank" rel="noopener"><span>${k.live}</span><i></i></a>` : ''}
      </div>
    </div>
    <div class="pm-gallery">${visual(p, 1, '')}${visual(p, 2, '')}</div>
    <button class="pm-next" data-next="${next}">
      <span class="small">${k.next}</span>
      <span class="pm-next-name">${np.name}.</span>
      <span class="pm-next-arrow" aria-hidden="true">→</span>
    </button>`;
  panel.scrollTop = 0;
}

function open(id) {
  lastFocus = document.activeElement;
  render(id);
  pm.hidden = false;
  document.documentElement.classList.add('pm-lock');
  requestAnimationFrame(() => requestAnimationFrame(() => pm.classList.add('open')));
  panel.focus({ preventScroll: true });
}

function close() {
  if (pm.hidden) return;
  pm.classList.remove('open');
  document.documentElement.classList.remove('pm-lock');
  const done = () => { pm.hidden = true; current = null; };
  matchMedia('(prefers-reduced-motion: reduce)').matches ? done() : setTimeout(done, 550);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

document.addEventListener('click', e => {
  const card = e.target.closest('[data-project]');
  if (card) { e.preventDefault(); open(card.dataset.project); return; }
  if (e.target.closest('[data-pm-close]')) { close(); return; }
  const nx = e.target.closest('[data-next]');
  if (nx) render(nx.dataset.next);
});

document.addEventListener('keydown', e => {
  if (pm.hidden) return;
  if (e.key === 'Escape') { close(); return; }
  if (e.key === 'Tab') { // keep focus inside the modal
    const f = [...panel.querySelectorAll('button, a[href]')];
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

addEventListener('c94:lang', () => { if (current) render(current); });
