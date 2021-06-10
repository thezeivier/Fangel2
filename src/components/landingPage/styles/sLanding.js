import styled, { css, keyframes } from 'styled-components'
import { PrimaryTitle, SecondaryTitle, TextBody, Button } from './../../../themes/externalRecyclableStyles'

const FadedContainer = keyframes`
  from {
    opacity: 0;
    transform: transalteX(10px);
  }

  to {
    opacity: 1;
    transform: transalteX(0px);
  }
`

/* Cover page */

export const CoverPage = styled.div`
  background-image: url('https://firebasestorage.googleapis.com/v0/b/fangelv2-300300.appspot.com/o/landingPage%2Fhuman.png?alt=media&token=8e3befd0-1662-4b97-80ee-2f63ea1d39b6');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: auto;
  max-height: 100vh;
  background-position-x: center;

  svg {
    display: none;
  }

  @media(min-width:1200px) {
    min-height: 100vh;

    svg {
      display: block;
      position: absolute;
      width: 450px;
      right: 0;
    }
  }
`

export const Container = styled.div`
  padding: 44% 0 0 0;
  animation-delay: .2s;
  animation: ${FadedContainer} .5s linear;
  will-change: transition, opacity;
  height: 100vh;

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
    height: auto;
  }

  @media(min-width:1200px) {
    height: 100vh;
    padding: 2% 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const TitleStyledCover = styled(PrimaryTitle) `
  margin: 0px 0px 9.3vh;
  text-align: center;
  font-size: 2.2em;
  font-family: ${props => props.theme.secondaryFont};

  @media(min-width:1200px) {
    margin: 0 0 20px 0;
    text-align: start;
    font-size: 3.021em;
    line-height: 1.37em;
    width: 50%;
  }
`


export const TextStyledCover = styled(TextBody) `
  margin: 0 0 10.3vh 0;
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

export const FangelPromotionContainer = styled.div`
  img {
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
  }

  @media(min-width:768px) {
    img {
      width: 65%;
    }
  }

  @media(min-width:1200px) {
    img {
      width: 100%;
      margin: 90px 0 0 0;
    }
  }
`

export const SubtitleStyled = styled(SecondaryTitle) `
  margin: 0 0 30px 0;
`

export const TextStyled = styled(TextBody) `
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

export const SectionContainer = styled.section`
  margin: 80px 0 40px 0;

  @media(min-width:1200px) {
    margin: ${props => props.margin || '90px 0 0 0'};
  }
`

/* Desktop */

export const DesktopGridRight = styled.section`
  display: block;

  @media(min-width:1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
  }
`

export const ListProductsContainer = styled.ul`
  li:nth-child(1) {
    margin: 0 0 30px 0;
  }

  @media(min-width:768px) {
    margin: 35px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }

  @media(min-width:1024px) {
    column-gap: 80px;
  }
`

export const DesktopGridLeft = styled.div`
  display: initial;

  @media(min-width:1200px) {
    width: 1200px;
    margin: 90px auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 100px;
  }
`

export const VideoContainer = styled.div`
  position: relative;

  video {
    width: 100%;
    object-fit: cover;
    height: 63vh;
    line-height: 0;
  }

  h3 {
    position: absolute;
    top: 28vh;
    font-weight: ${props => props.theme.weight.medium};
    font-size: 2.2em;
    line-height: 1.5em;
    left: 20px;
    color: ${props => props.theme.colorWhite};
    display: block;
    width: 50%;
  }

  .videoDiscover {
    height: 70vh;
  }

  .backgroundVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background: #00000054;
  }


  @media(min-width:768px) {
    h3 {
      font-size: 3.2em;
      left: 5%;
      top: 31vh;
    }
  }

  @media(min-width:1024px) {
    video {
      height: 61vh;
    }

    .videoDiscover {
      height: 70vh;
    }
  }

  @media(min-width:1200px) {

    video {
      height: 100%;
      border-radius: 10px;
    }

    h3 {
      top: 50vh;
    }

    .backgroundVideo {
      height: 80vh;
      top: 90px;
    }

    .videoDiscover {
      margin: 90px 0 0 0;
      border-radius: 0;
      height: 80vh;
    }
  }
`

export const CodeContainer = styled.div`
  margin: 40px 0 0 0;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0 0 15px 0;
  }

  h3 {
    font-size: 1.2em;
    font-weight: 600;
    color: ${props => props.theme.colorbrandSolid};
  }

  a {
    display: inline-block;
    text-decoration: underline;
    color: ${props => props.theme.colorbrandSolid};
  }

  ${props => props.desktop && css`
    display: none;

    @media(min-width:1200px) {
      display: block;
    }
  `}

  ${props => props.mobile && css`
    display: flex;

    @media(min-width:1200px) {
      display: none;
    }
  `}
`


