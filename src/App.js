import React, {useState, useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
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
import CreateCommunityTwo from './pages/CreateCommunityTwo'
import PrivateChat from './pages/chat/PrivateChat'
// import InvidualChat from './pages/chat/InvidualChat'
import ReportAProblem from './pages/ReportAProblem'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import ThanksReport from './pages/ThanksReport'
import {SwitchCommunityVideo} from './pages/inCommunity/SwitchCommunityVideo'
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
            // createAdminCodes(firestore, firebase) //CREADOR DE CÓDIGOS DE TIPO ADMIN.
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
                  // communityData={communityData} 
                  isAdmin={isAdmin}
                />
              )
            }
          }
        }
      }
      setLoading(false)
    });
  },[firestore, auth, storage, history])


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
    videoCall: (videoCall? videoCall: false),
  }

  if(loading) return <Spinner />

  // Update to user offline or Online
  if(userFromDB) {
    OnDisconnectUser(userFromDB.uid, database, firestore)
  }
  console.log(history)
  
  return (
    <ThemeProvider theme={theme(mode)}>
      <Provider value={userValue}>
        <GlobalStyles />
          <Container>
            { communityGlobalData &&
              <PFVideo children={videoCall}/>
            }
            <Switch>
              <Route exact path={"/"} component={authState ? Home : Landing}/>
              <Route exact path={"/create-community-1"} component={authState ? CreateCommunityOne : Landing}/>
              <Route exact path={"/create-community-2"} component={authState ? CreateCommunityTwo : Landing}/>
              <Route exact path={"/inbox"} component={authState ? PrivateChat : Landing}/>
              <Route exact path={"/inbox/t/:idInbox"} component={authState ? PrivateChat : Landing}/>
              <Route exact path={"/report"} component={authState ? ReportAProblem : Landing}/>
              <Route exact path={"/settings"} component={authState ? Settings : Landing}/>
              <Route exact path={"/quiz"} component={authState? Quiz: Landing}/>
              <Route exact path={"/room/:idRoom"} component={SwitchCommunityVideo}/>
              <Route exact path={"/u/:id"} component={authState ? Profile : Landing}/> {/* temporal */}
              <Route exact path={"/thank-you"} component={authState? ThanksReport : Landing}/>
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


// const createAdminCodes = (firestore, firebase) => {
//   const model = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//   let listOfCodes = []
//   while(listOfCodes.length < 50){
//     let code = "admin";
//     while (code.length < 12) {
//       code = code.concat(model.charAt(Math.round(Math.random()*model.length)));
//     }
//     listOfCodes.push(code)
//   }
//   console.log(listOfCodes)
//   var i = 0
//   while(i < (listOfCodes.length - 1)){
//     firestore
//     .collection("adminCodes")
//     .doc("listOfCodes")
//     .update({ 
//         disponibleCodes: firebase.firebase_.firestore.FieldValue.arrayUnion(listOfCodes[i]),
//     })
//     i++
//   }
// }