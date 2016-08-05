var Reflux = require('reflux');

var ChatActions = Reflux.createActions([
  'sendMessage',
  'receiveMessages',
  'joinRoom',
  'getAllFriends',
  'openChatRoom',
  'createChatRoom'
]);

module.exports = ChatActions;
