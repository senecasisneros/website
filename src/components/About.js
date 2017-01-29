import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div id="about">
          <Image id="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAK8AAAAJGFlNGM3NTRhLTc3ZTYtNGMyZS1iM2VmLWRkNDk1ZjgyY2Y3MA.jpg" responsive thumbnail />
          <p id="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
      </div>
      <div>
        <Contact />
      </div>
      </div>
    );
  }
}

export default About;
