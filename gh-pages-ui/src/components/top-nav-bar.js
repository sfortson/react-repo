// @flow

import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './static/logo.svg'
import './top-nav-bar.css'

export class TopNavBar extends React.Component<{}, {}> {
  render () {
    return (
      /*
      <NavBar>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/placeholder" className="App-title">placeholder</Link>
        <Link to="/placeholder" className="App-title">placeholder</Link>
        <Link to="/placeholder" className="App-title">placeholder</Link>
        <Link to="/blog" className="App-title">Blog</Link>
        <Link to="/" className="App-title">Home</Link>
      </NavBar>
      */
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Home</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="/blog">
      Blog
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
    )
  }
}

export default TopNavBar
