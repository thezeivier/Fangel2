import React from 'react';
import { ChatContainer, ProfileContainer, UserDescription, TextContainer,
         TextStyled, Chat } from './styles/sChatFriends'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { GetDataFromUsers } from './algorithms/GetDataFromUsers'

const ChatFriends = ({idTransmitter, idReceiver, uidCurrentUser}) => {
  const {data, status, error} = GetDataFromUsers('users', idTransmitter, idReceiver, uidCurrentUser)
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  const {name, online} = data[0]
  const isOnline = online ? 'Online' : 'Offline'
  return (
    <Chat>
      <ChatContainer>
        <ProfileContainer>
          <ProfileSVG />
        </ProfileContainer>
        <UserDescription>
          <h5>{`${name.firstName}${name.lastName}`}</h5>
          <TextContainer>
            <TextStyled>{isOnline}</TextStyled>
            {/* <span>1h</span> */} {/* En espera a definir el formato */}
          </TextContainer>
        </UserDescription>
      </ChatContainer>
    </Chat>
  );
}

export default ChatFriends;
