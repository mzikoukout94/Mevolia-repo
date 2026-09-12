import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="phero" [class.phero--split]="image()" [attr.data-variant]="variant()">
      <span class="phero__leaf phero__leaf--tl" aria-hidden="true">
        <svg viewBox="0 0 80 80" width="80" height="80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
          <path d="M14 66C10 46 20 24 44 14c4 20-6 42-30 52z"/><path d="M14 66C24 50 34 42 44 38"/>
        </svg>
      </span>
      <div class="container phero__inner">
        <div class="phero__text">
          @if (eyebrow()) { <span class="eyebrow">{{ eyebrow() }}</span> }
          <h1 class="phero__title" [class.display-1]="variant() === 'home'" [class.display-2]="variant() !== 'home'">
            {{ title() }}@if (accent()) { <span class="accent"> {{ accent() }}</span> }@if (titleEnd()) { {{ titleEnd() }} }
          </h1>
          @if (lead()) { <p class="phero__lead lead">{{ lead() }}</p> }
          <div class="phero__actions"><ng-content select="[actions]" /></div>
          <ng-content />
        </div>
        @if (image()) {
          <div class="phero__media">
            <div class="phero__media-shape">
              <img [src]="image()" [alt]="imageAlt()" loading="eager" width="640" height="640" />
            </div>
            <span class="phero__dots" aria-hidden="true"></span>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './page-hero.component.scss',
})
export class PageHeroComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly accent = input<string>('');
  readonly titleEnd = input<string>('');
  readonly lead = input<string>('');
  readonly image = input<string>('');
  readonly imageAlt = input<string>('');
  readonly variant = input<'home' | 'page'>('page');
}
