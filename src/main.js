import './projects.js';
/* ============ CONTENT / I18N ============ */
const I18N = {
en:{
 "nav.studio":"Studio","nav.projects":"Projects","nav.services":"Services","nav.pricing":"Pricing","nav.contact":"Contact",
 "hero.s1":"Brand identity","hero.s2":"UI/UX &amp; product design","hero.s3":"Webflow websites","hero.s4":"Motion &amp; illustration","hero.s5":"AI-assisted development",
 "hero.tag":'No generic websites. No empty promises. <span class="muted">Just senior design that helps your brand look sharp and your business grow.</span>',
 "hero.founder":"Founder","cta.talk":"Let's talk","cta.start":"Get started","cta.quote":"Get a quote",
 "clients.eb":"Our clients","clients.note":"Trusted by enterprise brands &amp; startups",
 "pm.case":"Case study","proj.eb":"Selected work","proj.title":"Projects.","proj.intro":"We've helped enterprise brands and startups look sharper and grow. Here are a few selected projects.","proj.c1":"/ Brand &amp; Digital","proj.c2":"/ Design &amp; Web","proj.c3":"/ Brand &amp; Visual","proj.c4":"/ SaaS Product UI",
 "why.eb":"Why Creative94","why.title":'Senior craft on every project, <span class="muted">with a focus on design that actually works.</span>',
 "why.p":'<b>No fluff, just results.</b> <span class="muted">Strategy, identity, interface and build — handled by one senior team, so nothing gets lost between handoffs.</span>',
 "why.s1":"Years of design experience","why.s2":"Disciplines under one roof","why.s3":"Direct work with a senior designer","why.s4":"Bilingual studio, global clients",
 "svc.eb":"What we do","svc.title":"Services.",
 "appr.side":"Every project is designed for long-term success.",
 "appr.lead":'<span class="muted">Our approach is simple:</span> clarity, speed and craft — every pixel and every line of code serves a clear purpose.',
 "appr.p":"We don't overpromise or hide behind buzzwords. We design brands and build websites that are easy to use, easy to update and built to grow with you.",
 "faq.p":"Got questions? Here's everything you need to know about working with Creative94.",
 "form.h":'Have a project <span class="muted">in mind?</span>',"form.name":"Your name*","form.name_ph":"John Doe","form.type":"Project type","form.msg":"Message","form.msg_ph":"Tell us about your project","form.send":"Send message","form.tiny":"By sending, you agree to be contacted about your request.",
 "form.types":["Brand identity","Website (Webflow)","UI/UX / product","Something else"],
 "talk.t":"Let's talk.","talk.p":'Tell us about your project <span class="muted">— a brand, a website, a product or something in between.</span>',"talk.f1":"Free 30-min intro call","talk.f2":"Reply within 1 business day",
 "f.nav":"Navigation","f.home":"Home","f.legal":"Privacy policy · Terms",
 services:[
  ["Brand identity","Logos, visual systems and brand guidelines that make you recognisable everywhere — from packaging to product.",["Strategy","Logo","Visual identity","Guidelines"]],
  ["UI/UX &amp; product design","Interfaces for SaaS, apps and dashboards: research, flows, design systems and pixel-perfect handoff.",["Research","Wireframes","Design systems","Prototyping"]],
  ["Web design &amp; Webflow development","Fast, responsive websites you can edit yourself — designed and built in Webflow, SEO-ready from day one.",["Webflow","CMS","SEO","Animations"]],
  ["Motion &amp; illustration","Custom illustrations, animated assets and social content that give your brand movement and personality.",["Motion","Illustration","Social","Lottie"]],
  ["AI-assisted development","We combine design with AI tooling to prototype and ship faster — from interactive prototypes to production front-end.",["Prototyping","Front-end","Automation","AI workflows"]]
 ],
 faq:[["How long does a project take?","A brand identity usually takes 3–4 weeks, a website 4–6 weeks. You get a detailed timeline after the first call."],["Do you build custom websites or use templates?","Every website is designed from scratch for your brand and built in Webflow, so you can edit content without a developer."],["Can you redesign my existing website or brand?","Yes. We audit what works, keep your brand equity and modernise the rest."],["Do you work with clients outside Romania?","Absolutely — we work in Romanian and English with clients across Europe and beyond."],["What do I need to get started?","Just an idea and a goal. Fill in the form or book a call and we'll take it from there."]]
},
ro:{
 "nav.studio":"Studio","nav.projects":"Proiecte","nav.services":"Servicii","nav.pricing":"Prețuri","nav.contact":"Contact",
 "hero.s1":"Identitate de brand","hero.s2":"UI/UX &amp; product design","hero.s3":"Site-uri Webflow","hero.s4":"Motion &amp; ilustrație","hero.s5":"Dezvoltare asistată de AI",
 "hero.tag":'Fără site-uri generice. Fără promisiuni goale. <span class="muted">Doar design senior care face brandul tău să arate impecabil și afacerea să crească.</span>',
 "hero.founder":"Fondator","cta.talk":"Hai să vorbim","cta.start":"Începe acum","cta.quote":"Cere o ofertă",
 "clients.eb":"Clienții noștri","clients.note":"Branduri enterprise &amp; startup-uri care au avut încredere",
 "pm.case":"Studiu de caz","proj.eb":"Lucrări selectate","proj.title":"Proiecte.","proj.intro":"Am ajutat branduri enterprise și startup-uri să arate mai bine și să crească. Iată câteva proiecte selectate.","proj.c1":"/ Brand &amp; Digital","proj.c2":"/ Design &amp; Web","proj.c3":"/ Brand &amp; Vizual","proj.c4":"/ UI Produs SaaS",
 "why.eb":"De ce Creative94","why.title":'Calitate senior în fiecare proiect, <span class="muted">cu accent pe design care chiar funcționează.</span>',
 "why.p":'<b>Fără vorbe goale, doar rezultate.</b> <span class="muted">Strategie, identitate, interfață și implementare — gestionate de o singură echipă senioră, fără pierderi între predări.</span>',
 "why.s1":"Ani de experiență în design","why.s2":"Discipline sub un singur acoperiș","why.s3":"Lucrezi direct cu un designer senior","why.s4":"Studio bilingv, clienți globali",
 "svc.eb":"Ce facem","svc.title":"Servicii.",
 "appr.side":"Fiecare proiect e gândit pentru succes pe termen lung.",
 "appr.lead":'<span class="muted">Abordarea noastră e simplă:</span> claritate, viteză și meșteșug — fiecare pixel și fiecare linie de cod au un scop clar.',
 "appr.p":"Nu promitem prea mult și nu ne ascundem după buzzword-uri. Creăm branduri și site-uri ușor de folosit, ușor de actualizat și gândite să crească odată cu tine.",
 "faq.p":"Ai întrebări? Aici găsești tot ce trebuie să știi despre colaborarea cu Creative94.",
 "form.h":'Ai un proiect <span class="muted">în minte?</span>',"form.name":"Numele tău*","form.name_ph":"Ion Popescu","form.type":"Tip de proiect","form.msg":"Mesaj","form.msg_ph":"Spune-ne despre proiectul tău","form.send":"Trimite mesajul","form.tiny":"Trimițând, ești de acord să fii contactat în legătură cu cererea ta.",
 "form.types":["Identitate de brand","Site (Webflow)","UI/UX / produs","Altceva"],
 "talk.t":"Hai să vorbim.","talk.p":'Povestește-ne despre proiectul tău <span class="muted">— un brand, un site, un produs sau ceva între ele.</span>',"talk.f1":"Apel introductiv gratuit, 30 min","talk.f2":"Răspuns în 1 zi lucrătoare",
 "f.nav":"Navigare","f.home":"Acasă","f.legal":"Politica de confidențialitate · Termeni",
 services:[
  ["Identitate de brand","Logo-uri, sisteme vizuale și ghiduri de brand care te fac recognoscibil peste tot — de la ambalaj la produs.",["Strategie","Logo","Identitate vizuală","Brand book"]],
  ["UI/UX &amp; product design","Interfețe pentru SaaS, aplicații și dashboard-uri: research, flow-uri, design systems și handoff impecabil.",["Research","Wireframes","Design systems","Prototipare"]],
  ["Web design &amp; dezvoltare Webflow","Site-uri rapide și responsive pe care le poți edita singur — proiectate și construite în Webflow, optimizate SEO din prima zi.",["Webflow","CMS","SEO","Animații"]],
  ["Motion &amp; ilustrație","Ilustrații personalizate, animații și conținut social care dau brandului mișcare și personalitate.",["Motion","Ilustrație","Social","Lottie"]],
  ["Dezvoltare asistată de AI","Combinăm designul cu unelte AI ca să prototipăm și să livrăm mai repede — de la prototipuri interactive la front-end de producție.",["Prototipare","Front-end","Automatizări","Fluxuri AI"]]
 ],
 faq:[["Cât durează un proiect?","O identitate de brand durează de obicei 3–4 săptămâni, un site 4–6 săptămâni. Primești un calendar detaliat după primul apel."],["Faceți site-uri custom sau folosiți template-uri?","Fiecare site e proiectat de la zero pentru brandul tău și construit în Webflow, ca să poți edita conținutul fără developer."],["Puteți face redesign la site-ul sau brandul meu actual?","Da. Analizăm ce funcționează, păstrăm valoarea brandului și modernizăm restul."],["Lucrați cu clienți din afara României?","Sigur — lucrăm în română și engleză cu clienți din toată Europa și nu numai."],["De ce am nevoie ca să încep?","Doar de o idee și un obiectiv. Completează formularul sau programează un apel și ne ocupăm noi de rest."]]
}};

