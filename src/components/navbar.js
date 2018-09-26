import React, { Component } from 'react'
import { Link } from 'gatsby'
import './navbar.scss'

export class Navbar extends Component {

  menuItems() {
    return (<>
        <Link activeClassName="" className="siteTitle" to="/">MAXIME TOUROUTE</Link>
        <Link activeClassName="active" to="/">WORK</Link>
        <Link activeClassName="active" to="/about">ABOUT</Link>
        <Link activeClassName="active" to="/contact">CONTACT</Link>
      </>
    )
  }

  render() {
    return (
      <div className="Navbar">
        <div className="headerLinks">
          {this.menuItems()}
        </div>
      </div>
    )
  }
}
