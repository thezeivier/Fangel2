import React, { useContext } from 'react';
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList } from './styles/sMainPrivateChat'

import { GetDataFromInbox } from './algorithms/GetDataFromInbox'
import { AppContext } from '../../App'

const MainPFVideoUser = () => {
  const { authState, userFromDB} = useContext(AppContext)
  const getInbox = GetDataFromInbox('inbox', authState.uid)

  if(getInbox.status === "loading") return <p>Pending...</p>
  if(getInbox.error) return <p>Error</p>

  // const {data, status, error} = GetDataFromUsers('users', getInbox)
  

  // if(status === "loading") return <p>Pending...</p>
  // if(error) return <p>Error</p>

  // console.log(data)
  console.log(getInbox.data)
  return (
    <main>
      <Wrapper>
        <GridOnlyDesktop>
          <ChatsContainer>
            <TitleStyled>Conversaciones</TitleStyled>
            <ChatList>
              {getInbox.data.map(usr => <ChatFriends key={usr.idInbox} {...usr}/>)}
            </ChatList>
          </ChatsContainer>
          <div></div>
        </GridOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainPFVideoUser;
