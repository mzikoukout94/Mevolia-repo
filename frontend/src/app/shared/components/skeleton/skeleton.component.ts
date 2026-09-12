import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Simple shimmer placeholder for loading states. */
@Component({
  selector: 'app-skeleton',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="sk" [style.width]="width()" [style.height]="height()" [style.border-radius]="radius()"></span>`,
  styles: [`
    .sk {
      display: block;
      background: linear-gradient(100deg, var(--cream-200) 30%, var(--sand-100) 50%, var(--cream-200) 70%);
      background-size: 200% 100%;
      animation: sk 1.3s ease-in-out infinite;
    }
    @keyframes sk { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    @media (prefers-reduced-motion: reduce) { .sk { animation: none; } }
  `],
})
export class SkeletonComponent {
  readonly width = input<string>('100%');
  readonly height = input<string>('16px');
  readonly radius = input<string>('8px');
}
