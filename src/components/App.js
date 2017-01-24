import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import NavbarPage from './Navbar';

const App = React.createClass({
  render() {
    return (
      <div>
        <NavbarPage />
        <h1>App Page</h1>
        {this.props.children}
      </div>
    );
  },
});

export default App;





// <h3>
//   <Link to="/about">About</Link>
// </h3>
// <h3>
//   <Link to="/skills">Skills</Link>
// </h3>
// <h3>
//   <Link to="/contact">Contact</Link>
// </h3>
// <h3>
//   <Link to="/projects">Projects</Link>
// </h3>
