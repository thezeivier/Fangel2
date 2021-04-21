import React, { useContext, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import MainIndividualChat from './MainIndividualChat'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList,
         TitleContainer } from './styles/sMainPrivateChat'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'
import {GetDataFromMessagesInbox} from './algorithms/GetDataFromMessagesInbox'

const MainPFVideoUser = ({getInboxDoc, getRouteInbox, userFromDB, authState}) => {
  const {data, status, error} = getRouteInbox && GetDataFromMessagesInbox(getRouteInbox, 'inbox', 'messagesInbox')
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  return (
    <main>
      <Wrapper>
        <GridOnlyDesktop>
          <ChatsContainer>
            <TitleContainer>
              <ArrowBackSVG />
              <TitleStyled>Conversaciones</TitleStyled>
            </TitleContainer>
            <ChatList>
              {getInboxDoc.data.map(usr => 
                <Link key={usr.idInbox} to={`/inbox/t/${usr.idInbox}`}>
                  <ChatFriends key={usr.idInbox} {...usr} uidCurrentUser={userFromDB.uid}/>
                </Link>
              )}
            </ChatList>
          </ChatsContainer>
          <>
            {/* {!getRouteInbox && <p>Tus Mensajes</p>}*/} {/* Vista inicial del inbox */}  
            {getInboxDoc.data.map(usr => (
              getRouteInbox == usr.idInbox &&
              <MainIndividualChat key={usr.idInbox} message={data} {...usr} userFromDB={userFromDB} authState={authState} inGridDesktop="block" />
            ))}
          </>
        </GridOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainPFVideoUser;
