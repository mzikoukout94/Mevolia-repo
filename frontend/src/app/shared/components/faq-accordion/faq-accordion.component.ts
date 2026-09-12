import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Faq } from '../../../core/models/content.models';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <div class="faq">
      @for (item of items(); track item.question; let i = $index) {
        <div class="faq__item" [class.is-open]="openIndex() === i">
          <h3 class="faq__q">
            <button
              type="button"
              class="faq__btn"
              [attr.aria-expanded]="openIndex() === i"
              [attr.data-testid]="'faq-toggle-' + i"
              (click)="toggle(i)"
            >
              <span>{{ item.question }}</span>
              <span class="faq__icon" aria-hidden="true">
                <app-icon [name]="openIndex() === i ? 'minus' : 'plus'" [size]="18" />
              </span>
            </button>
          </h3>
          <div class="faq__panel" [attr.data-testid]="'faq-panel-' + i">
            <div class="faq__panel-inner"><p>{{ item.answer }}</p></div>
          </div>
        </div>
      }
    </div>
  `,
  styleUrl: './faq-accordion.component.scss',
})
export class FaqAccordionComponent {
  readonly items = input.required<Faq[]>();
  readonly openIndex = signal<number>(0);

  toggle(i: number): void {
    this.openIndex.set(this.openIndex() === i ? -1 : i);
  }
}
