import { NavbarConfig, FooterConfig } from './bits/types';


export const navbarConfig: NavbarConfig = {
  name: 'Maxime Touroute.',
  links: {
    en: {
      links: [
        { path: '/', name: 'WORK' },
        { path: '/about', name: 'ABOUT' },
      ],
    },
  
    fr: {
      links: [
        { path: '/fr', name: 'PROJETS' },
        { path: '/fr/about', name: 'A PROPOS' },
      ],
    }
  }
};


export const footerConfig: FooterConfig = {
  en: {
    links: [
      { path: '/', name: 'WORK' },
      { path: '/about', name: 'ABOUT' },
    ],
  },

  fr: {
    links: [
      { path: '/fr', name: 'PROJETS' },
      { path: '/fr/gallery', name: 'A PROPOS' },
    ],
  },
}
