import React, {useState, useContext} from 'react';
import {AppContext} from '../../App'
import { Container } from './styles/sDarkMode'

const DarkMode = () => {
  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const contextFromApp = useContext(AppContext)

  const clickChangeTheme = () => {
    contextFromApp.changeTheme()
    setMode(localStorage.getItem("mode"))
  }

  return (    
    <Container>
      <span>Modo {mode === "dark"? "oscuro": "claro"}</span>
      <input className="checkbox" type="checkbox" id="checkbox" onClick={clickChangeTheme}/>
      <label className="switch" htmlFor="checkbox"></label>
    </Container>
  );
}

export default DarkMode;
