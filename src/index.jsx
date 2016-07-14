import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import LoginContainer from './components/LoginContainer';
import App from './components/App';

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LoginContainer} />
    </Route>
  </Router>
  )
, document.querySelector('.root'));
