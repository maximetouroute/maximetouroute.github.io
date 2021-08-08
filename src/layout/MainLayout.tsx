import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import Navbar from '../bits/Navbar/Navbar'
import './MainLayout.scss'
import MobileAppBar from '../bits/Navbar/MobileAppBar'
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core/styles'
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher'
import { defaultLang } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import { NavbarData, FooterLinks } from './Data'

import { DEFAULT_MAIN_COLOR } from './../bits/styles/styles'

import { CSSObject, Theme, ThemeProvider, Global } from '@emotion/react'

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
      primary: {
        main: accentColor ? accentColor : DEFAULT_MAIN_COLOR,
      },
    },
  })

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
