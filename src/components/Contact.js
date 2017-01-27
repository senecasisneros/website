import React from 'react';
import FontAwesome from 'react-fontawesome';
// import FA from 'react-fontawesome';
const FA = require('react-fontawesome')


class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>
          <FA name='twitter' />
        </div>
        <div>
          <FA name='linkedin' />
        </div>
        <div>
          <FA name='github' />
        </div>
        <div>
          <FA name='email' />
        </div>
      </div>
    );
  }
}

export default Contact;
