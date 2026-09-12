import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { IMAGES } from '../../core/config/assets';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeroComponent, SectionHeadingComponent, CtaBannerComponent, IconComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly content = inject(ContentService);
  readonly images = IMAGES;
  readonly career = this.content.getCareer();

  readonly expertiseBlocks = [
    {
      icon: 'lightbulb' as const,
      title: 'Concevoir des formations qui ont du sens',
      text: "En tant que chargée d'ingénierie pédagogique, j'ai conçu et fait évoluer des formations destinées aux professionnels de l'habitat inclusif — de l'analyse des besoins jusqu'aux modalités d'évaluation, dans le respect des exigences Qualiopi.",
    },
    {
      icon: 'briefcase' as const,
      title: 'Comprendre les enjeux des entreprises',
      text: "Au sein d'un opérateur de compétences (OPCO), j'ai accompagné des entreprises de différents secteurs sur leurs projets de développement des compétences : dispositifs de formation, enjeux RH et solutions de financement.",
    },
    {
      icon: 'heart' as const,
      title: 'Mon engagement associatif',
      text: "Responsable interne de la formation à la Croix-Rouge française de Mulhouse, je contribue bénévolement à la montée en compétences des bénévoles — apprendre, accompagner et faire grandir les compétences.",
    },
  ];
}
