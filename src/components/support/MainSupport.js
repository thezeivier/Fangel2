import React from 'react';
import Wrapper from './../general/Wrapper'
import ReturnPage from './../general/ReturnPage'
import { Link } from 'react-router-dom'
import { TitleStyled } from './../../themes/internalRecyclableStyles'
import { BoxOption, ListBoxOptions } from './styles/sMainSupport'

const MainSupport = () => {
  return (
    <main>
      <Wrapper>
        <TitleStyled bottom>Centro de ayuda y soporte</TitleStyled>
        <ListBoxOptions>
          <BoxOption color="#BB6BD9" as={Link} to="/faqs">
            <span>Preguntas frecuentes</span>
          </BoxOption>
          <BoxOption color="#56CCF2" as={Link} to="/terms-conditions">
            <span>Términos y condiciones</span>
          </BoxOption>
          <BoxOption color="#27AE60" as={Link} to="/politics-privacy">
            <span>Políticas y privacidad de datos</span>
          </BoxOption>
        </ListBoxOptions>
      </Wrapper>
      <ReturnPage/>
    </main>
  );
}

export default MainSupport;
