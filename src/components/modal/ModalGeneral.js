import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '200px',
    padding: '20px !important'
  }
};

Modal.setAppElement('#modal')

const ModalSettingsAdmin = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
    >
      {props.children}
    </Modal>
  );
}

export default ModalSettingsAdmin;
