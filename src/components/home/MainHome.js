import React, {useContext, useState, useEffect, lazy, Suspense} from 'react';
import {AppContext} from '../../App'
import {useFirestore} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { Link } from 'react-router-dom'
import { useStateIfMounted } from 'use-state-if-mounted'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { AddCardContainer, EndCercle, CardsList, CardsContainer } from './styles/sMainHome'
import { ReactComponent as SpacesSVG } from './icons/spaces.svg'
import { ReactComponent as FangelConnectSVG } from './icons/fangelConnect.svg'
import { ReactComponent as LockedSVG } from './icons/locked.svg'

//Import Algorithms
import { RecoverCommunities } from './algorithms/RecoverCommunities'

//CardCommunity lazy load start.
const CardCommunity = lazy(()=> import('./CardCommunity'))

const MainHome = () => {
  const contextFromApp = useContext(AppContext)
  const firestore = useFirestore()
  const [communities, setCommunities] = useStateIfMounted([]) //Communities recovered array.

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
    let diponibleCommunities = await RecoverCommunities(firestore)
    if(diponibleCommunities){
      diponibleCommunities.map(com => {
        if(!communities.includes(com)){
          setCommunities(prevState => [...prevState, com]) //Assign communities to state.
        }
      })
    }
  },[])
  return (
    <main>
      <Wrapper>
        <TitleStyled>Espacios sociales</TitleStyled>
        <TextStyled main>Conoce a personas y construye relaciones duraderas en base a tus intereses.</TextStyled>
        <CardsList isAdmin={contextFromApp.isAdmin}>
        {
          contextFromApp.isAdmin && //If the user is an admin, activate the "AddCardContainer" button.
            <CardsContainer>
              <AddCardContainer colorbackground="#E9760D" colorhover="#C56610" as={Link} to="/fangel-connect" >
                <FangelConnectSVG />
                <span>Fangel Connect</span>
              </AddCardContainer>
{/*               <AddCardContainer colorbackground="#2D9CDB" colorhover="#2277A7" as={Link} to="/create-community-1" >
                <SpacesSVG />
                <span>Crear espacio social</span>
              </AddCardContainer> */}
              <AddCardContainer disable colorbackground="#032655" as={Link} to="/create-community-1" >
                <SpacesSVG />
                <span>Crear espacio social</span>
                <LockedSVG className="disableIcon" />
              </AddCardContainer>
            </CardsContainer>
        }
          <Suspense fallback={<p>Cargando...</p>}>
            {
              communities &&
                communities.map((community)=>{ //Render list of "CardCommunity".
                  return <CardCommunity key={community.roomName} communityData={community} communityProvider={contextFromApp.communityProvider}/>
                })
            }
					</Suspense>
        </CardsList>
      </Wrapper>
      <EndCercle/>
    </main>
  );
}

export default MainHome;