import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import NavbarPage from './Navbar';
import Footer from './Footer';

const App = React.createClass({
  render() {
    return (
      <div>
        <NavbarPage/> {this.props.children}
      </div>
    );
  }
});

export default App;

// id="content"
//
// <div>
//   <Header />
//   <div id="content">
//
//   </div>
//   <Footer />
// </div>
