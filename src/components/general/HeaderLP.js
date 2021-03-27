import React from 'react';
import Logo from './Logo'
import Wrapper from './Wrapper'
import DarkMode from './DarkMode'
import { Header, Container } from './styles/sHeaderLP'

const HeaderLP = ({changeTheme}) => {
  return (
    <Header>
      <Wrapper changeTheme={changeTheme}>
        <Container>
          <Logo />
          <DarkMode />
        </Container>
      </Wrapper>
    </Header>
  );
}

export default HeaderLP;
