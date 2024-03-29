import React, {useContext, useState, useEffect, lazy, Suspense} from 'react';
import {AppContext} from '../../App'
import {useFirestore} from 'reactfire'
import Wrapper from './../general/Wrapper'
import ModalGeneral from './../modal/ModalGeneral'
import ModalUnlockedSpace from './ModalUnlockedSpace'
import { Link } from 'react-router-dom'
import { useStateIfMounted } from 'use-state-if-mounted'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { AddCardContainer, EndCercle, CardsList, CardsContainer } from './styles/sMainHome'
import { ReactComponent as SpacesSVG } from './icons/spaces.svg'
import { ReactComponent as FangelConnectSVG } from './icons/fangelConnect.svg'
import { ReactComponent as LockedSVG } from './icons/locked.svg'
import CardFangelTv from './CardFangelTv'

//Import Algorithms
import { RecoverCommunities } from './algorithms/RecoverCommunities'

//CardCommunity lazy load start.
const CardCommunity = lazy(()=> import('./CardCommunity'))

const MainHome = () => {
  const firestore = useFirestore()
  const contextFromApp = useContext(AppContext)
  const {isAdmin, communityProvider, userFromDB, fangelScore} = contextFromApp
  const [communities, setCommunities] = useStateIfMounted([]) //Communities recovered array.

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
    let diponibleCommunities = await RecoverCommunities(firestore)
    if(diponibleCommunities && communities.length === 0){
      diponibleCommunities.map(com => {
        if(!communities.includes(com)){
          setCommunities(prevState => [...prevState, com]) //Assign communities to state.
        }
      })
    }
  },[])

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => setModalIsOpen(!modalIsOpen)

  // if(communities && userFromDB) {
  //   let communityRestrict = userFromDB.email && communities.filter(item => item.emailRestriction && !userFromDB.email.endsWith(item.emailRestriction))
    // let communityPermit = communities.filter((item, index) => item.roomName !== communityRestrict[index].roomName)
    // console.log(communityPermit)
    // console.log("communityRestrict")
  // }

  return (
    <main>
      <Wrapper>
        <TitleStyled>Espacios sociales</TitleStyled>
        <TextStyled main>Conoce a personas y construye relaciones duraderas en base a tus intereses.</TextStyled>
        <CardsList isAdmin={isAdmin}>
        {
          isAdmin && //If the user is an admin, activate the "AddCardContainer" button.
            <CardsContainer>
              {userFromDB.quizComplete ?
                <AddCardContainer colorbackground="#E9760D" colorhover="#C56610" as={Link} to="/fangel-connect" >
                  <FangelConnectSVG />
                  <span>Fangel Connect</span>
                </AddCardContainer> :
                <AddCardContainer locked="true" colorbackground="#844d1c">
                <SpacesSVG />
                <span>Fangel Connect</span>
                <LockedSVG className="disableIcon" />
              </AddCardContainer>
              }
              {fangelScore >= 135 ?
                <AddCardContainer colorbackground="#2D9CDB" colorhover="#2277A7" as={Link} to="/create-community-1" >
                  <SpacesSVG />
                  <span>Crear espacio social</span>
                </AddCardContainer>:
                <AddCardContainer locked="true" colorbackground="#032655" onClick={modalOpen} >
                  <SpacesSVG />
                  <span>Crear espacio social</span>
                  <LockedSVG className="disableIcon" />
                </AddCardContainer>
              }
            </CardsContainer>
        }
          <Suspense fallback={<p>Cargando...</p>}>
          {/* <CardFangelTv communityProvider={communityProvider}/> */}
          {
            communities &&
              communities.map((community)=>{ //Render list of "CardCommunity".
                return <CardCommunity key={community.roomName} communityData={community} communityProvider={communityProvider}/>
              })
          }
					</Suspense>
        </CardsList>
      </Wrapper>
      <EndCercle/>
      <ModalGeneral modalIsOpen={modalOpen} modalOpen={modalIsOpen} >
        <ModalUnlockedSpace modalIsOpen={modalOpen} to={userFromDB.username ? `/u/${userFromDB.username}`:`#`}/>
      </ModalGeneral>
    </main>
  );
}

export default MainHome;