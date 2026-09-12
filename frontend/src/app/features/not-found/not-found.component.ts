import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="nf section">
      <div class="container nf__inner">
        <span class="nf__leaf" aria-hidden="true">
          <svg viewBox="0 0 120 120" width="120" height="120" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
            <path d="M60 110c-14 0-26-10-26-30 0-18 12-36 26-46 14 10 26 28 26 46 0 20-12 30-26 30z"/>
            <path d="M60 110V44"/><path d="M60 68l14-14"/><path d="M60 86l-14-14"/>
          </svg>
        </span>
        <p class="nf__code">404</p>
        <h1 class="display-2">Page introuvable</h1>
        <p class="nf__text lead">Cette page a pris un autre chemin : elle n'existe pas ou a été déplacée. Revenons ensemble sur la bonne voie.</p>
        <div class="nf__actions">
          <app-button routerLink="/" iconLeft="arrow-right" testid="notfound-home-btn">Retour à l'accueil</app-button>
          <app-button routerLink="/contact" variant="outline" testid="notfound-contact-btn">Me contacter</app-button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .nf { background: var(--cream-100); min-height: 70vh; display: grid; place-items: center; }
    .nf__inner { text-align: center; max-width: 560px; }
    .nf__leaf { color: var(--sand-200); display: inline-block; margin-bottom: 0.5rem; }
    .nf__code { font-family: var(--font-display); font-size: 4rem; font-weight: 700; color: var(--terracotta); line-height: 1; margin: 0; }
    .nf__text { margin: 1rem auto 2rem; }
    .nf__actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  `],
})
export class NotFoundComponent {}
