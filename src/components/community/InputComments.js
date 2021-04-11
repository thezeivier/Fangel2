import React, { useState, useEffect } from 'react';
import { ReactComponent as MicrophoneDisableSVG } from './icons/microphoneDisable.svg'
import { ReactComponent as CameraVideoDisableSVG } from './icons/cameraVideoDisable.svg'
import { ReactComponent as SendCommentsSVG } from './icons/sendComments.svg'
import { InputStyled, InputContainer, SvgsContainer, Form, Button } from './styles/sInputComments'

import firebase from 'firebase/app'

const InputComments = ({userFromDB, lastMsgRef, roomName}) => {
  const [formValue, setFormValue] = useState('')
  const messageRef = firebase.firestore().collection('chatroom').doc(roomName).collection('messages')
  
  // Send new message
  const sendMessage = async (e) => {
    e.preventDefault()
    await messageRef.add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoUrl: "",
      text: formValue,
      userUid: userFromDB.uid,
      username: userFromDB.username
    })

    setFormValue('')

    // Scroll into last message
    lastMsgRef.current.scrollIntoView({ behavior: 'smooth'})  
  }

  // Scroll into last message
  const scrollIntoLastMessage = () => {
    lastMsgRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  useEffect(() => {
    const handler = scrollIntoLastMessage()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

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
