import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {username: '', password: '', status: '', _id: ''};

    this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = UserStore.listen(function(userState) {
      this.setState({status: userState.status, _id: userState._id});

      if (this.state.status == '200') {
        var userInfo = {username: this.state.username, password: this.state.password};
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        hashHistory.push('messages/' + this.state._id);
      } else {
        this.setState({
          username: '',
          password: ''
        });
      }
    }.bind(this));
  }
  componentWillUnmount() {
    this.unsubscribe();
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
    UserActions.login(this.state.username, this.state.password);
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
