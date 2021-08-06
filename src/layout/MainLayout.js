import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import { Navbar } from '../bits/Navbar/Navbar'
import './MainLayout.scss'
import MobileAppBar from './../bits/Navbar/MobileAppBar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import LanguageSwitcher from '../bits/LanguageSwitcher/LanguageSwitcher';
import { defaultLang, supportedLangs } from '../locales/locales';
import { languageAutoRedirect } from '../locales/localeUtils';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3568cf',
    },
  },
})
const navbarLinks = [
  { path: '/', name: 'WORK' },
  { path: '/news', name: 'NEWS' },
  { path: '/about', name: 'ABOUT' },
]
const navbarTitle = 'MAXIME TOUROUTE'
export default function MainLayout({ children, language, location }) {

  const isItRootUrl =
    location.pathname === '/' ||
    location.pathname === '/fr' ||
    location.pathname === '/fr/';
  // homepage: single slash

  if (language !== 'fr' && language !== 'en') {
    language = defaultLang;
  }
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname);
  }

return (
  <ThemeProvider theme={theme}>
    <div className="CssGridNavContentFooter">
      <div className="AppBar">
        <MobileAppBar title={navbarTitle} />
      </div>
      <nav className="gridNavBar">
        <Navbar title={navbarTitle} links={navbarLinks} />
      </nav>
      <div className="gridContent styleContent">{children}</div>
      <div className="gridFooter">
        <Footer />
        {location && (
            <LanguageSwitcher
              currentLangCode={language}
              supportedLangs={Object.keys(supportedLangs)}
              currentUrl={location.pathname}
            />
          )}
      </div>
    </div>
  </ThemeProvider>
);

}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object,
};



