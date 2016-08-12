import React, {Component} from 'react';
import {
  Modal,
  ModalHeader,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

export default class ChatProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isModalOpen
    };
    this.hideModal = this.hideModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: nextProps.isModalOpen
    });
  }
  hideModal() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    return (
      <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
        <ModalHeader>
          <ModalClose onClick={this.hideModal}/>
          <h2>Profile</h2>
        </ModalHeader>
        <ModalBody>
          <h4>
            {this.props.currentUser.firstname} {this.props.currentUser.lastname} ({this.props.currentUser.username})
          </h4>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={this.hideModal}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
