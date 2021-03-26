import React, {useState, useEffect} from 'react'
import GlobalStyles from './themes/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import theme from './themes/Theme'
import './App.css';

const Prueba = styled.h1`
  background: ${props => props.theme.background};
  color: ${props => props.theme.textColor}
`
function App() {

  const [mode, setMode] = useState("light")
  useEffect(()=>{
    if(localStorage.mode){
      setMode(localStorage.getItem("mode"))
    }else{
      localStorage.setItem("mode","light")
    }
  },[])
  const changeTheme = () =>{
    if(localStorage.mode === "light"){
      localStorage.setItem("mode", "dark")
      setMode("dark")
    }else{
      localStorage.setItem("mode", "light")
      setMode("light")
    }
  }

  return (
    <ThemeProvider theme={theme(mode)}>
      <>
        <GlobalStyles/>
        <Prueba>Hola</Prueba>
        <button onClick={changeTheme}>Tema</button>
      </>
    </ThemeProvider>
  );
}

export default App;