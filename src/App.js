import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {useAuth, useFirestore} from 'reactfire'
import { RecoverUser} from './algorithmsToApp/RecoverUser'
import { UpdateUserStatus } from './algorithmsToApp/UpdateUserStatus'
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
import ReportAProblem from './pages/ReportAProblem'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import SwitchCommunityVideo from './pages/inCommunity/SwitchCommunityVideo'
//List of routers and loading
import ListOfRoutes from './pages/objects/ListOfRoutes' 
import Spinner from './components/spinner/MainSpinner'

const AppContext =  React.createContext()
const {Provider, Consumer} = AppContext

function App() {
  const auth = useAuth()
  const firestore = useFirestore()
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState(localStorage.mode? localStorage.getItem("mode"): "light")
  const [authState, setAuthState] = useState(false)
  const [userFromDB, setUserFromDB] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(()=>{
    if(localStorage.mode){
      setMode(localStorage.getItem("mode"))
    }else{
      localStorage.setItem("mode","light")
    }
    auth.onAuthStateChanged(async user => {
      if (user) {
        setAuthState(user)
        let dataUser = await RecoverUser(firestore, user.uid)
        setUserFromDB(dataUser)
        if(dataUser){
          if(dataUser.type === "admin"){
            setIsAdmin(true)
          }
          !dataUser.quizComplete && history.push("/quiz")
        }
      }
      setLoading(false)
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
    isAdmin,
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
            <Route exact path={"/quiz"} component={authState? Quiz: Landing}/>
            <Route exact path={"/room/:idRoom"} component={SwitchCommunityVideo}/>        
            <Route exact path={"/u/:id"} component={authState ? Profile : Landing}/> {/* temporal */}
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