import styled from 'styled-components'
import { PrimaryTitle } from './../../../themes/externalRecyclableStyles'
import { TitleContainer } from './sMainPrivateChat'

export const Section = styled.section`
  padding: 72px 0 0 0;

  @media(min-width:768px) {
    padding: 99px 0 0 0;
  }

  @media(min-width:1200px) {
    padding: 0;

    .mainWrapper {
      width: auto; //para reducir los 1200px
    }
  }
`

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 100%;

  @media(min-width:1200px) {
    display: ${props => props.inGridDesktop || 'none'};
    border: 1px solid ${props => props.theme.colorLine};
    border-left: none;
  }
`

export const HeaderChat = styled.div`
  flex: 0 0 auto;
  padding: 0 0 12px 0;
  border-bottom: 1px solid ${props => props.theme.colorLine};

  @media(min-width:768px) {
    padding: 0 0 20px 0;
  }

  @media(min-width:1200px) {
    padding: 14.5px 0;
  }
`

export const TitleContainerStyled = styled(TitleContainer)`
  align-items: center;
`

export const UserChating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  color: ${props => props.theme.textColor};

  svg {
    width: 29px;
    margin: 0 8px 0 0;
    cursor: pointer;
  }

  @media(min-width:1200px) {
    width: 100%;
    
    svg {
      display: block;
      width: 32px;
      margin: 0 10px 0 0;
    }
  }
`

export const TitleStyled = styled(PrimaryTitle)`
  font-size: 1.24em;

  @media(min-width:1200px) {
    font-size: 1.12em;
  }
`

export const MainChat = styled.div`
  flex: 1 0 auto;
  margin: 10px 0;
  max-width: 100%;

  @media(min-width:1200px) {
    margin: 15px 20px;
  }
`

export const FooterChat = styled.div`
  flex: 0 0 auto;

  @media(min-width:1200px) {
    margin: 0 20px 15px 20px;
  }
`
