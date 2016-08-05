import React, {Component} from 'react';
import ChatHeader from './ChatHeader';
import ChatFriendsList from './ChatFriendsList';
import ChatMessagesList from './ChatMessagesList';
import ChatInputArea from './ChatInputArea';
import ChatActions from '../actions/ChatActions';

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

    ChatActions.receiveMessages();
  }
  render() {
    return (
      <div>
        <ChatHeader />
        <ChatFriendsList currentUser={this.state}/>
        <ChatMessagesList currentUser={this.state}/>
        <ChatInputArea currentUser={this.state}/>
      </div>
    );
  }
}
