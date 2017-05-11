import React from 'react';
import animated from 'animate.css';
import GitHub from 'react-icons/lib/fa/github-square';
import LapTop from 'react-icons/lib/fa/laptop';



class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h1 className="portTitle">Portfolio page</h1>
      <div className="Portfolio">
        <div className='portVideo'>
          <img name="Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif"></img>
        <h3>The Mysterious Moon</h3>
      <p className="textPort">This project was built with React, HTML, CSS Etc.</p>
    <p className="textPort">this is the text about the app</p>
  <div className="social-div">
    <ul className="port-icons">
      <li className="portLi">
        <a href="https://github.com/senecasisneros">
        <h1 className="icons">
          <GitHub />
      </h1>
    </a>
  </li>
  <li className="portLi">
    <a href="">
      <h1 className="iconsPort">
        <LapTop />
    </h1>
  </a>
</li>
</ul>
</div>
</div>
<div className='portVideo'>
  <img name="Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif"></img>
<h3>The Mysterious Moon</h3>
<p className="textPort">This project was built with React, HTML, CSS Etc.</p>
<p className="textPort">this is the text about the app</p>
<div className="port-div">
  <ul className="port-icons">
    <li className="portLi">
      <a href="https://github.com/senecasisneros">
      <h1 className="icons">
        <GitHub />
    </h1>
  </a>
</li>
<li className="portLi">
  <a href="#">
    <h1 className="iconsPort">
      <LapTop />
  </h1>
</a>
</li>
</ul>
</div>
</div>
<div className='portVideo'>
  <img name="Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif"></img>
<h3>The Mysterious Moon</h3>
<p className="textPort">This project was built with React, HTML, CSS Etc.</p>
<p className="textPort">this is the text about the app</p>
<div className="social-div">
  <ul className="port-icons">
    <li className="portLi">
      <a href="https://github.com/senecasisneros">
      <h1 className="icons">
        <GitHub />
    </h1>
  </a>
</li>
<li className="portLi">
  <a href="">
    <h1 className="iconsPort">
      <LapTop />
  </h1>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
);
}
}



export default Portfolio;
