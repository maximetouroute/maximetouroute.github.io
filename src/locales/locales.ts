export type LangCode = 'en' | 'fr'

export interface LangSettings {
  urlPrefix: string
  humanName: string
  default?: boolean
}

export const defaultLang: LangCode = 'en'

export const supportedLangs: Record<LangCode, LangSettings> = {
  ['en']: {
    urlPrefix: '',
    humanName: '🇬🇧 English',
  },
  ['fr']: {
    urlPrefix: 'fr',
    humanName: '🇫🇷 Français',
  },
}
