var React = require('react');
var ReactDOM = require('react-dom');

var PersonLogin = React.createClass({
  render: function () {
    return (
      <div>
        <PersonLoginLogo/>
        <PersonLoginSocial/>
        <PersonLoginForm/>
        <hr/>
        <PersonLoginNew/>
      </div>
    );
  }
});

var PersonLoginLogo = React.createClass({
  render: function () {
    return (
      <div>
        Logo
      </div>
    );
  }
});

var PersonLoginSocial = React.createClass({
  render: function () {
    return (
      <div>
        Social
      </div>
    );
  }
});

var PersonLoginForm = React.createClass({
  render: function () {
    return (
      <div>
        LoginForm
      </div>
    );
  }
});

var PersonLoginNew = React.createClass({
  render: function () {
    return (
      <div>
        New?
      </div>
    );
  }
});

module.exports = PersonLogin;
