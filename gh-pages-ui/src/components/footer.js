// @flow

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import '../css/footer.css';

export class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <Navbar className="footer">
        <Nav className="social-icons">
          <NavItem href="https://twitter.com/samfortson">
            <SocialIcon style={{ height: 35, width: 35 }} url="https://twitter.com/samfortson" />
          </NavItem>
          <NavItem href="https://github.com/sfortson">
            <SocialIcon style={{ height: 35, width: 35 }} url="https://github.com/sfortson" />
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/samuelfortson/">
            <SocialIcon style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/samuelfortson/" />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
