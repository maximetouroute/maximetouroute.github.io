import { LangCode } from "../../bits/types";

export const strings: Record<string, Record<LangCode, string>> = {
    hello: {
      en: 'Hello! 👋',
      fr: 'Coucou ! 👋',
    },
    checkOut: {
      en: 'Check out my latest works!',
      fr: 'Voici mes derniers projets'
    }
  }