import { LangCode, SupportedLangs } from "../bits/types";

export const defaultLang: LangCode = 'en'

export const supportedLangs: SupportedLangs = {
  ['en']: {
    urlPrefix: '',
    humanName: '🇬🇧 English',
  },
  ['fr']: {
    urlPrefix: 'fr',
    humanName: '🇫🇷 Français',
  },
}
