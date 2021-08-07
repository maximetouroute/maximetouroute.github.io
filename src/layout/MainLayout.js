import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import { Navbar } from '../bits/Navbar/Navbar'
import './MainLayout.scss'
import MobileAppBar from './../bits/Navbar/MobileAppBar'
import {
  createTheme,
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core/styles'
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher'
import { defaultLang, supportedLangs } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import { NavbarData, FooterLinks } from './Data'

import { CSSObject, Theme, ThemeProvider } from '@emotion/react'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#800f2f',
    },
  },
})

const navbarTitle = 'MAXIME TOUROUTE'
export default function MainLayout({ children, language, location }) {
  const isItRootUrl =
    location.pathname === '/' ||
    location.pathname === '/fr' ||
    location.pathname === '/fr/'
  // homepage: single slash

  if (language !== 'fr' && language !== 'en') {
    language = defaultLang
  }
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname)
  }

  return (
    <MaterialThemeProvider theme={theme}>
      {/* <ThemeProvider theme={theme}> */}
      <div className="CssGridNavContentFooter">
        <div className="AppBar">
          <MobileAppBar title={navbarTitle} />
        </div>
        <nav className="gridNavBar">
          <Navbar title={navbarTitle} links={NavbarData[language].links} />
        </nav>
        <div className="gridContent styleContent">{children}</div>
        <div className="gridFooter">
          <Footer links={FooterLinks[language].links} lang={language} />
          {location && (
            <LanguageSwitcher
              currentLangCode={language}
              supportedLangs={Object.keys(supportedLangs)}
              currentUrl={location.pathname}
            />
          )}
        </div>
      </div>
      {/* </ThemeProvider> */}
    </MaterialThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object,
}
