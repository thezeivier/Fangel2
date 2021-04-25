import React, { useRef, useState, useEffect } from 'react';
import Wrapper from '../general/Wrapper'
import { Link, useRouteMatch } from 'react-router-dom'
import InputComments from './../community/InputComments'
import { ChatContainer, HeaderChat, MainChat, FooterChat,
         TitleStyled, UserChating, TitleContainerStyled, Section } from './styles/sMainIndividualChat'

import firebase from 'firebase/app'
import {useStorage} from 'reactfire'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'
import { GetDataFromUsers } from './algorithms/GetDataFromUsers'
import { ChatMessage } from '../community/ChatMessage'
import CommentsBox from '../community/CommentsBox'

const MainIndividualChat = ({ inGridDesktop, message, idTransmitter, idReceiver, idInbox, userFromDB, authState}) => {
  const storage = useStorage()
  const [profileThumb, setProfileThumb] = useState()
  const lastMsgRef = useRef(null)
  const {data, status, error} = GetDataFromUsers('users', idTransmitter, idReceiver, userFromDB.uid)
  const messageRef = firebase.firestore().collection('inbox').doc(idInbox).collection('messagesInbox')

  useEffect(()=>{
    return ()=>{
      lastMsgRef.current = false;
    }
  },[])
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>
  
  const transmitterData = data[0]
  if(transmitterData.bucket && transmitterData.route){
    const profileImageReference = storage.refFromURL(`gs://${transmitterData.bucket}/${transmitterData.route}`)
    profileImageReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
      setProfileThumb(url)
    })
  }
  return (
    <Section>
      <Wrapper height="100%">
        <ChatContainer inGridDesktop={inGridDesktop}>
          <HeaderChat>
            <TitleContainerStyled>
              <ArrowBackSVG />
              <UserChating as={Link} to={`/u/${transmitterData.username}`}>
                {profileThumb ? <img src={profileThumb} alt="Imagen de perfil" /> : <ProfileSVG /> }
                <TitleStyled>{transmitterData.name ? `${transmitterData.name.firstName} ${transmitterData.name.lastName}` : transmitterData.username}</TitleStyled>
              </UserChating>
            </TitleContainerStyled>
          </HeaderChat>
          <MainChat>
            <CommentsBox data={message} userFromDB={userFromDB} lastMsgRef={lastMsgRef} heightBox="305px"/>
          </MainChat>
          <FooterChat>
            <InputComments lastMsgRef={lastMsgRef} messageRef={messageRef} userFromDB={userFromDB} data={message} name={authState.displayName}/>
          </FooterChat>
        </ChatContainer>
      </Wrapper>
    </Section>
  );
}

export default MainIndividualChat;
