import React, {Component} from 'react';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {username: '', password: ''};
    this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onUsernameChangeHandler(e) {
    this.setState({
      username: e.target.value
    });
  }
  onPasswordChangeHandler(e) {
    this.setState({
      password: e.target.value
    });
  }
  onLogin(e) {
    e.preventDefault();
    this.setState({
      password: ''
    });
  }
  render() {
    var disabled = <button type='submit' disabled>Login</button>;
    var enabled = <button type='submit'>Login</button>;
    var display = disabled;

    if (this.state.username && this.state.password) {
      display = enabled;
    }

    return (
      <div>
        <h1>Welcome to KatChat!</h1>
        <br/>
        <form onSubmit={this.onLogin}>
          <input type='text' value={this.state.username} onChange={this.onUsernameChangeHandler} />
          <br/>
          username
          <br/><br/>
          <input type='password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
          <br/>
          password
          <br/><br/>
          {display}
        </form>
      </div>
    );
  }
}
