/** Central image asset references (brand imagery). Easy to swap later. */
export const IMAGES = {
  heroPortrait: 'images/marion-hero.jpg',
  aboutPortrait: 'https://static.prod-images.emergentagent.com/jobs/ea45ade5-28db-46bf-90b7-0211905d12e9/images/7800005bc9ef6c555811220ab19f8c8866945e6b8b6ccfa99ff9611b3054e35c.jpeg',
  marionWriting: 'images/marion-writing.png',
  deskSunny: 'images/desk-sunny.jpg',
  deskSunnyLg: 'images/desk-sunny-lg.png',
  deskSunny2: 'images/desk-sunny-2.jpg',
  deskChair: 'images/desk-chair.jpg',
  deskChair2: 'images/desk-chair-2.jpg',
  deskMug: 'images/desk-mug.jpg',
  books: 'images/books.jpg',
  vaeDoc: 'images/vae-doc.jpg',
  bilanNotebook: 'images/bilan-notebook.jpg',
} as const;

export const BRAND = {
  logoHorizontal: 'images/logo-horizontal.png',
  logoBadge: 'images/logo-badge.png',
  leaves: 'images/leaves.png',
  branch: 'images/branch.png',
  leafSmall: 'images/leaf-small.png',
  separator: 'images/separator.png',
} as const;

/** Downloadable files. Empty URL = shown as "Bientôt disponible" until the PDF is provided. */
export const DOWNLOADS = {
  vaeFiche: '',
  bilanFiche: '',
  licence: '',
  master: '',
  certifVae: '',
  certifBilan: '',
} as const;
