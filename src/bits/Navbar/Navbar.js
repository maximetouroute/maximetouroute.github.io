import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Navbar.scss'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  menuItems() {
    const title = this.props.title
    const links = this.props.links
    return (
      <>
        <Link activeClassName="" className="siteTitle" to="/">
          {title}
        </Link>
        {links.map(link => (
          <Link activeClassName="active" to={link.path} key={link.name}>
            {link.name}
          </Link>
        ))}
      </>
    )
  }

  render() {
    return (
      <div className="Navbar">
        <div className="headerLinks">{this.menuItems()}</div>
      </div>
    )
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
}

Navbar.defaultProps = {
  title: 'SiteTitle',
  links: [
    { path: '/', name: 'rootLink' },
    { path: '/somePath', name: 'somePage' },
    { path: '/otherPath', name: 'otherPage' },
  ],
}
