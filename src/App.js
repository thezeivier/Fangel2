import React, {useState, useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom';
import {Switch, Route, Redirect, useHistory, useLocation} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {useAuth, useFirestore, useStorage, useDatabase, useFirebaseApp} from 'reactfire'
import { RecoverUser} from './algorithmsToApp/RecoverUser'
import GlobalStyles from './themes/GlobalStyles'
import theme from './themes/Theme'
//Import Page components
import Container from './styles/sApp'
import ExternalLayoutRoute from './components/general/ExternalLayoutRoute'
import Landing from './pages/Landing'
import Quiz from './pages/Quiz'
import Home from './pages/Home'
import CreateCommunityOne from './pages/CreateCommunityOne'
import PrivateChat from './pages/chat/PrivateChat'
// import InvidualChat from './pages/chat/InvidualChat'
import ReportAProblem from './pages/ReportAProblem'
import MoreOptions from './pages/MoreOptions'
import Profile from './pages/Profile'
import ThanksReport from './pages/ThanksReport'
import DashboardSpaces from './pages/DashboardSpaces'
import {SwitchCommunityVideo} from './pages/inCommunity/SwitchCommunityVideo'
import {SwitchCommunitySubSpace} from './pages/inCommunity/SwitchCommunitySubSpace'
//List of routers and loading
import ListOfRoutes from './pages/objects/ListOfRoutes' 
import Spinner from './components/spinner/MainSpinner'
import { OnDisconnectUser } from './pages/inCommunity/algorithms/OnDisconnectUser'

import VideoCall from './components/community/VideoCall'
import PFVideo from './pages/inCommunity/PFVideo'

const AppContext =  React.createContext()
const {Provider, Consumer} = AppContext

function App() {
  const auth = useAuth()
  const firestore = useFirestore()
  const storage = useStorage()
  const history = useHistory()
  const location = useLocation()
  const database = useDatabase()
  const firebase = useFirebaseApp()
  const [loading, setLoading] = useState(true)
  const [communityGlobalData, setCommunityGlobalData] = useState(false)
  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const [authState, setAuthState] = useState(false)
  const [userFromDB, setUserFromDB] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [profileThumb, setProfileThumb] = useState(false)
  const communityProvider = useMemo(() => ({communityGlobalData, setCommunityGlobalData}), [communityGlobalData, setCommunityGlobalData])
  const [videoCall, setVideoCall] = useState(false)
  useEffect(()=>{
    if(localStorage.mode){
      setMode(localStorage.getItem("mode"))
    }else{
      localStorage.setItem("mode","light")
    }
    auth.onAuthStateChanged(async user => {
      if(user){
        if (user.emailVerified) {
          setAuthState(user)
          let dataUser = await RecoverUser(firestore, user.uid)
          setUserFromDB(dataUser)
          if(dataUser){
            if(dataUser.type === "admin"){
              setIsAdmin(true)
              if(dataUser.bucket && dataUser.route){
                const profileImageReference = storage.refFromURL(`gs://${dataUser.bucket}/${dataUser.route}`)
                profileImageReference.getDownloadURL().then(url => {//Recover thumbnail of profile from storage.
                  setProfileThumb(url)
                })
              }
            }
            !dataUser.quizComplete && history.push("/quiz")
            
            if(communityGlobalData){
              setVideoCall(
                <VideoCall 
                  dataUser={dataUser} 
                  authState={user} 
                  communityDataRoom={communityProvider.communityGlobalData} 
                  isAdmin={isAdmin}
                />
              )
            }
          }
        }
      }
      setLoading(false)
    });
  },[firestore, auth, storage, history, communityProvider])


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
    profileThumb,
    isAdmin,
    changeTheme,
    communityProvider,
    videoCall,
  }

  if(loading) return <Spinner />

  // Update to user offline or Online
  if(userFromDB) {
    OnDisconnectUser(userFromDB.uid, database, firestore)
  }
  
  return (
    <ThemeProvider theme={theme(mode)}>
      <Provider value={userValue}>
        <GlobalStyles />
          <Container>
            { (communityGlobalData && !location.pathname.startsWith("/room"))&&
              <PFVideo children={videoCall} communityGlobalData={communityGlobalData} setCommunityGlobalData={setCommunityGlobalData}/>
            }
            <Switch>
              <Route exact path={"/"} component={authState ? Home : Landing}/>
              <Route exact path={"/create-community-1"} component={authState ? CreateCommunityOne : Landing}/>
              <Route exact path={"/inbox"} component={authState ? PrivateChat : Landing}/>
              <Route exact path={"/inbox/t/:idInbox"} component={authState ? PrivateChat : Landing}/>
              <Route exact path={"/report"} component={authState ? ReportAProblem : Landing}/>
              <Route exact path={"/more-options"} component={authState ? MoreOptions : Landing}/>
              <Route exact path={"/quiz"} component={authState? Quiz: Landing}/>
              <Route exact path={"/room/:idRoom"} component={SwitchCommunityVideo}/>
              <Route exact path={"/room/:idRoom/:idSubSpace"} component={SwitchCommunitySubSpace}/>
              <Route exact path={"/u/:id"} component={authState ? Profile : Landing}/> {/* temporal */}
              <Route exact path={"/thank-you"} component={authState? ThanksReport : Landing}/>
              <Route exact path={"/dashboard/my-spaces"} component={authState? DashboardSpaces : Landing}/>
              {ListOfRoutes.map((route)=>{
                return <ExternalLayoutRoute key={route.path} authState={authState} {...route}/>
              })}
              <Redirect from="*" to="/404"/>
            </Switch>
          </Container>
      </Provider>
    </ThemeProvider>
  );
}

export {App, Consumer as AppConsumer, AppContext}