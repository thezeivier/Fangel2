import React, { useState } from 'react';
import Wrapper from './../general/Wrapper'
import QuizCard from './QuizCard'
import { listQuiz } from './ListQuiz.json'
import { ExternalsWrapper } from './../../themes/externalRecyclableStyles'
import { TextStyled, SubtitleStyled } from './../../pages/signInAndUp/styles/sGlobalForm'
import { CardsContainer, Card, ButtonStyled } from './styles/sQuizMain'

const QuizMain = () => {
  const [quiz, setQuiz] = useState(listQuiz);

  return (
    <>
      <Wrapper>
        <ExternalsWrapper>
        <form>
          <SubtitleStyled>Escoge tus gustos e intereses</SubtitleStyled>
          <CardsContainer>
            {
              quiz.map((card) => <QuizCard key={card.id} {...card} />)
            }
          </CardsContainer>
          <ButtonStyled primary type="submit" >¡Términe!</ButtonStyled>
        </form>
        </ExternalsWrapper>
      </Wrapper>
    </>
  );
}

export default QuizMain;
