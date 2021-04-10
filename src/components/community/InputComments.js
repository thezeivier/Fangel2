import React, { useState, useRef } from 'react';
import { ReactComponent as MicrophoneDisableSVG } from './icons/microphoneDisable.svg'
import { ReactComponent as CameraVideoDisableSVG } from './icons/cameraVideoDisable.svg'
import { ReactComponent as SendCommentsSVG } from './icons/sendComments.svg'
import { InputStyled, InputContainer, SvgsContainer, Form, Button } from './styles/sInputComments'

import firebase from 'firebase/app'

const InputComments = ({userFromDB, lastMsgRef}) => {
  const [formValue, setFormValue] = useState('')
  const messageRef = firebase.firestore().collection('chatroom').doc('o0dUmKl2NYPPGvzHPl7ORFbdNho1').collection('messages')

  const sendMessage = async (e) => {
    e.preventDefault()

    // Send new message
    await messageRef.add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoUrl: "",
      text: formValue,
      userUid: userFromDB.uid,
      username: userFromDB.username
    })

    setFormValue('')

    lastMsgRef.current.scrollIntoView({ behavior: 'smooth'}) // Scroll to last message 
  }

  return (
    <InputContainer>
      <SvgsContainer>
        <MicrophoneDisableSVG className="microphone"/>
        <CameraVideoDisableSVG className="cameraVideo"/>
      </SvgsContainer>
      <Form onSubmit={sendMessage}>
        <InputStyled placeholder="Escribe un comentario" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <Button type="submit" disabled={(formValue.trim().length == 0) ? true : false }>
          <SendCommentsSVG className="sendCommentsSVG" />
        </Button>
      </Form>
    </InputContainer>
  );
}

export default InputComments;
