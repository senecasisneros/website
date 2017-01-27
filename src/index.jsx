// import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import './style/style.css';

import App from './components/App';
import Splash from './components/Splash';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import NavbarPage from './components/Navbar';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="about" component={About}></Route>
      <Route path="skills" component={Skills}></Route>
      <Route path="projects" component={Projects}></Route>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

module.hot.accept();
