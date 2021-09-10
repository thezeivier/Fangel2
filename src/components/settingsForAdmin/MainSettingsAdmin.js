import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {AppContext} from '../../App'
import {useFirestore} from 'reactfire'
import useHover from './../../hook/use-hover'
import Wrapper from './../general/Wrapper'
import SubSpaceMain from './../subSpace/SubSpaceMain'
import { SubtitleStyled, InputStyled, InputContainer, SectionContainer,
         TimerDescripcion, DisplayContainer, Comment } from './styles/sMainSettings'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { InputStyled as InputStyledForm } from './../../pages/signInAndUp/styles/sGlobalForm'
import { ButtonStyled } from './../../themes/internalRecyclableStyles'
import { ReactComponent as CodeCopySVG } from './icons/codeCopy.svg'
//Import copy Code.
import {CopyCode} from '../createCommunity/algorithms/CopyCode'

const MainSettingsAdmin = ({isAdmin, inDesktop, communityData, isSubSpace, communityDataSubSpace }) => {
  const [hoverRef, isHovered] = useHover();
  const [emailRestriction, setEmailRestriction] = useState(communityData.emailRestriction ? communityData.emailRestriction: null);
  const contextFromApp = useContext(AppContext)
  const firestore = useFirestore()

  const handleSendEmailRestriction = (e) => {
    e.preventDefault();
    let value = document.getElementById("emailRestriction")
    let batch = firestore.batch()
    let spaceRef = firestore.collection("communities").doc(communityData.roomName)
    batch
    .set(
      spaceRef,
      {
        emailRestriction: value
      },
      {merge: true}
    )
    if(value.includes == "@"){
      batch.commit().then(setEmailRestriction(value))
    }
  }
  return (
    <DisplayContainer inDesktop={inDesktop}>
      <div>
        <SectionContainer width50ptg>
          <div className="invitationLinkContainer">
            <SubtitleStyled as="h4">Link del espacio social</SubtitleStyled>
            <InputContainer>
              <InputStyled 
                id="urlRoomCode" 
                special 
                invitationCode 
                placeholder="Link de la sala" 
                value={!isSubSpace ?  (communityData.roomName ? `https://fangelweb.com/room/${communityData.roomName}` : "Cargando...") : `https://fangelweb.com/room/${communityData.roomName}/${communityDataSubSpace.id}` } readOnly/>
              <button onClick={()=>CopyCode("urlRoomCode")} ref={hoverRef}>
                <CodeCopySVG/>
                {isHovered && <Comment>Copiar link</Comment>}
              </button>
            </InputContainer>
          </div>
        </SectionContainer>
        <SectionContainer width50ptg domine>
              <SubtitleStyled as="h4">Seguridad</SubtitleStyled>
                <TextBody>Restricción de dominio: {emailRestriction && `"${emailRestriction}"`}</TextBody>
                <InputContainer domine>
                  <InputStyledForm 
                    id="emailRestriction" 
                    placeholder="Ejm: @example.com" 
                  />
                  <ButtonStyled secondary onClick={handleSendEmailRestriction}>Guardar</ButtonStyled>
                </InputContainer>
            </SectionContainer>
        {
          communityData.privacy === "private" && !isSubSpace &&
          <>
            <SectionContainer>
              <SubtitleStyled as="h4">Subespacios</SubtitleStyled>
              <SubSpaceMain isAdmin={isAdmin} communityData={communityData} isSubSpace={isSubSpace}/>
            </SectionContainer>
          </>
        }
      </div>
    </DisplayContainer>
  );
}

export default MainSettingsAdmin;
