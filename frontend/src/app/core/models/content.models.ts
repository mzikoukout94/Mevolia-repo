import { IconName } from '../../shared/components/icon/icon.component';

export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface Expertise {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  link: string;
  accent: 'terracotta' | 'olive' | 'ochre';
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: IconName;
}

export interface ValueItem {
  letter: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Offer {
  icon: IconName;
  title: string;
  description: string;
  accent: 'terracotta' | 'olive' | 'ochre';
}

export interface Deliverable {
  icon: IconName;
  label: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface CareerItem {
  year: string;
  label: string;
}
