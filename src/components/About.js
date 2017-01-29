import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div id="about">
          <Image id="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAK8AAAAJGFlNGM3NTRhLTc3ZTYtNGMyZS1iM2VmLWRkNDk1ZjgyY2Y3MA.jpg" responsive thumbnail />
          <p id="aboutText">My name is Seneca Sisneros and I am a full-stack javascript developer. I am a very positive minded individual who enjoys challenging myself and encouraging others to find their happiness. I have two amazing but incredibly spoiled dogs at home that remind me to stay focused on what’s really important in life and I am a firm believer that everything happens for a reason and everyone is on their own unique journey.</p>
      </div>
      </div>
    );
  }
}

export default About;
