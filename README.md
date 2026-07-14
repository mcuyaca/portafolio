# Manuel Cuya — Portfolio

Personal portfolio built with Astro. Single-page, bilingual (EN/ES), fully static with a serverless contact form.

> Previously this portfolio was a React/Vite/Tailwind SPA. It was rewritten to a single Astro page with vanilla CSS/JS to keep the bundle tiny and the markup explicit. Older git history (commits like `Update Hero.tsx`, `Update Projects.tsx`) refers to that pre-rewrite codebase.

## Tech

- [Astro 7](https://astro.build) — static site generator
- Vanilla CSS — scoped styles in the single page file
- Vanilla JS — preloader, custom cursor, language toggle, project carousel, scroll reveal, live clock
- [Resend](https://resend.com) — contact form email delivery
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) — bot protection on contact form
- Deployed on [Vercel](https://vercel.com)

## Structure

```
src/
  pages/
    index.astro       # Entire portfolio — HTML + CSS + JS in one file
    api/
      contact.ts      # Serverless contact form — Turnstile + Resend
public/
  images/             # Project screenshots + author photo (manuel.webp)
  favicon.svg
  og-image.png        # Social preview (1200x630)
CLAUDE.md             # Project guide for AI agents
.env.example          # Template for env vars (commit-safe)
astro.config.mjs
tsconfig.json
package.json
```

## Assets

Image conventions for `public/images/`. Keep new screenshots on-spec so the
carousel and mobile `<picture>` sources stay consistent.

| Asset | Size (px) | Aspect | Path |
| --- | --- | --- | --- |
| Project screenshot (desktop) | 1200×800 | 3:2 | `public/images/<slug>.webp` |
| Project screenshot (mobile) | 800×1200 | 2:3 | `public/images/mobile/<slug>.webp` |
| Author photo | 800×1067 | 3:4 | `public/images/manuel.webp` |
| Social preview | 1200×630 | 1.91:1 | `public/og-image.png` |

- Export screenshots as WebP.
- A project only needs a mobile variant when its `Projects.astro` entry sets
  `hasMobile: true`; that enables the `(max-width:768px)` `<source>`.

## Sections

| # | Section | Status |
|---|---------|--------|
| 01 | Hero | Name, status panel, stats, core stack |
| 02 | About | Bio, Download CV, LinkedIn, author photo |
| 03 | Stack | Animated marquee + tech grid |
| 04 | Work | 5 projects with screenshots and carousel |
| 05 | Experience | Neelevat (current) + Macusu (civil engineering) |
| 06 | Writing | Coming soon |
| 07 | Contact | Form (Turnstile + Resend) + contact cards |

## Env vars

Copy `.env.example` to `.env` (or set in Vercel dashboard):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4AAAAAAA_xxxxxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAA_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

- `RESEND_API_KEY` — server-only, used in `src/pages/api/contact.ts`.
- `TURNSTILE_SECRET_KEY` — server-only, verifies the Turnstile token.
- `PUBLIC_TURNSTILE_SITE_KEY` — **public, exposed in frontend HTML at build time**. The `PUBLIC_` prefix is required by Astro so the value reaches the client. Used in `src/pages/index.astro` frontmatter.

## Dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # local production build
npm run preview   # preview the build locally
```

## Deploy

Vercel auto-deploys on push. The production branch is `main`; the rewrite currently lives on `feat/new-portfolio-design`.

```bash
git push -u origin feat/new-portfolio-design   # or merge to main first
```

For the contact form to work in production, add the three env vars above in the Vercel project settings — `.env` is gitignored and never reaches Vercel automatically.

DNS for the custom domain (`mcuyaca.dev`):

```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

Add the domain in Vercel → Project → Settings → Domains. Vercel issues the HTTPS certificate automatically.

## Pending

- [ ] Writing section — replace "Coming soon" with real posts
- [ ] (Optional) Add a LICENSE file (MIT) — currently all rights reserved
- [ ] (Optional) Rate-limiting on `/api/contact`
- [ ] (Optional) Smoke test for `/api/contact`

## Contact

- Email: mcuya.ca@gmail.com
- GitHub: [@mcuyaca](https://github.com/mcuyaca)
- LinkedIn: [mcuyaca](https://www.linkedin.com/in/mcuyaca/)