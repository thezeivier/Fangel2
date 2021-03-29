import React from 'react';
import MainProfile from './../components/profile/MainProfile'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const Profile = () => {
  return (
    <Container>
      <Header />
      <MainProfile />
      <Footer />
    </Container>
  );
}

export default Profile;
