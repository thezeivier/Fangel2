import React, { useState } from 'react';
import { ChatContainer, ProfileContainer, UserDescription, TextContainer,
         TextStyled, Chat } from './styles/sChatFriends'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { GetDataFromUsers } from './algorithms/GetDataFromUsers'
import {useStorage} from 'reactfire'

const ChatFriends = ({idTransmitter, idReceiver, uidCurrentUser}) => {
  const storage = useStorage()
  const [profileThumb, setProfileThumb] = useState()
  const {data, status, error} = GetDataFromUsers('users', idTransmitter, idReceiver, uidCurrentUser)
  
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  const {name, online, bucket, route} = data[0]
  const isOnline = online ? 'Online' : 'Offline'
  if(bucket && route){
    const profileImageReference = storage.refFromURL(`gs://${bucket}/${route}`)
    profileImageReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
      setProfileThumb(url)
    })
  }
  return (
    <Chat>
      <ChatContainer>
        <ProfileContainer>
          {profileThumb ? <img src={profileThumb} alt="Imagen de perfil" /> : <ProfileSVG /> }
        </ProfileContainer>
        <UserDescription>
          <h5>{`${name.firstName} ${name.lastName}`}</h5>
          <TextContainer>
            <TextStyled isOnline={online}>{isOnline}</TextStyled>
            {/* <span>1h</span> */} {/* En espera a definir el formato */}
          </TextContainer>
        </UserDescription>
      </ChatContainer>
    </Chat>
  );
}

export default ChatFriends;
