# Nauman Anees Productions — Official Web Platform

**Tagline:** Your One-Stop Media Solution.  
**Vision:** Building the Next Era of Pakistani Cinema.

## Overview

A modern luxury cinema web platform for **Nauman Anees Productions** built with React, Vite, Tailwind CSS, and **Cloudflare Pages + Pages Functions**:

- Realistic 3D red-velvet opening cinema curtains and smooth internal page-transition curtains (`prefers-reduced-motion` and `?autostart=1` supported).
- Official brand logo across navigation, curtain reveal, footer, and multi-format favicons (`/favicon.svg`, `/favicon.ico`, `/favicon-16x16.png`, `/favicon-32x32.png`, `/apple-touch-icon.png`).
- Three Generations Legacy archive featuring **Anees Bhatti**, **Nauman Anees — The Creative Visionary** (Film Director, Film Editor, VFX Artist, Animator, Post-Production Specialist, Creative Filmmaker), and **Daniyal Nauman**.
- Dedicated service divisions with dynamic conditional booking forms:
  - Music Production (8 services)
  - Video Production (Music Video Production)
  - Video Post-Production (9 services including Editing, Color Grading, VFX, 2D/3D Animation, Green Screen, Compositing, Motion Graphics, Visual Enhancement)
  - TV Commercials & Advertising
  - TV Dramas
  - Films & Short Films
  - Concert & Artist Booking (Pakistan & India artist access with the official artist composite banner)
- **New Talent Discovery & Simplified Application** (`/talent`) with homepage category cards auto-selecting applicant roles and optional Portfolio / Showreel link.
- Secure backend submission endpoint (`/api/submit`) implemented as a Cloudflare Pages Function (`functions/api/submit.ts`) for production and Express (`server.ts`) for local development, connected to your existing Google Apps Script endpoint.

## Cloudflare Pages Deployment Instructions

Deploy this repository as a **Cloudflare Pages** project (do **not** add a `wrangler.toml` Workers config):

1. **Create a Cloudflare Pages project**:
   - In the Cloudflare Dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - Leave **Deploy command** empty (Pages deploys `dist` and `functions/` automatically).

2. **Configure Environment Variables / Secrets in Cloudflare Pages**:
   In **Cloudflare Dashboard → Pages → Your Project → Settings → Variables and Secrets** (for both **Production** and **Preview**):
   - `APPS_SCRIPT_URL` *(Text)*:
     `https://script.google.com/macros/s/AKfycbzjBm0Lm6Q6-PkbITR9SkzOlQGno_pcpUCWkb4IFgryO0Xnfdu7eK1z0TO0QvXuCus/exec`
   - `APPS_SCRIPT_SECRET` *(Secret / Encrypted)*:
     Enter the exact `SHARED_SECRET` configured in your Google Apps Script Project Properties (never commit or expose in frontend code).

3. **SPA Routing & Pages Functions**:
   - `functions/api/submit.ts` is automatically deployed by Cloudflare Pages at `/api/submit`.
   - `public/_redirects` (`/* /index.html 200`) ensures all direct URLs (e.g., `/legacy/nauman-anees`, `/talent`, `/services/music-production`) and browser refreshes resolve cleanly.

## Local Development

```bash
npm install
npm run dev
```

Build the static bundle into `dist/`:

```bash
npm run build
```

Run unit tests for submission validation, payload structure, duplicate protection, and Apps Script response verification:

```bash
npx --yes tsx --test src/utils/submission.test.ts
```
