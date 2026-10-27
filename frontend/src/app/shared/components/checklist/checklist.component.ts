import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-checklist',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <ul class="checklist" [class.checklist--cols]="columns() === 2" [class.checklist--sage]="tone() === 'sage'">
      @for (item of items(); track item) {
        <li class="checklist__item">
          <span class="checklist__mark" aria-hidden="true"><app-icon name="check" [size]="15" [strokeWidth]="2.4" /></span>
          <span>{{ item }}</span>
        </li>
      }
    </ul>
  `,
  styles: [`
    .checklist { display: grid; gap: 1rem; }
    .checklist--cols { grid-template-columns: repeat(2, 1fr); gap: 1rem 2.5rem; }
    @media (max-width: 720px) { .checklist--cols { grid-template-columns: 1fr; } }
    .checklist__item { display: flex; gap: 0.9rem; align-items: flex-start; color: var(--ink-soft); line-height: 1.55; }
    .checklist__mark {
      flex-shrink: 0; margin-top: 2px; width: 26px; height: 26px; border-radius: 50%;
      display: grid; place-items: center; background: var(--peach-100); color: var(--terracotta);
    }
    .checklist--sage .checklist__mark { background: var(--olive-100); color: var(--olive); }
  `],
})
export class ChecklistComponent {
  readonly items = input.required<string[]>();
  readonly columns = input<1 | 2>(1);
  readonly tone = input<'terracotta' | 'sage'>('terracotta');
}
