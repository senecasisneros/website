import React from 'react';
// import {Image} from 'react-bootstrap';
import animated from 'animate.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';


class Skills extends React.Component {
  render() {
    return (
      <Grid className='Skills'>
        <h1 className="skillHeader">Skills page</h1>
        <Row className="show-grid row-centered">
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="javaScript" className="animated flip" src="src/style/image/javaScript.png" responsive/>
            <h5>JavaScript</h5>
          </Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="node" className="animated flip" src="src/style/image/nodejs.png" responsive/>
            <h5>Node.js</h5>
          </Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="express" className="animated flip" src="src/style/image/express.png" responsive/>
            <h5>Express</h5>
          </ Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="mongo" className="animated flip" src="src/style/image/Mongo.png" responsive/>
            <h5>MongoDB</h5>
          </ Col>
        </Row>

        <Row className="show-grid portRow">
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="html" className="animated flip" src="src/style/image/html5.svg" responsive/>
            <h5>HTML5</h5>
          </Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="css" className="animated flip" src="src/style/image/css3.svg" responsive/>
            <h5>CSS3</h5>
          </Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="bootstrap" className="animated flip" src="src/style/image/bootstrap.png" responsive/>
            <h5>Bootstrap</h5>
          </ Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="react" className="animated flip" src="src/style/image/react.png" responsive/>
            <h5>React</h5>
          </ Col>
        </Row>

        <Row className="show-grid portRow">
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="flux" className="animated flip" src="src/style/image/flux.png" responsive/>
            <h5>Flux</h5>
          </Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="redux" className="animated flip" src="src/style/image/redux.png" responsive/>
            <h5>Redux</h5>
          </Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="mysql" className="animated flip" src="src/style/image/sql.png" responsive/>
            <h5>SQL</h5>
          </ Col>
          <Col className="iconNew" xs={12} sm={6} lg={4}>
            <Image id="jQuery" className="animated flip" src="src/style/image/jquery-icon.png" responsive/>
            <h5>jQuery</h5>
          </ Col>
        </Row>
      </Grid>
    );
  }
}

export default Skills;
