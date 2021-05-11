import React, { useState, useEffect } from 'react';
import {useFirestore} from 'reactfire'
import SubSpaceAddCard from './SubSpaceAddCard'
import SubSpaceCard from './SubSpaceCard'
import { GridCardsContainer } from './styles/sSubSpace'

const SubSpaceMain = ({communityData}) => {
  const firestore = useFirestore()
  const [subSpaces, setSubSpaces] = useState([])
  useEffect(async()=>{
    await firestore.collection("communities").doc(communityData.roomName).collection("subSpace").get().then(result =>{
      if(result.docs.length !== 0){
        setSubSpaces(result.docs.map(doc=>{
          return {
            ...doc.data()
          }
        }))
      }
  })
  },[firestore])
  console.log(subSpaces)
  return (
    <GridCardsContainer>
      <SubSpaceAddCard communityData={communityData}/>
      {subSpaces.length !== 0 &&
        subSpaces.map(subSpace =>{
          return <SubSpaceCard key={subSpace.numberOfSpace} {...subSpace}/>
        })
        
      }
    </GridCardsContainer>
  );
}

export default SubSpaceMain;
