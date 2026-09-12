import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SITE_CONFIG } from '../../core/config/site-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, LogoComponent, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly config = inject(SITE_CONFIG);
  readonly year = new Date().getFullYear();

  readonly navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  readonly serviceLinks = [
    { label: 'Conception pédagogique', path: '/conception-pedagogique' },
    { label: 'Accompagnement VAE', path: '/vae' },
    { label: 'Bilan de compétences', path: '/bilan-de-competences' },
    { label: 'Financer son accompagnement', path: '/financement' },
  ];

  readonly legalLinks = [
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
    { label: 'CGV', path: '/cgv' },
    { label: 'Cookies', path: '/cookies' },
  ];
}
