import styled, { css } from 'styled-components'
import { PrimaryTitle, SecondaryTitle, TextBody, Button } from './../../../themes/externalRecyclableStyles'

/* Cover page */

export const CoverPage = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fangelv2.appspot.com/o/Assets%2FLanding%2FBackground.png?alt=media&token=dac11772-50b8-4e35-8b27-aa7e9258fc7a');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: auto;
  max-height: 100vh;
  background-position-x: center;

  img {
    display: none;
  }

  @media(min-width:1200px) {
    min-height: 100vh;

    img {
      display: block;
      position: absolute;
      width: 450px;
      right: 0;
    }
  }
`

export const Container = styled.div`
  padding: 44% 0 0 0;

  @media(min-width:768px) {
    padding: 35% 0 0 0;
  }

  @media screen and (min-width: 768px) and (orientation : landscape) {
    padding: 23% 0 0 0;
  }

  @media(min-width:1024px) {
    padding: 40% 0 0 0;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    padding: 22% 0 0 0;
  }

  @media(min-width:1200px) {
    padding: 2% 0 0 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const TitleStyledCover = styled(PrimaryTitle) `
  margin: 0 0 30px 0;
  text-align: center;

  @media(min-width:1200px) {
    margin: 0 0 20px 0;
    text-align: start;
  }
`


export const TextStyledCover = styled(TextBody) `
  margin: 0 0 54px 0;
  text-align: center;

  @media(min-width:1024px) {
    margin: 0 0 70px 0;
  }

  @media(min-width:1200px) {
    width: 600px;
    text-align: start;
  }
`

export const ButtonsContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  padding: 0 0 22% 0;

  @media(min-width:768px) {
    width: 300px;
    padding: 0 0 25% 0;
  }

  @media screen and (min-width: 768px) and (orientation : landscape) {
    padding: 0 0 16% 0;
  }

  @media(min-width:1024px) {
    padding: 0 0 28% 0;
  }

  @media screen and (min-width: 1024px) and (orientation : landscape) {
    padding: 0 0 18% 0;
  }

  @media(min-width:1200px) {
    padding: 0;
    margin: 0;
    display: flex;
    width: auto;
  }
`

export const ButtonStyledCover = styled(Button) `
  margin: 0 0 16px 0;

  @media(min-width:1200px) {
    margin: 0 20px 0 0;
    width: max-content;
  }
`

/* Body page */

export const ListContainer = styled.ul`
  margin: 0 0 40px 0;

  li {
    font-size: 0.97em;
    margin: 0 0 15px 0;
    line-height: 1.45em;
    display: flex;

    &::before {
      content: '';
      display: block;
      width: 0.5em;
      height: 0.5em;
      margin: 5px 10px 0 0;
      background: ${props => props.theme.colorSuccess};
      border-radius: 50%;
    }
  }
`

export const Box = styled.div`
  width: 100%;
  height: 300px;
  background: peru;

  @media(min-width:1200px) {
    margin: 60px 0 0 0;
  }
`

export const SubtitleStyled = styled(SecondaryTitle) `
  margin: 60px 0 25px 0;

  @media(min-width:768px) {
    margin: 60px 0 35px 0;
  }
`

export const TextStyled = styled(TextBody) `
  margin: 0 0 20px 0;

  @media(min-width:768px) {
    margin: 0 0 25px 0;
  }
`

export const ButtonStyled = styled(Button) `
  margin: 40px 0 0 0;

  @media(min-width:768px) {
    margin: 40px auto 0 auto;
    width: 300px;
  }

  ${props => props.mobile && css`
    display: block;

    @media(min-width:1200px) {
      display: none;
    }
  `}

  ${props => props.desktop && css`
    display: none;

    @media(min-width:1200px) {
      display: block;
      margin: 40px 0 0 0;
    }
  `}
`

/* Desktop */

export const DesktopGridRight = styled.div`
  display: block;

  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`

export const DesktopGridLeft = styled.div`
  display: block;

  @media(min-width:1200px) {
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 1fr 1fr;
    gap: 100px;

    .left {
      grid-area: right;
    }

    .right {
      grid-area: left;
    }
  }
`
