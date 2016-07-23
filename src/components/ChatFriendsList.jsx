import React, {Component} from 'react';
import ChatActions from '../actions/ChatActions';
import ChatStore from '../stores/ChatStore';

export default class ChatFriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      friendsListStatus: ''
    };
  }
  componentDidMount() {
    this.unsubscribe = ChatStore.listen(function(storeState) {
      this.setState({
        friendsListStatus: storeState.status,
        friendsList: storeState.userList
      });
    }.bind(this));
  }
  componentWillMount() {
    ChatActions.getAllFriends();
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    var friendsTable = this.state.friendsList.map((friend, index) => {
      return (
        <tr key={index}>
          <td>{friend.firstname} {friend.lastname}</td>
        </tr>
      );
    });

    return (
      <table>
        <tbody>
          {friendsTable}
        </tbody>
      </table>
    );
  }
}
