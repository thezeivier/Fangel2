import React from 'react';
import CLogo from './../general/cLogo'
import { CoverPage } from './styles/sLanding'
import { Navbar } from './styles/sNavbar'

const cLadingPage = () => {
  return (
    <CoverPage>
      <Navbar>
        <CLogo />
      </Navbar>
    </CoverPage>
  );
}

export default cLadingPage;
