import React from 'react';
import animated from 'animate.css';
import GitHub from 'react-icons/lib/fa/github-square';
import LapTop from 'react-icons/lib/fa/laptop';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Launch from 'react-icons/lib/md/launch';

class Portfolio extends React.Component {
  render() {
    return (
      <Grid className="Portfolio">
        <h1 className="portTitle">My Projects</h1>
        <Row className="show-grid">
          <Col className="colPort" xs={12} sm={6} lg={4}>
            <h3>The Mysterious Moon</h3>
            <img className="portVid" name="The Mysterious Moon" src="https://media.giphy.com/media/l4FGFIAFpQpZC4mw8/giphy.gif" />
            <p className="textPort">This project was built with React, HTML5, CSS3, Node.js, babel, webpack and eslint.</p>
            <p className="textPort">this is the text about the app</p>
            <div className="port-div">
              <ul className="port-icons">
                <li className="portLi">
                  <a href="https://github.com/senecasisneros/The-Mysterious-Moon" target="_blank">
                    <h1 className="portIcons"><GitHub /></h1>
                  </a>
                </li>
                <li className="portLi">
                  <a href="https://themysteriousmoon.herokuapp.com/" target="_blank">
                    <Button className="portIcons1"><Launch />  Vist the website</Button>
                  </a>
                </li>
            </ul>
            </div>
          </Col>
          <Col className="colPort" xs={12} sm={6} lg={4}>
            <h3>Museo</h3>
            <img className="portVid" name="Museo" src="https://media.giphy.com/media/l0Iy8kNUp4r9e0rBu/giphy.gif" />
            <p className="textPort">React, Flux, HTML5, CSS3, Node.js, Express.js, babel, webpack and eslint.</p>
            <p className="textPort">this is the text about the app</p>
              <ul className="port-icons">
                <li className="portLi">
                  <a href="https://github.com/senecasisneros/museo" target="_blank">
                    <h1 className="portIcons"><GitHub /></h1>
                  </a>
                </li>
                {/* <li className="portLi">
                  <a href="" target="_blank">
                    <Button className="portIcons1"><Launch />  Vist the website</Button>
                  </a>
                </li> */}
            </ul>
          </Col>
          <Col className="colPort" xs={12} sm={6} lg={4}>
            <h3>Dash And Dine</h3>
            <img className="portVid" name="Dash And Dine" src="https://media.giphy.com/media/l0IyaY7uyHmNH2rFC/giphy.gif" />
            <p className="textPort">React, Redux, HTML5, CSS3, Node.js, Express.js, babel, webpack and eslint</p>
            <p className="textPort">This is a group project that I did with 3 other people.</p>
              <ul className="port-icons">
                <li className="portLi">
                  <a href="https://github.com/senecasisneros/dash_and_dine" target="_blank">
                    <h1 className="portIcons"><GitHub /></h1>
                  </a>
                </li>
                <li className="portLi">
                  <a href="https://dashanddine-1.herokuapp.com/" target="_blank">
                    <Button className="portIcons1"><Launch />  Vist the website</Button>
                  </a>
                </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Portfolio;
