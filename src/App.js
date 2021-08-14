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
import FangelConnect from './pages/FangelConnect'
import CreateBusinessProfile from './pages/CreateBusinessProfile'
import BusinessProfile from './pages/BusinessProfile'
import {SwitchCommunityVideo} from './pages/inCommunity/SwitchCommunityVideo'
import {SwitchCommunitySubSpace} from './pages/inCommunity/SwitchCommunitySubSpace'
//List of routers and loading
import ListOfRoutes from './pages/objects/ListOfRoutes' 
import Spinner from './components/spinner/MainSpinner'
import { OnDisconnectUser } from './pages/inCommunity/algorithms/OnDisconnectUser'

import VideoCall from './components/community/VideoCall'
import {SetNumberOfParticipants} from './algorithmsToApp/SetNumberOfParticipants'
import PFVideo from './pages/inCommunity/PFVideo'
import ChatLayout from './components/general/ChatLayout'
import MatchMessage from './components/privateChat/MatchMessage'

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
  const communityProvider = useMemo(() => ({communityGlobalData, setCommunityGlobalData}), [communityGlobalData, setCommunityGlobalData])
  const [routeShareRoom, setRouteShareRoom] = useState(false)
  const routeProviderRoom = useMemo(() => ({routeShareRoom, setRouteShareRoom}), [routeShareRoom, setRouteShareRoom])
  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const [authState, setAuthState] = useState(false)
  const [userFromDB, setUserFromDB] = useState(false)
  const [fangelScore, setFangelScore] = useState(0)
  const [isAdmin, setIsAdmin] = useState(false)
  const [profileThumb, setProfileThumb] = useState(false)
  const [videoCall, setVideoCall] = useState(false)
  const memoVideoCall = useMemo(() =>({videoCall, setVideoCall}),[videoCall, setVideoCall])
  const [fangelConnectProvider, setFangelConnectProvider] = useState(null)
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
            if(dataUser.userCodesRef){ //Eliminador de userCodesRef por usuario.
              firestore.collection("users").doc(dataUser.uid).update({
                userCodesRef: firestore.app.firebase_.firestore.FieldValue.delete()
              });
            }
            if(dataUser.score && dataUser.score.fangelScore && dataUser.score.profileScore){
              setFangelScore(dataUser.score.fangelScore + dataUser.score.profileScore)
            }else if(dataUser.score && dataUser.score.fangelScore){
              setFangelScore(dataUser.score.fangelScore)
            }else{
              setFangelScore(65)
            }

            if(dataUser.type === "admin"){
              setIsAdmin(true)
              if(!dataUser.bucket || !dataUser.score){// Si el usuario no tiene bucket o fangelScore, automáticamente se le asigna.
                firestore.collection("users").doc(user.uid).set(
                  {
                    bucket: "fangelv2-300300.appspot.com",
                    score:{
                      fangelScore: 65,
                    }
                  }, 
                  { merge: true }
                )
              }
              if(!dataUser.photoUrl){
                if(dataUser.bucket && dataUser.route){
                  const profileImageReference = storage.refFromURL(`gs://${dataUser.bucket}/${dataUser.route}`)
                  profileImageReference.getDownloadURL().then(url => {//Recover thumbnail of profile from storage.
                    setProfileThumb(url)
                    firestore.collection("users").doc(user.uid).set(
                      {
                        photoUrl: url
                      }, 
                      { merge: true }
                    ).then(()=>window.location.reload())
                  })
                }
              }else{
                setProfileThumb(dataUser.photoUrl)
              }
            }
            !dataUser.quizComplete && history.push("/quiz")
            
            if(communityGlobalData){
              setVideoCall(
                  <VideoCall 
                    dataUser={dataUser} 
                    authState={user} 
                    communityDataRoom={communityProvider.communityGlobalData}
                    SetNumberOfParticipants={SetNumberOfParticipants}
                  />
              )
            }
          }
        }
      }
      setLoading(false)
    });
  },[firestore, auth, storage, communityProvider])

  // console.log("render")


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
    fangelScore: (profileThumb? fangelScore + 30: fangelScore),
    isAdmin,
    changeTheme,
    communityProvider,
    setFangelConnectProvider,
    fangelConnectProvider,
    videoCall: memoVideoCall.videoCall,
    setCommunityGlobalData,
    routeProviderRoom,
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
              <PFVideo children={memoVideoCall.videoCall} communityGlobalData={communityGlobalData} setCommunityGlobalData={setCommunityGlobalData}/>
            }
            <Switch>
              <Route exact path={"/"} component={authState ? Home : Landing}/>
              <Route exact path={"/create-community-1"} component={authState ? CreateCommunityOne : Landing}/>
              <Route exact path={"/fangel-connect"} component={authState ? FangelConnect : Landing}/>
              <ChatLayout exact path={"/inbox"} authState={authState} userFromDB={userFromDB? userFromDB: false} component={authState ? MatchMessage : Landing}/>
              <ChatLayout exact path={"/inbox/t/:idInbox"} authState={authState} userFromDB={userFromDB? userFromDB: false} component={authState ? MatchMessage : Landing}/>
              <Route exact path={"/room/:idRoom"} component={SwitchCommunityVideo}/>
              <Route exact path={"/room/:idRoom/:idSubSpace"} component={SwitchCommunitySubSpace}/>
              <Route exact path={"/report"} component={authState ? ReportAProblem : Landing}/>
              <Route exact path={"/more-options"} component={authState ? MoreOptions : Landing}/>
              <Route exact path={"/quiz"} component={authState? Quiz: Landing}/>
              <Route exact path={"/u/:id"} component={authState ? Profile : Landing}/> {/* temporal */}
              <Route exact path={"/thank-you"} component={authState? ThanksReport : Landing}/>
              <Route exact path={"/dashboard/my-spaces"} component={authState? DashboardSpaces : Landing}/>
              <Route exact path={"/create-business-profile"} component={authState? CreateBusinessProfile : Landing}/>
              <Route exact path={"/business-profile"} component={authState? BusinessProfile : Landing}/>
              {ListOfRoutes.map((route)=>{
                return <ExternalLayoutRoute key={route.path} authState={authState} {...route} />
              })}
              <Redirect from="*" to="/404"/>
            </Switch>
          </Container>
      </Provider>
    </ThemeProvider>
  );
}

export {App, Consumer as AppConsumer, AppContext}