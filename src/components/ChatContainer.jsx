import React, {Component} from 'react';

export default class ChatContainer extends Component {
  render() {
    var user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(user);
    return (
      <h1>{user.username}</h1>
    );
  }
}
