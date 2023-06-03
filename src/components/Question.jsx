import { useEffect, useState } from 'react'
import { useQuizContext } from '../context/quiz';
import BoxAnswer from './BoxAnswer'
export default function Question() {
  const { state, dispatch } = useQuizContext();
  const currentQuestion = state.questions[state.currentQuestionIndex]
  const answers = state.answers;
  return (
    <div className=' mt-5 mx-3'>
      <h3 className='mb-6 font-semibold text-gray-600 hyphens-auto'>{currentQuestion.question}</h3>
      {
        answers && answers.map((answer, index) => (
          <BoxAnswer
            answerText={answer}
            currentAnswer={state.currentAnswer}
            correctAnswer={currentQuestion.correct_answer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))
      }
    </div>
  )
}
