import styled from 'styled-components'

export const Header = styled.header`
  width: -webkit-fill-available;
  border-bottom: 1px solid ${props => props.theme.colorLine};
  flex: 0 0 auto;
`

export const Container = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(min-width: 400px){
    padding: 12px 0;
  }

  @media(min-width: 768px){
    padding: 17px 0;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    svg {
      fill: ${props => props.theme.colorIcon};

      &:nth-child(1) {
        margin: 0 15px 0 0;
        width: 33px;
      }

      &:nth-child(2) {
        width: 30px;
      }
    }
  }

  @media(min-width: 400px){
    a {
      svg {
        &:nth-child(1) {
          margin: 0 21px 0 0;
          width: 35px;
        }

        &:nth-child(2) {
          width: 32px;
        }
      }
    }
  }

  @media(min-width: 768px){
    a {
      svg {
        &:nth-child(1) {
          width: 36px;
        }
      }
    }
  }

  @media(min-width: 1024px){
    a {
      svg {
        &:nth-child(1) {
          width: 37px;
        }
      }
    }
  }
`
