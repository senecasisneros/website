import React from 'react';
import { Nav, NavItem, Navbar, Panel, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


class NavbarPage extends React.Component {
  render() {
    return (
      <div className="navMain">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='logo' href="#"><Image src='/src/style/image/Picture1.png'
                weight="70" height="70" />Seneca</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="skillLinks">
              <LinkContainer to="/about">
                <NavItem eventKey={1}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/skills">
                <NavItem eventKey={2}>Skills</NavItem>
              </LinkContainer>
              <LinkContainer to="/portfolio" className='portfolio'>
                <NavItem eventKey={3}>Portfolio</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
            <Navbar.Link id="resume" eventKey={4} href="https://www.dropbox.com/s/hl31h89wtzez6j4/Seneca_Sisneros%20%281%29.pdf?dl=0" target="_blank">Resume</Navbar.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarPage;
