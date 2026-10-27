import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BRAND } from '../../../core/config/assets';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="head" [class.head--center]="align() === 'center'">
      @if (eyebrow()) {
        <span class="eyebrow" [class.eyebrow--ornament]="ornament()">{{ eyebrow() }}
          @if (ornament()) { <img class="ornament" [src]="separator" alt="" aria-hidden="true" width="356" height="55" /> }
        </span>
      }
      <h2 [class]="'title ' + size()">
        {{ title() }}@if (accent()) { <span class="accent"> {{ accent() }}</span> }
      </h2>
      @if (subtitle()) { <p class="sub lead">{{ subtitle() }}</p> }
    </div>
  `,
  styles: [`
    .head { max-width: 680px; margin-bottom: 2.6rem; }
    .head--center { margin-left: auto; margin-right: auto; text-align: center; }
    .head--center .eyebrow { align-items: center; }
    .title { margin-top: 1rem; }
    .sub { margin-top: 1rem; }
  `],
})
export class SectionHeadingComponent {
  readonly separator = BRAND.separator;
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly accent = input<string>('');
  readonly subtitle = input<string>('');
  readonly align = input<'left' | 'center'>('left');
  readonly size = input<'display-2' | 'display-3'>('display-2');
  readonly ornament = input<boolean>(false);
}
