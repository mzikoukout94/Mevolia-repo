import { InjectionToken } from '@angular/core';

export interface SiteConfig {
  brandName: string;
  tagline: string;
  founder: string;
  role: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  linkedin: string;
  /** Booking link (Calendly). Replace with the real URL when available. */
  bookingUrl: string;
}

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SITE_CONFIG');

export const siteConfig: SiteConfig = {
  brandName: 'Mévolia',
  tagline: "l'envie d'avancer",
  founder: 'Marion Fassier',
  role: 'Consultante en développement des compétences',
  email: 'bonjour@mevolia.fr',
  phone: '+33631200177',
  phoneDisplay: '06 31 20 01 77',
  location: 'Mulhouse & partout en France (à distance)',
  linkedin: 'https://www.linkedin.com/',
  bookingUrl: 'https://calendly.com/mevolia',
};
