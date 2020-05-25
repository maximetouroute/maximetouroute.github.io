import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import { Navbar } from '../bits/Navbar/Navbar'
import './MainLayout.scss'
import MobileAppBar from './../bits/Navbar/MobileAppBar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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
const MainLayout = ({ children }) => (
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
      </div>
    </div>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
