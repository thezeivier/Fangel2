import React from 'react';
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextStyled, TextAreaStyled, ButtonStyled,
         OnlyDesktop } from './../../themes/internalRecyclableStyles'
import { InputStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'

const MainCreateCOne = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Crear una comunidad</TitleStyled>
        <OnlyDesktop>
          <form>
            <InputStyled type="text" placeholder="Nombre de la comunidad" name="nameCommunity" />
            <TextAreaStyled type="text" placeholder="Descripcion" name="descriptionCommunity" />
            <TextBody>
              Las comunidades tiene vida solo por 1 hora, esto signifiaca que esta comunidad sera única y especial.
            </TextBody>
            <ButtonStyled primary type="submit">Crear comunidad</ButtonStyled>
          </form>
        </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainCreateCOne;
