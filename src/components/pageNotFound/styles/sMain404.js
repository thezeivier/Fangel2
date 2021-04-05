import styled from "styled-components";
import { PrimaryTitle, TextBody, SmallText, Button } from './../../../themes/externalRecyclableStyles'

export const GirdOnlyDesktop = styled.div`
  display: block;

  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 35.5% 1fr;
    align-items: center;
    height: 100%;
  }
`

export const SVGContainer = styled.div`
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
  margin: 50px 0 60px 0;

  @media(min-width:1200px) {
    justify-content: start;
    margin: 0;
  }

  svg {
    width: 250px;
    height: auto;
    fill: ${props => props.theme.colorbrandSolid};

    @media(min-width:768px) {
      width: 300px;
    }

    @media(min-width:1024px) {
      width: 350px;
    }
  }
`

export const DescriptionErrorContainer = styled.div`
  a {
    color: ${props => props.theme.colorbrandSolid};

    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }

  @media(min-width:1200px) {
    padding: 0 0 0 9%;
    border-left: 1px solid ${props => props.theme.colorBrandTransparent};
  }
`

export const PrimaryTitleStyled = styled(PrimaryTitle)`
  margin: 30px 0 0 0;
  font-size: 2.1em;
  margin: 0 0 35px 0;

  @media(min-width:1024px) {
    text-align: center;
  }

  @media(min-width:1200px) {
    text-align: start;
  }
`

export const TextBodyStyled = styled(TextBody)`
  margin: 0 0 15px 0;

  @media(min-width:1024px) {
    text-align: center;
  }

  @media(min-width:1200px) {
    text-align: start;
  }
`

export const ButtonStyled = styled(Button)`
  margin: 40px 0 20px 0;

  @media(min-width:1024px) {
    width: max-content;
    margin: 40px auto 20px auto;
  }

  @media(min-width:1200px) {
    margin: 40px 0 20px 0;
  }
`

export const SmallTextStyled = styled(SmallText)`
  margin: 0 auto;
  display: block;
  font-size: 1em;

  @media(min-width:1200px) {
    margin: 0;
  }
`
