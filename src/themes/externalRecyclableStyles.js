import styled from 'styled-components'

export const ExternalsWrapper = styled.div`
  display: block;
  text-align: center;
  margin: auto;
`

export const SecondaryTitle = styled.h2`
  font-family: ${props => props.theme.primaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.semiMedium};
  font-size: 25px;
  line-height: 35px;
  text-align: center;
  flex: none;
  margin: 0.4em auto;

  @media(min-width: 1100px){
    font-size: 34px;
    line-height: 45px;
  }
`

export const BodyText = styled.p`
  font-family: ${props => props.theme.secondaryFont};
  font-style: normal;
  font-weight: ${props => props.theme.weight.regular};
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  flex: none;
  margin: 0.3em auto;

  @media(min-width: 1100px){
    font-size: 16px;
    line-height: 27px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    position: static;
    background: ${props => props.theme.inputForm};
    color: ${props => props.theme.textColor};
    width: 29.5em;
    height: 44px;
    flex: none;
    flex-grow: 0;
    border: none;
    border-radius: 20px;
    padding-left: 21px;
    margin: 20px auto;
    outline: none;
  }

  input::placeholder {
    color: ${props => props.theme.inputPlaceholder};
    font-family: ${props => props.theme.secondaryFont};
    font-style: normal;
    font-weight: ${props => props.theme.weight.light};
    font-size: 16px;
    line-height: 27px;
  }
`