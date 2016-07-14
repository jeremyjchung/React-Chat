import React, {Component} from 'react';
import LoginForm from './LoginForm';

export default class LoginContainer extends Component {
  render() {
    return (
      <div className='loginpage-bg'>
        <LoginForm />
      </div>
    );
  }
}
