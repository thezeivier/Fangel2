import React, {useState, useEffect} from 'react';
import {useFirestore} from 'reactfire'
import { useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import CardScore from './CardScore'
import { TextBodyStyled } from './styles/sSearchPeople'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { ContainerFCGeneral, ContainerCards, ButtonsContainerStyled } from './styles/sContractFangelConnect'
import { ButtonStyled } from './../dashboard/styles/sModalCloseSpace'
import { ErrorAlert } from '../../pages/signInAndUp/styles/sGlobalForm'
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
  const [nameOfOtherUser, setNameOfOtherUser] = useState(null)
  const [isScoreVoid, setIsScoreVoid] = useState(null)
  const [scores, setScores] = useState({
    tolerance: null,
    empathy: null,
    enthusiasm: null,
    respect: null,
    communication: null,
  })
  useEffect(async()=>{
    if(fangelConnectProvider && (fangelConnectProvider.dataFromCreator.uid !== userFromDB.uid)){
      const creator = fangelConnectProvider.dataFromCreator
      setUidOfOtherUser(creator.uid)
      setNameOfOtherUser(creator.name? `${creator.name.firstName} ${creator.name.lastName}`: creator.username)
      
    }else if(fangelConnectProvider && (fangelConnectProvider.dataFromJoinner.uid !== userFromDB.uid)){
      const joinner = fangelConnectProvider.dataFromJoinner
      setUidOfOtherUser(joinner.uid)
      setNameOfOtherUser(joinner.name? `${joinner.name.firstName} ${joinner.name.lastName}`: joinner.username)
    }
  },[firestore])
  
  const handleSubmitScore = async () => {
    const to = scores.tolerance
    const em = scores.empathy
    const en = scores.enthusiasm
    const re = scores.respect
    const co = scores.communication

    // console.log(scores)
    if(to && em && en && re && co){
      // console.log("pasa")
      await sendScoresFromFangelConnect(firestore, uidOfOtherUser, userFromDB.uid, scores)
      setCommunityGlobalData(false)
      setStateScore(false)
      setIsScoreVoid(false)
      history.push(`/`)
    }else{
      setIsScoreVoid(true)
    }
  }
  return (
    <main>
      <Wrapper>
        <ContainerFCGeneral withPosition>
          <TextBodyStyled>Califica tu experiencia con {nameOfOtherUser}</TextBodyStyled>
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
          {
            isScoreVoid && 
              <ErrorAlert>*Por favor termina de evaluar al usuario</ErrorAlert>
          }
            <ButtonStyled secondary onClick={handleSubmitScore}>Terminé</ButtonStyled>
          </ButtonsContainerStyled>
        </ContainerFCGeneral>
      </Wrapper>
    </main>
  );
}

export default ScoreFangelConnect;
