// import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './style/style.css';

import App from './components/App';
import Splash from './components/Splash';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="about" component={About}></Route>
      <Route path="skills" component={Skills}></Route>
      <Route path="portfolio" component={Portfolio}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

module.hot.accept();
