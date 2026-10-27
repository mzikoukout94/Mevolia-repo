import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SITE_CONFIG } from '../../../core/config/site-config';
import { BRAND } from '../../../core/config/assets';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="cta section">
      <div class="container">
        <div class="cta__inner">
          <img class="cta__deco" [src]="leaf" alt="" aria-hidden="true" width="86" height="106" />
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
  readonly leaf = BRAND.leafSmall;
  readonly title = input<string>('Un projet à faire grandir ?');
  readonly subtitle = input<string>('Échangeons sur vos besoins et imaginons ensemble les solutions les plus adaptées.');
  readonly buttonLabel = input<string>('Parlons de votre projet');
}
