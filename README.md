# JUSTFUN

An interactive, motion-rich gaming showcase inspired by Zentry. The experience combines cinematic video, GSAP scroll sequences, responsive bento layouts, spatial hover effects, and optional ambient audio.

Live site: [justfun-alpha.vercel.app](https://justfun-alpha.vercel.app)

## Highlights

- Cinematic hero with an accessible interactive video switcher
- GSAP and ScrollTrigger sequences scoped to their React components
- Responsive feature, story, and contact sections
- Keyboard-friendly navigation and reduced-motion preferences
- Optimized H.264 media with lazy metadata loading

## Local development

Requires Node.js 24 or newer and npm 11 or newer.

```bash
git clone https://github.com/MokiMeow/JUSTFUN.git
cd JUSTFUN
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm test
npm run build
```

GitHub Actions runs the same checks from a clean install and audits production dependencies. Vercel configuration includes SPA routing, browser hardening headers, and long-lived caching for versioned media assets.

## Project structure

- `src/components` — interface and animation sections
- `src/utils` — safe title parsing and focused unit tests
- `public/videos` — compressed cinematic loops
- `public/audio` — optional ambient soundtrack
- `public/fonts` and `public/img` — local display assets

## Attribution

This educational project follows the JavaScript Mastery award-winning website tutorial and is visually inspired by [Zentry](https://zentry.com/). Design, brand, video, image, audio, and font rights remain with their respective owners. Replace those assets before any commercial use; this repository is not affiliated with or endorsed by Zentry.
