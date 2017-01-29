import React from 'react';

// import FaIconPack from 'react-icons/lib/fa'
import GitHub from 'react-icons/lib/fa/github-square';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import Email from 'react-icons/lib/fa/envelope-square';

class Contact extends React.Component {
  render() {
    return (
      <div className="social-div">
        <ul className="social-icons">
          <li>
            <a href="https://github.com/senecasisneros">
              <h1><GitHub /></h1>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/sen427">
              <h1><Twitter /></h1>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/seneca-sisneros-55a63a51">
              <h1><Linkedin /></h1>
            </a>
          </li>
          <li>
            <h2 ><Email />
            <p id="email">seneca.sisneros@yahoo.com</p>
          </h2>
          </li>
        </ul>
      </div>
    );
  }
}


export default Contact;
// <i className="fa fa-twitter" aria-hidden="true"></i>


// <ul className='social-icons'>
//   <li>
//     <a href="https://github.com/senecasisneros">
//       <i className="fa fa-twitter" aria-hidden="true">
//       </i>
//     </a>
//   </li>
// </ul>
// <div>
//   <FA name='twitter' />
// </div>
// <div>
//   <FA name='linkedin' />
// </div>
// <div>
//   <FA name='github' />
// </div>
// <div>
//   <FA name='email' />
// </div>
