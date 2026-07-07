# CLAUDE.md — Project guide for Claude Code and AI agents

> Portfolio of Manuel Cuya. Single-page, bilingual (EN/ES), static Astro site with a serverless contact endpoint.

## Stack

- **Astro 7** — static site generator (`output: 'static'` + Vercel adapter).
- **Vanilla CSS** and **vanilla JS** — scoped in `src/pages/index.astro`. No React, no Tailwind, no client framework on the frontend.
- **Resend** — transactional email delivery for the contact form.
- **Cloudflare Turnstile** — invisible bot protection on the contact form.
- **Vercel** — host + serverless functions (`/api/contact` runs as an edge/serverless function).

## Structure

```
src/
  pages/
    index.astro       # Entire portfolio — HTML + CSS + JS in one file (~1980 lines)
    api/
      contact.ts      # POST endpoint — validates input, verifies Turnstile, sends via Resend
  env.d.ts
public/
  images/             # Project screenshots + author photo (manuel.webp)
  favicon.svg
  og-image.svg        # PLACEHOLDER — replace with real 1200×630 PNG
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
| `TURNSTILE_SITE_KEY` | `src/pages/index.astro` (hardcoded today) | Public, safe to expose in HTML. Today it is a literal placeholder `YOUR_TURNSTILE_SITE_KEY` — must be replaced before deploy. |

Set the same values in the Vercel project environment variables.

## Architecture decisions

- **React → Astro rewrite (2026)**. The previous portfolio was a React/Vite/Tailwind SPA. The rewrite moved everything to a single Astro page with vanilla CSS/JS to keep the bundle tiny and the markup explicit. The git history before the rewrite commit still contains the old React code.
- **Single-file architecture**. All HTML, CSS and JS coexist in `index.astro`. Trade-off: large file but zero context-switching, no component sprawl, no hydration cost.
- **Bilingual EN/ES at runtime**. The language is NOT built twice. A `data-i18n` attribute system on DOM nodes + a `TR` dictionary in script toggles text content in place via `applyLang()`. Default `lang` is `en` on `<html lang="en">`.
- **Static + serverless hybrid**. `output: 'static'` with `adapter: vercel()` for a single serverless endpoint (`/api/contact`) declared with `export const prerender = false;`.

## Pending production hardening

See the TODO in README.md "Pending". Headless checklist for the agent:

- [ ] Replace `YOUR_TURNSTILE_SITE_KEY` in `src/pages/index.astro` with the real Turnstile **site key**.
- [ ] Set `RESEND_API_KEY` + `TURNSTILE_SECRET_KEY` in Vercel env vars.
- [ ] Replace `onboarding@resend.dev` in `src/pages/api/contact.ts` with a domain verified in Resend (`contact@mcuya.dev` once the domain resolves).
- [ ] Replace `public/og-image.svg` with a real 1200×630 PNG — most social platforms ignore SVG.
- [ ] Update `canonical` / `og:url` in `index.astro` once `https://mcuya.dev` resolves.
- [ ] Fix `document.documentElement.lang` is not updated when toggling EN/ES in `applyLang()` — a11y/SEO bug.
- [ ] Use `zod` to validate the contact form payload (the dependency is already installed but currently unused).
- [ ] README mentions "Update Hero.tsx" git history — clarify the React → Astro rewrite so the history makes sense.

## Conventions

- No comments in code unless necessary.
- Conventional commit messages only (`feat:`, `fix:`, `chore:`, `docs:`). No "Co-Authored-By" or AI attribution.
- Default to English for all technical artifacts (code, identifiers, UI labels, commit messages, docs).

## Contact

- Email: mcuya.ca@gmail.com
- GitHub: [@mcuyaca](https://github.com/mcuyaca)
- LinkedIn: [mcuyaca](https://www.linkedin.com/in/mcuyaca/)