import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SITE_CONFIG } from '../../../core/config/site-config';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="cta section">
      <div class="container">
        <div class="cta__inner">
          <span class="cta__deco" aria-hidden="true">
            <svg viewBox="0 0 60 60" width="60" height="60" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <path d="M30 52c-8 0-16-6-16-18 0-10 8-20 16-26 8 6 16 16 16 26 0 12-8 18-16 18z"/>
              <path d="M30 52V16"/><path d="M30 30l7-7"/><path d="M30 40l-7-7"/>
            </svg>
          </span>
          <div class="cta__text">
            <h2 class="display-3">{{ title() }}</h2>
            <p>{{ subtitle() }}</p>
          </div>
          <div class="cta__action">
            <app-button
              [href]="config.bookingUrl"
              [external]="true"
              variant="light"
              size="lg"
              iconRight="arrow-right"
              testid="cta-banner-book-btn"
            >{{ buttonLabel() }}</app-button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta-banner.component.scss',
})
export class CtaBannerComponent {
  readonly config = inject(SITE_CONFIG);
  readonly title = input<string>('Un projet à faire grandir ?');
  readonly subtitle = input<string>('Échangeons sur vos besoins et imaginons ensemble les solutions les plus adaptées.');
  readonly buttonLabel = input<string>('Parlons de votre projet');
}
