import React from 'react';
import { Image } from 'react-bootstrap';


class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Image id="profilePic" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAK8AAAAJGFlNGM3NTRhLTc3ZTYtNGMyZS1iM2VmLWRkNDk1ZjgyY2Y3MA.jpg" responsive thumbnail />
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    );
  }
}

export default About;
