import React, { useContext, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import MainIndividualChat from './MainIndividualChat'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList,
         TitleContainer } from './styles/sMainPrivateChat'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'
import {GetDataFromMessagesInbox} from './algorithms/GetDataFromMessagesInbox'

const MainPFVideoUser = ({getInboxDoc, getRouteInbox}) => {
  const {data, status, error} = getRouteInbox && GetDataFromMessagesInbox(getRouteInbox, 'inbox', 'messagesInbox')
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>
  console.log(data)
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
                <Link key={usr.idInbox} to={`/inbox/${usr.idInbox}`}>
                  <ChatFriends key={usr.idInbox} {...usr}/>
                </Link>
              )}
            </ChatList>
          </ChatsContainer>
          <>
            <MainIndividualChat data={data} inGridDesktop="block" />
          </>
        </GridOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainPFVideoUser;
