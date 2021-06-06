import React from 'react';
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
    hability: 'Empatía',
  }, {
    id: 3,
    hability: 'Entusiasmo',
  }, {
    id: 4,
    hability: 'Comunicacion',
  }, {
    id: 5,
    hability: 'Comunicacion',
  },
]

const ScoreFangelConnect = () => {
  return (
    <main>
      <Wrapper>
        <ContainerFCGeneral withPosition>
          <TextBodyStyled>Califica tu experiencia con Userfangel</TextBodyStyled>
          <div>
            <TextBody top24>Esto nos ayudará a conseguirte mejores conecciones. No te tomará mas de 1 minuto.</TextBody>
          </div>
          <ContainerCards>
            {
              listCardScore.map((card) => <CardScore key={card.id} hability={card.hability} />)
            }
          </ContainerCards>
          <ButtonsContainerStyled>
            <ButtonStyled secondary>Terminé</ButtonStyled>
          </ButtonsContainerStyled>
        </ContainerFCGeneral>
      </Wrapper>
    </main>
  );
}

export default ScoreFangelConnect;
