import React from 'react';
import { Container } from './styles/sDarkMode'

const DarkMode = ({changeTheme}) => {
  return (    
    <Container>
      <span>Modo oscuro</span>
      <input className="checkbox" type="checkbox" id="checkbox" onClick={changeTheme}/>
      <label className="switch" htmlFor="checkbox"></label>
    </Container>
  );
}

export default DarkMode;
