import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRAND } from '../../../core/config/assets';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="phero" [class.phero--split]="image()" [attr.data-variant]="variant()">
      @if (variant() === 'home') {
        <img class="phero__leaves" [src]="brand.leaves" alt="" aria-hidden="true" width="138" height="125" />
      }
      <div class="container phero__inner">
        <div class="phero__text">
          @if (eyebrow()) { <span class="eyebrow">{{ eyebrow() }}</span> }
          <h1 class="phero__title" [class.display-1]="variant() === 'home'" [class.display-2]="variant() !== 'home'">
            {{ title() }}@if (accent()) { <span class="accent"> {{ accent() }}</span> }@if (titleEnd()) { {{ titleEnd() }} }
          </h1>
          @if (lead()) { <p class="phero__lead lead">{{ lead() }}</p> }
          <ng-content />
          <div class="phero__actions"><ng-content select="[actions]" /></div>
        </div>
        @if (image()) {
          <div class="phero__media">
            <div class="phero__media-shape">
              <img [src]="image()" [alt]="imageAlt()" loading="eager" width="640" height="640" />
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly brand = BRAND;
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly accent = input<string>('');
  readonly titleEnd = input<string>('');
  readonly lead = input<string>('');
  readonly image = input<string>('');
  readonly imageAlt = input<string>('');
  readonly variant = input<'home' | 'page'>('page');
}
