import React from 'react';
import Contact from './Contact';
import animated from 'animate.css';
import { Image } from 'react-bootstrap';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <h1 id="name" className="animated fadeInUpBig">Seneca Sisneros</h1>
        <h3 id="title">Full-Stack Javascript Web Developer</h3>
        <Image className="animated zoomIn" color='white' id="profilePic" src="https://s3.amazonaws.com/website-seneca/senecaPic.jpg" />
      {/* <Image className="animated zoomIn" color='white' id="profilePic2" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" /> */}
    {/* <Image className="animated zoomIn" color='white' id="profilePic3" src="https://s3.amazonaws.com/website-seneca/family1.jpg" /> */}
  <Contact />
      </div>
    );
  }
}

export default Splash;
