import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="social-div">
        <div className="socialLi">
          <a href="https://github.com/senecasisneros" target="_blank">
          <img id='github' className="icons" src='../src/style/image/GitHub.png' />
          </a>
        </div>
        <div className="socialLi">
          <a href="https://twitter.com/sen427" target="_blank">
            <img id='twiter' className="icons" src='../src/style/image/Twitter_Social.png' />
          </a>
        </div>
        <div className="socialLi">
          <a href="https://www.linkedin.com/in/seneca-sisneros-55a63a51" target="_blank">
            <img id='linkedin' className="icons" src='https://s3.amazonaws.com/website-seneca/linkedin.png' />
          </a>
        </div>
        <div className='socialLi'>
          <a href="mailto:seneca.sisneros@yahoo.com" target="_blank">
            <img id="email" className="icons" src='../src/style/image/Yahoo.png' />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
