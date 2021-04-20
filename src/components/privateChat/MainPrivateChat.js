import React, { useContext } from 'react';
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import MainIndividualChat from './MainIndividualChat'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList,
         TitleContainer } from './styles/sMainPrivateChat'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'

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
            <TitleContainer>
              <ArrowBackSVG />
              <TitleStyled>Conversaciones</TitleStyled>
            </TitleContainer>
            <ChatList>
              {getInbox.data.map(usr => <ChatFriends key={usr.idInbox} {...usr}/>)}
            </ChatList>
          </ChatsContainer>
          <>
            <MainIndividualChat inGridDesktop="block" />
          </>
        </GridOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainPFVideoUser;
