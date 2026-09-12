import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ChecklistComponent } from '../../shared/components/checklist/checklist.component';
import { OffersComponent } from '../../shared/components/offers/offers.component';
import { ProcessTimelineComponent } from '../../shared/components/process-timeline/process-timeline.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { SITE_CONFIG } from '../../core/config/site-config';
import { IMAGES } from '../../core/config/assets';

@Component({
  selector: 'app-conception',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PageHeroComponent, SectionHeadingComponent, ChecklistComponent, OffersComponent,
    ProcessTimelineComponent, FaqAccordionComponent, CtaBannerComponent, ButtonComponent,
    IconComponent, RevealDirective,
  ],
  templateUrl: './conception.component.html',
  styleUrl: './conception.component.scss',
})
export class ConceptionComponent {
  private readonly content = inject(ContentService);
  readonly config = inject(SITE_CONFIG);
  readonly images = IMAGES;

  readonly recognize = this.content.getConceptionRecognize();
  readonly questions = this.content.getConceptionQuestions();
  readonly steps = this.content.getConceptionSteps();
  readonly offers = this.content.getConceptionOffers();
  readonly deliverables = this.content.getConceptionDeliverables();
  readonly why = this.content.getConceptionWhy();
  readonly method = this.content.getProcessSteps();
  readonly faqs = this.content.getConceptionFaqs();
}
