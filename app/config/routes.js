import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import Main from '../components/Main';
import PersonLogin from '../components/PersonLogin';
import Demo1 from '../components/Demo1';

export default (
  <Route path="/" component={Main}>
    <Route path="/demo1" component={Demo1} />
    <IndexRoute component={PersonLogin} />
  </Route>
);
