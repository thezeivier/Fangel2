import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {useAuth} from 'reactfire'

import GlobalStyles from './themes/GlobalStyles'
import theme from './themes/Theme'

import Container from './styles/sApp'

import ExternalLayout from './components/general/ExternalLayout'

import Landing from './pages/Landing'
import Register from './pages/signInAndUp/Register'
import Login from './pages/signInAndUp/Login'
import RecoverPassword from './pages/signInAndUp/RecoverPassword'
import EmailSended from './pages/signInAndUp/EmailSended'
import Quiz from './pages/Quiz'

import Home from './pages/Home'
import CreateCommunityOne from './pages/CreateCommunityOne'
import CreateCommunityTwo from './pages/CreateCommunityTwo'
import ReportAProblem from './pages/ReportAProblem'
import Settings from './pages/Settings'
import Support from './pages/Support'
import Profile from './pages/Profile'
import FAQs from './pages/FAQs'
import PoliticsNPrivacy from './pages/PoliticsNPrivacy'
import TermsNConditions from './pages/TermsNConditions'


function App() {
  const auth = useAuth()

  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const [session, setSession] = useState()
  
  useEffect(()=>{
    if(localStorage.mode){
      setMode(localStorage.getItem("mode"))
    }else{
      localStorage.setItem("mode","light")
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user)
      }
    });
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

  // auth.signOut().then(
  //   console.log("SignOut exitoso")
  // )
  
  return (
    <ThemeProvider theme={theme(mode)}>
      <GlobalStyles />
      <Container>
        <Switch>
          <Route exact path={"/"}>
            <Landing changeTheme={changeTheme}/>
          </Route>
          <Route exact path={"/home"}> {/* temporal */}
            <Home />
          </Route >
          <Route exact path={"/create-community-1"}> {/* temporal */}
            <CreateCommunityOne />
          </Route >
          <Route exact path={"/create-community-2"}> {/* temporal */}
            <CreateCommunityTwo />
          </Route >
          <Route exact path={"/report"}>
            <ReportAProblem />
          </Route >
          <Route exact path={"/settings"}> {/* temporal */}
            <Settings />
          </Route >
          <Route exact path={"/support"}>
            <Support />
          </Route >
          <Route exact path={"/profile"}> {/* temporal */}
            <Profile />
          </Route >
          <Route exact path={"/faqs"}>
            <FAQs />
          </Route >
          <Route exact path={"/politics-privacy"}>
            <PoliticsNPrivacy />
          </Route >
          <Route exact path={"/terms-conditions"}>
            <TermsNConditions />
          </Route >
          <ExternalLayout changeTheme={changeTheme}>
            <Route exact path={"/register"}>
              <Register />
            </Route>
            <Route exact path={"/login"}>
              <Login />
            </Route>
            <Route exact path={"/recover-password"}>
              <RecoverPassword/>
            </Route>
            <Route exact path={"/email-sended"}>
              <EmailSended/>
            </Route>
            <Route exact path={"/quiz"}>
              <Quiz />
            </Route>
          </ExternalLayout>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;