import React from 'react';
import { Link } from 'react-router-dom'
import Wrapper from './../../components/general/Wrapper'
import Footer from './../../components/general/Footer'
import { ExternalsWrapper } from '../../themes/externalRecyclableStyles'
import { SubtitleStyled, TextStyled, ContainerDesktop, LinkOtherPage } from './styles/sGlobalForm'
import { Fieldset, Label } from './styles/sSwitchRegisterTypeUser'
import { ReactComponent as ProfileSVG } from './../../components/general/icons/profile.svg'
import { ReactComponent as BusinessProfileSVG } from './../../components/settings/icons/businessProfile.svg'

const SwitchRegisterTypeUser = ({ typeUser }) => {
  return (
    <>
      <Wrapper>
        <ExternalsWrapper>
          <ContainerDesktop>
            <SubtitleStyled>Regístrate para empezar</SubtitleStyled>
            <TextStyled>Escoge como será tu nueva cuenta. Ambas son gratuitas.</TextStyled>
            <Fieldset>
              <Label colorBackground="#E9760D" onClick={() => typeUser("user")}>
                <input type="radio" id="public" name="privacy" value="user" />
                <div className="contentButton">
                  <ProfileSVG />
                  <p>Personal</p>
                </div>
              </Label>
              <Label colorBackground="#2D9CDB" onClick={() => typeUser("business")}>
                <input type="radio" name="privacy" value="business_beta"/>
                <div className="contentButton">
                  <BusinessProfileSVG />
                  <p>Empresarial</p>
                </div>
              </Label>
            </Fieldset>
          </ContainerDesktop>
        </ExternalsWrapper>
        <LinkOtherPage>
          <p>¿Ya tienes una cuenta?</p>
          <Link to={"/login"}>Inicia sesión</Link>
        </LinkOtherPage>
      </Wrapper>
      <Footer />
    </>
  );
}

export default SwitchRegisterTypeUser;
