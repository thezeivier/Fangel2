import React from 'react';
import SettingsAdmin from './SettingsAdmin'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#modal')

const ModalSettingsAdmin = ({ closeModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <SettingsAdmin closeModal={closeModal} />
    </Modal>
  );
}

export default ModalSettingsAdmin;
