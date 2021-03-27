import React from 'react';
import {Link} from 'react-router-dom'
import { LogoBox } from './styles/sLogo'

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <img src={"https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLogo%2FlogoFangel.svg?alt=media&token=6900df39-0d7a-4e2a-9eac-7bd2767ddab7"} alt=""/>
        <h3>fangel</h3>
      </LogoBox>
    </Link>
  );
}

export default Logo;
