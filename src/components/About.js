import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';
import animated from 'animate.css';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="imgDiv1">
          <Image className="imgAbout1" src="https://s3.amazonaws.com/website-seneca/family_Sedona.jpg" responsive thumbnail />
        <Image className="imgAbout2" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive thumbnail />
    </div>
        <div id="about">
          <h1 id="aboutMe">Hi! My name is Seneca</h1>
          <h5 id="quote">The most dangerous thing you can do in life is play it safe. -Casey Neistat</h5>
          <p id="aboutText">My name is Seneca Sisneros and I am a full-stack javascript developer. I am a very positive minded individual who enjoys challenging myself and encouraging others to find their happiness. I have two amazing but incredibly spoiled dogs at home that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journey I am a very positive minded individual who enjoys challenging myself and encouraging others to find their happiness. I have two amazing but incredibly spoiled dogs at home that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journeyI am a very positive minded individual who enjoys challenging myself and encouraging others to find their happiness. I have two amazing but incredibly spoiled dogs at home that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journey. </p>
        </div>
      </div>
    );
  }
  }

export default About;

{/* <div className="animated rotateIn imageWrap">
  <Image className="img" src="https://s3.amazonaws.com/website-seneca/senecaPic.jpg" responsive />
  <Image className="img1" src="https://s3.amazonaws.com/website-seneca/family_Sedona.jpg" responsive />
  <Image className="img1" src="https://s3.amazonaws.com/website-seneca/senecaPic.jpg" responsive />
  <Image className="img1" src="https://s3.amazonaws.com/website-seneca/Pups.jpg" responsive />
  </div> */}
