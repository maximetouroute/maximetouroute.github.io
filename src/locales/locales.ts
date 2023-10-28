import { LangCode, SupportedLangs } from "../bits/types";

// Define your languages here
// and in your gatsby-node as well (see gatsby-node.js)

export const defaultLang: LangCode = 'en';

export const supportedLangs: SupportedLangs = {
  ['en']: {
    urlPrefix: '',
    humanName: '🇬🇧 English',
  },
  ['fr']: {
    urlPrefix: 'fr',
    humanName: '🇫🇷 Français',
  },
  ['es']: {
    urlPrefix: 'es',
    humanName: '🇪🇸 Español',
  },
};
