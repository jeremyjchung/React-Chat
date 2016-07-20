import React, {Component} from 'react';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

export default class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      status: ''
    };

    this.createAccount = this.createAccount.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onFirstnameChangeHandler = this.onFirstnameChangeHandler.bind(this);
    this.onLastnameChangeHandler = this.onLastnameChangeHandler.bind(this);
  }
  componentDidMount() {
    this.unsubscribe = UserStore.listen(function(userState) {
      this.setState({status: userState.status});

      this.setState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  createAccount(e) {
    e.preventDefault();
    UserActions.createUser(this.state.firstname, this.state.lastname, this.state.username, this.state.password);
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
    console.log(this.state);
    var disabled = <button type='submit' disabled>Sign Up</button>;
    var enabled = <button type='submit'>Sign Up</button>;
    var display = disabled;

    if (this.state.username && this.state.password && this.state.firstname && this.state.lastname) {
      display = enabled;
    }

    var submissionFeedback;

    if (this.state.status == '201') {
      submissionFeedback = 'Account successfully created!';
    } else if (this.state.status == '503') {
      submissionFeedback = 'Server is down...';
    } else if (this.state.status == '400') {
      submissionFeedback = 'Username already exists.';
    }

    return (
      <div>
        <h1>Create Account</h1>
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
            <button type='reset' onClick={this.clearForm}>Clear</button>
            {display}
            {submissionFeedback}
          </span>
        </form>
      </div>
    );
  }
}
