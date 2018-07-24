// @flow

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './static/logo.svg';
import '../css/top-nav-bar.css';

export class TopNavBar extends React.Component<{}, {}> {
  render() {
    return (
      <Navbar inverse staticTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">
              <img src={logo} className="App-logo" alt="react-logo" />
              Home
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight key={1}>
            <NavItem eventKey={0} href="#/blog">
              Blog
            </NavItem>
            <NavItem eventKey={1} href="#/about">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavBar;
