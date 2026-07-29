// ─────────────────────────────────────────────────────────
// data.js
// Every piece of content on the site lives here and gets
// passed down into components as props. Edit this file to
// make the portfolio your own — you shouldn't need to touch
// component code just to change words, links, or images.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Melekte Ermias",
  initials: "ME",
  title: "Cybersecurity Engineer | Full Stack Developer",
  tagline: "I build fast, accessible web apps from the database to the pixels.",
  location: "Addis,Ethiopia",
  resumeUrl: "#",
  avatarInitial: "Meeseeks",
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
    "I'm a self-taught developer turned bootcamp grad, currently based in AA. Bla Bla Bla... We will add the villain backstory here."],
  facts: [
    { label: "based in", value: "AA, 10" },
    { label: "focus", value: "React · Node · Postgres" },
    { label: "open to", value: "junior / associate roles" },
    { label: "status", value: "Currently in Service..." },
  ],
}

export const skills = [
  { id: "sk-01", name: "JavaScript (ES6+)", category: "language", level: 4 },
  { id: "sk-02", name: "React", category: "frontend", level: 4 },
  { id: "sk-03", name: "HTML & CSS", category: "frontend", level: 5 },
  { id: "sk-04", name: "Node.js", category: "backend", level: 4 },
  { id: "sk-05", name: "Express", category: "backend", level: 2 },
  { id: "sk-06", name: "PostgreSQL", category: "database", level: 2 },
  { id: "sk-07", name: "MongoDB", category: "database", level: 1 },
  { id: "sk-08", name: "Git & GitHub", category: "tooling", level: 4 },
  { id: "sk-09", name: "REST APIs", category: "backend", level: 4 },
  { id: "sk-10", name: "Figma", category: "design", level: 4 },
  { id: "sk-11", name: "Vite", category: "tooling", level: 3 },
  { id: "sk-12", name: "Responsive Design", category: "frontend", level: 3},
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
    liveUrl: "not available yet",
    image: "trailhead",
  },
  {
    id: "pj-02",
    title: "Stagehand",
    status: "in progress",
    description:
      "A crew-scheduling tool for touring productions — built after one too many spreadsheets fell apart mid-tour. Handles conflicts, call times, and venue notes.",
    tech: ["React", "Firebase", "Tailwind"],
    githubUrl: "https://github.com/example/stagehand",
    liveUrl: "not available yet",
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
    liveUrl: "not available yet",
    image: "keycap",
  },
  {
    id: "pj-04",
    title: "Split the Bill",
    status: "in progress",
    description:
      "A no-signup group expense splitter for trips and shared households. Generates a shareable link instead of requiring an account.",
    tech: ["JavaScript", "Express", "SQLite"],
    githubUrl: "https://github.com/example/split-the-bill",
    liveUrl: "not available yet",
    image: "split",
  },
]

export const contact = {
  heading: "$ contact --send",
  blurb:
    "I'm currently in a role though If you have an opening, a project, or just want to talk shop, my inbox is open.",
  email: "melestically@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/arthemisz", handle: "@arthemisz" },
    { label: "LinkedIn", href: "https://linkedin.com/in/Melekte-ermias", handle: "/in/Melekte-ermias" },
    { label: "Twitter / X", href: "https://twitter.com/arthemisz", handle: "@arthemisz" },
  ],
}

export const footer = {
  name: profile.name,
  builtWith: "Built with React + Vite",
}
