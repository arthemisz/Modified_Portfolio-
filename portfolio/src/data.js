// ─────────────────────────────────────────────────────────
// data.js
// Every piece of content on the site lives here and gets
// passed down into components as props. Edit this file to
// make the portfolio your own — you shouldn't need to touch
// component code just to change words, links, or images.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Alex Rivera",
  initials: "AR",
  title: "Full-Stack Developer",
  tagline: "I build fast, accessible web apps — from the database to the pixels.",
  location: "Denver, CO",
  resumeUrl: "#",
  avatarInitial: "A",
}

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
]

export const about = {
  heading: "cat about.md",
  paragraphs: [
    "I'm a self-taught developer turned bootcamp grad, currently based in Denver. Before code, I spent four years managing logistics for a touring theatre company — which is where I picked up a low tolerance for things breaking mid-show and a high tolerance for solving problems at 2am.",
    "These days I build with React on the front end and Node on the back, with a growing interest in developer tooling and performance. I care about interfaces that feel instant and code that the next person can actually read.",
    "Outside of the editor, I'm usually climbing, restoring an old mechanical keyboard, or arguing that tabs are correct.",
  ],
  facts: [
    { label: "based in", value: "Denver, CO" },
    { label: "focus", value: "React · Node · Postgres" },
    { label: "open to", value: "junior / associate roles" },
    { label: "status", value: "actively looking" },
  ],
}

export const skills = [
  { id: "sk-01", name: "JavaScript (ES6+)", category: "language", level: 4 },
  { id: "sk-02", name: "React", category: "frontend", level: 4 },
  { id: "sk-03", name: "HTML & CSS", category: "frontend", level: 5 },
  { id: "sk-04", name: "Node.js", category: "backend", level: 3 },
  { id: "sk-05", name: "Express", category: "backend", level: 3 },
  { id: "sk-06", name: "PostgreSQL", category: "database", level: 3 },
  { id: "sk-07", name: "MongoDB", category: "database", level: 2 },
  { id: "sk-08", name: "Git & GitHub", category: "tooling", level: 4 },
  { id: "sk-09", name: "REST APIs", category: "backend", level: 4 },
  { id: "sk-10", name: "Figma", category: "design", level: 2 },
  { id: "sk-11", name: "Vite", category: "tooling", level: 3 },
  { id: "sk-12", name: "Responsive Design", category: "frontend", level: 4 },
]

export const projects = [
  {
    id: "pj-01",
    title: "Trailhead",
    status: "shipped",
    description:
      "A hiking-trail discovery app with saved routes, elevation charts, and offline-ready trail notes for areas with no signal.",
    tech: ["React", "Node", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/example/trailhead",
    liveUrl: "https://trailhead.example.com",
    image: "trailhead",
  },
  {
    id: "pj-02",
    title: "Stagehand",
    status: "shipped",
    description:
      "A crew-scheduling tool for touring productions — built after one too many spreadsheets fell apart mid-tour. Handles conflicts, call times, and venue notes.",
    tech: ["React", "Firebase", "Tailwind"],
    githubUrl: "https://github.com/example/stagehand",
    liveUrl: "https://stagehand.example.com",
    image: "stagehand",
  },
  {
    id: "pj-03",
    title: "Keycap Log",
    status: "in progress",
    description:
      "A small collection tracker for mechanical keyboard parts — switches, keycap sets, and build notes, with a searchable inventory.",
    tech: ["React", "Vite", "MongoDB"],
    githubUrl: "https://github.com/example/keycap-log",
    liveUrl: "",
    image: "keycap",
  },
  {
    id: "pj-04",
    title: "Split the Bill",
    status: "shipped",
    description:
      "A no-signup group expense splitter for trips and shared households. Generates a shareable link instead of requiring an account.",
    tech: ["JavaScript", "Express", "SQLite"],
    githubUrl: "https://github.com/example/split-the-bill",
    liveUrl: "https://splitbill.example.com",
    image: "split",
  },
]

export const contact = {
  heading: "$ contact --send",
  blurb:
    "I'm currently looking for my first developer role. If you have an opening, a project, or just want to talk shop, my inbox is open.",
  email: "alex.rivera.dev@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/example", handle: "@alexrivera" },
    { label: "LinkedIn", href: "https://linkedin.com/in/example", handle: "/in/alexrivera" },
    { label: "Twitter / X", href: "https://twitter.com/example", handle: "@alexrivera_dev" },
  ],
}

export const footer = {
  name: profile.name,
  builtWith: "Built with React + Vite",
}
