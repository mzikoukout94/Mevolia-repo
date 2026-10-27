import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SITE_CONFIG } from '../../core/config/site-config';

interface LegalDoc {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

@Component({
  selector: 'app-legal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="legal section">
      <div class="container legal__inner">
        <nav class="legal__crumb" aria-label="Fil d'ariane">
          <a routerLink="/">Accueil</a>
          <app-icon name="chevron-right" [size]="14" />
          <span>{{ current().title }}</span>
        </nav>
        <h1 class="display-2">{{ current().title }}</h1>
        <p class="legal__intro lead">{{ current().intro }}</p>

        @for (s of current().sections; track s.heading) {
          <div class="legal__section">
            <h2>{{ s.heading }}</h2>
            @for (p of s.body; track p) { <p>{{ p }}</p> }
          </div>
        }

        <div class="legal__note">
          <app-icon name="lightbulb" [size]="20" />
          <p>Ce contenu est un modèle de démonstration. Les mentions définitives seront complétées avec les informations légales de {{ config.brandName }}.</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './legal.component.scss',
})
export class LegalComponent {
  readonly config = inject(SITE_CONFIG);
  readonly doc = input<string>('mentions-legales');

  readonly current = computed<LegalDoc>(() => this.docs[this.doc()] ?? this.docs['mentions-legales']);

  private readonly docs: Record<string, LegalDoc> = {
    'mentions-legales': {
      title: 'Mentions légales',
      intro: "Informations relatives à l'éditeur et à l'hébergeur du site Mévolia.",
      sections: [
        { heading: "Éditeur du site", body: [
          `${this.config.brandName} — ${this.config.founder}, ${this.config.role}.`,
          `Statut : micro-entreprise. Contact : ${this.config.email} · ${this.config.phoneDisplay}.`,
        ]},
        { heading: 'Hébergement', body: ["Le nom et les coordonnées de l'hébergeur seront précisés ici."] },
        { heading: 'Propriété intellectuelle', body: ["L'ensemble des contenus de ce site (textes, visuels, logo) est la propriété de Mévolia, sauf mention contraire."] },
      ],
    },
    'accessibilite': {
      title: 'Accessibilité handicap',
      intro: "Mévolia veille à rendre ses accompagnements accessibles au plus grand nombre.",
      sections: [
        { heading: 'Adapter votre accompagnement', body: [
          "Lors du premier échange, les besoins spécifiques liés à une situation de handicap peuvent être identifiés afin d'étudier ensemble les adaptations possibles (rythme, supports, modalités à distance ou en présentiel).",
        ]},
        { heading: 'Référent handicap', body: [
          `${this.config.founder} — ${this.config.phoneDisplay} — ${this.config.email}.`,
        ]},
      ],
    },
    'reclamations': {
      title: 'Réclamations',
      intro: "Vos retours sont importants et permettent d'améliorer la qualité des accompagnements.",
      sections: [
        { heading: 'Comment formuler une réclamation ?', body: [
          `Toute réclamation peut être adressée par écrit à ${this.config.email} ou par téléphone au ${this.config.phoneDisplay}.`,
        ]},
        { heading: 'Traitement de votre demande', body: [
          "Chaque demande fait l'objet d'un accusé de réception, d'une analyse et d'une réponse dans un délai défini.",
        ]},
      ],
    },
    'confidentialite': {
      title: 'Politique de confidentialité',
      intro: "La protection de vos données personnelles est une priorité pour Mévolia.",
      sections: [
        { heading: 'Collecte des données', body: ["Les données transmises via le formulaire de contact (nom, prénom, email, téléphone, message) sont utilisées uniquement pour répondre à votre demande."] },
        { heading: 'Conservation & droits', body: ["Vos données ne sont ni cédées ni vendues à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données."] },
        { heading: 'Confidentialité des accompagnements', body: ["Les échanges et documents liés à un bilan de compétences ou à un accompagnement VAE sont strictement confidentiels et restent la propriété du bénéficiaire."] },
      ],
    },
    'cgv': {
      title: 'Conditions Générales de Vente',
      intro: "Conditions applicables aux prestations proposées par Mévolia.",
      sections: [
        { heading: 'Prestations', body: ["Conception pédagogique, accompagnement VAE et bilan de compétences. Chaque prestation fait l'objet d'un devis établi après un entretien préalable."] },
        { heading: 'Modalités & tarifs', body: ["Les tarifs sont établis sur devis selon la durée et les modalités définies. Une proposition d'accompagnement est adressée sous 48 heures après le premier échange."] },
        { heading: 'Interruption du parcours', body: ["En cas d'interruption, un échange est réalisé afin d'identifier les raisons de l'arrêt et les éventuelles modalités de reprise."] },
      ],
    },
    'cookies': {
      title: 'Gestion des cookies',
      intro: "Informations sur l'utilisation des cookies sur le site Mévolia.",
      sections: [
        { heading: 'Cookies utilisés', body: ["Ce site utilise uniquement les cookies strictement nécessaires à son fonctionnement. Aucun cookie publicitaire n'est déposé sans votre consentement."] },
        { heading: 'Votre consentement', body: ["Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies non essentiels."] },
      ],
    },
  };
}
