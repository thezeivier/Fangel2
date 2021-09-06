import React, {useEffect, useState, useContext} from 'react'
import {AppContext} from '../../App'
import Wrapper from './../general/Wrapper'
import DbSpaceCard from './DbSpaceCard'
import {useFirestore} from 'reactfire'
import { TitleStyled, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { SpacesSection } from './styles/sDashboardSpace'
import { recoverSpaces } from './algorithms/recoverSpaces'

const DashboardSpaces = () => {
  const firestore = useFirestore()
  const contextFromApp = useContext(AppContext)
  const {authState} = contextFromApp
  const [listOfSpaces, setListOfSpaces] = useState(null)
  useEffect(async()=>{
    if(authState && listOfSpaces === null) {
      setListOfSpaces(await recoverSpaces(firestore, authState))
    }
    console.log(listOfSpaces)
  },[authState, firestore, listOfSpaces])

  console.log("render")
  
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Espacios creados</TitleStyled>
        {
          (listOfSpaces && listOfSpaces.public.length > 0 ) &&
            <SpacesSection>
              <SubtitleStyled bottom14>Públicos</SubtitleStyled>
                  <ul>
                    {
                      listOfSpaces.public.map((space)=>{
                        return <DbSpaceCard setListOfSpaces={setListOfSpaces} listOfSpaces={listOfSpaces} key={space.roomName} {...space} uid={authState.uid}/>
                      })
                    }
                  </ul>
            </SpacesSection>
        }
        {
          (listOfSpaces && listOfSpaces.private.length > 0) &&
            <SpacesSection>
              <SubtitleStyled bottom14>Privados</SubtitleStyled>
                  <ul>
                    {
                      listOfSpaces.private.map((space)=>{
                        return <DbSpaceCard setListOfSpaces={setListOfSpaces} listOfSpaces={listOfSpaces} key={space.roomName} {...space} uid={authState.uid}/>
                      })
                    }
                  </ul>
            </SpacesSection>
        }
      </Wrapper>
    </main>
  );
}

export default DashboardSpaces;
