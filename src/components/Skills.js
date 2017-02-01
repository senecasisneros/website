import React from 'react';
import { Image } from 'react-bootstrap';
import animated from 'animate.css';


class Skills extends React.Component {
  render() {
    return (
      <div>
        <h1 className="skillHeader">Skills</h1>
        <div className="Skills">
          <div className="imgContainer">
            <Image id="javaScript" className="animated flip" src="src/style/image/javaScript.png" responsive />
            <h5>JavaScript</h5>
          </div>
          <div className="imgContainer">
            <Image id="html" className="animated flip" src="src/style/image/html5.svg" responsive />
            <h5>HTML5</h5>
          </div>
          <div className="imgContainer">
            <Image id="css" className="animated flip" src="src/style/image/css3.svg" responsive />
            <h5>CSS3</h5>
          </div>
          <div className="imgContainer">
            <Image id="bootstrap" className="animated flip" src="src/style/image/bootstrap.png" responsive />
            <h5>Bootstrap</h5>
          </div>
          <div className="imgContainer">
            <Image id="react" className="animated flip" src="src/style/image/react.png" responsive />
            <h5>React</h5>
          </div>
          <div className="imgContainer">
            <Image id="redux" className="animated flip" src="src/style/image/redux.png" responsive />
            <h5>Redux</h5>
          </div>
          <div className="imgContainer">
            <Image id="node" className="animated flip" src="src/style/image/nodejs.jpeg" responsive />
            <h5>Node.js</h5>
          </div>
          <div className="imgContainer">
            <Image id="express" className="animated flip" src="src/style/image/expressjs.png" responsive />
            <h5>Express</h5>
          </div>
          <div className="imgContainer">
            <Image id="mongo" className="animated flip" src="src/style/image/mongo.jpg" responsive />
            <h5>MongoDB</h5>
          </div>
          <div className="imgContainer">
            <Image id="mysql" className="animated flip" src="src/style/image/mysql.png" responsive />
            <h5>MySQL</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

//infinite
// lightSpeedIn
