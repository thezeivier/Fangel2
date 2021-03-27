import React, {useState, useEffect} from 'react';
import { Container } from './styles/sDarkMode'

const DarkMode = ({changeTheme}) => {
  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")

  useEffect(()=>{
      setMode(localStorage.getItem("mode"))
  },[])

  const clickChangeTheme = () => {
    changeTheme()
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
