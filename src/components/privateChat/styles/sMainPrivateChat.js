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

  a {
    color: inherit;
    &:hover {
      color: inherit;
    }
  }

  @media(min-width:1200px) {
    overflow: auto;
    height: 400px;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
      width:3px;
      background: ${props => props.theme.colorScrollCommentBar};
    }

    &::-webkit-scrollbar-button:increment,
    &::-webkit-scrollbar-button {
      display: none;
    } 

    &::-webkit-scrollbar:horizontal {
      height: 3px;
      background: ${props => props.theme.colorScrollCommentBar};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colorBar};
      border-radius:10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 3px;  
    }
  }
`

export const OthersContainer = styled.div`
  display: none;

  @media(min-width:1200px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    svg {
      width: 350px;
      height: auto;
      fill: ${props => props.theme.colorbrandSolid};
    }

    p {
      margin: 20px 0 0 0;
      font-size: .95em;
      max-width: 450px;
      text-align: center;
      line-height: 1.55em;
    }
  }
`
