import React, {useContext} from 'react';
import { AppContext } from '../../App'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import { Header, Container, IconsContainer } from './styles/sRegHeader'

import { ReactComponent as ProfileSVG } from './icons/profile.svg'
import { ReactComponent as SettingsSVG } from './icons/settings.svg'
import { ReactComponent as ChatSVG } from './icons/chat.svg'
import { ReactComponent as HomeSVG } from './icons/home.svg'

const RegHeader = () => {
  const contextFromApp = useContext(AppContext)
  const { userFromDB, profileThumb } = contextFromApp 
  return (
    <Header className="regHeader">
      <Wrapper>
        <Container>
          <Logo />
          <IconsContainer>
<<<<<<< HEAD
            <div className="nameUserProfile">
              {contextFromApp? (contextFromApp.authState? contextFromApp.authState.displayName:"Cargando..."):"Cargando..."}{/*Falta maquillar*/}
            </div>
=======
              {contextFromApp? (contextFromApp.authState? contextFromApp.authState.displayName:"Cargando..."):"Cargando..."}{/*Falta maquillar*/}
>>>>>>> 4ef5debaba3cf25f6d31d4a5060e9554883a5f11
            <Link to={`/u/${userFromDB.username}`}>
              {
                profileThumb?
                <img src={profileThumb} className="profileImg" alt="Imagen de perfil" style={{borderRadius: "100%"}} />:
                <ProfileSVG  className="profile" />
              }
            </Link>
            <Link to={"/"}>
              <HomeSVG  className="iconsRegHeader homeIconRegHeader" />
            </Link>
{/*             <Link to={"/inbox"}>
              <ChatSVG  className="iconsRegHeader" />
            </Link> */}
            <Link to={"/settings"}>
              <SettingsSVG  className="iconsRegHeader" />
            </Link>
          </IconsContainer>
        </Container>
      </Wrapper>
    </Header>
  );
}

export default RegHeader;
