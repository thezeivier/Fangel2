import React, {useState, useEffect} from 'react'
import GlobalStyles from './themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './themes/Theme'
import Landing from './pages/Landing'
import Container from './styles/sApp'

function App() {

  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  
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

  console.log(mode)
  return (
    <ThemeProvider theme={theme(mode)}>
      <>
        <GlobalStyles />
        <Container>
          <Landing changeTheme={changeTheme}/>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;