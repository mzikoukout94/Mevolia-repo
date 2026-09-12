import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Mévolia — Développer les compétences, faire avancer les projets',
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'À propos — Mévolia',
  },
  {
    path: 'conception-pedagogique',
    loadComponent: () => import('./features/conception/conception.component').then((m) => m.ConceptionComponent),
    title: 'Conception pédagogique — Mévolia',
  },
  {
    path: 'vae',
    loadComponent: () => import('./features/vae/vae.component').then((m) => m.VaeComponent),
    title: "Accompagnement VAE — Mévolia",
  },
  {
    path: 'bilan-de-competences',
    loadComponent: () => import('./features/bilan/bilan.component').then((m) => m.BilanComponent),
    title: 'Bilan de compétences — Mévolia',
  },
  {
    path: 'financement',
    loadComponent: () => import('./features/financement/financement.component').then((m) => m.FinancementComponent),
    title: 'Financer son accompagnement — Mévolia',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Mévolia',
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    data: { doc: 'mentions-legales' },
    title: 'Mentions légales — Mévolia',
  },
  {
    path: 'politique-de-confidentialite',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    data: { doc: 'confidentialite' },
    title: 'Politique de confidentialité — Mévolia',
  },
  {
    path: 'cgv',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    data: { doc: 'cgv' },
    title: 'CGV — Mévolia',
  },
  {
    path: 'cookies',
    loadComponent: () => import('./features/legal/legal.component').then((m) => m.LegalComponent),
    data: { doc: 'cookies' },
    title: 'Cookies — Mévolia',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page introuvable — Mévolia',
  },
];
