import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IconName } from '../../shared/components/icon/icon.component';
import {
  CareerItem, Deliverable, Expertise, Faq, Feature, Offer,
  ProcessStep, Testimonial, TimelineItem, ValueItem,
} from '../models/content.models';

/**
 * Central mock data layer. Every method returns an Observable so this service
 * can be swapped for a real HttpClient-based implementation without touching
 * the components (which never call HTTP directly).
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private stream<T>(data: T, ms = 320): Observable<T> {
    return of(data).pipe(delay(ms));
  }

  /* ============ HOME ============ */

  getExpertises(): Observable<Expertise[]> {
    return this.stream([
      {
        id: 'conception',
        icon: 'lightbulb',
        title: 'Conception pédagogique',
        description: "Je vous aide à concevoir des dispositifs de formation sur-mesure, efficaces et engageants.",
        link: '/conception-pedagogique',
        accent: 'terracotta',
      },
      {
        id: 'vae',
        icon: 'award',
        title: 'Accompagnement VAE',
        description: "Je vous accompagne à chaque étape de votre Validation des Acquis de l'Expérience.",
        link: '/vae',
        accent: 'olive',
      },
      {
        id: 'bilan',
        icon: 'compass',
        title: 'Bilan de compétences',
        description: "Je vous aide à faire le point, révéler vos atouts et construire un projet professionnel qui vous ressemble.",
        link: '/bilan-de-competences',
        accent: 'ochre',
      },
    ]);
  }

  getWhyFeatures(): Feature[] {
    return [
      { icon: 'ear', title: 'Une écoute attentive', description: "Pour comprendre vos besoins et construire des solutions réellement adaptées." },
      { icon: 'award', title: 'Une expertise solide', description: "Nourrie par plus de sept années d'expérience en formation professionnelle et ingénierie pédagogique." },
      { icon: 'sprout', title: 'Des solutions concrètes', description: "Directement mobilisables dans votre quotidien professionnel." },
      { icon: 'handshake', title: 'Une relation de confiance', description: "Basée sur la proximité, la transparence et la co-construction." },
    ];
  }

  getProcessSteps(): ProcessStep[] {
    return [
      { number: 1, title: 'Nous faisons connaissance', description: "Nous prenons le temps de comprendre votre projet, vos objectifs et votre contexte.", icon: 'message-circle' },
      { number: 2, title: "J'analyse votre besoin", description: "J'identifie les enjeux et les compétences à développer.", icon: 'search' },
      { number: 3, title: 'Nous définissons un objectif clair', description: "Nous identifions ensemble l'objectif à atteindre à la fin de la prestation.", icon: 'target' },
      { number: 4, title: 'Je vous accompagne', description: "Je construis une démarche adaptée, avec des supports, activités et outils sur mesure.", icon: 'compass' },
      { number: 5, title: 'Nous faisons évoluer le projet', description: "Nous ajustons ensemble afin de répondre pleinement à vos attentes.", icon: 'refresh' },
    ];
  }

  getValues(): ValueItem[] {
    return [
      { letter: 'É', title: 'Écoute', description: "Chaque parcours est unique. Je prends le temps de comprendre votre situation, vos besoins et vos objectifs afin de vous proposer un accompagnement réellement adapté.", icon: 'ear' },
      { letter: 'E', title: 'Engagement', description: "Je m'investis à vos côtés avec sérieux, disponibilité et transparence, pour construire une relation de confiance à chaque étape de votre projet.", icon: 'heart' },
      { letter: 'É', title: 'Évolution', description: "Qu'il s'agisse d'une personne, d'un projet ou d'une formation, chacun peut évoluer. Ensemble, nous transformons vos compétences et vos idées en leviers de développement.", icon: 'sprout' },
    ];
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.stream([
      { id: 't1', quote: "Marion a une capacité rare à clarifier les projets complexes. Son écoute et sa méthode font toute la différence dans un accompagnement.", author: 'Fanny L.', role: 'Responsable formation' },
      { id: 't2', quote: "Un vrai regard d'experte, à la fois pédagogique et opérationnel. Nos formations ont gagné en cohérence et en impact.", author: 'Michèle Di Carlo', role: "Directrice d'organisme de formation" },
      { id: 't3', quote: "Rigoureuse, bienveillante et toujours orientée solutions. Travailler avec Marion, c'est avancer sereinement.", author: 'Ancien manager', role: 'Secteur de la formation' },
    ], 700);
  }

  /* ============ CONCEPTION PÉDAGOGIQUE ============ */

  getConceptionRecognize(): string[] {
    return [
      'Vous souhaitez créer une nouvelle formation.',
      "Vous avez beaucoup d'expertise à transmettre mais ne savez pas comment la structurer.",
      "Vos supports ont besoin d'être modernisés.",
      'Vous souhaitez rendre vos formations plus interactives.',
      'Vous manquez de temps ou de méthode pour concevoir vos parcours.',
    ];
  }

  getConceptionQuestions(): string[] {
    return [
      'Quels sont les objectifs pédagogiques ?',
      "Quelles compétences les apprenants doivent-ils acquérir ?",
      'Quelles activités permettront de les atteindre ?',
      "Comment maintenir leur engagement tout au long de la formation ?",
      'Comment évaluer les apprentissages ?',
    ];
  }

  getConceptionSteps(): TimelineItem[] {
    return [
      { title: 'Analyse du besoin', description: "Comprendre votre contexte, votre public, vos objectifs et vos contraintes afin de construire une formation réellement adaptée." },
      { title: 'Définition des objectifs pédagogiques', description: "Identifier les compétences à développer et formuler des objectifs clairs qui guideront toute la conception." },
      { title: 'Conception du scénario pédagogique', description: "Construire le déroulé, organiser les séquences, choisir les méthodes et rythmer les apprentissages." },
      { title: 'Création des supports', description: "PowerPoint, guides d'animation, livrets participants, fiches activités… Des supports professionnels et faciles à utiliser." },
      { title: 'Activités et évaluations', description: "Quiz, études de cas, mises en situation, ateliers collaboratifs… pensés pour favoriser l'apprentissage et l'implication." },
      { title: "Accompagnement jusqu'à la mise en œuvre", description: "Une formation continue de vivre après sa conception : je vous accompagne dans son déploiement et ses évolutions." },
    ];
  }

  getConceptionOffers(): Offer[] {
    return [
      { icon: 'puzzle', title: 'Moderniser une formation existante', description: "Vous disposez déjà d'un contenu mais souhaitez le rendre plus clair, plus dynamique et plus engageant.", accent: 'olive' },
      { icon: 'sprout', title: 'Créer une formation prête à animer', description: "Je conçois avec vous un parcours complet : déroulé pédagogique, supports, activités, évaluations et guide d'animation.", accent: 'terracotta' },
      { icon: 'rocket', title: 'Concevoir une formation de A à Z', description: "Vous souhaitez transmettre votre expertise mais ne savez pas par où commencer ? Je vous accompagne de l'analyse du besoin à la création complète.", accent: 'ochre' },
    ];
  }

  getConceptionDeliverables(): Deliverable[] {
    return [
      { icon: 'list-checks', label: 'Scénario pédagogique' },
      { icon: 'file-text', label: 'Déroulé pédagogique' },
      { icon: 'presentation', label: "PowerPoint d'animation" },
      { icon: 'book', label: 'Guide du formateur' },
      { icon: 'folder', label: 'Livret participant' },
      { icon: 'clipboard', label: 'Fiches activités' },
      { icon: 'check-circle', label: "Outils d'évaluation" },
      { icon: 'monitor', label: 'Ressources pour la formation à distance' },
    ];
  }

  getConceptionWhy(): string[] {
    return [
      "Plus de 7 ans d'expérience en formation professionnelle et ingénierie pédagogique.",
      'Une approche sur mesure, adaptée à votre contexte.',
      'Des outils concrets, directement mobilisables.',
      'Une ingénierie pédagogique centrée sur les apprenants et les objectifs de formation.',
    ];
  }

  getConceptionFaqs(): Faq[] {
    return [
      { question: "À qui s'adresse cet accompagnement ?", answer: "J'accompagne les organismes de formation, les entreprises, les formateurs indépendants et toute structure souhaitant créer ou faire évoluer une formation." },
      { question: 'Intervenez-vous uniquement à distance ?', answer: "J'accompagne principalement mes clients à distance, partout en France, en visioconférence. Des rendez-vous en présentiel sont possibles autour de Mulhouse lorsque c'est pertinent." },
      { question: 'Pouvez-vous créer une formation de A à Z ?', answer: "Oui. Je peux vous accompagner depuis l'analyse du besoin jusqu'à la conception complète de votre dispositif de formation." },
      { question: 'Pouvez-vous améliorer une formation existante ?', answer: "Bien sûr. Il est souvent possible de moderniser une formation existante en retravaillant son déroulé, ses supports ou ses activités pédagogiques." },
    ];
  }

  /* ============ VAE ============ */

  getVaeBenefits(): string[] {
    return [
      'Obtenir un diplôme, un titre professionnel ou un CQP.',
      'Valoriser votre expérience professionnelle.',
      'Évoluer dans votre carrière.',
      'Préparer une reconversion professionnelle.',
      'Renforcer votre employabilité.',
    ];
  }

  getVaeWhyAccompany(): string[] {
    return [
      'Mieux comprendre les attentes de la certification.',
      'Prendre du recul sur son expérience.',
      'Valoriser ses compétences avec les bons mots.',
      'Structurer efficacement son dossier.',
      "Préparer sereinement l'entretien avec le jury.",
    ];
  }

  getVaeParcours(): TimelineItem[] {
    return [
      { title: 'Définir son projet VAE', description: "Clarifier votre démarche, vos motivations et vos objectifs." },
      { title: 'Vérifier la recevabilité', description: "Vérifier l'adéquation avec une certification et déposer sa demande de recevabilité." },
      { title: 'Construire son dossier', description: "Formaliser vos activités et les compétences associées selon le référentiel." },
      { title: 'Préparer le jury', description: "Travailler votre présentation orale et anticiper les questions." },
      { title: 'Obtenir la certification', description: "Obtenir tout ou partie de la certification et définir les suites." },
    ];
  }

  getVaeAccompaniment(): TimelineItem[] {
    return [
      { title: 'Clarifier votre projet', description: "Nous faisons le point sur votre parcours, vos objectifs et la certification la plus adaptée à votre expérience." },
      { title: 'Analyser votre expérience', description: "Nous identifions les missions, activités et compétences valorisables dans votre dossier." },
      { title: 'Construire votre dossier', description: "Je vous accompagne dans la structuration et la valorisation de votre dossier de validation." },
      { title: "Préparer l'entretien avec le jury", description: "Nous travaillons votre présentation et la manière de valoriser votre expérience le jour de l'oral." },
      { title: "Vous accompagner jusqu'au bout", description: "Je reste à vos côtés pour répondre à vos questions et vous aider à avancer sereinement." },
    ];
  }

  getVaeWhyChoose(): string[] {
    return [
      'Un accompagnement personnalisé.',
      'Une écoute attentive.',
      'Une méthode claire et progressive.',
      'Un suivi adapté à votre rythme.',
      'Un interlocuteur unique tout au long de votre démarche.',
    ];
  }

  getVaeModalities(): Feature[] {
    return [
      { icon: 'calendar', title: '3 à 8 mois', description: "Durée adaptée à votre projet et à la certification visée." },
      { icon: 'users', title: '8 à 15 séances', description: "Séances individuelles au rythme de votre avancement." },
      { icon: 'clock', title: '1h30 à 2h', description: "Durée moyenne de chaque séance individuelle." },
      { icon: 'monitor', title: 'À distance', description: "En visioconférence partout en France, ou en présentiel autour de Mulhouse." },
    ];
  }

  getVaeFaqs(): Faq[] {
    return [
      { question: "Qui peut bénéficier d'une VAE ?", answer: "Toute personne ayant acquis une expérience en lien avec la certification visée peut engager une démarche de VAE." },
      { question: 'Combien de temps dure un accompagnement ?', answer: "La durée dépend de votre disponibilité, de votre expérience et de la certification préparée (généralement 3 à 8 mois)." },
      { question: 'Puis-je financer mon accompagnement ?', answer: "Selon votre situation, plusieurs dispositifs peuvent être mobilisés (CPF, employeur, France Travail, etc.)." },
      { question: 'Les rendez-vous peuvent-ils se faire à distance ?', answer: "Oui, principalement à distance en visioconférence, partout en France. Le présentiel est possible autour de Mulhouse." },
    ];
  }

  /* ============ BILAN DE COMPÉTENCES ============ */

  getBilanReasons(): string[] {
    return [
      'Mieux comprendre vos compétences et vos atouts.',
      'Identifier ce qui vous motive réellement dans votre travail.',
      'Envisager une évolution professionnelle ou une reconversion.',
      'Prendre conscience de vos ressources professionnelles.',
      'Construire un projet cohérent avec vos envies et votre situation.',
    ];
  }

  getBilanWhyAccompany(): string[] {
    return [
      'Prendre conscience de ses compétences parfois sous-estimées.',
      'Identifier ses motivations et ses besoins professionnels.',
      'Mettre en lien son expérience avec de nouvelles opportunités.',
      'Explorer différentes pistes professionnelles.',
      'Construire un projet réaliste et adapté à sa situation.',
    ];
  }

  getBilanPhases(): TimelineItem[] {
    return [
      { title: 'Phase préliminaire', description: "Analyser la demande, définir les objectifs du bilan et présenter le cadre de l'accompagnement." },
      { title: "Phase d'investigation", description: "Explorer votre parcours, vos compétences, motivations et valeurs, et étudier la faisabilité de vos projets." },
      { title: 'Phase de conclusion', description: "Synthétiser les éléments clés, formaliser votre projet et votre plan d'action personnalisé." },
    ];
  }

  getBilanAccompaniment(): TimelineItem[] {
    return [
      { title: 'Faire le point sur votre parcours', description: "Identifier vos expériences, vos réussites, vos compétences et ce qui vous motive réellement." },
      { title: 'Mieux vous connaître', description: "Explorer vos valeurs, centres d'intérêt, aptitudes et aspirations." },
      { title: 'Construire votre projet', description: "Faire émerger des pistes professionnelles réalistes et cohérentes avec votre profil." },
      { title: "Passer à l'action", description: "Élaborer un plan d'action concret : formation, évolution, reconversion, VAE, création d'activité…" },
      { title: 'Faire le bilan', description: "Repartir avec une synthèse personnalisée et une vision claire de votre avenir professionnel." },
    ];
  }

  getBilanWhyChoose(): string[] {
    return [
      'Un accompagnement personnalisé, adapté à votre situation.',
      "Un espace d'écoute et de réflexion pour avancer sereinement.",
      'Une méthode structurée et progressive pour clarifier votre projet.',
      'Des outils adaptés pour identifier vos compétences et vos leviers.',
      'Un suivi bienveillant pour passer de la réflexion à l\'action.',
      'Un interlocuteur unique tout au long de votre démarche.',
    ];
  }

  getBilanModalities(): Feature[] {
    return [
      { icon: 'clock', title: "24h maximum", description: "Durée réglementaire, répartie sur plusieurs semaines." },
      { icon: 'users', title: '8 à 10 séances', description: "Séances individuelles adaptées à votre rythme." },
      { icon: 'calendar', title: '1h30 à 2h', description: "Durée moyenne de chaque séance." },
      { icon: 'shield', title: 'Confidentiel', description: "Le document de synthèse reste votre propriété exclusive." },
    ];
  }

  getBilanFaqs(): Faq[] {
    return [
      { question: 'Qui peut réaliser un bilan de compétences ?', answer: "Toute personne souhaitant réfléchir à son évolution professionnelle : salarié, indépendant, demandeur d'emploi ou agent public." },
      { question: 'Combien de temps dure un bilan de compétences ?', answer: "La durée varie selon vos besoins. Un bilan peut s'étaler sur plusieurs semaines pour vous laisser le temps de réfléchir et de construire votre projet." },
      { question: 'Comment financer mon bilan de compétences ?', answer: "Plusieurs solutions existent selon votre situation : Compte Personnel de Formation (CPF), employeur ou dispositifs liés à votre situation professionnelle." },
      { question: 'Les rendez-vous peuvent-ils se faire à distance ?', answer: "Oui, principalement en visioconférence partout en France. Des rendez-vous en présentiel sont possibles autour de Mulhouse." },
    ];
  }

  /* ============ FINANCEMENT ============ */

  getFinancementOptions(): { icon: IconName; title: string; intro: string; bullets: string[] }[] {
    return [
      {
        icon: 'lightbulb', title: 'Conception pédagogique',
        intro: "Les prestations de conception pédagogique peuvent être financées directement par :",
        bullets: ['une entreprise', 'un organisme de formation', 'une structure développant ses compétences internes'],
      },
      {
        icon: 'award', title: 'VAE',
        intro: "La VAE peut bénéficier de différents dispositifs selon votre situation :",
        bullets: [
          'le Compte Personnel de Formation (CPF), sous conditions',
          "l'employeur, dans le cadre d'un projet d'évolution",
          'certains dispositifs liés à votre situation de demandeur d\'emploi',
          'd\'autres financements adaptés à votre parcours',
        ],
      },
      {
        icon: 'compass', title: 'Bilan de compétences',
        intro: "Le bilan de compétences peut également être financé par différents dispositifs :",
        bullets: [
          'le Compte Personnel de Formation (CPF), sous conditions',
          "l'employeur, dans le cadre d'une démarche d'évolution",
          "des dispositifs liés à une transition professionnelle",
          'd\'autres solutions selon votre parcours',
        ],
      },
    ];
  }

  getFinancementChecklist(): string[] {
    return ['votre situation', 'votre projet', 'les possibilités de financement envisageables', 'les prochaines étapes pour avancer'];
  }

  /* ============ CONTACT ============ */

  getContactReasons(): string[] {
    return [
      "un projet de conception ou d'évolution d'une formation",
      "un accompagnement à la Validation des Acquis de l'Expérience (VAE)",
      'un bilan de compétences',
      'une question sur votre parcours, vos besoins ou votre projet',
    ];
  }

  /* ============ ABOUT ============ */

  getCareer(): CareerItem[] {
    return [
      { year: '2017', label: "Licence Sciences de l'éducation" },
      { year: '2019', label: 'Master CCRF (Conseiller Consultant Responsable Formation)' },
      { year: '2019 – 2023', label: 'Formation professionnelle & accompagnement entreprises' },
      { year: '2023 – 2026', label: 'Ingénierie pédagogique' },
      { year: '2026', label: 'Création de Mévolia · Formation VAE' },
    ];
  }
}
