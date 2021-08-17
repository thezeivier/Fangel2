import React, { useContext } from 'react';
import MainProfile from './../components/profile/MainProfile'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Redirect, useRouteMatch, useLocation } from 'react-router-dom'
import { Container } from './../components/general/InternalLayout'
import { AppContext } from '../App'
import BusinessProfile from '../components/businessProfile/MainBusinessProfile'
import { useMatchRouteUserData } from '../components/profile/algorithms/useMatchRouteUserData'
import MainSpinner from '../components/spinner/MainSpinner'


const Profile = () => {
  const {userFromDB, authState} = useContext(AppContext)
  const location = useLocation()
  const match = useRouteMatch("/u/:id")
  const nameUserRoute = match.params.id.concat(location.hash)
  const [userData, loading, error] = useMatchRouteUserData("users", nameUserRoute)
  
  if(loading) return <MainSpinner/>
  
  if(error) {
    return false
  }
  
  const dataGeneralUser = userData[0]
  const isBusinessAccount = dataGeneralUser.profileType === "business_beta"
  return (
    <>
      <Container padding40>
        <Header isBusinessAccount={isBusinessAccount}/>
        {!isBusinessAccount ?
          <MainProfile nameUserRoute={nameUserRoute} userFromDB={userFromDB} authState={authState}/>:
          <BusinessProfile dataGeneralUser={dataGeneralUser}/>
        }
        <Footer />
      </Container> 
    </>
  );
}

export default Profile;
