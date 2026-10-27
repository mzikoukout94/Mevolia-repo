import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProcessStep } from '../../../core/models/content.models';

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  template: `
    <ol class="timeline" [style.--cols]="steps().length">
      @for (step of steps(); track step.number; let i = $index) {
        <li class="timeline__step" [appReveal]="i * 90">
          <div class="timeline__node" [style.--dot]="color(i)">
            <span class="timeline__num">{{ step.number }}</span>
            <span class="timeline__icon" aria-hidden="true"><app-icon [name]="step.icon" [size]="18" /></span>
          </div>
          <h3 class="timeline__title">{{ step.title }}</h3>
          <p class="timeline__desc">{{ step.description }}</p>
        </li>
      }
    </ol>
  `,
  styleUrl: './process-timeline.component.scss',
})
export class ProcessTimelineComponent {
  readonly steps = input.required<ProcessStep[]>();
  private readonly palette = ['var(--olive)', 'var(--terracotta)', 'var(--olive-soft)', 'var(--terracotta-soft)', 'var(--olive-dark)'];
  color(i: number): string { return this.palette[i % this.palette.length]; }
}
