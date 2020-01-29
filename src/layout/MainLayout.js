import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../bits/Footer/Footer'
import { Navbar } from '../bits/Navbar/Navbar'
import './MainLayout.scss'

const MainLayout = ({ children }) => (
  <>
    <div className="CssGridNavContentFooter">
      <nav className="gridNavBar">
        <Navbar />
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
