import React, {useState, useEffect} from 'react';
import {useFirestore} from 'reactfire'
import { useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import CardScore from './CardScore'
import { TextBodyStyled } from './styles/sSearchPeople'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { ContainerFCGeneral, ContainerCards, ButtonsContainerStyled } from './styles/sContractFangelConnect'
import { ButtonStyled } from './../dashboard/styles/sModalCloseSpace'
import { sendScoresFromFangelConnect } from './algorithms/sendScoresFromFangelConnect'

const listCardScore = [
  {
    id: 1,
    hability: 'Tolerancia',
  }, {
    id: 2,
    hability: 'Empatía',
  }, {
    id: 3,
    hability: 'Entusiasmo',
  }, {
    id: 4,
    hability: 'Comunicación',
  }, {
    id: 5,
    hability: 'Respeto',
  },
]

const ScoreFangelConnect = ({userFromDB, fangelConnectProvider, setCommunityGlobalData, setStateScore}) => {
  const history = useHistory()
  const firestore = useFirestore()
  const [uidOfOtherUser, setUidOfOtherUser] = useState(null)
  const [scores, setScores] = useState({
    tolerance: "",
    empathy: "",
    enthusiasm:"",
    respect:"",
    communication:"",
  })
  useEffect(async()=>{
    if(fangelConnectProvider && (fangelConnectProvider.dataFromCreator.uid !== userFromDB.uid)){
      setUidOfOtherUser(fangelConnectProvider.dataFromCreator.uid)
    }else if(fangelConnectProvider && (fangelConnectProvider.dataFromJoinner.uid !== userFromDB.uid)){
      setUidOfOtherUser(fangelConnectProvider.dataFromJoinner.uid)
    }
  },[firestore])
  
  const handleSubmitScore = () => {
    sendScoresFromFangelConnect(firestore, uidOfOtherUser, userFromDB.uid, scores)
    setStateScore(false)
    setCommunityGlobalData(false)
    history.push(`/`)
  }
  
  return (
    <main>
      <Wrapper>
        <ContainerFCGeneral withPosition>
          <TextBodyStyled>Califica tu experiencia con Userfangel</TextBodyStyled>
          <div>
            <TextBody top24>Esto nos ayudará a conseguirte mejores conexiones. No te tomará más de 1 minuto.</TextBody>
          </div>
          <ContainerCards>
            <ul>
              {
                listCardScore.map((card) => <CardScore scores={scores} setScores={setScores} key={card.id} hability={card.hability} />)
              }
            </ul>
          </ContainerCards>
          <ButtonsContainerStyled>
            <ButtonStyled secondary onClick={handleSubmitScore}>Terminé</ButtonStyled>
          </ButtonsContainerStyled>
        </ContainerFCGeneral>
      </Wrapper>
    </main>
  );
}

export default ScoreFangelConnect;
