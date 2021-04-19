import React from 'react';
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList,
         TitleContainer } from './styles/sMainPrivateChat'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'

const MainPFVideoUser = () => {
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
              <ChatFriends />
              <ChatFriends />
            </ChatList>
          </ChatsContainer>
          <div></div>
        </GridOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainPFVideoUser;
