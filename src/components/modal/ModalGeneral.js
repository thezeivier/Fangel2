import React, { useState } from 'react';
import styled from 'styled-components'
import Modal from 'react-modal';
import { ReactComponent as CloseSVG } from './../general/icons/close.svg'

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

const SVGContainer = styled.div`
  svg {
    fill: ${props => props.theme.textColor};
    position: absolute;
    top: 15px;
    right: 15px;
    transition: .2s;
    cursor: pointer;

    &:hover {
      fill: ${props => props.theme.colorbrandSolid};
    }
  }

  @media(min-width:1200px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

const ModalGeneral = (props) => {
  return (
    <Modal
      isOpen={props.modalOpen}
      onRequestClose={props.isNotclose}
      style={customStyles}
    >
      {props.children}
      <SVGContainer>
        <CloseSVG onClick={props.modalIsOpen} />
      </SVGContainer>
    </Modal>
  );
}

export default ModalGeneral;
