import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import NavbarPage from './Navbar';
import Footer from './Footer';

const App = React.createClass({
  render() {
    return (
      <div>
        <NavbarPage/> {this.props.children}
        <Footer/>
      </div>
    );
  }
});

export default App;
