import styled, { css } from 'styled-components'
import { Button, SecondaryTitle, TextBody, PrimaryTitle } from './../../../themes/externalRecyclableStyles'

//Support
export const ListBoxOptions = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
`

export const BoxOption = styled.li`
  padding: 20px;
  width: -webkit-fill-available;
  margin: 0 0 22px 0;
  background: ${props => props.theme.inputForm};
  display: flex;
  justify-content: center;
  border-radius: 4px;
  transition: .2s;

  &:hover,
  &:active,
  &:focus {
    background-color: ${props => props.theme.colorHoverInput};
  }

  @media(min-width:768px) {
    padding: 30px;
  }

  span {
    color: ${props => props.color};
    font-size: 1.05em;
    font-weight: ${props => props.theme.weight.semiMedium};

    @media(min-width:768px) {
      font-size: 1.2em;
    }

    @media(min-width:1200px) {
      font-size: 1.35em;
    }
  }
`

//Report a problem
export const OnlyDesktop = styled.div`
  a,
  span {
    color: ${props => props.theme.colorbrandSolid};
    
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colorHoverIcon};
      text-decoration: underline;
    }
  }

  @media(min-width:1200px) {
    width: 800px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 0 30px 0;
`

export const ButtonStyled = styled(Button)`
  border-radius: 10px;
  padding: 11px 14px;

  ${props => props.left && css`
    margin: 0 12px 0 0;
    width: -webkit-fill-available;
  `}

  ${props => props.right && css`
    width: initial;
  `}

  @media(min-width:410px) {
    padding: 11px 17px;
  }

  @media(min-width:768px) {
    padding: 11px 48px;
  }

  @media(min-width:1024px) {
    ${props => props.left && css`
      width: initial;
    `}
  }
`

//Faqs
export const TextContainer = styled.div`
  margin: 23px 0 0 0;

  @media(min-width:768px) {
    margin: 25px 0 0 0;
  }

  @media(min-width:1200px) {
    margin: 22px 0 0 0;
  }

  ${props => props.top10 && css`
    margin: 10px 0 0 0;

    @media(min-width:768px) {
      margin: 10px 0 0 0;
    }
  `}

`

export const DetailsContainer = styled.details`
  background: ${props => props.theme.inputForm};
  padding: 10px 4px;
  margin: 15px 0 10px 0;
  border-radius: 10px;
  transition: all .2s;

  @media(min-width:768px) {
    padding: 20px 12px;
  }

  @media(min-width:1024px) {
    padding: 20px;
    margin: 15px 0 20px 0;
  }
`

export const SubtitleSmallStyled = styled(SecondaryTitle)`
  font-size: 1.19em;
  color: ${props => props.theme.colorbrandSolid};
  position: relative;
  padding: 0 0 0 25px;
  margin: 0 0 9px 0;

  @media(min-width:768px) {
    padding: 0 0 0 30px;
  }

  @media(min-width:1200px) {
    padding: 0 0 0 32px;
    margin: 0 0 1px 0;
  }

  ${props => props.question && css`
    &::before {
      content: 'P:';
      color: inherit;
      font-size: inherit;
      position: absolute;
      left: 0;
    }
  `}

/*   @media(min-width:1024px) {
    margin: 30px 0 0 0;
  } */
`

export const TextStyled = styled(TextBody)`
  margin: 0;
  font-size: 1.08em;

  b {
    font-weight: ${props => props.theme.weight.semiMedium};
  }

  span {
    color: ${props => props.theme.colorbrandSolid};
    
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  ${props => props.secondParagraph && css`
    margin: 10px 0 0 0;
  `}

  @media(min-width:1024px) {
    font-size: 1.1em;
  }
`

export const TextList = styled.ul`
  li {
    list-style: disc;
    margin: 0 0 5px 15px;

    @media(min-width:1200px) {
      margin: 0 0 7px 15px;
    }
  }
`

//Terms
export const ContainerSection = styled.section`
  margin: 23px 0 0 0;
`
