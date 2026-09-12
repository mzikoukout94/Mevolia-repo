import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../../core/config/site-config';

@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo" [class.logo--light]="light()" aria-label="Mévolia — accueil" data-testid="logo-home-link">
      <span class="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none">
          <circle cx="24" cy="24" r="22" stroke="var(--peach-200)" stroke-width="1.4"/>
          <path d="M24 37c-6 0-11-4.5-11-13 0 0 6 1 9 5" stroke="var(--olive)" stroke-width="2" stroke-linecap="round"/>
          <path d="M24 33c0-7 4-12 11-13 0 7-4 12-11 13z" stroke="var(--olive-soft)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23 26c0-6 3-10 9-11" stroke="var(--terracotta-soft)" stroke-width="2" stroke-linecap="round"/>
          <path d="M22 21c1-4 4-6 8-6.5" stroke="var(--terracotta)" stroke-width="2" stroke-linecap="round"/>
          <path d="M24 37V22" stroke="var(--olive)" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </span>
      <span class="logo__text">
        <span class="logo__name">{{ config.brandName }}</span>
        <span class="logo__tag">{{ config.tagline }}</span>
      </span>
    </a>
  `,
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  readonly config = inject(SITE_CONFIG);
  readonly light = input<boolean>(false);
}
