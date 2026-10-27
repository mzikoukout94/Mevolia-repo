import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND } from '../../../core/config/assets';

@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo" [class.logo--badge]="variant() === 'badge'" aria-label="Mévolia — accueil" data-testid="logo-home-link">
      <img
        class="logo__img"
        [src]="variant() === 'badge' ? brand.logoBadge : brand.logoHorizontal"
        alt="Mévolia — l'envie d'avancer"
        width="397"
        height="140"
      />
    </a>
  `,
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  readonly brand = BRAND;
  readonly variant = input<'horizontal' | 'badge'>('horizontal');
}
