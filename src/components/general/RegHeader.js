import React, {useContext, useEffect} from 'react';
import { AppContext } from '../../App'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import { Header, Container, IconsContainer } from './styles/sRegHeader'

import { ReactComponent as ProfileSVG } from './icons/profile.svg'
import { ReactComponent as ChatSVG } from './icons/chat.svg'
import { ReactComponent as HomeSVG } from './icons/home.svg'
import { ReactComponent as MenuSVG } from './icons/menu.svg'

import MinSpinner from '../spinner/MinSpinner';

const RegHeader = ({isBusinessAccount}) => {
  const contextFromApp = useContext(AppContext)
  const { userFromDB, profileThumb, authState } = contextFromApp 
  // console.log(contextFromApp)

  // useEffect(() => {
    
  // }, [userFromDB])

  if(authState && !userFromDB.username) {
    return <MinSpinner/>
  }
  return (
    <Header className="regHeader">
      <Wrapper>
        <Container>
          <Logo />
          <IconsContainer>
            <div className="nameUserProfile">
              {authState? authState.displayName: userFromDB.name.firstName}{/*Falta maquillar*/}
            </div>
            <Link to={`/u/${authState && userFromDB && userFromDB.username}`}>
              {
                profileThumb?
                <img src={profileThumb} className="profileImg" alt="Imagen de perfil" style={{borderRadius: "100%"}} />:
                (authState.photoURL ?  <img src={authState.photoURL} className="profileImg" alt="Imagen de perfil" style={{borderRadius: "100%"}} /> : <ProfileSVG className="icon" />)
              }
            </Link>
            <Link to={"/"}>
              <HomeSVG className="icon" />
            </Link>
            <Link to={"/inbox"}>
              <ChatSVG className="icon" />
            </Link>
            <Link to={"/more-options"}>
              <MenuSVG className="icon" />
            </Link>
          </IconsContainer>
        </Container>
      </Wrapper>
    </Header>
  );
}

export default RegHeader;
