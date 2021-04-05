import React, {useContext} from 'react';
import { AppContext } from '../../App'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import { Header, Container, IconsContainer } from './styles/sRegHeader'

import { ReactComponent as ProfileSVG } from './icons/profile.svg'
import { ReactComponent as SettingsSVG } from './icons/settings.svg'

const RegHeader = () => {
  const contextFromApp = useContext(AppContext)
  const { userFromDB } = contextFromApp 
  
  return (
    <Header className="regHeader">
      <Wrapper>
        <Container>
          <Logo />
          <IconsContainer>
            {contextFromApp? (contextFromApp.authState? contextFromApp.authState.displayName:"Cargando..."):"Cargando..."}{/*Falta maquillar*/}
            <Link to={`/u/${userFromDB.username}`}>
              <ProfileSVG  className="profile" />
            </Link>
            <Link to={"/settings"}>
              <SettingsSVG  className="settings" />
            </Link>
          </IconsContainer>
        </Container>
      </Wrapper>
    </Header>
  );
}

export default RegHeader;
