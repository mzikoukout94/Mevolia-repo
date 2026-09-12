# Mévolia — PRD & Project Memory

## Original problem statement
Build a complete, production-ready **Angular 18** web application from a functional brief (French copy)
and design mockups. Standalone components, TypeScript strict, Angular Router (lazy loading), Reactive
Forms, RxJS/signals, SCSS with design tokens, responsive, accessible, mock data layer. Source of truth =
brief + mockups. Client = **Mévolia** (Marion Fassier), consultante en développement des compétences.

## User choices (confirmed)
- "Prendre rendez-vous" buttons → external **Calendly** link (placeholder `https://calendly.com/mevolia`, configurable).
- Contact form → composes a **`mailto:`** to `bonjour@mevolia.fr` on submit.
- Scope = 7 pages + legal footer pages.
- Navigation = "Mes accompagnements" dropdown.
- Angular 18 pure frontend, mock data (swappable for a real API later).

## Tech stack
Angular 18 · standalone components · signals · `@if/@for/@switch` · Reactive Forms · RxJS · SCSS ·
lazy-loaded routes + `PreloadAllModules` · strict TS.

## Architecture
`src/app/` → `core/` (config: SITE_CONFIG, assets, models; services: ContentService mock data layer) ·
`shared/` (Button, Icon [inline SVG set], Logo, SectionHeading, Checklist, Offers, FeatureBand,
ProcessTimeline, StepList, FaqAccordion, CtaBanner, PageHero, Skeleton; RevealDirective) ·
`layouts/` (header with dropdown + mobile drawer, footer) · `features/` (home, about, conception, vae,
bilan, financement, contact, legal [data-driven], not-found).

### Preview serving note
Angular 18's Vite dev-server blocks the reverse-proxied preview host and ignores `--disable-host-check`.
`yarn start` runs `node proxy-dev.mjs` → real `ng serve` on 127.0.0.1:4200 exposed on 0.0.0.0:3000 with
the `Host` header rewritten to `localhost`. Locally, plain `ng serve` works. `serve-dev.mjs` is an
alternate static (`ng build --watch` + SPA server) runner kept for reference.

## Design system
Cream (#FDFBF7/#FAF6EF) backgrounds · terracotta primary #B4543C · olive green #55633F (CTA/logo) ·
ochre #E0A94F · peach icon circles. Headings = Cormorant Garamond (serif), body = Mulish. Subtle
botanical line accents, organic blob hero image, soft shadows, scroll-reveal micro-animations.

## Implemented (2026-06)
- All 7 content pages + 4 legal pages + 404, faithful to the brief's French copy.
- Header (sticky, scroll state, "Mes accompagnements" dropdown, mobile drawer), footer.
- Home: hero, 3 expertises (skeleton→loaded), 4 engagements, 5-step timeline, 3E values, testimonials
  (skeleton→loaded), CTA banner.
- Service pages (conception/vae/bilan): checklists, step lists/timelines, offers, modality bands,
  FAQ accordions, page-specific tone.
- Financement page, Contact page (Reactive Form: required/email/min-length validation, success state,
  mailto compose).
- Data layer = ContentService (Observables, mock) — swappable for HttpClient.
- Loading/loaded/empty states via skeletons; a11y (skip link, labels, aria, focus states, keyboard).
- Unit tests: ContentService, Contact form validation, AppComponent shell.

## QA status
- Production build passes (initial ~97 kB gzip; per-feature lazy chunks).
- Testing agent iteration_2: **100% frontend**, zero console errors, no horizontal overflow at 390px on
  any route, dropdown/mobile-menu/FAQ/contact-form all working, 404 works.

## Backlog / future (from brief)
- P1: Ressources page (blog/articles) when content exists.
- P1: "Démarche qualité" page + quality indicators once Qualiopi certified.
- P1: Downloadable VAE / Bilan spec sheets (PDF "fiches").
- P2: Real Calendly URL; replace mock ContentService with a real API/CMS.
- P2: Real legal texts (mentions légales, confidentialité, CGV, cookies) + cookie banner.
