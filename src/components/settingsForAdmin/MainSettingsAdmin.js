import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../../App'
import {SwitchVideoContext} from '../../pages/inCommunity/SwitchCommunityVideo'
import {useFirestore} from 'reactfire'
import useHover from './../../hook/use-hover'
import Wrapper from './../general/Wrapper'
import UserConnect from './UserConnect'
import AlertWarning from '../general/AlertWarning'
import { SubtitleStyled, InputStyled, InputContainer, SectionContainer,
         TimerDescripcion, ButtonStyled, DisplayContainer, Comment } from './styles/sMainSettings'
import { ReactComponent as CodeCopySVG } from './icons/codeCopy.svg'
//Import copy Code.
import {CopyCode} from '../createCommunity/algorithms/CopyCode'
import {AddHour} from './algorithms/AddHour'

const MainSettingsAdmin = ({ inDesktop }) => {
  const [hoverRef, isHovered] = useHover();
  const firestore = useFirestore()
  const { activeCommunity }  = useContext(SwitchVideoContext)
  const [code, setCode] = useState(false);
  const [alertTimer, setAlertTimer] = useState(false)

  const contextFromApp = useContext(AppContext)
  useEffect(()=> {
    contextFromApp.userFromDB.userCodesRef
      .get()
      .then(result =>{
        if(result.data().users.length < 20){
          setCode(result.data().code)
        }
      })
      if(((activeCommunity.duration - activeCommunity.transcurred) <= 10)){
        setAlertTimer(true)
      }
  },[activeCommunity])

  const addHour = async () => {
    await AddHour(firestore, contextFromApp.userFromDB.uid)
  }
  
  return (
    <Wrapper>
      {
        (alertTimer) &&
        <AlertWarning extendTime={()=>{
          addHour()
          setAlertTimer(false)
        }} closeModal={()=>setAlertTimer(false)}/>
      }
      <DisplayContainer inDesktop={inDesktop}>
        <SectionContainer>
          {/* <SubtitleStyled as="h4">Personas <span>(0)</span></SubtitleStyled> */}
          <div>
            {/*<UserConnect />
            <UserConnect />
            <UserConnect />
            <UserConnect /> */}
          </div>
        </SectionContainer>
        <div>
          {
            code &&
              <SectionContainer>
                <SubtitleStyled as="h4">Código de invitación</SubtitleStyled>
                <InputContainer>
                  <InputStyled id="adminCopyCode" special invitationCode placeholder="Código de invitación" value={code? code: "Cargando..."} readOnly/>
                  <button onClick={()=>CopyCode("adminCopyCode")} ref={hoverRef}>
                    <CodeCopySVG/>
                    {isHovered && <Comment>Copiar código</Comment>}
                  </button>
                </InputContainer>
              </SectionContainer>
          }
          <SectionContainer>
            <SubtitleStyled as="h4">Configuraciones</SubtitleStyled>
            <TimerDescripcion>
              <p>Tiempo de vida sobrante</p>
              <span>{activeCommunity? `Apróx. ${activeCommunity.duration - activeCommunity.transcurred} min.`: "Cargando"}</span>
            </TimerDescripcion>
            {(activeCommunity.duration - activeCommunity.transcurred) >= 120?
              <>
                <ButtonStyled secondary onClick={addHour} disabled ref={hoverRef}>Extender 1 hora más</ButtonStyled>
                {isHovered} && <Comment>Se habilitará cuando te queden pocos minutos</Comment>
              </> :
              <ButtonStyled secondary onClick={addHour}>Extender 1 hora más</ButtonStyled>
            }
          </SectionContainer>
        </div>
      </DisplayContainer>
    </Wrapper>
  );
}

export default MainSettingsAdmin;
