import React from 'react';
import styled from 'styled-components'
import { ReactComponent as MicrophoneDisableSVG } from './icons/microphoneDisable.svg'
import { ReactComponent as CameraVideoDisableSVG } from './icons/cameraVideoDisable.svg'
import { ReactComponent as SendCommentsSVG } from './icons/sendComments.svg'
import { InputStyled, InputContainer, SvgsContainer, Form, Button } from './styles/sInputComments'

const InputComments = () => {
  return (
    <InputContainer>
      <SvgsContainer>
        <MicrophoneDisableSVG className="microphone"/>
        <CameraVideoDisableSVG className="cameraVideo"/>
      </SvgsContainer>
      <Form>
        <InputStyled placeholder="Escribe un comentario" />
        <Button type="submit">
          <SendCommentsSVG className="sendCommentsSVG" />
        </Button>
      </Form>
    </InputContainer>
  );
}

export default InputComments;
