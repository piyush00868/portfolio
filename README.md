<div align="center">

# Piyush Kumar · Portfolio

**Full-Stack Developer · IIT Patna**

I build full-stack applications and AI-powered products, with a focus on backend engineering, system design and agentic systems.

[![GitHub](https://img.shields.io/badge/GitHub-piyush00868-181717?style=flat&logo=github)](https://github.com/piyush00868)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Piyush%20Kumar-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/piyush-kumar-7a594227a/)
[![X](https://img.shields.io/badge/X-@piyushkumarr__-000000?style=flat&logo=x)](https://x.com/piyushkumarr_)
[![Email](https://img.shields.io/badge/Email-piyushkumar52679%40gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:piyushkumar52679@gmail.com)

![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

<br />

![Portfolio, dark theme](.github/screenshots/dark.png)

## Features

- **Dark and light themes.** Dark by default. Switching plays a circular reveal and the choice is remembered, with no flash of the wrong theme on load.
- **Hero.** Pixel-art banner, an "open to internships" badge, rotating titles and a live IST clock.
- **Projects.** Cards open a details modal. Both render from the same data entry.
- **Tech stack.** Brand logos with category filters.
- **GitHub activity.** The contribution heatmap is rendered on the server and cached for an hour, so it loads instantly.
- **Navigation.** A sticky navbar whose dot follows the hovered link and tracks the section you're reading.
- **Contact page.** A validated form with loading, error and success states, delivered by email through FormSubmit.
- **Visitor counter**, scroll-reveal animations, a responsive layout, and SEO / Open Graph metadata.

## Tech stack

| Concern    | Choice                                                                  |
| ---------- | ----------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router), React 19                                       |
| Language   | TypeScript (strict, `noUncheckedIndexedAccess`)                         |
| Styling    | Tailwind CSS 4 utilities; design tokens as CSS variables mapped into the Tailwind theme |
| Fonts      | `next/font`: Instrument Serif, Inter, Geist Mono (self-hosted)          |
| Quality    | ESLint (`eslint-config-next`), Prettier                                 |
| Hosting    | Vercel                                                                  |
| Services   | FormSubmit (contact form), Abacus (visitor count), github-contributions-api |

There's no database, no auth and no state library. None of them are needed.

## Getting started

Requires **Node.js 20.9+**.

```bash
git clone https://github.com/piyush00868/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command                | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start the dev server with hot reload             |
| `npm run build`        | Production build                                 |
| `npm start`            | Serve the production build                       |
| `npm run lint`         | ESLint (`lint:fix` to auto-fix)                  |
| `npm run format`       | Format everything with Prettier                  |
| `npm run format:check` | Check formatting without writing                 |
| `npm run typecheck`    | TypeScript type check                            |
| `npm run check`        | Typecheck + lint + format check (run before a PR) |

## Architecture

```
src/
├── app/                          Routes (App Router)
│   ├── layout.tsx                <html>, fonts, metadata, no-flash theme script
│   ├── page.tsx                  Homepage: composes the sections
│   ├── globals.css               Tailwind entry: theme mapping, variants, keyframes, base
│   ├── contact/
│   │   └── page.tsx              /contact
│   └── api/contributions/
│       └── route.ts              GET /api/contributions (JSON proxy, edge-cached 1h)
│
├── components/
│   ├── layout/                   Page chrome
│   │   ├── PageContainer.tsx     The 800px dashed-rail column
│   │   ├── Navbar.tsx            Server shell
│   │   ├── NavLinks.tsx          (client) active section + sliding dot + theme toggle
│   │   ├── Footer.tsx
│   │   └── VisitorCounter.tsx    (client)
│   ├── sections/                 One component per homepage section
│   │   ├── Hero.tsx              + hero/RotatingRole.tsx, hero/LocalClock.tsx (client)
│   │   ├── About.tsx  ContactLinks.tsx  Education.tsx  Blog.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx         + tech-stack/TechStackExplorer.tsx (client, filters)
│   │   ├── GitHubActivity.tsx    async Server Component
│   │   └── CallToAction.tsx  Quote.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx       Server-rendered card content
│   │   ├── card-styles.ts        Shared Tailwind classes for grid cells
│   │   ├── ProjectCardShell.tsx  (client) click/keyboard → open modal, reveal
│   │   ├── ProjectDialogProvider.tsx  (client) which modal is open
│   │   ├── ProjectModal.tsx      (client) native <dialog>
│   │   ├── MoreProjectsCard.tsx
│   │   └── covers/               Cover frame + illustrated mock-ups
│   ├── contact/
│   │   └── ContactForm.tsx       (client) validation, sending, success
│   └── ui/                       Shared primitives
│       ├── ThemeToggle.tsx  IconButton.tsx  Reveal.tsx
│       ├── SectionHeading.tsx  StatusPill.tsx  Tag.tsx
│       ├── Separator.tsx  RichText.tsx
│       └── icons/                Line icons + <TechIcon>/<LinkIcon>
│
├── data/                         ✏️  All editable content lives here
│   ├── profile.ts                Name, roles, about, socials, quote, SEO, nav
│   ├── projects.ts               Projects (cards and modals)
│   ├── tech-stack.ts             Stack items + filter tabs
│   ├── education.ts
│   └── icons/                    Simple Icons brand paths + generic glyphs
│
├── hooks/
│   ├── useTheme.ts               Read/toggle theme, circular view transition
│   ├── useActiveSection.ts       Which section is in view
│   └── useInView.ts              One-shot intersection (scroll reveal)
│
├── lib/
│   ├── github.ts                 Fetch + lay out contributions (server-only)
│   ├── contact.ts                Validation + FormSubmit delivery
│   ├── visitors.ts               Visitor counter API
│   ├── theme.ts                  Theme constants + inline init script
│   └── utils.ts                  cn(), link helpers, site URL
│
├── styles/
│   ├── variables.css             🎨 Design tokens (colors per theme, easing)
│   └── utilities.css             Custom Tailwind utilities for the dashed grid (hl, hatch)
│
└── types/                        Shared types (profile, project, tech-stack, github)

public/
├── assets/                       avatar, banner, favicon, project images
└── resume.pdf
```

### Design decisions

- **Server Components by default.** Every section renders on the server. Client components are limited to the interactive pieces: theme toggle, nav links, rotating role, clock, scroll reveal, project modal, stack filters, visitor counter and the contact form. Server-rendered content is passed into them as `children`, so it isn't shipped as JavaScript.
- **One source of truth for content.** Components never hard-code copy. A project's card and modal both read the same `Project` entry, so they can't drift apart.
- **Styling is Tailwind-only.** Components are styled with utility classes, with no CSS Modules. Colors are CSS variables in `styles/variables.css`, mapped into Tailwind's theme in `globals.css`, so you write `bg-bg text-muted border-line-strong font-serif` and the classes follow the active theme automatically. `dark:` / `light:` variants key off `<html data-theme>`, not the OS setting. The only hand-written CSS is a few custom utilities (`hl`, `hl-top`, `hl-bottom`, `hatch`) for the dashed lines that bleed 100vw past the frame, since plain utility classes can't express those.
- **Theme without flash or hydration errors.** An inline script sets `<html data-theme>` before paint. The toggle's sun/moon icon is chosen by CSS from that attribute, so server and client HTML always match.
- **GitHub graph on the server.** It's fetched at build time and revalidated hourly (ISR). `/api/contributions` keeps the original public contract (same JSON, `s-maxage=3600, stale-while-revalidate=86400`, `502 { error: "unavailable" }` on failure).
- **Native `<dialog>`** for the project modal, which gives focus trapping, Escape to close and a backdrop without a library.

## Editing content

All of this is done in `src/data/`. You don't need to touch any components.

**Profile, hero, about, socials, quote** → `src/data/profile.ts`

```ts
roles: ['Full-Stack Developer', 'Build Web Apps', 'AI Agent', 'Problem Solver'],
about: [
  ['I build with ', { strong: 'Node.js, Express.js, TypeScript' }, ' and ', { strong: 'PostgreSQL' }],
],
```

Words in `{ strong: '…' }` render bold and underlined. SEO text is in the `site` object in the same file, and the navbar links are in `navItems`.

**Add a project** → `src/data/projects.ts`. Add an object to the `projects` array:

```ts
{
  slug: 'my-app',
  title: 'My App',
  tagline: 'One line under the title.',
  summary: 'Short paragraph on the card.',
  modalSubtitle: 'Shown under the title in the modal',
  status: 'live',                       // optional: 'live' | 'open-source'
  cover: { kind: 'screenshot', gradient: 'blue', image: '/assets/my-app.webp', alt: 'My App' },
  cardTags: ['Next.js', 'PostgreSQL'],  // a few, on the card
  tags: ['Next.js', 'PostgreSQL', 'Prisma'], // full list, in the modal
  highlights: ['What you built and why it matters…'],
  links: [
    { label: 'Live site', href: 'https://…', icon: 'globe', onCard: true },
    { label: 'GitHub', href: 'https://github.com/…', icon: 'github', onCard: true },
  ],
}
```

Put the screenshot in `public/assets/`. The cover gradients are `blue`, `green`, `orange` and `mono`.

**Technologies** → `src/data/tech-stack.ts`. Add `{ name, icon: { brand: 'docker' }, category: 'tools' }`. Brand logos live in `src/data/icons/brand-icons.ts`. If a logo is missing there, copy its path from [simpleicons.org](https://simpleicons.org) and add it.

**Education** → `src/data/education.ts`.

**Resume** → replace `public/resume.pdf`.

## Changing the theme

All colors are CSS variables in `src/styles/variables.css`, with one block per theme. They're mapped to Tailwind colors (`bg-bg`, `text-fg`, `text-muted`, `bg-chip`, `border-line`…) in `src/app/globals.css`:

```css
[data-theme='dark']  { --bg: #0a0a0a; --fg: #fafafa; --muted: #a1a1a1; … }
[data-theme='light'] { --bg: #ffffff; --fg: #0a0a0a; --muted: #737373; … }
```

`--c0` to `--c4` are the GitHub heatmap levels. Fonts are set in `src/app/layout.tsx` (`next/font`) and exposed as `font-sans`, `font-serif` and `font-mono`. Motion curves are `--ease-out` / `--ease-dot`, and the keyframes (`animate-ping-dot`, `animate-blink`, `animate-pop`, `animate-enter`) are defined in `globals.css`. To make light the default, change `DEFAULT_THEME` in `src/lib/theme.ts` and the init script fallback in the same file.

## Deployment (Vercel)

1. Import the repo at [vercel.com/new](https://vercel.com/new). `vercel.json` pins the framework to **Next.js**, so a project previously set up for the old static site switches over automatically.
2. Deploy. You don't need any settings or environment variables.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain so social-share images use it. Without it, the Vercel production domain is used.

The old `/resume` and `/contact.html` URLs redirect to `/resume.pdf` and `/contact`.

### External services

- **Contact form:** [FormSubmit](https://formsubmit.co) delivers to the email in `profile.ts`. The first submission sends a one-time activation email that you need to confirm.
- **Visitor count:** [Abacus](https://abacus.jasoncameron.dev) counts each browser once.
- **GitHub graph:** [github-contributions-api](https://github.com/grubersjoe/github-contributions-api).

If any of them is down, its UI hides itself or falls back gracefully. The rest of the page is unaffected.

## Contact

Open to internships, project opportunities and collaborations.

- **Email:** [piyushkumar52679@gmail.com](mailto:piyushkumar52679@gmail.com)
- **LinkedIn:** [piyush-kumar-7a594227a](https://www.linkedin.com/in/piyush-kumar-7a594227a/)
- **X / Twitter:** [@piyushkumarr\_](https://x.com/piyushkumarr_)
- **GitHub:** [@piyush00868](https://github.com/piyush00868)

<div align="center">
<br />
<sub>Designed &amp; developed by <b>Piyush Kumar</b></sub>
</div>
