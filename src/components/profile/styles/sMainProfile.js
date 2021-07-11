import styled, { css } from 'styled-components'
import { Button, Input, svgMixin, SmallText, TextBody } from './../../../themes/externalRecyclableStyles'

export const UserContainer = styled.section`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 1.35em;
    text-align: center;
    margin: 15px 0 0 0;
  }

  p {
    font-family: ${props => props.theme.secondaryFont};
    margin: 10px 0 0 0;
  }

  @media(min-width:1024px) {
    margin: 0 0 30px 0;
  }
`

export const GridOnlyDesktop = styled.div`
  display: block;

   @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`

export const ContainerInformation = styled.section`
  margin: 0 0 30px 0;

  h5 {
    font-size: 1.3em;
    font-weight: ${props => props.theme.weight.semiMedium};
    color: ${props => props.theme.colorbrandSolid};
    margin: 0 0 5px 0;

    span {
      margin: 0 0 0 3px;
      display: inline-block;
      font-size: 0.8em;
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  .moreInformationScore {
    color: ${props => props.theme.colorbrandSolid};
    margin: 15px 0 0 0;
    display: block;
    font-size: 0.95em;
  }

  .linkSocialMedia {
    color: ${props => props.theme.textColor};
  }

  ${props => props.last && css`
    margin: 0;
  `}
`

export const SmallTextStyled = styled(SmallText)`
  width: auto;
  line-height: 1.35em;
`

export const TextBodyStyled = styled(TextBody)`
  font-size: 1em;
`

export const ProfileImage = styled.div`
  width: auto;

  img {
    border-radius: 100%;
    height: 76px;
    width: 76px;
    margin: auto;
    object-fit: cover;
  }

  svg {
    height: 80px;
    width: 80px;
    fill: ${props => props.theme.colorIcon};
  }

  ${props => props.left && css`
    width: fit-content;
  `}
`

export const ButtonAccion = styled(Button)`
  padding: 10px 15px;
  width: initial;
  background: ${props => props.theme.inputForm};
  color: ${props => props.theme.textColor};
  font-weight: ${props => props.theme.weight.regular};
  font-size: 1.1em;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.weight.light};
  height: 44px;
  margin: 20px auto 0 auto;
  transition: all .2s;

  svg {
    fill: ${props => props.theme.colorIcon};
    margin: 0 10px 0 0;
    width: 21px;
    height: 21px;
  }

  &:active,
  &:focus,
  &:hover {
    span {
      color: ${props => props.theme.colorHoverIcon};
    }

    svg {
      fill: ${props => props.theme.colorHoverIcon};
    }
  }

  @media(min-width:1024px) {
    margin: 22px auto;
    font-size: 1em;
  }
`

export const ListTags =styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media(min-width:1024px) {
    width: 400px;
    margin: 0 auto;
  }

  @media(min-width:1200px) {
    width: auto;
    margin: auto;
  }
`

export const ButtonStyled = styled(Button)`
  padding: 7px 25px;
  width: initial;
  font-size: 1em;
  margin: 5px 5px 5px 0;
  font-weight: ${props => props.theme.weight.regular};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  cursor: default;

  &:hover,
  &:active,
  &:focus {
    background: ${props => props.color + '15'};
  }

  @media(min-width:1200px) {
    margin: 5px 10px 5px 0;
  }
`

export const InputStyled = styled(Input)`
  margin: 0 10px;
  width: fit-content;
  text-align: center;
  letter-spacing: 1px;
  padding: 20px 21px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width:768px) {
    flex-direction: row;
  }

  ${svgMixin};

  label {
    margin: 0 0 10px 0;

    @media(min-width:768px) {
      margin: 0 10px 0 0;
      width: max-content;
    }
  }

  svg {
    width: 34px;
    display: none;

    @media(min-width:768px) {
      display: block;
    }
  }
`

export const CommentSVGContainer = styled.div`
  position: relative;
`

export const CommentStyled = styled(Comment)`
  font-size: 0.8em;
  top: 40px;
`
