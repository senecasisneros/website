import React from 'react';
import { Nav, NavItem, Navbar, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


class NavbarPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='logo' href="#">Seneca</a>
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
              <NavItem eventKey={1} href="#">Resume</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarPage;
