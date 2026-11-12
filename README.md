# Nauman Anees Productions — Official Web Platform

**Tagline:** Your One-Stop Media Solution.  
**Vision:** Building the Next Era of Pakistani Cinema.

## Overview

A modern luxury cinema web platform for **Nauman Anees Productions** featuring:

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
- Secure backend submission proxy (`/api/submit`) supporting both local Express (`server.ts`) and Cloudflare Pages Functions (`functions/api/submit.ts`) connected to your existing Google Apps Script endpoint.

## Cloudflare Pages Deployment Instructions

1. **Build settings in Cloudflare Pages**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node compatibility: enabled (default)

2. **Configure Environment Variables / Secrets in Cloudflare**:
   In **Cloudflare Dashboard → Pages → Settings → Environment variables** (Production & Preview):
   - `APPS_SCRIPT_URL`:
     `https://script.google.com/macros/s/AKfycbzjBm0Lm6Q6-PkbITR9SkzOlQGno_pcpUCWkb4IFgryO0Xnfdu7eK1z0TO0QvXuCus/exec`
   - `APPS_SCRIPT_SECRET`:
     Enter the exact `SHARED_SECRET` configured in your Google Apps Script Project Properties as an **Encrypted Secret** (never commit or expose in frontend code).

3. **Routing & Functions**:
   - `functions/api/submit.ts` automatically deploys as the `/api/submit` Cloudflare Pages Function.
   - `public/_redirects` ensures all direct URLs (e.g., `/legacy/nauman-anees`, `/talent`, `/services/music-production`) and browser refreshes resolve cleanly.

## Local Development

```bash
npm install
npm run dev
```

Run unit tests for submission validation, payload structure, duplicate protection, and Apps Script response verification:

```bash
npx --yes tsx --test src/utils/submission.test.ts
```
