import React from 'react';
import animated from 'animate.css';
import GitHub from 'react-icons/lib/fa/github-square';
import LapTop from 'react-icons/lib/fa/laptop';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Launch from 'react-icons/lib/md/launch';

class Portfolio extends React.Component {
  render() {
    return (
    <div className="portfolioMain">
      <Grid className="Portfolio">
        <Row className="show-grid">
          <Col xs={12} sm={4} lg={4}>
            <h3 className="titlePort">Dash And Dine</h3>
            <img className="portVid" name="Dash And Dine" src="https://media.giphy.com/media/l0IyaY7uyHmNH2rFC/giphy.gif" />
          <p className="PortTechUsed">React, Redux, HTML5, CSS3, Node.js, Express.js, MongoDB, Bootstrap, Babel, Webpack and Eslint</p>
        <p className="descripAppDD">A project, in collaboration with 3 other developers, that allows you to search by location, to get a restaurant suggestion at random. It provides the contact information, rating, map, and even the current weather for that location.</p>
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
          <Col xs={12} sm={4} lg={4}>
            <h3 className='titlePort'>Museo</h3>
            <img className="portVid" name="Museo" src="https://media.giphy.com/media/l0Iy8kNUp4r9e0rBu/giphy.gif" />
          <p className="PortTechUsed">Javascript, React, Flux, HTML5, CSS3, Node.js, Express.js, MongoDB, Babel, Webpack, Eslint, Bootstrap and Materialize.</p>
        <p className="descripAppM">An application that allows you to search by artist or song name and will produce the corresponding music video and lyrics.</p>
            <ul className="port-icons">
              <li className="portLi">
                <a href="https://github.com/senecasisneros/museo" target="_blank">
                  <h1 className="portIconsMusic"><GitHub /></h1>
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4} lg={4}>
            <h3 className='titlePort'>The Mysterious Moon</h3>
            <img className="portVid" name="The Mysterious Moon" src="https://media.giphy.com/media/l4FGFIAFpQpZC4mw8/giphy.gif" />
          <p className="PortTechUsed">Javascript, React, HTML5, CSS3, Node.js, Babel, Bootstrap,Webpack and Eslint.</p>
        <p className="descripAppMoon">You can search by zip code to return the current moon phase and Additional information about the moon’s location and associated spiritual meaning.</p>
            <div className="port-div">
              <ul className="port-iconsMM">
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
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Portfolio;
