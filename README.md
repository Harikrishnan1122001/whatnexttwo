# What Next — Learning Platform (one-page site)

A single-page React site for the "What Next" learning platform, built with
Create React App (react-scripts).

## Before you run it

Open `src/config.js` and set `WHATSAPP_NUMBER` to your real WhatsApp number
(country code + number, digits only — e.g. `"919876543210"`). Every course
card, including the Python one, uses this number to open WhatsApp with a
prefilled message like:

> Hi What Next, I am interested in the Python course.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
```

This outputs a static site in `build/` that you can upload to any static
host (Netlify, Vercel, GitHub Pages, S3, etc).

## Project structure

```
whatnext-learning/
├── package.json
├── public/
│   ├── index.html               entry HTML, loads fonts + the app
│   └── logo.png                  the What Next logo
└── src/
    ├── index.js                 React root
    ├── App.jsx                  composes the page from sections
    ├── config.js                 site name + WhatsApp number
    ├── index.css                 all styles (design tokens at the top)
    ├── data/
    │   └── courses.js            course catalogue (edit to add/remove courses)
    ├── utils/
    │   └── whatsapp.js            builds the wa.me link + opens it
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Courses.jsx
        ├── CourseCard.jsx         the WhatsApp click happens here
        ├── About.jsx
        ├── Footer.jsx
        ├── Reveal.jsx             scroll-reveal wrapper (fade + rise-in on scroll)
        └── RiseMeter.jsx           the vertical "rise" progress rail on the left edge
```

## About the design

- **Rise meter**: a thin vertical rail fixed to the left edge of the page.
  It fills red as you scroll and lights up tick marks labeled start / learn
  / build / rise — a literal read on "Rise with the right direction."
- **Scroll reveal**: every section and course card fades and rises into
  place the first time it enters the viewport (`Reveal.jsx`, using
  `IntersectionObserver`). Respects `prefers-reduced-motion`.
- **Hero slash**: a diagonal cut panel behind the headline, echoing the
  slanted "W" in the What Next logo.

## How the WhatsApp click works

`src/utils/whatsapp.js` builds a `https://wa.me/<number>?text=<message>` link.
Clicking "Enquire on WhatsApp" on any course card (Python included) calls
`openWhatsAppForCourse(courseName)`, which opens that link in a new tab. On
mobile this opens the WhatsApp app directly; on desktop it opens WhatsApp Web.
"# whatnexttwo" 
