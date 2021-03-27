import React from 'react';
import Logo from './Logo'
import Wrapper from './Wrapper'
import DarkMode from './DarkMode'
import { Header } from './styles/sHeaderLP'

const HeaderLP = () => {
  return (
    <Header>
      <Wrapper padding='20px' flex>
        <Logo />
        <DarkMode />
      </Wrapper>
    </Header>
  );
}

export default HeaderLP;
