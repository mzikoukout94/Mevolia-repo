import { InjectionToken } from '@angular/core';

export interface SiteConfig {
  brandName: string;
  tagline: string;
  founder: string;
  role: string;
  email: string;
  /** Punycode version of the email, used in mailto: links. */
  emailHref: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  /** Microsoft Bookings page. */
  bookingUrl: string;
}

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SITE_CONFIG');

export const siteConfig: SiteConfig = {
  brandName: 'Mévolia',
  tagline: "l'envie d'avancer",
  founder: 'Marion Fassier',
  role: 'Fondatrice de Mévolia & consultante en développement des compétences',
  email: 'bonjour@mévolia.fr',
  emailHref: 'bonjour@xn--mvolia-bva.fr',
  phone: '+33631200177',
  phoneDisplay: '06.31.20.01.77',
  location: 'Mulhouse & partout en France (à distance)',
  linkedin: 'https://www.linkedin.com/',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  bookingUrl: 'https://bookings.cloud.microsoft/book/MarionFASSIER1@mevolia.fr/?ismsaljsauthenabled',
};
