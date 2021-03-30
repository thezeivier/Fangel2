import React from 'react';
import {Link} from 'react-router-dom'
import { LogoBox } from './styles/sLogo'

import { ReactComponent as IconFangelSVG } from './icons/iconFangel.svg'

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <IconFangelSVG />
        <h3>fangel</h3>
      </LogoBox>
    </Link>
  );
}

export default Logo;
