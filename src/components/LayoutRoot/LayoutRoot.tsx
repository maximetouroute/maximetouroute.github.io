import React from 'react';
import Footer from '../../bits/Footer/Footer';
import Navbar from '../../bits/Navbar/Navbar';
import MobileAppBar from '../../bits/Navbar/MobileAppBar';
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider, Global } from '@emotion/react';
import LanguageSwitcher from '../../bits/LanguageSwitcher/LanguageSwitcher';
import { defaultLang } from '../../locales/locales';
import { languageAutoRedirect } from '../../locales/localeUtils';
import { navbarConfig, footerConfig } from '../../globalConfig';
import { DEFAULT_MAIN_COLOR } from '../../bits/styles/styles';
import {
  appBarCSS,
  customColorCSS,
  gridContentCSS,
  gridFooterCSS,
  gridNavBarCSS,
  gridNavContentFooterCSS
} from './styles';
import { bodyCSS } from '../../globalStyles';


interface OwnProps {
  children: any;
  language: any;
  location: any;
  accentColor?: string;
}
export default function LayoutRoot({
  children,
  language,
  location,
  accentColor,
}: OwnProps) {
  // const isItRootUrl =
  //   location.pathname === '/' ||
  //   location.pathname === '/fr' ||
  //   location.pathname === '/fr/'
  // homepage: single slash

  if (language !== 'fr' && language !== 'en') {
    language = defaultLang
  }
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname)
  }
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: accentColor ? accentColor : '#0C132C',
      },
      secondary: {
        main: accentColor ? accentColor :'#E4E4E4',
        contrastText: accentColor ? '#F7F7F7': '#0C132C'
      },
      background: {
        default: '#E4E4E4',
        paper:'#fafafa',
      },
      // action: {
      //   hover: 'rgba(0,0,0,0.56)',
      // },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  })

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: bodyCSS(theme),
          }}
        />
        <div css={gridNavContentFooterCSS}>
          <div css={{...appBarCSS, ...customColorCSS(theme)}}>
            <MobileAppBar title={navbarConfig.name} />
          </div>
          <nav
            css={{...gridNavBarCSS, ...customColorCSS(theme)}}
          >
            <Navbar title={navbarConfig.name} links={navbarConfig.links[language].links} />
          </nav>
          <div css={gridContentCSS}>{children}</div>
          <div css={gridFooterCSS}>
            <Footer customLinks={footerConfig[language].links} />
            {location && (
              <LanguageSwitcher
                currentLangCode={language}
                currentUrl={location.pathname}
              />
            )}
          </div>
        </div>
      </ThemeProvider>
    </MaterialThemeProvider>
  )
}