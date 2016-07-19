var Reflux = require('reflux');
var $ = require('jQuery');
var UserActions = require('../actions/UserActions');

var UserStore = Reflux.createStore({
  listenables: UserActions,
  state: {
    status: ''
  },
  onCreateUser: function(firstname, lastname, username, password) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:9000/users/',
      data: {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password
      },
      dataType: 'json',
      success: function(data, status) {
        this.state.status = status;
        this.trigger(this.state);
      }.bind(this),
      error: function(smg, status) {
        this.state.status = status;
        this.trigger(this.state);
      }.bind(this)
    });
  }
});

module.exports = UserStore;