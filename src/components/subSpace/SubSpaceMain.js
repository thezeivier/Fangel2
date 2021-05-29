import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {useFirestore} from 'reactfire'
import SubSpaceAddCard from './SubSpaceAddCard'
import SubSpaceCard from './SubSpaceCard'
import { GridCardsContainer } from './styles/sSubSpace'

const SubSpaceMain = ({isAdmin, communityData, isSubSpace}) => {
  const firestore = useFirestore()
  const [subSpaces, setSubSpaces] = useState([])
  useEffect(async()=>{
    await firestore.collection("communities").doc(communityData.roomName).collection("subSpace").orderBy("numberOfSpace","asc").onSnapshot(snapshot =>{
      if(snapshot.docs.length !== 0){
        setSubSpaces(snapshot.docs.map(doc=>{
          return {
            ...doc.data()
          }
        }))
      }
  })
  },[firestore])
  // console.log(subSpaces && subSpaces)
  console.log()
  return (
    <GridCardsContainer>
      {
        isAdmin && <SubSpaceAddCard communityData={communityData}/>
      }
      {subSpaces.length !== 0 && !isSubSpace &&
        subSpaces.map(subSpace => <SubSpaceCard communityData={communityData} key={subSpace.numberOfSpace} {...subSpace}/>)
      }
    </GridCardsContainer>
  );
}

export default SubSpaceMain;
