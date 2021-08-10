import styled from 'styled-components'

export const ProfilesContainer = styled.div`
  margin: 30px 0 0 0;
  display: flex;
`

export const Profile = styled.div`
  margin: 0 70px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all .2s;

  &:last-child {
    margin: 0;
  }
  
  svg,
  img {
    fill: ${props => props.theme.colorIcon};
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin: 0 0 10px 0;
  }
  
  p {
    max-width: 100px;
    cursor: pointer;
  }

  &:hover {
    p {
      color: ${props => props.theme.colorbrandSolid};
    }
    
    svg {
      fill: ${props => props.theme.colorbrandSolid};
    }
  }
  
  @media(min-width:768px) {
    svg,
    img {
      width: 80px;
      height: 80px;
      margin: 0 0 15px 0;
    }

    p {
      max-width: 130px;
    }
  }

  @media(min-width:768px) {
    margin: 0 80px 0 0;
  }
`
