import React, {useContext} from 'react';
import { AppContext } from '../../App'
import Logo from './Logo'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'
import { Header, Container, IconsContainer } from './styles/sRegHeader'

import { ReactComponent as ProfileSVG } from './icons/profile.svg'
import { ReactComponent as SettingsSVG } from './icons/settings.svg'

const RegHeader = () => {
  const userApp = useContext(AppContext)
  return (
    <Header>
      <Wrapper>
        <Container>
          <Logo />
          <IconsContainer>
            {userApp? userApp.authState.displayName:"Cargando..."}{/*Falta maquillar*/}
            <Link to={"/profile"}>
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
