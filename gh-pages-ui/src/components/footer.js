// @flow

import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import '../css/footer.css'


export class Footer extends React.Component<{}, {}> {
  render () {
    return (
      <Navbar inverse className="footer">
        <Nav className="site-map">
          <p>Find me on social media:</p>
        </Nav>
        <Nav className='social-icons'>
          <NavItem href="https://twitter.com/samfortson">
            <SocialIcon url="https://twitter.com/samfortson" />
          </NavItem>
          <NavItem href="https://github.com/sfortson">
            <SocialIcon url="https://github.com/sfortson" />
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/samuelfortson/">
            <SocialIcon url="https://www.linkedin.com/in/samuelfortson/" />
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Footer
