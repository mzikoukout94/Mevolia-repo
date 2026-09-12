import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { Feature } from '../../../core/models/content.models';

/** Horizontal band of key facts / modalities. */
@Component({
  selector: 'app-feature-band',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  template: `
    <div class="band" [style.--cols]="features().length">
      @for (f of features(); track f.title; let i = $index) {
        <div class="band__item" [appReveal]="i * 80">
          <span class="band__icon"><app-icon [name]="f.icon" [size]="24" /></span>
          <h3 class="band__title">{{ f.title }}</h3>
          <p class="band__desc">{{ f.description }}</p>
        </div>
      }
    </div>
  `,
  styleUrl: './feature-band.component.scss',
})
export class FeatureBandComponent {
  readonly features = input.required<Feature[]>();
}
