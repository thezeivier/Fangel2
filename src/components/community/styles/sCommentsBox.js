import styled from 'styled-components'

export const CommentsContainer = styled.section`
  margin: 10px 0 0 0;
  font-family: ${props => props.theme.secondaryFont};
  flex: 1 0 auto;
  height: 100px;
  overflow: auto;
  position: relative;

  @media (orientation : landscape) {
    height: 150px;
  }

  @media(min-width:768px) {
    margin: 10px 0 15px 0;
    overflow-x: hidden;
  }

  @media(min-width:768px) and (orientation : landscape) {
    height: 170px;
  }

  @media(min-width:1200px) {
    height: 350px;
    position: relative;
    z-index: 50;
    padding: 0 10px;
  }

  @media(min-width:1200px) {
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

export const Transperent = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  top: 0;
  left: 0;
/*   background: ${props => props.theme.colorShadowBox}; */
  z-index: 100;

  @media(min-width:1200px) {
    height: inherit;
    z-index: 1;
    background: ${props => props.theme.colorCommetBox};
    border-radius: 10px;
  }
`
