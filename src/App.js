import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import GlobalStyles from './themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './themes/Theme'



import Container from './styles/sApp'
/* import './App.css'; */

import ExternalLayout from './components/general/ExternalLayout'

import Landing from './pages/Landing'
import Register from './pages/signInAndUp/Register'
import Login from './pages/signInAndUp/Login'
import RecoverPassword from './pages/signInAndUp/RecoverPassword'
import Quiz from './pages/Quiz'

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
  
  return (
    <ThemeProvider theme={theme(mode)}>
      <GlobalStyles />
      <Container>
        <Switch>
          <Route exact path={"/"}>
            <Landing changeTheme={changeTheme}/>
          </Route>
          <ExternalLayout changeTheme={changeTheme}>
            <Route exact path={"/register"}>
              <Register/>
            </Route>
            <Route exact path={"/login"}>
              <Login/>
            </Route>
            <Route exact path={"/recover-password"}>
              <RecoverPassword/>
            </Route>
            <Route exact path={"/quiz"}>
              <Quiz/>
            </Route>
          </ExternalLayout>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;