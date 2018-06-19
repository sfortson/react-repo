// @flow

import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from './static/logo.svg'
import '../css/top-nav-bar.css'

export class TopNavBar extends React.Component<{}, {}> {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className='App-logo' alt='react-logo'/>
              Home
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/blog">
            Blog
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default TopNavBar
