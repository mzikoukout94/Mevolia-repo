import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SITE_CONFIG } from '../../core/config/site-config';
import { NavLink } from '../../core/models/content.models';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, LogoComponent, ButtonComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  readonly config = inject(SITE_CONFIG);

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly dropdownOpen = signal(false);

  readonly primaryLinks: NavLink[] = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/a-propos' },
  ];

  readonly accompaniments: NavLink[] = [
    { label: 'Conception pédagogique', path: '/conception-pedagogique' },
    { label: 'VAE', path: '/vae' },
    { label: 'Bilan de compétences', path: '/bilan-de-competences' },
  ];

  readonly secondaryLinks: NavLink[] = [
    { label: 'Financement', path: '/financement' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpen.set(false);
        this.dropdownOpen.set(false);
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  toggleDropdown(): void {
    this.dropdownOpen.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
    this.dropdownOpen.set(false);
  }
}
