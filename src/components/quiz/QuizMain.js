import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router'
import { useFirestore } from 'reactfire'
import Wrapper from './../general/Wrapper'
import QuizCard from './QuizCard'
import { AppContext } from '../../App'
import { sendPreferences } from './algorithms/SendPreferences' 
import { listQuiz } from './ListQuiz.json'
import { ExternalsWrapper, TextBody } from './../../themes/externalRecyclableStyles'
import { SubtitleStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { CardsContainer, ButtonStyled, NumberCheckContainer, SubtitleStyledBackground } from './styles/sQuizMain'

const QuizMain = () => {
  const [quiz, setQuiz] = useState(listQuiz);
  const [cartQuiz, setCartQuiz] = useState([])
  const history = useHistory()
  const firestore = useFirestore()
  const userApp = useContext(AppContext)

  const id = userApp ? userApp.authState.uid : ""

  const isDisableButton = cartQuiz.length > 2 ? false: true

  const redirectToHome = () => {
    history.push(userApp.routeProviderRoom.routeShareRoom ? userApp.routeProviderRoom.routeShareRoom  : "/")
  }

  const dataCategory = cartQuiz.map(item => {
    return item.category
  })

  const [countQuiz, setCountQuiz] = useState(0);

  const addCount = () => setCountQuiz(countQuiz + 1)

  const subtractCount = () => setCountQuiz(countQuiz - 1)

  return (
    <>
      <Wrapper>
        <NumberCheckContainer><span>Categorias:</span><p>{countQuiz}</p></NumberCheckContainer>
        <ExternalsWrapper>
          <form>
            <SubtitleStyledBackground>Escoge tus gustos e intereses</SubtitleStyledBackground>
            <TextBody>5 categorias como máximo</TextBody>
            <CardsContainer>
              {
                quiz.map(card =>  <QuizCard key={card.id} {...card} quiz={quiz} cartQuiz={cartQuiz} setCartQuiz={setCartQuiz} addCount={addCount} subtractCount={subtractCount} />)
              }
            </CardsContainer>
            {
              isDisableButton ? 
                <ButtonStyled type="button" disabled>¡Términe!</ButtonStyled> :
                <ButtonStyled  primary  type="button" onClick={() => sendPreferences(id, firestore, dataCategory, redirectToHome)}>¡Términe!</ButtonStyled>
            }
          </form>
        </ExternalsWrapper>
      </Wrapper>
    </>
  );
}

export default QuizMain;
