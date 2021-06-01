import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../../App';
import {useFirestore} from 'reactfire'
import Wrapper from './../general/Wrapper'
import { PeopleContainer, TextBodyStyled, SearchPeopleContainer } from './styles/sSearchPeople'
import { fangelConnectAnalizer } from './algorithms/fangelConnectAnalizer'
import profileSVG from '../general/icons/profile.svg'

const SearchPeople = ({ modalIsOpen }) => {
  const firestore = useFirestore()
  const [newUserConnected, setNewUserConnected] = useState(null)
  const { userFromDB, authState, profileThumb } = useContext(AppContext)
  useEffect(async()=>{
    console.log(await fangelConnectAnalizer(firestore, userFromDB))
  },[])
  return (
    <main>
      <Wrapper>
        <SearchPeopleContainer>
          <TextBodyStyled>Buscando personas con tus mismos intereses</TextBodyStyled>
          <PeopleContainer>
            <img src={profileThumb? profileThumb: profileSVG}/>      
            <p>Conectando...</p>
            <img />
          </PeopleContainer>
          <a onClick={modalIsOpen}>Cancelar busqueda</a>
        </SearchPeopleContainer>
      </Wrapper>
    </main>
  );
}

export default SearchPeople;
