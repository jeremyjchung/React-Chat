import React, {Component} from 'react';
import ChatHeader from './ChatHeader';
import ChatFriendsList from './ChatFriendsList';

export default class ChatContainer extends Component {
  constructor() {
    var user = JSON.parse(localStorage.getItem('userInfo'));
    super();
    this.state = {
      username: user.username,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname
    };
  }
  render() {
    return (
      <div>
        <ChatHeader />
        <ChatFriendsList />
      </div>
    );
  }
}
