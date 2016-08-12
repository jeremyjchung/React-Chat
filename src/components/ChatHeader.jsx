import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Popover, ButtonToolbar, Overlay} from 'react-bootstrap';
import ChatActions from '../actions/ChatActions';
import ChatProfileModal from './ChatProfileModal';

export default class ChatHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccountPopover: false,
      showProfileModal: false
    };

    this.accountIconClickHandler = this.accountIconClickHandler.bind(this);
    this.viewProfileClickHandler = this.viewProfileClickHandler.bind(this);
  }
  accountIconClickHandler() {
    this.setState({
      showAccountPopover: !this.state.showAccountPopover,
      showProfileModal: false
    });
  }
  signOutClickHandler() {
    ChatActions.signOut();
  }
  viewProfileClickHandler() {
    console.log('hello');
    this.setState({
      showAccountPopover: false,
      showProfileModal: true
    });
  }
  render() {
    const accountPopOver = (
      <Popover id='popover-trigger-click' className='account-popover' arrowOffsetTop={10}>
        <h3>Account</h3>
        <button onClick={this.viewProfileClickHandler} className='btn btn-primary btn-sm'>View Profile</button>
        <a onClick={this.signOutClickHandler} href='/'>
          <button className='btn btn-primary btn-sm'>Sign Out</button>
        </a>
      </Popover>
    );

    return (
      <div className='chat-header-area'>
        <div className='chat-header-left'>
          <h1>KatChat Messenger</h1>
        </div>
        <div className='chat-header-right'>
          <ButtonToolbar>
            <span>
              <img
                ref='accountIcon' onClick={this.accountIconClickHandler}
                src='/src/assets/imgs/account.png' height='40' width='40'
              />
              <Overlay
                show={this.state.showAccountPopover}
                onHide={()=>this.setState({showAccountPopover: false})}
                placement='bottom'
                target={() => ReactDOM.findDOMNode(this.refs.accountIcon)}
              >
                {accountPopOver}
              </Overlay>
            </span>
            <span><img src='/src/assets/imgs/settings.png' height='40' width='40' /></span>
          </ButtonToolbar>
        </div>
        <ChatProfileModal currentUser={this.props.currentUser} isModalOpen={this.state.showProfileModal} />
      </div>
    );
  }
}
