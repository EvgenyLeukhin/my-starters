import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaArrowRight } from 'react-icons/lib/fa';

class ModalExample extends React.Component {

  state = {
    modal: false
  };

  toggle = ()  => {
    this.setState({ modal: !this.state.modal });
  }

  render() {

    const styles = {
      position: 'relative',
      top: -1
    };

    return (
      <main className="modal-page" style={{paddingTop: 30}}>
        <Button color="danger" onClick={this.toggle}>Click me <FaArrowRight color='gold' size={18} style={styles}/></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    );
  }
}

export default ModalExample;