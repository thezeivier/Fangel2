import React from 'react';
import styled from 'styled-components'
import { ReactComponent as MicrophoneDisableSVG } from './icons/microphoneDisable.svg'
import { ReactComponent as CameraVideoDisableSVG } from './icons/cameraVideoDisable.svg'
import { ReactComponent as SendCommentsSVG } from './icons/sendComments.svg'
import { InputStyled } from './styles/sInputComments'

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  flex: 0 0 auto;
`

const SvgsContainer = styled.div`
  flex: 1 0 auto;
  margin: 0 5px 0 0;

  svg {
    height: 26px;
  }

  .microphone {
    margin: 0 5px 0 0;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  background: transparent;
  border: none;
`

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
          <SendCommentsSVG />
        </Button>
      </Form>
    </InputContainer>
  );
}

export default InputComments;
