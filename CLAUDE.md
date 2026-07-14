# CLAUDE.md — Project guide for Claude Code and AI agents

> Portfolio of Manuel Cuya. Single-page, bilingual (EN/ES), static Astro site with a serverless contact endpoint.

## Stack

- **Astro 7** — static site generator (`output: 'static'` + Vercel adapter).
- **Vanilla CSS** and **vanilla JS** — Astro components + plain ES modules. No React, no Tailwind, no client framework on the frontend.
- **Resend** — transactional email delivery for the contact form.
- **Cloudflare Turnstile** — invisible bot protection on the contact form.
- **Vercel** — host + serverless functions (`/api/contact` runs as an edge/serverless function).

## Structure

```
src/
  pages/
    index.astro       # Assembles the page from the component tree
    api/
      contact.ts      # POST endpoint — zod validation, Turnstile verify, Resend send
  layouts/
    BaseLayout.astro  # <head>, fonts, icon font, Turnstile script
  components/
    sections/         # Nav, Hero, About, Stack, Experience, Projects, Writing, Contact, Footer
    projects/         # ProjectFeatured, ProjectMockup, ProjectTabs
    contact/          # ContactForm, ContactInfo
    ui/               # Preloader, ProgressBar, GrainCursor, SectionHeader
  scripts/
    main.js           # Client orchestrator — wires all lib modules
    lib/              # i18n, carousel, form, clock, scroll, cursor, grain
    data/             # translations.js (TR dictionary), projects.js
  styles/
    global.css
  env.d.ts
public/
  images/             # Project screenshots + author photo (manuel.webp)
  favicon.svg
  og-image.png
astro.config.mjs
tsconfig.json
package.json
```

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build
npm run preview   # preview the production build locally
```

There is no test runner, linter or formatter configured yet.

## Env vars

Copy `.env.example` to `.env` and fill in real values. The contact endpoint will not work without them.

| Variable | Where it's used | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | `src/pages/api/contact.ts` | Resend API key. In dev, the sandbox domain `onboarding@resend.dev` only sends to verified addresses. For production, verify a domain in Resend and update the `from` field. |
| `TURNSTILE_SECRET_KEY` | `src/pages/api/contact.ts` | Server-side secret. Verify the token returned by the Turnstile widget. |
| `PUBLIC_TURNSTILE_SITE_KEY` | `src/pages/index.astro` | Public, safe to expose in HTML. Falls back to the placeholder `YOUR_TURNSTILE_SITE_KEY` when unset. Already set locally and in Vercel. |

Set the same values in the Vercel project environment variables.

## Architecture decisions

- **React → Astro rewrite (2026)**. The previous portfolio was a React/Vite/Tailwind SPA. The rewrite moved everything to Astro with vanilla CSS/JS to keep the bundle tiny and the markup explicit. The git history before the rewrite commit still contains the old React code.
- **Component tree, zero hydration**. The page started as a single ~2000-line `index.astro` and was later split into Astro components (`src/components/`) plus plain ES modules (`src/scripts/`). Components are static templates only — all interactivity lives in `src/scripts/main.js` and its lib modules; nothing hydrates.
- **Bilingual EN/ES at runtime**. The language is NOT built twice. A `data-i18n` attribute system on DOM nodes + a `TR` dictionary in script toggles text content in place via `applyLang()`. Default `lang` is `en` on `<html lang="en">`.
- **Static + serverless hybrid**. `output: 'static'` with `adapter: vercel()` for a single serverless endpoint (`/api/contact`) declared with `export const prerender = false;`.

## Production hardening

Done: Turnstile + Resend keys are set locally and in Vercel, zod validates the contact payload, `document.documentElement.lang` updates in `applyLang()`, real `og-image.png`, canonical/`og:url` point to `https://mcuyaca.dev`, and README explains the React → Astro rewrite (old `Update Hero.tsx` commits are pre-rewrite).

Remaining nice-to-haves live in README.md "Pending" (writing section content, LICENSE, rate limiting, smoke test).

## Conventions

- No comments in code unless necessary.
- Conventional commit messages only (`feat:`, `fix:`, `chore:`, `docs:`). No "Co-Authored-By" or AI attribution.
- Default to English for all technical artifacts (code, identifiers, UI labels, commit messages, docs).

## Contact

- Email: mcuya.ca@gmail.com
- GitHub: [@mcuyaca](https://github.com/mcuyaca)
- LinkedIn: [mcuyaca](https://www.linkedin.com/in/mcuyaca/)