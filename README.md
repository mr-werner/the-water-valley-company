# The Water Valley Company — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://thewatervalleycompany.com/ (Windsor, CO).
Preview: https://twvc.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `the-water-valley-company` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `twvc.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (2026-11-24) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating (`api/google-reviews.js`); not used on the page yet |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Contact-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Lake-depth contour lines as the motif (hero, world panels), Fraunces display serif with Figtree body.
- Palette from the Water Valley lake and farm brand: deep lake navy, water teal, wheat gold, sand.
- The current site's "worlds" idea (Lake, Farm, Ice) becomes a real switcher in the hero and a tabbed section, so each world shows its golf, dining, homes and amenities in one place.
- A "plan your day" bar up front: tee times, dining, homes, weddings.
- One contact directory for every business line (main office, real estate, weddings, golf) instead of separate sites.

## What changed from the current site

- Brings Pelican Lakes, RainDance, real estate, aviation hangars and TWVC Weddings under one front door; today they are split across thewatervalleycompany.com, thewatervalleyrealestate.com, twvcweddings.com and a members site.
- Phone numbers, address and every business line's contact are visible without hunting.
- Values and story kept, but cut to a scannable grid.
- Mobile-first layout checked at 390px with no sideways scrolling.

## Owner should confirm

- Main office phone: (970) 686-5828 comes from the Windsor Chamber listing; the chamber also lists (970) 686-2768.
- Logo: the concept uses the Water Valley logo from thewatervalleyrealestate.com; swap in the parent-company logo if it differs.
- Ice world: the current site only says "an indoor ice experience"; venue name, programs and link are needed.
- "45 holes of golf" adds Pelican Lakes (27) and RainDance (18).
- Garden at Rock Bridge description, and the name of the 2022 award shown on TWVC Weddings.
- Photos are hotlinked from the real estate and weddings sites and must be replaced with licensed originals before launch.
