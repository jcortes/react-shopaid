var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PersonLogin = require('../components/PersonLogin');

module.exports = (
  <Route path="/" component={Main}>
    <Route path="/login" component={PersonLogin} />
    <IndexRoute component={Home} />
  </Route>
);
