import styled, { css } from 'styled-components'
import { SmallText, TextBody, Button } from './../../../themes/externalRecyclableStyles'

export const CardContainer = styled.div`
  width: -webkit-fill-available;
  margin: 20px 0 0 0;
  background: ${props => props.theme.cardComunity};
  border-radius: 4px;
  padding: 10px 0 15px 0;

  @media(min-width:1024px) {
    margin: 0;
  }
`

const wrapperMixin = css`
  padding: 0 10px 10px 10px;
`

const textSmallMixin = css`
  font-size: 1.1em;
  color: ${props => props.theme.textColor};
`

export const ContainerTextTop = styled.div`
  ${wrapperMixin};
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -8px 0 0 0;

  svg {
    fill: ${props => props.theme.textColor};
    width: 28px;
    margin: 0 8px 0 0;
  }
`

export const TextCommunity = styled(SmallText)`
  ${textSmallMixin};
  width: auto;

  @media(min-width:1200px) {
    font-size: 1em;
  }
`

export const User = styled(SmallText)`
  ${textSmallMixin};
  font-weight: ${props => props.theme.weight.regular};

  @media(min-width:1200px) {
    font-size: 1.05em;
  }
`

export const ImageContainer = styled.div`
  position: relative;

  img {
    width: -webkit-fill-available;
    height: 100%;
    min-height: 350px;
    object-fit: cover;
    line-height: 0;
    
    @media(min-width:410px) {
      width: 100%;
      min-height: 360px;
    }

    @media(min-width:768px) {
      width: 100%;
      min-height: 370px;
    }

    @media(min-width:1024px) {
      width: 100%;
      min-height: 380px;
    }

    @media(min-width:1200px) {
      min-height: 400px;
    }
  }
`

export const DescriptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
  background: linear-gradient(180deg, rgba(1, 2, 14, 0) 0%,
              rgba(1, 3, 14, 0.56) 39.58%, rgba(2, 4, 14, 0.73) 81.77%);
  border: none;
  color: ${props => props.theme.colorWhite};
  text-align: start;
  transition: all .1s;
  padding: 0 10px 30px 10px;

  @media(min-width:1200px) {
    padding: 0 10px 34px 10px;
  }

  h3 {
    font-style: normal;
    font-weight: ${props => props.theme.weight.semiMedium};
    font-size: 1.5em;
    margin: 0 0 5px 0;

    @media(min-width:1200px) {
      font-size: 2.1em;
    }
  }

  &:focus {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    outline:none;
    background: linear-gradient(180deg, rgb(1 2 14 / 0%) 0%,
                rgb(1 3 14 / 68%) 39.58%,rgb(2 4 14 / 92%) 81.78%);
    ${wrapperMixin};
  }

  &:focus > .truncate {
    -webkit-box-orient: initial;
  }

  &:focus > .truncate:after {
    display: none;
    opacity: 0;
  }

  &:focus > .buttonCardCommunity {
    display: block;
    padding: 8px 40px;
    width: min-content;
    margin: 15px auto 10px auto;
  }
`

export const TextDescription = styled(TextBody)`
  font-size: 1em;
  line-height: 1.62em;

  @media(min-width:1200px) {
    font-size: 1.08em;
    line-height: 1.65em;
  }
`

export const Truncate = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;

  &:after {
    content:'Mostrar más';
    color: white;
    position: absolute;
    bottom: 10px;
    font-family: ${props => props.theme.secondaryFont};
    color: #8f8f92;
    font-size: 0.94em;
    cursor: pointer;
    transition: .05s;
    will-change: opacity;

    @media(min-width:1200px) {
      font-size: 1.08em;
    }
  }
`

export const ButtonStyled = styled(Button)`
  margin: 15px auto 0 auto;
  width: min-content;
  padding: 10px 40px;
`
