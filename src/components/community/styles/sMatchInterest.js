import styled from 'styled-components'

export const ContainerGeneral = styled.section`
  margin: 10px 0 0 0;
  cursor: default;

  p {
    margin: 0 0 5px 0;
  }

  @media(min-width:768px) {
    margin: 20px 0 10px 0;
  }

  @media(min-width:1200px) {
    margin: 0 0 5px 0;

    p {
      margin: 0 0 10px 0;
    }
  }
`

export const BoxInterestContainer = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 0 0 3px 0;

  @media(min-width:1200px) {
    padding: 0 0 10px 0;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar-button:increment,
    &::-webkit-scrollbar-button {
      display: none;
    } 

    &::-webkit-scrollbar:horizontal {
      height: 3px;
      background: tranparent;
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

/* CardMatchInterest */

export const BoxContainer = styled.div`
  background: ${props => props.theme.smallText + '35'};
  padding: 10px 14px;
  border-radius: 20px;
  width: max-content;
  margin: 0 10px 0 0;

  span {
    font-weight: 300px;
    font-size: .898em;
  }

  @media(min-width:1200px) {
    span {
      font-weight: 300px;
      font-size: .85em;
    }
  }
`
