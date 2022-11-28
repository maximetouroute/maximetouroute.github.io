import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import Navbar from '../bits/Navbar/Navbar'
import './MainLayout.scss'
import MobileAppBar from '../bits/Navbar/MobileAppBar'

import {  ThemeProvider as MaterialThemeProvider, createTheme, adaptV4Theme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher'
import { defaultLang } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import { NavbarData, FooterLinks } from './Data'

import { DEFAULT_MAIN_COLOR } from './../bits/styles/styles'



const navbarTitle = 'MAXIME TOUROUTE'
interface OwnProps {
  children: any
  language: any
  location: any
  accentColor?: string
}
export default function MainLayout({
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
  });

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <div className="CssGridNavContentFooter">
          <div className="AppBar">
            <MobileAppBar title={navbarTitle} />
          </div>
          <nav
            className="gridNavBar"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <Navbar title={navbarTitle} links={NavbarData[language].links} />
          </nav>
          <div className="gridContent styleContent">{children}</div>
          <div className="gridFooter">
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

// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
//   language: PropTypes.string,
//   location: PropTypes.object,
// }
