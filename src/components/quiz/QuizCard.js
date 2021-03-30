import React from 'react';
import { Card, LabelStyled } from './styles/sQuizMain'

const QuizCard = ({ background, category }) => {
  return (
    <LabelStyled htmlFor={category}>
      <input type="checkbox" id={category} value={category} />
      <Card className="cardQuiz">
        <img src={background} alt={category} />
        <h5>{category}</h5>
      </Card>
    </LabelStyled>
  );
}

export default QuizCard;
