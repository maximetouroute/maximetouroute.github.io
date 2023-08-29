import React from 'react';
import Footer from '../../bits/Footer/Footer';
import Navbar from '../../bits/Navbar/Navbar';
import MobileAppBar from '../../bits/Navbar/MobileAppBar';
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import LanguageSwitcher from '../../bits/LanguageSwitcher/LanguageSwitcher';
import { defaultLang } from '../../locales/locales';
import { languageAutoRedirect } from '../../locales/localeUtils';
import { NavbarData, FooterLinks } from '../Data';
import { DEFAULT_MAIN_COLOR } from '../../bits/styles/styles';
import {
  appBarCSS,
  gridContentCSS,
  gridFooterCSS,
  gridNavBarCSS,
  gridNavContentFooterCSS,
  styleContentCSS,
} from './styles';
import { Global } from '@emotion/react';
import { bodyCSS } from '../globalStyles';

const navbarTitle = 'MAXIME TOUROUTE';
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
        main: accentColor ? accentColor : DEFAULT_MAIN_COLOR,
      },
      // secondary: {
      //   main: '#506b5c',
      // },
      // background: {
      //   default: '#282c34',
      //   paper: '#19191d',
      // },
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
            body: bodyCSS,
          }}
        />
        <div css={gridNavContentFooterCSS}>
          <div css={appBarCSS}>
            <MobileAppBar title={navbarTitle} />
          </div>
          <nav
            css={gridNavBarCSS}
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <Navbar title={navbarTitle} links={NavbarData[language].links} />
          </nav>
          <div css={{ ...gridContentCSS, ...styleContentCSS }}>{children}</div>
          <div css={gridFooterCSS}>
            <Footer links={FooterLinks[language].links} />
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