var Reflux = require('reflux');

var ChatActions = Reflux.createActions([
  'sendMessage',
  'getAllFriends'
]);

module.exports = ChatActions;
