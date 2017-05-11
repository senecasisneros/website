import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h1 className="portTitle">Portfolio page</h1>
      <div className="Portfolio">
        <div className='portVideo'>
          <img name="Video Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif"></img>
        <h5>The Mysterious Moon</h5>
        </div>
        <div className='portVideo'>
          <img name="Video Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif"></img>
        <h5>The Mysterious Moon</h5>
        </div>
        <div className='portVideo'>
          <img name="Video Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif"></img>
        <h5>The Mysterious Moon</h5>
        </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
