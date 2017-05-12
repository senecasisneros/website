import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';
import animated from 'animate.css';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div id="about">
          <h1 id="aboutMe">About Me</h1>
          <h5 id="quote">The most dangerous thing you can do in life is play it safe. -Casey Neistat</h5>
          <p id="aboutText">My name is Seneca Sisneros and I am a full-stack javascript developer. I am a very positive minded individual who enjoys challenging myself and encouraging others to find their happiness. I have two amazing but incredibly spoiled dogs at home that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journey. My name is Seneca Sisneros and I am a full-stack javascript developer. I have two amazing but incredibly spoiled dogs at home that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journey.</p>
          <div className="animated rotateIn imageWrap">
              <Image className="aboutImages" id="sedonaFamilyPic" src="https://s3.amazonaws.com/website-seneca/family_Sedona.jpg" responsive thumbnail />
              <Image className="aboutImages" id="profilePic" src="https://s3.amazonaws.com/website-seneca/senecaPic.jpg" responsive thumbnail />
              <Image className="aboutImages" id="pupsPic" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive thumbnail />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
