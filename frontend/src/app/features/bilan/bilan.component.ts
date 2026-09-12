import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ChecklistComponent } from '../../shared/components/checklist/checklist.component';
import { StepListComponent } from '../../shared/components/step-list/step-list.component';
import { FeatureBandComponent } from '../../shared/components/feature-band/feature-band.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { SITE_CONFIG } from '../../core/config/site-config';
import { IMAGES } from '../../core/config/assets';

@Component({
  selector: 'app-bilan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PageHeroComponent, SectionHeadingComponent, ChecklistComponent, StepListComponent,
    FeatureBandComponent, FaqAccordionComponent, CtaBannerComponent, ButtonComponent,
    IconComponent, RevealDirective,
  ],
  templateUrl: './bilan.component.html',
  styleUrl: './bilan.component.scss',
})
export class BilanComponent {
  private readonly content = inject(ContentService);
  readonly config = inject(SITE_CONFIG);
  readonly images = IMAGES;

  readonly reasons = this.content.getBilanReasons();
  readonly whyAccompany = this.content.getBilanWhyAccompany();
  readonly phases = this.content.getBilanPhases();
  readonly accompaniment = this.content.getBilanAccompaniment();
  readonly whyChoose = this.content.getBilanWhyChoose();
  readonly modalities = this.content.getBilanModalities();
  readonly faqs = this.content.getBilanFaqs();
}
