# Personal Portfolio — React + Vite

A single-page, component-based portfolio site built with static props (no state/hooks).
Content lives in `src/data.js`; components just render props.

## Component tree

```
App
├── Navbar
├── Hero
├── About
├── Skills
│   └── SkillCard (mapped)
├── Projects
│   └── ProjectCard (mapped)
├── Contact
└── Footer
```

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Making it yours

Everything you'd normally want to edit lives in **`src/data.js`**:

- `profile` — your name, title, tagline, resume link
- `navLinks` — nav bar items
- `about` — bio paragraphs + quick facts
- `skills` — array of `{ id, name, category, level }` (level is 1–5)
- `projects` — array of project objects (title, description, tech, links, status)
- `contact` — email + social links
- `footer` — footer text

You generally shouldn't need to edit component files just to change content — only if you
want to change layout or behavior.

To swap fonts or colors, edit `src/styles/variables.css`.

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`.

## Deploy

### Vercel
1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`. Deploy.

### Netlify
1. Push this project to a GitHub repo.
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project".
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

## Notes

- No `useState` / `useEffect` / hooks are used anywhere — all data flows down as props,
  per the project spec. State, animation, and TypeScript come in later projects.
- Smooth scrolling between sections is handled with CSS (`scroll-behavior: smooth`) and
  anchor links (`#about`, `#skills`, etc.) — no JS scroll library needed.
