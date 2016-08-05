import React, {Component} from 'react';
import ChatActions from '../actions/ChatActions';
import ChatStore from '../stores/ChatStore';

export default class ChatFriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      friendsListStatus: ''
    };

    this.onFriendsListClick = this.onFriendsListClick.bind(this);
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
    ChatActions.getAllFriends(this.props.currentUser.username);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onFriendsListClick(i) {
    ChatActions.openChatRoom(this.props.currentUser, this.state.friendsList[i]);
  }
  render() {
    var friendsTable = this.state.friendsList.map((friend, index) => {
      return (
        <tr key={index} onClick={() => this.onFriendsListClick(index)}>
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
