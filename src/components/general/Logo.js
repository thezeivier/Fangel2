import React from 'react';
import {Link} from 'react-router-dom'
import { LogoBox } from './styles/sLogo'

import { ReactComponent as IconFangelSVG } from './icons/iconFangel.svg'
import { ReactComponent as FangelLettersSVG } from './icons/fangelLetters.svg'

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <IconFangelSVG className="iconFangel" />
        <FangelLettersSVG className="fangelLetters" />
      </LogoBox>
    </Link>
  );
}

export default Logo;
