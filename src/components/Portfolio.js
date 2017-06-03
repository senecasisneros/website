import React from 'react';
import animated from 'animate.css';
import GitHub from 'react-icons/lib/fa/github-square';
import LapTop from 'react-icons/lib/fa/laptop';
import {Grid, Row, Col} from 'react-bootstrap';

class Portfolio extends React.Component {
  render() {
    return (
      <Grid className='Portfolio'>
        <h1 className="portTitle">Portfolio</h1>
        <Row className="show-grid">
          <Col className="colPort" xs={12} sm={6} lg={4}>
            <img className="portVid" name="Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif" />
            <h3>The Mysterious Moon</h3>
            <p className="textPort">This project was built with React, HTML5, CSS3, Node.js, babel, webpack and eslint.</p>
            <p className="textPort">this is the text about the app</p>
          </Col>
          <Col className="colPort" xs={12} sm={6} lg={4}>
            <img className="portVid" name="Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif" />
            <h3>Museo</h3>
            <p className="textPort">React, Flux, HTML5, CSS3, Node.js, Express.js, babel, webpack and eslint.</p>
            <p className="textPort">this is the text about the app</p>
          </Col>
          <Col className="colPort" xs={12} sm={6} lg={4}>
            <img className="portVid" name="Name" src="https://media.giphy.com/media/j9xQVAZtsguUo/giphy.gif" />
            <h3>Dash And Dine</h3>
            <p className="textPort">React, Redux, HTML5, CSS3, Node.js, Express.js, babel, webpack and eslint</p>
            <p className="textPort">This is a group project that I did with 3 other people.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Portfolio;
