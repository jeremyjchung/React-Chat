import React, {Component} from 'react';
import LoginContainer from './LoginContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer currentRoute={this.props.location.pathname}/>
      </div>
    );
  }
}
