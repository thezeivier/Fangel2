import React, { useState, useEffect } from 'react';
import { ChatContainer, ProfileContainer, UserDescription, TextContainer,
         TextStyled, Chat } from './styles/sChatFriends'
import { ReactComponent as ProfileSVG } from './../general/icons/profile.svg'
import { GetDataFromUsers } from './algorithms/GetDataFromUsers'
import {useStorage} from 'reactfire'

const ChatFriends = React.memo(({idTransmitter, idReceiver, uidCurrentUser}) => {
  const storage = useStorage()
  const [profileThumb, setProfileThumb] = useState()
  const [userDataRecovered, setUserDataRecovered] = useState(null)
  const {data, status, error} = GetDataFromUsers('users', idTransmitter, idReceiver, uidCurrentUser)
  useEffect(()=>{
    if(data && data.length !== 0){
      setUserDataRecovered(...data)
      if(!data[0].photoUrl){
        if(data[0].bucket && data[0].route){
          const profileImageReference = storage.refFromURL(`gs://${data[0].bucket}/${data[0].route}`)
          profileImageReference.getDownloadURL().then(url => {//Recover thumbnail from storage.
            setProfileThumb(url)
          })
        }
      }else{
        setProfileThumb(data[0].photoUrl)
      }
    }
  },[data])
  if(status === "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>
  const isOnline = (userDataRecovered && userDataRecovered.online) ? 'Online' : 'Offline'
  
  return (
    <Chat>
      <ChatContainer>
        <ProfileContainer>
          {profileThumb ? <img src={profileThumb} alt="Imagen de perfil" /> : <ProfileSVG /> }
        </ProfileContainer>
        <UserDescription>
          {userDataRecovered && 
            (userDataRecovered.name ? <h5>{`${userDataRecovered.name.firstName} ${userDataRecovered.name.lastName}`}</h5> : <h5>{userDataRecovered.username}</h5>)
          }
          <TextContainer>
            {userDataRecovered && 
              <TextStyled isOnline={userDataRecovered.online}>{isOnline}</TextStyled>
              // {/* <span>1h</span> */} {/* En espera a definir el formato */}
            }
          </TextContainer>
        </UserDescription>
      </ChatContainer>
    </Chat>
  );
})

export default ChatFriends;
