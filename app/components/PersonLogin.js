import React from 'react';

class PersonLoginLogo extends React.Component {
  render () {
    return (
      <div>
        Logo
      </div>
    );
  }
}

class PersonLoginSocial extends React.Component {
  render () {
    return (
      <div>
        Social
      </div>
    );
  }
}

class PersonLoginForm extends React.Component {
  render () {
    return (
      <div>
        LoginForm
      </div>
    );
  }
}

class PersonLoginNew extends React.Component {
  render () {
    return (
      <div>
        New?
      </div>
    );
  }
}

class PersonLogin extends React.Component {
  render () {
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
}

module.exports = PersonLogin;
