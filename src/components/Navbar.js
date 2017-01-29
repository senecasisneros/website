import React from 'react';
import {Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class NavbarPage extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top" id="NavbarId">
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/about'>About</Link>&nbsp;
        <Link to='/skills'>Skills</Link>&nbsp;
        <Link to='/projects'>Projects</Link>&nbsp;
        <Link to='/contact'>Contact</Link>&nbsp;
      </div>
    );
  }
}

export default NavbarPage;
