import styled, { css } from 'styled-components'
import { Button } from './../../../themes/externalRecyclableStyles'
import { ButtonAccion } from './sMainProfile'
import { InputStyled } from './../../../pages/signInAndUp/styles/sGlobalForm'

export const ButtonEditAccion = styled(ButtonAccion)`
  margin: 20px auto 19px 0;

  @media(min-width:1024px) {
    // margin: 15px auto 25px auto;
    font-size: 1em;
  }
`

export const ListTags =styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width:1024px) {
    width: 400px;
    margin: 0 auto;
  }
`

export const ButtonStyled = styled(Button)`
  padding: 7px 25px;
  width: initial;
  font-size: 1em;
  margin: 5px;
  font-weight: ${props => props.theme.weight.regular};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  cursor: default;

  &:hover,
  &:active,
  &:focus {
    background: ${props => props.color + '15'};
  }
`

export const CharacterContainer = styled.div`
  font-size: 0.84em;
  margin: 0 21px 19px 0;
  text-align: right;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  
  img {
    margin: 0 10px 0 0;
    flex: 0 0 auto;
  }
`

export const InputSocialMedia = styled(InputStyled)`
  text-align: left;
  margin: 0;
  flex: 0 auto;
  height: 40px;
  padding: 16px;

  @media(min-width:1200px) {
    height: 44px;
  }
`
