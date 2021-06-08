import React from 'react';
import { useHistory } from 'react-router-dom'
import Wrapper from './../general/Wrapper'
import CardScore from './CardScore'
import { TextBodyStyled } from './styles/sSearchPeople'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { ContainerFCGeneral, ContainerCards, ButtonsContainerStyled } from './styles/sContractFangelConnect'
import { ButtonStyled } from './../dashboard/styles/sModalCloseSpace'

const listCardScore = [
  {
    id: 1,
    hability: 'Puntualidad',
  }, {
    id: 2,
    hability: 'Empatia',
  }, {
    id: 3,
    hability: 'Entusiasmo',
  }, {
    id: 4,
    hability: 'Comunicacion',
  }, {
    id: 5,
    hability: 'Educacion',
  },
]

const ScoreFangelConnect = ({setStateScore}) => {
  const history = useHistory()

  const handleSubmitScore = () => {
    setStateScore(false)
    history.push(`/`)
    window.location.reload()
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
                listCardScore.map((card) => <CardScore key={card.id} hability={card.hability} />)
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