let lang='en';
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

function renderLists(){
  const t=I18N[lang];
  $('#svc').innerHTML=t.services.map((s,i)=>`
    <div class="svc${i===0?' open':''}">
      <button class="svc-btn" aria-expanded="${i===0}"><span class="num">(00${i+1})</span><span class="nm">${s[0]}</span><span class="pl"></span></button>
      <div class="svc-body"><div><div class="svc-inner"><p>${s[1]}</p><ul>${s[2].map(x=>`<li>${x}</li>`).join('')}</ul></div></div></div>
    </div>`).join('');
  $('#faq').innerHTML=t.faq.map((q,i)=>`
    <div class="q${i===0?' open':''}"><button aria-expanded="${i===0}">${q[0]}<i></i></button><div class="a"><div><p>${q[1]}</p></div></div></div>`).join('');
  $('#ptype').innerHTML=t["form.types"].map(x=>`<option>${x}</option>`).join('');
}
function setLang(l){
  lang=l; document.documentElement.lang=l;
  const t=I18N[l];
  $$('[data-i18n]').forEach(el=>{const v=t[el.dataset.i18n]; if(typeof v==='string') el.innerHTML=v;});
  $$('[data-i18n-ph]').forEach(el=>{el.placeholder=t[el.dataset.i18nPh]||el.placeholder});
  $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
  renderLists();
  dispatchEvent(new CustomEvent('c94:lang',{detail:l}));
  try{localStorage.setItem('c94-lang',l)}catch(e){}
}

