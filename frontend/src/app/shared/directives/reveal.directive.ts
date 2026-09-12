import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from '@angular/core';

/** Adds `is-visible` when the host scrolls into view (one-shot). */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  /** Optional stagger delay in ms. */
  readonly appReveal = input<number | ''>('');

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    node.classList.add('reveal');
    const delay = this.appReveal();
    if (typeof delay === 'number' && delay > 0) {
      node.style.transitionDelay = `${delay}ms`;
    }

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
