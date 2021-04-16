import styled from 'styled-components'
import { PrimaryTitle, TextBody } from './../../../themes/externalRecyclableStyles'

export const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 200px;
    height: auto;
    margin: 20px auto 30px auto;
  }

  a {
    color: ${props => props.theme.colorbrandSolid};
    font-size: 1.05em;

    &:hover {
      text-decoration: underline;
    }
  }

  @media(min-width:768px) {
    svg {
      width: 280px;
    }
  }

  @media(min-width:1024px) {
    svg {
      width: 270px;
    }
  }
`

export const TitleStyled = styled(PrimaryTitle)`
  margin: 0 0 20px 0;
  text-align: center;
`

export const TextBodyStyled = styled(TextBody)`
  text-align: center;
  margin: 0 0 40px 0;

  @media(min-width:1024px) {
    margin: 0 20% 50px 20%;
  }
`