/* accordions (delegated) */
document.addEventListener('click',e=>{
  const b=e.target.closest('.svc-btn,.q>button'); if(!b) return;
  const item=b.parentElement, open=!item.classList.contains('open');
  $$(':scope>div',item.parentElement).forEach(x=>{x.classList.remove('open');$('button',x).setAttribute('aria-expanded',false)});
  if(open){item.classList.add('open');b.setAttribute('aria-expanded',true)}
});
$$('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
$('#burger').onclick=()=>document.body.classList.toggle('menu-open');
$$('#mm a').forEach(a=>a.onclick=()=>document.body.classList.remove('menu-open'));


/* form → opens e-mail client (swap for Webflow/Formspree endpoint) */
$('#form').onsubmit=e=>{
  e.preventDefault(); const f=new FormData(e.target);
  const body=`${f.get('msg')||''}\n\n— ${f.get('name')} (${f.get('email')})`;
  location.href=`mailto:hello@creative94.com?subject=${encodeURIComponent('New project: '+f.get('type'))}&body=${encodeURIComponent(body)}`;
};

/* scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15,rootMargin:'0px 0px -40px 0px'});
const startReveal=()=>$$('.rv').forEach(el=>io.observe(el));

/* preloader: creative94® letters → slide up → page */
(function(){
  const pl=document.getElementById('preloader'), root=document.documentElement;
  const finish=()=>{root.classList.remove('is-loading');pl&&pl.remove();};
  if(!pl || matchMedia('(prefers-reduced-motion: reduce)').matches){finish();startReveal();return;}
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  const loaded=new Promise(r=>document.readyState==='complete'?r():addEventListener('load',r,{once:true}));
  const fonts=document.fonts?document.fonts.ready:Promise.resolve();
  Promise.race([Promise.all([loaded,fonts,wait(1900)]),wait(4000)]).then(async()=>{
    pl.classList.add('out');           // word fades up
    await wait(350);
    pl.classList.add('done');          // black panel slides up
    await wait(250); startReveal();     // hero blurs in behind it
    await wait(900); finish();
  });
})();

/* init language */
let saved=null; try{saved=localStorage.getItem('c94-lang')}catch(e){}
setLang(saved || ((navigator.language||'').toLowerCase().startsWith('ro')?'ro':'en'));

/* logo → scroll to top */
document.querySelectorAll('.logo, a[href="#top"]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();
  document.body.classList.remove('menu-open');
  window.scrollTo({top:0,behavior:'smooth'});
  history.replaceState(null,'',location.pathname);
}));
