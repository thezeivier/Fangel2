import React from 'react';
import Logo from './Logo'
import Wrapper from './Wrapper'
import DarkMode from './DarkMode'
import { Link } from 'react-router-dom'
import { Header, Container, IconsContainer } from './styles/sRegHeader'

import { ReactComponent as ProfileSVG } from './icons/profile.svg'
import { ReactComponent as SettingsSVG } from './icons/settings.svg'

const RegHeader = ({ username }) => {
  return (
    <Header>
      <Wrapper>
        <Container>
          <Logo />
          <IconsContainer>
            {username}
            <Link to={"/profile"}>
              <ProfileSVG className="profile" />
            </Link>
            <Link >
              <SettingsSVG className="settings" />
            </Link>
          </IconsContainer>
        </Container>
      </Wrapper>
    </Header>
  );
}

export default RegHeader;
