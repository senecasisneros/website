import React from 'react';
import { Image } from 'react-bootstrap';

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h1 className="skillHeader">Skills</h1>
        <div className="Skills">
          <div className="imgContainer">
            <Image id="javaScript" src="src/style/image/javaScript.png" responsive />
            <h5>JavaScript</h5>
          </div>
          <div className="imgContainer">
            <Image id="html" src="src/style/image/html5.svg" responsive />
            <h5>HTML5</h5>
          </div>
          <div className="imgContainer">
            <Image id="css" src="src/style/image/css3.svg" responsive />
            <h5>CSS3</h5>
          </div>
          <div className="imgContainer">
            <Image id="bootstrap" src="src/style/image/bootstrap.png" responsive />
            <h5>Bootstrap</h5>
          </div>
          <div className="imgContainer">
            <Image id="react" src="src/style/image/react.png" responsive />
            <h5>React</h5>
          </div>
          <div className="imgContainer">
            <Image id="redux" src="src/style/image/redux.png" responsive />
            <h5>Redux</h5>
          </div>
          <div className="imgContainer">
            <Image id="node" src="src/style/image/nodejs.jpeg" responsive />
            <h5>Node.js</h5>
          </div>
          <div className="imgContainer">
            <Image id="express" src="src/style/image/expressjs.png" responsive />
            <h5>Express</h5>
          </div>
          <div className="imgContainer">
            <Image id="mongo" src="src/style/image/mongo.jpg" responsive />
            <h5>MongoDB</h5>
          </div>
          <div className="imgContainer">
            <Image id="mysql" src="src/style/image/mysql.png" responsive />
            <h5>MySQL</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
