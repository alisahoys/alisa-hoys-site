# Alisa Hoys — Personal Website

A professional portfolio site built with Next.js 16 (App Router), Tailwind CSS v4 and Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Digital twin chat

The "Ask my digital twin" chat is powered by OpenRouter. It needs an `OPENROUTER_API_KEY` in `.env` (never committed). Requests go through `src/app/api/chat/route.ts`, so the key stays server-side. The persona, facts and model list live in [`src/lib/twin.ts`](src/lib/twin.ts); the models are free-tier with automatic fallback.

## Edit content

All copy lives in one file: [`src/data/profile.ts`](src/data/profile.ts).

- `profile` — name, title, summary, about paragraphs, stack, languages, links.
- `experience` — career timeline cards.
- `education` — education list.
- `projects` — portfolio cards. Set `href` on a project to make its card a link (the "Coming soon" badge becomes "Open").
- `profile.portfolioUrl` — target of the "View full portfolio" button.

The downloadable CV is `public/Alisa-Hoys-CV.pdf`; replace that file to update it.

## Structure

- `src/app/layout.tsx` — fonts (Fraunces + Manrope), metadata.
- `src/app/globals.css` — colour tokens, glass/card styles, animations.
- `src/components/` — `Nav`, `Hero`, `Marquee`, `About`, `Journey`, `Portfolio`, `Contact`.
