import React from 'react';
import { ChatContainer, ProfileContainer, UserDescription, TextContainer,
         TextStyled, Chat } from './styles/sChatFriends'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'

const ChatFriends = () => {
  return (
    <Chat>
      <ChatContainer>
        <ProfileContainer>
          <ProfileSVG />
        </ProfileContainer>
        <UserDescription>
          <h5>Useryang</h5>
          <TextContainer>
            <TextStyled>Lorem ipsum dolor sit amet consectetur</TextStyled>
            <span>1h</span>
          </TextContainer>
        </UserDescription>
      </ChatContainer>
    </Chat>
  );
}

export default ChatFriends;
