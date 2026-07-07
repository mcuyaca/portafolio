# Manuel Cuya — Portfolio

Personal portfolio built with Astro. Single-page, bilingual (EN/ES), fully static with a serverless contact form.

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
  images/             # Project screenshots (5 projects)
  favicon.svg         # Brand favicon /M
  og-image.svg        # Social preview placeholder (replace with real 1200×630 PNG)
.atl/
  skill-registry.md   # SDD skill registry
```

## Sections

| # | Section | Status |
|---|---------|--------|
| 01 | Hero | Name, status panel, stats, core stack |
| 02 | About | Bio, Download CV, LinkedIn |
| 03 | Stack | Animated marquee + tech grid |
| 04 | Work | 5 projects with screenshots and carousel |
| 05 | Experience | Neelevat (current) + Macusu (civil engineering) |
| 06 | Writing | Placeholder — add posts or remove |
| 07 | Contact | Form (Turnstile + Resend) + contact cards |

## Env vars

Create `.env` at the root (or set in Vercel dashboard):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4AAAAAAA_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

Also replace `YOUR_TURNSTILE_SITE_KEY` in `src/pages/index.astro` (line ~638) with the **Site key** from Cloudflare Turnstile dashboard.

## Dev

```bash
npm install
npm run dev       # http://localhost:4321
```

## Deploy

Push to `main` — Vercel deploys automatically.

```bash
npm run build     # local build check
npm run preview   # preview the build locally
```

## Pending

- [ ] Replace `YOUR_TURNSTILE_SITE_KEY` in `index.astro` with real Cloudflare key
- [ ] Add `RESEND_API_KEY` + `TURNSTILE_SECRET_KEY` in Vercel env vars
- [ ] Add real About photo (replace placeholder slot)
- [ ] Replace `public/og-image.svg` with real 1200×630 PNG screenshot
- [ ] Update canonical URL (`https://mcuya.dev`) once domain is set
- [ ] Writing section — add real posts or remove the section

## Contact

- Email: mcuya.ca@gmail.com
- GitHub: [@mcuyaca](https://github.com/mcuyaca)
- LinkedIn: [mcuyaca](https://www.linkedin.com/in/mcuyaca/)
