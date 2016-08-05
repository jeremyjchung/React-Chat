import React, {Component} from 'react';
import ChatStore from '../stores/ChatStore';
import ChatActions from '../actions/ChatActions';

export default class ChatMessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      status: '',
      currentRoom: '',
      roomCreatedOrOpened: false
    };
  }
  componentDidMount() {
    this.unsubscribe = ChatStore.listen(function(storeState) {
      this.setState({
        status: storeState.status,
        messages: storeState.chatRoom.messages,
        currentRoom: storeState.chatRoom._id,
        roomCreatedOrOpened: storeState.isRoomOpened || storeState.isRoomCreated
      });

      if (this.state.roomCreatedOrOpened) {
        ChatActions.joinRoom(this.state.currentRoom, this.props.currentUser.firstname);
      }
    }.bind(this));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    var messages;

    if (this.state.messages) {
      messages = this.state.messages.map((msg, index) => {
        return (
          <tr key={index}>
            <td>{msg.firstname + ': '}</td>
            <td>{msg.message}</td>
          </tr>
        );
      });
    }

    return (
      <div>
        <table>
          <tbody>
            {messages}
          </tbody>
        </table>
      </div>
    );
  }
}
