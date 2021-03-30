import React from 'react';
import Wrapper from './../general/Wrapper'
import { TitleStyled, TextStyled, TextAreaStyled, ButtonStyled,
         OnlyDesktop, SubtitleStyled } from './../../themes/internalRecyclableStyles'
import { InputStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { TextBody } from './../../themes/externalRecyclableStyles'
import { Form } from './styles/sMainCreateCommunity'

import { ReactComponent as CopySVG } from './icons/copy.svg'

const MainCreateCTwo = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Crear una comunidad</TitleStyled>
        <OnlyDesktop>
          <SubtitleStyled>Código de invitación</SubtitleStyled>
          <TextStyled bottom20>
            Puedes compartir este código con 20 personas para que puedan unirse a tu comunidad.
          </TextStyled>
            <Form>
              <InputStyled special invitationCode type="text" placeholder="Código de invitación" />
              <CopySVG />
            </Form>
            <TextStyled>
              Despues que las personas se registren con una invitacion, podrán entrar a otras comunidades.
            </TextStyled>
            <ButtonStyled primary>¡Ya acabé!</ButtonStyled>
        </OnlyDesktop>
      </Wrapper>
    </main>
  );
}

export default MainCreateCTwo;
