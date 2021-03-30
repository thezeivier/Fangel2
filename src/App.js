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

const AppContext =  React.createContext()
const {Provider, Consumer} = AppContext

function App() {
  const auth = useAuth()

  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const [authState, setAuthState] = useState(false)
  
  useEffect(()=>{
    if(localStorage.mode){
      setMode(localStorage.getItem("mode"))
    }else{
      localStorage.setItem("mode","light")
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthState(user)
      }
    });
  },[auth])


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
  
  const userValue = {
    authState: (authState? authState: false),
    changeTheme,
  }
  
  console.log("render")
  return (
    <ThemeProvider theme={theme(mode)}>
      <Provider value={userValue}>
        <GlobalStyles />
        <Container>
          <Switch>
            <Route exact path={"/"} component={authState ? Home : Landing}/>
            <Route exact path={"/create-community-1"} component={authState ? CreateCommunityOne : Landing}/> {/* temporal */}
            <Route exact path={"/create-community-2"} component={authState ? CreateCommunityTwo : Landing}/> {/* temporal */}
            <Route exact path={"/report"} component={authState ? ReportAProblem : Landing}/>
            <Route exact path={"/settings"} component={authState ? Settings : Landing}/> {/* temporal */}
            <Route exact path={"/support"}>
              <Support />
            </Route >
            <Route exact path={"/profile"} component={authState ? Profile : Landing}/> {/* temporal */}
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
              <Route exact path={"/register"} component={Register}/>
              <Route exact path={"/login"} component={Login}/>
              <Route exact path={"/recover-password"} component={RecoverPassword}/>
              <Route exact path={"/email-sended"} component={EmailSended}/>
              <Route exact path={"/quiz"} component={authState? Quiz: Landing}/>
            </ExternalLayout>
          </Switch>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export {App, Consumer as AppConsumer, AppContext}