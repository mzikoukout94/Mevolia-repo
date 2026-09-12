import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ProcessTimelineComponent } from '../../shared/components/process-timeline/process-timeline.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { SITE_CONFIG } from '../../core/config/site-config';
import { IMAGES } from '../../core/config/assets';
import { Expertise, Testimonial } from '../../core/models/content.models';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink, PageHeroComponent, ButtonComponent, IconComponent, SectionHeadingComponent,
    ProcessTimelineComponent, CtaBannerComponent, SkeletonComponent, RevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly content = inject(ContentService);
  readonly config = inject(SITE_CONFIG);
  readonly images = IMAGES;

  readonly features = this.content.getWhyFeatures();
  readonly steps = this.content.getProcessSteps();
  readonly values = this.content.getValues();

  readonly expertises = signal<Expertise[]>([]);
  readonly expertisesLoading = signal(true);

  readonly testimonials = signal<Testimonial[]>([]);
  readonly testimonialsLoading = signal(true);

  constructor() {
    this.content.getExpertises().subscribe((data) => {
      this.expertises.set(data);
      this.expertisesLoading.set(false);
    });
    this.content.getTestimonials().subscribe((data) => {
      this.testimonials.set(data);
      this.testimonialsLoading.set(false);
    });
  }
}
