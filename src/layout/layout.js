import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import { Navbar } from '../components/navbar'
import favicon from '../images/favicon.png'
import './layout.scss'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Portfolio website of Maxime Touroute, audiovisual projects (photography, videography, digital art) of Maxime Touroute',
            },
            {
              name: 'keywords',
              content: 'photography, digital art, movie, cinema, photo, photos, portfolio, touroute',
            },
            {
              name: 'viewport',
              content: 'user-scalable=no'
            }
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <html lang="en"/>
        </Helmet>



        <div className="CssGridNavContentFooter">
          <nav className="gridNavBar">
            <Navbar/>
          </nav>
          <div className="gridContent styleContent">
            {children}
          </div>
          <div className="gridFooter">
            <Footer/>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
