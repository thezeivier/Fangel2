import React from 'react';
import {Link} from 'react-router-dom'
import { LogoBox } from './styles/sLogo'

import { ReactComponent as IconFangelSVG } from './icons/fangelLogoRemaster.svg'

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <IconFangelSVG />
      </LogoBox>
    </Link>
  );
}

export default Logo;
