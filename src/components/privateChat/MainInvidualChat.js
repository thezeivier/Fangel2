import React from 'react';
import styled from 'styled-components'
import Wrapper from './../general/Wrapper'
/* import InputComments from './../community/InputComments' */
import { ChatContainer, HeaderChat, MainChat, FooterChat } from './styles/sMainIndividualChat'

const MainInvidualChat = () => {
  return (
    <main>
      <Wrapper height="100%">
        <ChatContainer>
          <HeaderChat>
            Useryang
          </HeaderChat>
          <MainChat>
            Main
          </MainChat>
          <FooterChat>
            {/* <InputComments /> */}
            Input
          </FooterChat>
        </ChatContainer>
      </Wrapper>
    </main>
  );
}

export default MainInvidualChat;
