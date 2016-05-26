import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 50
  },
  logo: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  socialButton: {
    mediumIcon: {
      width: 48,
      height: 48,
    },
    medium: {
      width: 96,
      height: 96,
      padding: 24,
    }
  },
  enterButton: {
  },
  registerButton: {
  }
};

class SAPersonLoginLogo extends React.Component {
  render () {
    return (
      <div>
        <Paper style={styles.logo} zDepth={1} circle={true} />
        <h2>SHOPAID</h2>
      </div>
    );
  }
}

class SAPersonLoginSocial extends React.Component {
  render () {
    return (
      <div>
        <span>Login with:</span>
        <IconButton
          iconStyle={styles.socialButton.smallIcon}
          style={styles.socialButton.small}>
          <ActionHome />
        </IconButton>
        <IconButton
          iconStyle={styles.socialButton.smallIcon}
          style={styles.socialButton.small}>
          <ActionHome />
        </IconButton>
        <IconButton
          iconStyle={styles.socialButton.smallIcon}
          style={styles.socialButton.small}>
          <ActionHome />
        </IconButton>
        <IconButton
          iconStyle={styles.socialButton.smallIcon}
          style={styles.socialButton.small}>
          <ActionHome />
        </IconButton>
      </div>
    );
  }
}

class SAPersonLoginForm extends React.Component {
  render () {
    return (
      <form>
        <p>Registered with an email:</p>
        <TextField
          hintText="Email"
          floatingLabelText="Email"/>
        <br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"/>
        <br/>
        <br/>
        <RaisedButton label="Enter" primary={true} style={styles.enterButton} />
        <br/>
        <br/>
        <Link to="/forgot-password">Forgot password?</Link>
        <br/>
      </form>
    );
  }
}

class SAPersonLoginNew extends React.Component {
  render () {
    return (
      <div>
        <p>New User?</p>
        <RaisedButton label="Register" secondary={true} style={styles.registerButton} />
      </div>
    );
  }
}

class SAPersonLogin extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <SAPersonLoginLogo/>
        <SAPersonLoginSocial/>
        <SAPersonLoginForm/>
        <hr/>
        <SAPersonLoginNew/>
      </div>
    );
  }
}

export default SAPersonLogin;
