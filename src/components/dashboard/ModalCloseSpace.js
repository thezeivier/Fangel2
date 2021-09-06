import React, {useState} from 'react';
import Wrapper from './../general/Wrapper'
import LoadServSpinner from '../spinner/LoadServSpinner'
import { ModalCloseContainer, SubtitleStyled, TextStyled, ButtonsContainer,
         ButtonStyled } from './styles/sModalCloseSpace'
import {deleteSpaceAndMessages} from './algorithms/deleteSpaceAndMessages' //Recordar que hay que migrar a una cloudFunction por motivos de rendimiento.
import firebase from "firebase/app";
import "firebase/functions";

const ModalCloseSpace = ({ modalIsOpen, roomName, uid, creatorUid, privacy, setListOfSpaces, listOfSpaces }) => {

  const [deleting, setDeleting] = useState(false)

  const handleDeleteSpace = async() =>{
    setDeleting(true)
    const path = {
      space: `/communities/${roomName}`,
      chatRoom: `/chatroom/${roomName}`,
    }
    if(creatorUid === uid){ //Corrobora si el que elimina es el creador de los espacios.
      await deleteSpaceAndMessages(path, creatorUid, firebase) //Ejecución de borrado de espacio social, subespacios y mensajes de los mismos.
    }else{
      modalIsOpen()//Cierra el Modal en caso de ser un pirata que intenta eliminar el espacio.
    }
    modalIsOpen()
    deleteLocalSpace()
  }

  const deleteLocalSpace = () => {
    if(privacy === "public"){
      const newPublicListOfSpaces = listOfSpaces.public.filter(space => space.roomName !== roomName)
      listOfSpaces.public = newPublicListOfSpaces
      setListOfSpaces(0)
      setListOfSpaces(listOfSpaces)
    }else if(privacy === "private"){
      const newPrivateListOfSpaces = listOfSpaces.private.filter(space => space.roomName !== roomName)
      listOfSpaces.private = newPrivateListOfSpaces
      setListOfSpaces(0)
      setListOfSpaces(listOfSpaces)
    }else{
      window.location.reload()
    }
  }

  return (
    <>
      {deleting? 
        <LoadServSpinner title="Elminando espacio social"/>:
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
      }
    </>
  );
}

export default ModalCloseSpace;
