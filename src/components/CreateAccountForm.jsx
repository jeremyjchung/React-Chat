import React, {Component} from 'react';

export default class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    };

    this.createAccount = this.createAccount.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onFirstnameChangeHandler = this.onFirstnameChangeHandler.bind(this);
    this.onLastnameChangeHandler = this.onLastnameChangeHandler.bind(this);
  }
  createAccount(e) {
    e.preventDefault();
    this.setState({
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    });
  }
  clearForm() {
    this.setState({
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    });
  }
  onFirstnameChangeHandler(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onLastnameChangeHandler(e) {
    this.setState({
      lastname: e.target.value
    });
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
  render() {
    var disabled = <button type='submit' disabled>Sign Up</button>;
    var enabled = <button type='submit'>Sign Up</button>;
    var display = disabled;

    if (this.state.username && this.state.password && this.state.firstname && this.state.lastname) {
      display = enabled;
    }

    return (
      <div>
        <h1>Create an Account</h1>
        <form onSubmit={this.createAccount}>
          First Name <br/>
          <input type='text' value={this.state.firstname} onChange={this.onFirstnameChangeHandler} />
          <br/><br/>
          Last Name <br/>
          <input type='text' value={this.state.lastname} onChange={this.onLastnameChangeHandler} />
          <br/><br/>
          Username <br/>
          <input type='text' value={this.state.username} onChange={this.onUsernameChangeHandler} />
          <br/><br/>
          Password <br/>
          <input type='password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
          <br/><br/>
          <span>
            <button onClick={this.clearForm}>Clear</button>
            {display}
          </span>
        </form>
      </div>
    );
  }
}
