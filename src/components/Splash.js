import React from 'react';
import Contact from './Contact';
import animated from 'animate.css';
import { Image } from 'react-bootstrap';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
      <h1 id="name" className="animated fadeInUpBig">Seneca Sisneros</h1>
      <h3 id="title">Full-Stack Javascript Developer</h3>
      <Contact />
    <Image className="aboutImages animated zoomIn" id="profilePic" src="https://s3.amazonaws.com/website-seneca/senecaPic.jpg" responsive thumbnail />
      </div>
    );
  }
}

export default Splash;
