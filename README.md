# Creative94 — site

## Pornire pe localhost

Ai nevoie de [Node.js](https://nodejs.org) (versiunea 18 sau mai nouă).

```bash
npm install
npm run dev
```

Site-ul se deschide la **http://localhost:5173** și se reîncarcă automat când salvezi un fișier.

## Structură

- `index.html` — structura paginii
- `src/style.css` — stilurile
- `src/main.js` — texte RO/EN (obiectul `I18N`), acordeoane, prețuri, animații
- `public/` — pune aici imaginile (ex. `public/img/nicu.jpg` → `/img/nicu.jpg` în HTML)

## Build pentru producție

```bash
npm run build     # generează folderul dist/
npm run preview   # verifică build-ul local
```

## Fără Node.js

Din folderul proiectului: `python -m http.server 8000`, apoi deschide http://localhost:8000
