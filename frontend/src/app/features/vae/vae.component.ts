import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ChecklistComponent } from '../../shared/components/checklist/checklist.component';
import { StepListComponent } from '../../shared/components/step-list/step-list.component';
import { ProcessTimelineComponent } from '../../shared/components/process-timeline/process-timeline.component';
import { FeatureBandComponent } from '../../shared/components/feature-band/feature-band.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { SITE_CONFIG } from '../../core/config/site-config';
import { IMAGES } from '../../core/config/assets';
import { ProcessStep } from '../../core/models/content.models';
import { IconName } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-vae',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PageHeroComponent, SectionHeadingComponent, ChecklistComponent, StepListComponent,
    ProcessTimelineComponent, FeatureBandComponent, FaqAccordionComponent, CtaBannerComponent,
    ButtonComponent, IconComponent, RevealDirective,
  ],
  templateUrl: './vae.component.html',
  styleUrl: './vae.component.scss',
})
export class VaeComponent {
  private readonly content = inject(ContentService);
  readonly config = inject(SITE_CONFIG);
  readonly images = IMAGES;

  readonly benefits = this.content.getVaeBenefits();
  readonly whyAccompany = this.content.getVaeWhyAccompany();
  readonly accompaniment = this.content.getVaeAccompaniment();
  readonly whyChoose = this.content.getVaeWhyChoose();
  readonly modalities = this.content.getVaeModalities();
  readonly faqs = this.content.getVaeFaqs();

  private readonly parcoursIcons: IconName[] = ['compass', 'check-circle', 'folder', 'users', 'award'];
  readonly parcours: ProcessStep[] = this.content.getVaeParcours().map((item, i) => ({
    number: i + 1,
    title: item.title,
    description: item.description,
    icon: this.parcoursIcons[i],
  }));
}
