import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import {AppContext} from '../../App'
import {useFirestore} from 'reactfire'
import useHover from './../../hook/use-hover'
import Wrapper from './../general/Wrapper'
import AlertWarning from '../general/AlertWarning'
import UserConnect from './UserConnect'
import SubSpaceMain from './../subSpace/SubSpaceMain'
import { SubtitleStyled, InputStyled, InputContainer, SectionContainer,
         TimerDescripcion, ButtonStyled, DisplayContainer, Comment } from './styles/sMainSettings'
import { ReactComponent as CodeCopySVG } from './icons/codeCopy.svg'
//Import copy Code.
import {CopyCode} from '../createCommunity/algorithms/CopyCode'
// import {AddHour} from './algorithms/AddHour'

const MainSettingsAdmin = ({ inDesktop, communityData }) => {
  const [hoverRef, isHovered] = useHover();
  // const firestore = useFirestore()
  const [code, setCode] = useState(false);
  // const [alertTimer, setAlertTimer] = useState(false)
  // const [activeCommunity, setActiveCommunity] = useState()
  const contextFromApp = useContext(AppContext)
  useEffect(()=> {
    contextFromApp.userFromDB.userCodesRef
      .get()
      .then(result =>{
        if(result.data().users.length < 20){
          setCode(result.data().code)
        }  
      })
      // firestore
      // .collection('activeCommunities')
      // .doc(communityData.roomName)
      // .onSnapshot((doc) => {
      //   setActiveCommunity(doc.data());
      // });
  },[])
  
  // if(activeCommunity){
  //   if(activeCommunity.duration - activeCommunity.transcurred <= 10){
  //     setAlertTimer(true)
  //   }
  // } 
  
  // const addHour = async () => {
  //   await AddHour(firestore, communityData.roomName)
  // }
  
  return (
    <Wrapper>
      {/* {
        (alertTimer) &&
        <AlertWarning extendTime={()=>{
          addHour(firestore, communityData.roomName)
          setAlertTimer(false)
        }} closeModal={()=>setAlertTimer(false)}/>
      } */}
      <DisplayContainer inDesktop={inDesktop}>
        {/* <SectionContainer>
          <SubtitleStyled as="h4">Personas <span>(4)</span></SubtitleStyled>
          <div>
            <UserConnect />
            <UserConnect />
            <UserConnect />
            <UserConnect />
          </div>
        </SectionContainer> */}
        <div>
          {
            code &&
              <SectionContainer width50ptg>
                <div>
                  <SubtitleStyled as="h4">Código de invitación</SubtitleStyled>
                  <InputContainer>
                    <InputStyled id="adminCopyCode" special invitationCode placeholder="Código de invitación" value={code? code: "Cargando..."} readOnly/>
                    <button onClick={()=>CopyCode("adminCopyCode")} ref={hoverRef}>
                      <CodeCopySVG/>
                      {isHovered && <Comment>Copiar código</Comment>}
                    </button>
                  </InputContainer>
                </div>
                <div className="invitationLinkContainer">
                  <SubtitleStyled as="h4">Link del espacio social</SubtitleStyled>
                  <InputContainer>
                    <InputStyled id="urlRoomCode" special invitationCode placeholder="Link de la sala" value={communityData.roomName? `https://fangelweb.com/room/${communityData.roomName}` : "Cargando..."} readOnly/>
                    <button onClick={()=>CopyCode("urlRoomCode")} ref={hoverRef}>
                      <CodeCopySVG/>
                      {isHovered && <Comment>Copiar link</Comment>}
                    </button>
                  </InputContainer>
                </div>
              </SectionContainer>
          }{
            communityData.privacy === "public" &&
/*               <SectionContainer>
                <SubtitleStyled as="h4">Configuraciones</SubtitleStyled>
                <TimerDescripcion>
                  <p>Tiempo de vida sobrante</p>
                  <span>{activeCommunity? `Apróx. ${activeCommunity.duration - activeCommunity.transcurred} min.`: "Cargando"}</span>
                </TimerDescripcion>
                {activeCommunity &&
                  ((activeCommunity.duration - activeCommunity.transcurred) >= 120?
                  <ButtonStyled secondary onClick={addHour} disabled>Extender 1 hora más</ButtonStyled> :
                  <ButtonStyled secondary onClick={addHour}>Extender 1 hora más</ButtonStyled>)
                }
              </SectionContainer> */
              <SectionContainer>
                <SubtitleStyled as="h4">Subespacios</SubtitleStyled>
                <SubSpaceMain communityData={communityData}/>
              </SectionContainer>
          }
        </div>
      </DisplayContainer>
    </Wrapper>
  );
}

export default MainSettingsAdmin;
