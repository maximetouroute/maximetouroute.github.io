import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import { Navbar } from '../bits/Navbar/Navbar'
import './MainLayout.scss'

const navbarLinks = [
  { path: '/', name: 'WORK' },
  { path: '/news', name: 'NEWS' },
  { path: '/about', name: 'ABOUT' },
]
const navbarTitle = 'MAXIME TOUROUTE'
const MainLayout = ({ children }) => (
  <>
    <div className="CssGridNavContentFooter">
      <nav className="gridNavBar">
        <Navbar title={navbarTitle} links={navbarLinks} />
      </nav>
      <div className="gridContent styleContent">{children}</div>
      <div className="gridFooter">
        <Footer />
      </div>
    </div>
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
