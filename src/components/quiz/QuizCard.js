import React, { useState } from 'react';
import { Card, LabelStyled } from './styles/sQuizMain'

const QuizCard = ({ background, id, category, quiz, cartQuiz, setCartQuiz }) => {
  const [checkState, setCheckState] = useState(false)
  const [isActiveCard, setIsActiveCard] = useState(true)
  const maxLengthQuiz = cartQuiz.length >= 5

  // Selecciona el Card mediante su id y lo añade al cartQuiz
  // Se deja de almacenar en el cartQuiz si se excede del límite 
  const selectCard = id => {
    if(maxLengthQuiz) {
      setIsActiveCard(false)
    } else {
      const quizObject =  quiz.filter(itemQuiz => itemQuiz.id === id)[0]
      setCartQuiz(prevState => [
        ...prevState,
        quizObject
      ])
      isDisabled()
    }
  }
  
  // Remueve del cartQuiz el Card no deseado y luego lo actualiza
  const removeCard = id => {
      const quizObject = cartQuiz.filter(itemCart => itemCart.id !== id)
      setCartQuiz(quizObject)
      isDisabled()
  }

  // Invierte el estado al añadir y remover en el cartQuiz
  const isDisabled = () => {
    checkState ? setCheckState(false) : setCheckState(true)
  }

  return (
    <LabelStyled for={category} active={isActiveCard}>
      {!checkState ?
        <input 
          type="checkbox" 
          id={category} 
          value={category} 
          disabled={maxLengthQuiz && !checkState} 
          onClick={() => selectCard(id)}
        /> : 
        <input 
          type="checkbox" 
          id={category} 
          value={category} 
          onClick={() => removeCard(id)}
        />
      }
      <Card className="cardQuiz">
        <img src={background} alt={category} />
        <h5>{category}</h5>
      </Card>

    </LabelStyled>
  );
}

export default QuizCard;
