import React, {useContext} from 'react';
import { AppContext } from '../../App'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Header, Container, IconsContainer } from './styles/sVerticalHeader'
import { ReactComponent as ProfileSVG } from './icons/profile.svg'
import { ReactComponent as ChatSVG } from './icons/chat.svg'
import { ReactComponent as HomeSVG } from './icons/home.svg'
import { ReactComponent as MenuSVG } from './icons/menu.svg'
import { ReactComponent as PersonFangelSVG } from './icons/personFangel.svg'

const VerticalHeader = () => {
  const contextFromApp = useContext(AppContext)
  const { userFromDB, profileThumb, authState } = contextFromApp 

  return (
    <Header>
      <Container>
        <Link to={"/"}>
          <PersonFangelSVG className="personFangelIcon" />
        </Link>
        <IconsContainer>
          <Link to={`/u/${contextFromApp.authState && userFromDB.username}`}>
            {
              profileThumb?
              <img src={profileThumb} className="profileImg" alt="Imagen de perfil" style={{borderRadius: "100%"}} />:
              (authState.photoURL ?  <img src={authState.photoURL} className="profileImg" alt="Imagen de perfil" style={{borderRadius: "100%"}} /> : <ProfileSVG className="icon" />)
            }
          </Link>
          <Link to={"/more-options"}>
            <MenuSVG className="icon" />
          </Link>
          <Link to={"/inbox"}>
            <ChatSVG className="icon" />
          </Link>
          <Link to={"/"}>
            <HomeSVG className="icon" />
          </Link>
        </IconsContainer>
      </Container>
    </Header>
  );
}

export default VerticalHeader;
