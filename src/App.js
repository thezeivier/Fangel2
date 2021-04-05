import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {useAuth, useFirestore} from 'reactfire'
import { RecoverUser} from './algorithmsToApp/RecoverUser'
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

import VideoUser from './pages/inCommunity/VideoUser'
import SettingsAdmin from './pages/inCommunity/SettingsAdmin'
import VideoAdmin from './pages/inCommunity/VideoAdmin'

import Spinner from './components/spinner/MainSpinner'

const AppContext =  React.createContext()
const {Provider, Consumer} = AppContext

function App() {
  const auth = useAuth()
  const firestore = useFirestore()
  const [loading, setLoading] = useState(true)

  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const [authState, setAuthState] = useState(false)
  const [userFromDB, setUserFromDB] = useState(false)
  
  useEffect(()=>{
    if(localStorage.mode){
      setMode(localStorage.getItem("mode"))
    }else{
      localStorage.setItem("mode","light")
    }
    auth.onAuthStateChanged(async user => {
      setLoading(false)
      if (user) {
        setAuthState(user)
        setUserFromDB(await RecoverUser(firestore, user.uid))
      }
    });  
  },[auth, firestore])


  const changeTheme = () =>{
    if(localStorage.mode === "light"){
      localStorage.setItem("mode", "dark")
      setMode("dark")
    }else{
      localStorage.setItem("mode", "light")
      setMode("light")
    }
  }
  
  const userValue = {
    authState: (authState? authState: false),
    userFromDB: (userFromDB? userFromDB: false),
    changeTheme,
  }

  if(loading) return <Spinner />

  return (
    <ThemeProvider theme={theme(mode)}>
      <Provider value={userValue}>
        <GlobalStyles />
        <Container>
          <Switch>
            <Route exact path={"/"} component={authState ? Home : Landing}/>
            <Route exact path={"/create-community-1"} component={authState ? CreateCommunityOne : Landing}/>
            <Route exact path={"/create-community-2"} component={authState ? CreateCommunityTwo : Landing}/>
            <Route exact path={"/report"} component={authState ? ReportAProblem : Landing}/>
            <Route exact path={"/settings"} component={authState ? Settings : Landing}/>
            <Route exact path={"/support"}>
              <Support />
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
            
            <Route exact path={"/video-user"}>  {/* temporal */}
              <VideoUser />
            </Route >
            <Route exact path={"/settings-admin"}>  {/* temporal */}
              <SettingsAdmin />
            </Route >
            <Route exact path={"/video-admin"}>  {/* temporal */}
              <VideoAdmin />
            </Route >
            <Route exact path={"/u/:id"} component={authState ? Profile : Landing}/> {/* temporal */}

            {/* <Route exact path="/404" render={() =><p>Error 404</p>} />  */}

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