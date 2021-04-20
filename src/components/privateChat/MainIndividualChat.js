import React from 'react';
import Wrapper from '../general/Wrapper'
import { Link } from 'react-router-dom'
/* import OtherComments from './../community/OtherComments' */
/* import SelfComments from './../community/SelfComments' */
/* import InputComments from './../community/InputComments' */
import { ChatContainer, HeaderChat, MainChat, FooterChat,
         TitleStyled, UserChating, TitleContainerStyled, Section } from './styles/sMainIndividualChat'

import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'

const MainIndividualChat = ({ inGridDesktop }) => {
  return (
    <Section>
      <Wrapper height="100%">
        <ChatContainer inGridDesktop={inGridDesktop}>
          <HeaderChat>
            <TitleContainerStyled>
              <ArrowBackSVG />
              <UserChating as={Link}>
                <ProfileSVG />
                <TitleStyled>Useryang</TitleStyled>
              </UserChating>
            </TitleContainerStyled>
          </HeaderChat>
          <MainChat>
            {/* <OtherComments /> */}
            {/* <SelfComments /> */}
            main
          </MainChat>
          <FooterChat>
            {/* <InputComments /> */}
            Input
          </FooterChat>
        </ChatContainer>
      </Wrapper>
    </Section>
  );
}

export default MainIndividualChat;
