import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../../App'
import {useFirestore} from 'reactfire'
import useHover from './../../hook/use-hover'
import Wrapper from './../general/Wrapper'
import UserConnect from './UserConnect'
import { SubtitleStyled, InputStyled, InputContainer, SectionContainer,
         TimerDescripcion, ButtonStyled, DisplayContainer, Comment } from './styles/sMainSettings'
import { ReactComponent as CodeCopySVG } from './icons/codeCopy.svg'
//Import copy Code.
import {CopyCode} from '../createCommunity/algorithms/CopyCode'
import {AddHour} from './algorithms/AddHour'

const MainSettingsAdmin = ({ inDesktop }) => {
  const [hoverRef, isHovered] = useHover();
  const firestore = useFirestore()
  const [code, setCode] = useState(false);
  const [activeCommunity, setActiveCommunity] = useState()
  const contextFromApp = useContext(AppContext)
  useEffect(()=> {
    contextFromApp.userFromDB.userCodesRef
      .get()
      .then(result =>{
        if(result.data().users.length < 20){
          setCode(result.data().code)
        }  
      })
      firestore
      .collection('activeCommunities')
      .doc(contextFromApp.userFromDB.uid)
      .onSnapshot((doc) => {
        setActiveCommunity(doc.data());
    });
  },[])

  const addHour = async () => {
    await AddHour(firestore, contextFromApp.userFromDB.uid)
  }
  
  return (
    <Wrapper>
      <DisplayContainer inDesktop={inDesktop}>
        <SectionContainer>
          <SubtitleStyled as="h4">Personas <span>(4)</span></SubtitleStyled>
          <div>
            <UserConnect />
            <UserConnect />
            <UserConnect />
            <UserConnect />
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
              <span>{activeCommunity? `Apróx.  ${activeCommunity.duration - activeCommunity.transcurred} min.`: "Cargando"}</span>
            </TimerDescripcion>
            <ButtonStyled secondary onClick={addHour}>Extender 1 hora más</ButtonStyled>
          </SectionContainer>
        </div>
      </DisplayContainer>
    </Wrapper>
  );
}

export default MainSettingsAdmin;
