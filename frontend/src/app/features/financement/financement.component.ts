import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ChecklistComponent } from '../../shared/components/checklist/checklist.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { IMAGES } from '../../core/config/assets';

@Component({
  selector: 'app-financement',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeroComponent, SectionHeadingComponent, ChecklistComponent, CtaBannerComponent, IconComponent, RevealDirective],
  templateUrl: './financement.component.html',
  styleUrl: './financement.component.scss',
})
export class FinancementComponent {
  private readonly content = inject(ContentService);
  readonly images = IMAGES;
  readonly options = this.content.getFinancementOptions();
  readonly checklist = this.content.getFinancementChecklist();
}
