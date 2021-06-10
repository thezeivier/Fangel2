import styled, {css} from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;

  @media(min-width:768px) {
    column-gap:15px;
  }
`

export const AddCardContainer = styled.li`
  background: ${props => props.colorbackground};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  height: 100%;
  min-height: 172px;
  max-height: 305px;
  cursor: pointer;
  padding: 10px;
  transition: .2s;
  
  svg {
    transition: all .2s;
    will-change: transform;
    fill: ${props => props.theme.colorWhite};
    width: 38px;
    margin: 0 0 14px 0;
  }

  span {
    transition: all .2s;
    color: ${props => props.theme.colorWhite};
    font-style: normal;
    font-weight: ${props => props.theme.weight.semiMedium};
    font-size: 1.15em;
    line-height: 1.5em;
    text-align: center;
  }

  &:hover {
    background: ${props => props.colorhover};

    svg {
      transform: scale(1.14);
    }
  }

  @media(min-width:768px) {
    min-height: 210px;
  }

  @media(min-width:1200px) {
    min-height: 220px;
  }
`

export const CardsList = styled.ul`
  display: block;

  @media(min-width:1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;

    li:first-child {
      margin: 0 !important;
    }

    ${({isAdmin}) => 
      isAdmin &&
      css`
        li:nth-child(2n + 1) {
        margin: -240px 0 0 0;
      }`
    }

  }

  @media(min-width:1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 65px;

    li:nth-child(2n + 1) {
      margin: 0;
    }

    ${({isAdmin}) => 
      isAdmin &&
      css`
        li:nth-child(3n + 1) {
         margin: -260px 0 0 0;
        }
      `
    }
  }
`

export const EndCercle = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 50%;
  margin: 50px auto 0 auto;
`
