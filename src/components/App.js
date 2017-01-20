import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App Page</h1>
        <h3>
          <Link to='/about'>About</Link>
        </h3>
        <h3>
          <Link to='/skills'>Skills</Link>
        </h3>
        <h3>
          <Link to='/contact'>Contact</Link>
        </h3>
        <h3>
          <Link to='/projects'>Projects</Link>
        </h3>
        {this.props.children}
      </div>
    )
  }
})

export default App;
