import React from 'react';
import Wrapper from './../general/Wrapper'
import { TextBodyStyled } from './styles/sSearchPeople'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { ContainerFCGeneral } from './styles/sContractFangelConnect'
import { ButtonsContainer, ButtonStyled } from './../dashboard/styles/sModalCloseSpace' 

const ContractFangelConnect = () => {
  return (
    <main>
      <Wrapper>
        <ContainerFCGeneral>
          <TextBodyStyled>Antes de usar Fangel Connect</TextBodyStyled>
          <div>
            <TextBody top24>Te recomendamos que seas tolerante y respetes las opiniones de las demás personas.</TextBody>
            <TextBody secondParagraph>Esto te permitirá escalar y conseguir mejores conecciones.</TextBody>
          </div>
          <ButtonsContainer>
            <ButtonStyled secondary>Estoy de acuerdo</ButtonStyled>{/*Llamado a la ejecución de eliminación de espacio*/}
          </ButtonsContainer>
        </ContainerFCGeneral>
      </Wrapper>
    </main>
  );
}

export default ContractFangelConnect;
