import styled from 'styled-components'
import { TextBody } from './../../../themes/externalRecyclableStyles'

export const Chat = styled.li`
  @media(min-width:1200px) {
    &:hover {
      background: rgba(39, 174, 96, 0.05);
    }
  }
`

export const ChatContainer = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;

  @media(min-width:1200px) {
    margin: 0;
    padding: 10px 20px;
  }
`

export const ProfileContainer = styled.div`
  margin: 0 10px 0 0;

  svg {
    width: auto;
    height: 50px;
    fill: ${props => props.theme.textColor};
  }
`

export const UserDescription = styled.div`
  font-family: ${props => props.theme.secondaryFont};
  width: 100%;

  h5 {
    font-size: 1.1em;
    margin: 0 0 3px 0;
  }

  span {
    font-size: .98em;
    color: ${props => props.theme.smallText};
    margin: 2px 0 0 10px;
    font-weight: ${props => props.theme.weight.light};
  }

  @media(min-width:1200px) {
    h5 {
      font-size: 1.03em;
      font-weight: ${props => props.theme.weight.semiMedium};
    }

    span {
      font-size: .9em;
    }
  }
`

export const TextStyled = styled(TextBody)`
  font-size: .98em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;

  @media(min-width:1200px) {
    font-size: .9em;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`
