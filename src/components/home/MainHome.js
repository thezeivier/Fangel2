import React, {useContext, useState, useEffect, lazy, Suspense} from 'react';
import {AppContext} from '../../App'
import {useFirestore} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { Link } from 'react-router-dom'
import { TitleStyled, TextStyled } from './../../themes/internalRecyclableStyles'
import { AddCardContainer, EndCercle, CardsList } from './styles/sMainHome'
import { ReactComponent as AddCardSVG } from './icons/addCard.svg'

//Import Algorithms
import { RecoverCommunities } from './algorithms/RecoverCommunities'

//CardCommunity lazy load start.
const CardCommunity = lazy(()=> import('./CardCommunity'))

const MainHome = () => {
  const contextFromApp = useContext(AppContext)
  const firestore = useFirestore()
  const [communities, setCommunities] = useState([]) //Communities recovered array.

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
    let diponibleCommunities = await RecoverCommunities(firestore)
    diponibleCommunities.map(com => {
      if(!communities.includes(com)){
        setCommunities(prevState => [...prevState, com])
      }
    })
  },[])

  return (
    <main>
      <Wrapper>
        <TitleStyled>Comunidades</TitleStyled>
        <TextStyled main>Conoce a personas con los mismos gustos y comparte ideas.</TextStyled>
        <CardsList>
        {
          contextFromApp.isAdmin && //If the user is an admin, activate the "AddCardContainer" button.
          <AddCardContainer as={Link} to="/create-community-1" >
            <AddCardSVG />
            <span>Crear comunidad</span>
          </AddCardContainer>  
        }
          <Suspense fallback={<p>Cargando...</p>}>
            {
              communities &&
                communities.map((community)=>{ //Render list of "CardCommunity".
                  return <CardCommunity key={community.creatorUid} communityData={community}/>
                })
            }
					</Suspense>
        </CardsList>
      </Wrapper>
      <EndCercle />
    </main>
  );
}

export default MainHome;
