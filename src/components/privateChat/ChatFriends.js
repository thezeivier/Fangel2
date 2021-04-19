import React from 'react';
import { ChatContainer, ProfileContainer, UserDescription, TextContainer,
         TextStyled, Chat } from './styles/sChatFriends'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { GetDataFromUsers } from './algorithms/GetDataFromUsers'

const ChatFriends = ({idTransmitter}) => {
  const {data, status, error} = GetDataFromUsers('users', idTransmitter)
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  const {name} = data[0]
  return (
    <Chat>
      <ChatContainer>
        <ProfileContainer>
          <ProfileSVG />
        </ProfileContainer>
        <UserDescription>
          <h5>{`${name.firstName}${name.lastName}`}</h5>
          <TextContainer>
            <TextStyled>Last Message</TextStyled>
            <span>1h</span>
          </TextContainer>
        </UserDescription>
      </ChatContainer>
    </Chat>
  );
}

export default ChatFriends;
