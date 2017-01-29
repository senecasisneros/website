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
          <li className="icons">
            <a href="https://github.com/senecasisneros">
              <h1><GitHub /></h1>
            </a>
          </li>
          <li className="icons">
            <a href="https://twitter.com/sen427">
              <h1><Twitter /></h1>
            </a>
          </li>
          <li >
            <a href="https://www.linkedin.com/in/seneca-sisneros-55a63a51">
              <h1><Linkedin /></h1>
            </a>
          </li>
        <li>
          <Button>
            <a href="mailto:seneca.sisneros@yahoo.com" className="emailBtn">Send Email</a>
          </Button>
        </li>
      </ul>

      </div>
    );
  }
}

export default Contact;
