import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { Offer } from '../../../core/models/content.models';

@Component({
  selector: 'app-offers',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RevealDirective],
  template: `
    <div class="offers">
      @for (offer of offers(); track offer.title; let i = $index) {
        <article class="offer" [class]="'offer--' + offer.accent" [appReveal]="i * 110">
          <span class="offer__icon"><app-icon [name]="offer.icon" [size]="26" /></span>
          <h3 class="offer__title">{{ offer.title }}</h3>
          <p class="offer__desc">{{ offer.description }}</p>
        </article>
      }
    </div>
  `,
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  readonly offers = input.required<Offer[]>();
}
