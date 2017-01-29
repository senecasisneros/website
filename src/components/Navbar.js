import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class NavbarPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Seneca</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><Link to='/about'>About</Link></NavItem>
              <NavItem eventKey={2}><Link to='/skills'>Skills</Link></NavItem>
              <NavItem eventKey={2}><Link to='/portfolio'>Portfolio</Link></NavItem>
              <NavItem eventKey={2}><Link to='/contact'>Contact</Link></NavItem>
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
