import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TimelineItem } from '../../../core/models/content.models';

/** Vertical numbered step list used for multi-step accompaniments. */
@Component({
  selector: 'app-step-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <ol class="steps" [class.steps--accent-olive]="accent() === 'olive'" [class.steps--accent-ochre]="accent() === 'ochre'">
      @for (item of items(); track item.title; let i = $index) {
        <li class="steps__item" [appReveal]="i * 70">
          <div class="steps__marker">
            <span class="steps__num">{{ i + 1 }}</span>
          </div>
          <div class="steps__body">
            <h3 class="steps__title">{{ item.title }}</h3>
            <p class="steps__desc">{{ item.description }}</p>
          </div>
        </li>
      }
    </ol>
  `,
  styleUrl: './step-list.component.scss',
})
export class StepListComponent {
  readonly items = input.required<TimelineItem[]>();
  readonly accent = input<'terracotta' | 'olive' | 'ochre'>('terracotta');
}
