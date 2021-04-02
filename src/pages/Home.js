import React from 'react';
import {useLocation} from 'react-router-dom'
import MainHome from './../components/home/MainHome'
import Header from './../components/general/RegHeader'
import Footer from './../components/general/Footer'
import { Container } from './../components/general/InternalLayout'

const Home = () => {
  // const location = useLocation()
  // const dataUser = location.state? location.state: session
  // console.log(session)
  return (
    <Container>
      <Header />
      <MainHome />
      <Footer />
    </Container>
  );
}

export default Home;
