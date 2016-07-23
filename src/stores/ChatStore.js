var Reflux = require('reflux');
var $ = require('jQuery');
var ChatActions = require('../actions/ChatActions');

var ChatStore = Reflux.createStore({
  listenables: ChatActions,
  state: {
    status: '',
    userList: []
  },
  onGetAllFriends() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:9000/users/all',
      dataType: 'json',
      success: function(data, status, xhr) {
        this.state.status = xhr.status;
        this.state.userList = data;
        this.trigger(this.state);
      }.bind(this),
      error: function(xhr) {
        this.state.status = xhr;
        this.trigger(this.state);
      }.bind(this)
    });
  }
});

module.exports = ChatStore;
