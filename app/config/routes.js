import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import PersonLogin from '../components/PersonLogin';

module.exports = (
  <Route path="/" component={PersonLogin}>
    <Route path="/login" component={PersonLogin} />
    <IndexRoute component={PersonLogin} />
  </Route>
);
