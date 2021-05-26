import React from 'react';
import Wrapper from './../general/Wrapper'
import { ModalCloseContainer, SubtitleStyled, TextStyled, ButtonsContainer,
  ButtonStyled } from './styles/sModalCloseSpace'
import {deleteSpaceAndMessages} from './algorithms/deleteSpaceAndMessages' //Recordar que hay que migrar a una cloudFunction por motivos de rendimiento.
import firebase from "firebase/app";
import "firebase/functions";

const ModalCloseSpace = ({ modalIsOpen, roomName, uid, creatorUid }) => {

  const handleDeleteSpace = async() =>{
    const path = {
      space: `/communities/${roomName}`,
      chatRoom: `/chatroom/${roomName}`,
    }
    if(creatorUid === uid){ //Corrobora si el que elimina es el creador de los espacios.
      await deleteSpaceAndMessages(path, creatorUid, firebase) //Ejecución de borrado de espacio social, subespacios y mensajes de los mismos.
    }else{
      modalIsOpen()//Cierra el Modal en caso de ser un pirata que intenta eliminar el espacio.
    }
  }
  return (
    <main>
      <Wrapper>
        <ModalCloseContainer>
          <div>
            <SubtitleStyled as="p">¿Estás seguro(a) de eliminar este espacio?</SubtitleStyled>
            <TextStyled as="span">También se eliminarán los subespacios y no se podrán recuperar después</TextStyled>
          </div>
          <ButtonsContainer>
            <a onClick={modalIsOpen}>No, gracias</a>
            <ButtonStyled secondary onClick={handleDeleteSpace}>Sí, porfavor</ButtonStyled>{/*Llamado a la ejecución de eliminación de espacio*/}
          </ButtonsContainer>
        </ModalCloseContainer>
      </Wrapper>
    </main>
  );
}

export default ModalCloseSpace;
