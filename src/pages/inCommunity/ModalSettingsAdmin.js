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

const ModalSettingsAdmin = ({ closeModal, modalIsOpen, communityData, isSubSpace, communityDataSubSpace}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <SettingsAdmin closeModal={closeModal} communityData={communityData} isSubSpace={isSubSpace} communityDataSubSpace={communityDataSubSpace}/>
    </Modal>
  );
}

export default ModalSettingsAdmin;
