import styled from 'styled-components'
import { PrimaryTitle } from './../../../themes/externalRecyclableStyles'

export const GridOnlyDesktop = styled.div`
  display: block;

  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 40% 1fr;
  }
`

export const ChatsContainer = styled.section`
  @media(min-width:1200px) {
    border: 1px solid ${props => props.theme.colorLine};
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;

  svg {
    width: 18px;
    fill: ${props => props.theme.textColor};
    margin: 0 14px 0 0;
  }

  @media(min-width:1200px) {
    svg {
      display: none;
    }
  }
`

export const TitleStyled = styled(PrimaryTitle)`
  font-size: 1.9em;
  margin: 0 0 20px 0;

  @media(min-width:1200px) {
    font-size: 1.7em;
    margin: 0 0 10px 0;
    padding: 15px 20px;
    border-bottom: 1px solid ${props => props.theme.colorLine};
    width: 100%;
  }
`

export const ChatList = styled.ul`
  padding: 0;
  height: 62vh;
`
