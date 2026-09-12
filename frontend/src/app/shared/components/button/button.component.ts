import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent, IconName } from '../icon/icon.component';

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'light' | 'olive';

/**
 * Polymorphic button: renders an internal <a routerLink>, an external <a href>
 * or a native <button> depending on inputs. Keeps the visual system consistent.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, NgTemplateOutlet],
  template: `
    @if (routerLink()) {
      <a
        [routerLink]="routerLink()"
        [fragment]="fragment() || undefined"
        class="btn"
        [class]="classes"
        [attr.data-testid]="testid()"
        [attr.aria-label]="ariaLabel() || null"
      >
        <ng-container [ngTemplateOutlet]="content" />
      </a>
    } @else if (href()) {
      <a
        [href]="href()"
        [attr.target]="external() ? '_blank' : null"
        [attr.rel]="external() ? 'noopener noreferrer' : null"
        class="btn"
        [class]="classes"
        [attr.data-testid]="testid()"
        [attr.aria-label]="ariaLabel() || null"
      >
        <ng-container [ngTemplateOutlet]="content" />
      </a>
    } @else {
      <button
        [type]="type()"
        class="btn"
        [class]="classes"
        [disabled]="disabled()"
        [attr.data-testid]="testid()"
        [attr.aria-label]="ariaLabel() || null"
      >
        <ng-container [ngTemplateOutlet]="content" />
      </button>
    }

    <ng-template #content>
      @if (iconLeft(); as il) { <app-icon [name]="il" [size]="19" /> }
      <span class="btn__label"><ng-content /></span>
      @if (iconRight(); as ir) { <app-icon [name]="ir" [size]="19" /> }
    </ng-template>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly block = input<boolean>(false);
  readonly routerLink = input<string | unknown[] | null>(null);
  readonly fragment = input<string | null>(null);
  readonly href = input<string | null>(null);
  readonly external = input<boolean>(false);
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input<boolean>(false);
  readonly iconLeft = input<IconName | null>(null);
  readonly iconRight = input<IconName | null>(null);
  readonly ariaLabel = input<string | null>(null);
  readonly testid = input<string | null>(null);

  get classes(): Record<string, boolean> {
    return {
      [`btn--${this.variant()}`]: true,
      [`btn--${this.size()}`]: true,
      'btn--block': this.block(),
      'btn--disabled': this.disabled(),
    };
  }
}
