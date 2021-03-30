import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { useFirestore } from 'reactfire'
import Wrapper from './../general/Wrapper'
import QuizCard from './QuizCard'
import { sendPreferences } from './algorithms/SendPreferences' 
import { listQuiz } from './ListQuiz.json'
import { ExternalsWrapper } from './../../themes/externalRecyclableStyles'
import { TextStyled, SubtitleStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { CardsContainer, Card, ButtonStyled } from './styles/sQuizMain'

const QuizMain = () => {
  const [quiz, setQuiz] = useState(listQuiz);
  const [cartQuiz, setCartQuiz] = useState([])
  const history = useHistory()
  const firestore = useFirestore()

  // Este es un id de prueba
  const idTest = "B8OtUWc9XoWdrHO43JivtbvdIan2"

  const isDisableButton = cartQuiz.length > 2 ? false: true

  const redirectToHome = () => {
    history.push("/home")
  }

  const dataCategory = cartQuiz.map(item => {
    return item.category
  })

  return (
    <>
      <Wrapper>
        <ExternalsWrapper>
        <form>
          <SubtitleStyled>Escoge tus gustos e intereses</SubtitleStyled>
          <CardsContainer>
            {
              quiz.map(card =>  <QuizCard 
                                  key={card.id} 
                                  {...card} 
                                  quiz={quiz} 
                                  cartQuiz={cartQuiz} 
                                  setCartQuiz={setCartQuiz}
                                />)
            }
          </CardsContainer>
          <ButtonStyled 
            primary 
            type="button"
            disabled={isDisableButton} 
            onClick={() => sendPreferences(idTest, firestore, dataCategory, redirectToHome)}
          >¡Términe!</ButtonStyled>
        </form>
        </ExternalsWrapper>
      </Wrapper>
    </>
  );
}

export default QuizMain;
