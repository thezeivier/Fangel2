import React, { useState, useEffect } from 'react';
/* import { ReactComponent as MicrophoneDisableSVG } from './icons/microphoneDisable.svg'
import { ReactComponent as CameraVideoDisableSVG } from './icons/cameraVideoDisable.svg' */
import { ReactComponent as SendCommentsSVG } from './icons/sendComments.svg'
import { ReactComponent as MoreSVG } from './../home/icons/addCard.svg'
import { InputStyled, InputContainer, SvgsContainer, Form, Button } from './styles/sInputComments'

import firebase from 'firebase/app'

const InputComments = ({userFromDB, lastMsgRef, data, name, messageRef,open }) => {
  const [formValue, setFormValue] = useState('')
  
  // Send new message
  const sendMessage = async (e) => {
    e.preventDefault()
    setFormValue('')
    await messageRef.add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoUrl: "",
      text: formValue,
      userUid: userFromDB.uid,
      username: userFromDB.username,
      colorMessage: userFromDB.colorsUser,
      name: userFromDB.name? `${userFromDB.name.firstName.split(" ")[0]} ${userFromDB.name.lastName && userFromDB.name.lastName.split(" ")[0]}`: name
    })
  }

  // Scroll into last message
  const scrollIntoLastMessage = () => {
    lastMsgRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' })
  }

  useEffect(() => {
    const handler = scrollIntoLastMessage()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [data])
  
  return (
    <InputContainer>
      <SvgsContainer>
{/*         <MicrophoneDisableSVG className="microphone"/>
        <CameraVideoDisableSVG className="cameraVideo"/> */}
        <MoreSVG className="moreSVG" onClick={open} />
      </SvgsContainer>
      <Form onSubmit={sendMessage}>
        <InputStyled placeholder="Escribe un comentario" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <Button type="submit" disabled={((formValue.trim().length == 0) || (formValue.length > 180)) ? true : false }>
          <SendCommentsSVG className="sendCommentsSVG" />
        </Button>
      </Form>
    </InputContainer>
  );
}

export default InputComments;
