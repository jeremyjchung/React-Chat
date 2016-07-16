import React, {Component} from 'react';
import CreateAccountForm from './CreateAccountForm';
import LoginForm from './LoginForm';

export default class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      formState: 'sign-in'
    };

    this.onSignInClick = this.onSignInClick.bind(this);
    this.onCreateAccountClick = this.onCreateAccountClick.bind(this);
  }
  onSignInClick() {
    this.setState({formState: 'sign-in'});
  }
  onCreateAccountClick() {
    this.setState({formState: 'create-account'});
  }
  render() {
    var display;

    if (this.state.formState == 'sign-in') {
      display = <LoginForm />;
    } else {
      display = <CreateAccountForm />;
    }
    return (
      <div className='loginpage-bg'>
        {display}
        <span>
          <a href='#' onClick={this.onSignInClick}>Sign In</a>
          <a href='#' onClick={this.onCreateAccountClick}>Create Account</a>
        </span>
      </div>
    );
  }
}
