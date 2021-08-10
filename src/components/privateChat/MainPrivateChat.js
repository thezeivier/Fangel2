import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import ChatFriends from './ChatFriends'
import { TitleStyled, GridOnlyDesktop, ChatsContainer, ChatList,
         TitleContainer } from './styles/sMainPrivateChat'
import { ReactComponent as ArrowBackSVG } from './../general/icons/arrowBack.svg'
import { GetDataFromInbox } from '../../components/privateChat/algorithms/GetDataFromInbox'

const MainPFVideoUser = ({children, authState, userFromDB}) => {
  const history = useHistory()
  const {data, status, error} = authState && GetDataFromInbox('inbox', authState.uid)
  
  if(status == "loading") return <p>Pending...</p>
  if(error) return <p>Error</p>

  const returnToBack = () =>{
    window.history.back()
  }
  return (
    <main>
      <Wrapper>
        <GridOnlyDesktop>
          <ChatsContainer>
            <TitleContainer>
              <ArrowBackSVG onClick={returnToBack} />
              <TitleStyled>Conversaciones</TitleStyled>
            </TitleContainer>
            <ChatList>
              {data ? data.map(usr => 
                <Link key={usr.idInbox} to={`/inbox/t/${usr.idInbox}`}>
                  <ChatFriends key={usr.idInbox} {...usr} uidCurrentUser={userFromDB.uid}/>
                </Link>
              ):
              history.push("/login")}
            </ChatList>
          </ChatsContainer>
          <>
            {children}
          </>
        </GridOnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainPFVideoUser;
