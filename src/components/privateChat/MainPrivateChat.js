import React from 'react';
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList } from './styles/sMainPrivateChat'

const MainPFVideoUser = () => {
  return (
    <main>
      <Wrapper>
        <GridOnlyDesktop>
          <ChatsContainer>
            <TitleStyled>Conversaciones</TitleStyled>
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
