import React from 'react';
import Contact from './Contact';
import animated from 'animate.css';

class Splash extends React.Component {
  render() {
    return (
      <div className="Splash">
      <h1 id="name" className="animated fadeInUpBig">Seneca Sisneros</h1>
      <h3 id="title">Full-Stack Javascript Developer</h3>
      <Contact />
      </div>
    );
  }
}

export default Splash;
