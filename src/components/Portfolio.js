import React from 'react';
import animated from 'animate.css';
import GitHub from 'react-icons/lib/fa/github-square';
import LapTop from 'react-icons/lib/fa/laptop';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Launch from 'react-icons/lib/md/launch';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="pppp">
        <Grid className="Portfolio">
          {/* <h1 className="portTitle">My Projects</h1> */}
          <Row className="show-grid">
            <Col className="colPort" xs={12} sm={4} lg={4}>
              <h3 className='titlePort'>The Mysterious Moon</h3>
            <img className="portVid" name="The Mysterious Moon" src="https://media.giphy.com/media/l4FGFIAFpQpZC4mw8/giphy.gif" />
          <p className="textInfo">Javascript, React, HTML5, CSS3, Node.js, Babel, Bootstrap,Webpack and Eslint.</p>
        <p className="textPort">Search by zip code and returns the current moon phase information, spirtual symbology and the next 4 moon phases.</p>
      <div className="port-div">
        <ul className="port-icons">
          <li className="portLi">
            <a href="https://github.com/senecasisneros/The-Mysterious-Moon" target="_blank">
            <h1 className="portIcons"><GitHub /></h1>
        </a>
      </li>
      <li className="portLi">
        <a href="https://themysteriousmoon.herokuapp.com/" target="_blank"><Button className="portIcons1"><Launch />  Vist the website</Button></a>
    </li>
  </ul>
</div>
</Col>
<Col className="colPort" xs={12} sm={4} lg={4}>
  <h3 className='titlePort'>Museo</h3>
<img className="portVid" name="Museo" src="https://media.giphy.com/media/l0Iy8kNUp4r9e0rBu/giphy.gif" />
<p className="textInfo">Javascript, React, Flux, HTML5, CSS3, Node.js, Express.js, MongoDB, Babel, Webpack Eslint, Bootstrap and Materialize.</p>
<p className="textPort">Search for an artist or song and this app with return a music video and the full lyrics of the song. </p>
<ul className="port-icons">
  <li className="portLi">
    <a href="https://github.com/senecasisneros/museo" target="_blank">
    <h1 className="portIcons"><GitHub /></h1>
</a>
</li>
{/* <li className="portLi">
  <a href="" target="_blank"><Button className="portIcons1"><Launch />  Vist the website</Button></a>
  </li> */}
</ul>
</Col>
<Col className="colPort" xs={12} sm={4} lg={4}>
  <h3 className='titlePort'>Dash And Dine</h3>
<img className="portVid" name="Dash And Dine" src="https://media.giphy.com/media/l0IyaY7uyHmNH2rFC/giphy.gif" />
<p className="textInfo">React, Redux, HTML5, CSS3, Node.js, Express.js, MongoDB, Bootstrap, Babel, Webpack and Eslint</p>
<p className="textPort">Search for a restaurant by location and this app will return a random restaurant with its rating, contact information, curent weather and the map of the location. (This was a collaboration with 3 other developers)</p>
<ul className="port-icons">
  <li className="portLi">
    <a href="https://github.com/senecasisneros/dash_and_dine" target="_blank">
    <h1 className="portIcons"><GitHub /></h1>
</a>
</li>
<li className="portLi">
  <a href="https://dashanddine-1.herokuapp.com/" target="_blank"><Button className="portIcons1"><Launch />  Vist the website</Button></a>
</li>
</ul>
</Col>
</Row>
</Grid>
      </div>
    );
  }
}

export default Portfolio;
