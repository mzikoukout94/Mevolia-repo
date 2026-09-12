# Mévolia — Site vitrine (Angular 18)

Site vitrine de **Mévolia** (Marion Fassier), consultante en développement des compétences :
conception pédagogique, Validation des Acquis de l'Expérience (VAE) et bilan de compétences.

Application **Angular 18** en composants **standalone**, **Reactive Forms**, **signals**,
**Angular control flow** (`@if` / `@for` / `@switch`), routing avec lazy-loading, SCSS et design tokens.

## Prérequis
- Node.js 20+
- Yarn 1.x

## Installation
```bash
yarn install
```

## Démarrage (développement)
Commande Angular standard :
```bash
ng serve
# ou
yarn serve
```
L'application est disponible sur http://localhost:4200.

> Dans l'environnement d'aperçu de cette plateforme, `yarn start` lance `node proxy-dev.mjs`
> qui exécute `ng serve` en interne (port 4200) et l'expose sur le port 3000 via un proxy
> qui réécrit l'en-tête `Host` (contournement du blocage d'hôtes du serveur Vite d'Angular 18).
> En local, utilisez simplement `ng serve`.

## Build de production
```bash
ng build
```
Le résultat est généré dans `dist/frontend/browser`.

## Tests unitaires
```bash
ng test
```
Tests fournis : `ContentService`, validation du formulaire de contact, coquille applicative.

## Architecture
```
src/app/
├── core/          # config (SITE_CONFIG, assets), models, services (ContentService = couche data mock)
├── shared/        # composants réutilisables (Button, Icon, Card, FAQ, Timeline…) + directives
├── layouts/       # header (nav + menu mobile), footer
└── features/      # pages : home, about, conception, vae, bilan, financement, contact, legal, not-found
```

- **Couche données** : `ContentService` renvoie des `Observable` (données mock) — remplaçable par des appels `HttpClient` sans toucher aux composants.
- **Design tokens** : variables CSS dans `src/styles.scss`, mixins responsives dans `src/styles/_mixins.scss`, blocs partagés dans `src/styles/_prestation.scss`.
- **Réservation de rendez-vous** : lien Calendly configurable dans `src/app/core/config/site-config.ts` (`bookingUrl`).
- **Formulaire de contact** : ouvre le client mail via `mailto:` pré-rempli.
