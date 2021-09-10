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
  const contextFromApp = useContext(AppContext)
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
        {
          communityData.privacy === "private" && !isSubSpace &&
          <>
            <SectionContainer width50ptg domine>
              <SubtitleStyled as="h4">Seguridad</SubtitleStyled>
                <TextBody>Restricción de dominio:</TextBody>
                <InputContainer domine>
                  <InputStyledForm 
                    id="" 
                    placeholder="Ejm: @example.com" 
                  />
                  <ButtonStyled secondary>Guardar</ButtonStyled>
                </InputContainer>
            </SectionContainer>
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
