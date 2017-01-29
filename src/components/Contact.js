import React from 'react';

// import FaIconPack from 'react-icons/lib/fa'
import GitHub from 'react-icons/lib/fa/github-square';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import Email from 'react-icons/lib/fa/envelope-square';

import { Button } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <div className="social-div">
        <ul className="social-icons">
          <li className="socialLi">
            <a href="https://github.com/senecasisneros">
              <h1 className="icons"><GitHub /></h1>
            </a>
          </li>
          <li className="socialLi">
            <a href="https://twitter.com/sen427">
              <h1 className="icons"><Twitter /></h1>
            </a>
          </li>
          <li className="socialLi">
            <a href="https://www.linkedin.com/in/seneca-sisneros-55a63a51">
              <h1 className="icons"><Linkedin /></h1>
            </a>
          </li>
          <li className='socialLi'>
            <Button bsStyle="primary" bsSize="large" className="emailBtn"><a href="mailto:seneca.sisneros@yahoo.com" id="emailLink">Send Email</a></Button>
          </li>
      </ul>
      </div>
    );
  }
}

export default Contact;
