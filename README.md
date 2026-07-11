# What Next — Live Online Classes

A fresh React.js rebuild of the What Next site: new design, scroll/hero
animations, all 10 courses, and student enquiry routed only to WhatsApp
chat or a direct phone call (no other contact forms/backends).

## 1. Install

```bash
npm install
```

## 2. Set your contact details (important)

Open `src/data/config.js` and edit:

- `WHATSAPP_NUMBER` — your WhatsApp number, digits only, country code first, no `+` (e.g. `919876543210`)
- `PHONE_NUMBER` — the number used for the "Call now" button
- `BRAND` — name, email, city shown in the footer

Every WhatsApp / call button on the site reads from this one file.

## 3. Run locally

```bash
npm start
```

Opens on http://localhost:3000

## 4. Build for production

```bash
npm run build
```

Outputs a static site to `build/` — deploy it to Netlify, Vercel, or any
static host exactly like the current site.

## What's inside

- `src/components/Hero.js` — split-flap animated headline + live "board" graphic
- `src/components/Courses.js` + `CourseCard.js` — all 10 courses as ticket cards
- `src/components/HowItWorks.js` — 4-step enquiry → class flow
- `src/components/Enquiry.js` — form that opens a pre-filled WhatsApp chat (no backend/database)
- `src/components/FloatingContact.js` — floating WhatsApp + Call buttons on every page
- `src/data/courses.js` — edit/add/remove courses here
- `src/data/config.js` — contact numbers and brand text

## Notes

- Classes are positioned as **live, Google Meet-only** — there is no
  video hosting or LMS built in on purpose, per the brief.
- Student contact is intentionally limited to **WhatsApp chat** and
  **direct call** — there's no email-based contact form, matching the
  request. A `mailto:` link is included in the footer/enquiry section as
  a secondary option only.
- Animations respect `prefers-reduced-motion`.
