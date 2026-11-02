# Piyush Kumar — Portfolio

Personal portfolio of **Piyush Kumar**: Backend & AI engineer, IIT Patna.

- Dark theme by default with a light/dark toggle (circular reveal, choice remembered)
- Sections: About, Contact, Projects (click a card for details), Education, Tech Stack (filterable), Blog, GitHub Activity (live)
- Plain HTML/CSS/JS, no build step. Fonts: Instrument Serif, Inter, Geist Mono

## Run locally
```bash
npm run dev   # http://localhost:3000  (Node 20+)
```

## Deploy
Import the repo on [Vercel](https://vercel.com/new). No settings needed: `public/` is served as the site and `api/contributions.js` powers the GitHub graph.

## Structure
```
public/index.html     the whole site (styles + scripts inline)
public/assets/        avatar, banner, favicon, project image
public/resume.pdf     resume (Resume tile)
api/contributions.js  GitHub contributions proxy (Vercel function)
server.js             local dev server
```
