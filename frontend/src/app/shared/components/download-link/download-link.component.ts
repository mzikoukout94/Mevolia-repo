import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** Download button; without URL it shows a "Bientôt disponible" placeholder. */
@Component({
  selector: 'app-download-link',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    @if (url()) {
      <a class="dl" [href]="url()" target="_blank" rel="noopener noreferrer" download [attr.data-testid]="testid()">
        <span class="dl__icon"><app-icon name="download" [size]="18" /></span>
        <span class="dl__label">{{ label() }}</span>
      </a>
    } @else {
      <span class="dl dl--soon" aria-disabled="true" [attr.data-testid]="testid()">
        <span class="dl__icon"><app-icon name="download" [size]="18" /></span>
        <span class="dl__label">{{ label() }}<small>Bientôt disponible</small></span>
      </span>
    }
  `,
  styles: [`
    :host { display: inline-flex; max-width: 100%; }
    .dl {
      display: inline-flex; align-items: center; gap: 14px;
      padding: 0.85rem 1.4rem 0.85rem 0.85rem;
      background: var(--white);
      border: 1.5px solid var(--olive);
      border-radius: var(--r-pill);
      color: var(--olive-dark);
      font-weight: 600; font-size: 0.92rem; line-height: 1.35;
      text-align: left;
      transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
    }
    a.dl:hover { background: var(--olive); color: var(--white); transform: translateY(-2px); }
    .dl__icon {
      flex-shrink: 0; display: grid; place-items: center;
      width: 38px; height: 38px; border-radius: 50%;
      background: var(--olive); color: var(--white);
    }
    .dl__label small { display: block; font-weight: 500; font-size: 0.76rem; color: var(--ink-mute); }
    .dl--soon { border-style: dashed; cursor: default; }
    .dl--soon .dl__icon { background: var(--olive-light); }
  `],
})
export class DownloadLinkComponent {
  readonly label = input.required<string>();
  readonly url = input<string>('');
  readonly testid = input<string | null>(null);
}
