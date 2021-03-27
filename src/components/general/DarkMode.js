import React from 'react';
import { Container } from './styles/sDarkMode'

const DarkMode = () => {
  return (    
    <Container>
      <span>Modo oscuro</span>
      <input className="checkbox" type="checkbox" id="checkbox" />
      <label className="switch" for="checkbox"></label>
    </Container>
  );
}

export default DarkMode;
