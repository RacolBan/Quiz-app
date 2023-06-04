import Questions from './Question'
import Header from './Header';
import Button from './Button';
import { useQuizContext } from '../context/quiz';
import { useState, useEffect } from 'react';
const Divide = () => {
  return (
    <hr className='mx-3 border-t-[0.1px] border-gray-800 hover:opacity-80'></hr>
  )
};
export default function Quiz() {
  const { state, dispatch } = useQuizContext();
  const index = state.currentQuestionIndex
  const lengthQuestion = state.questions.length
  const [time, setTime] = useState(0)
  const upTime = () => {
    setTime(prev => prev + 1);
  }
  useEffect(() => {
    const timeId = setInterval(upTime, 1000)
    return () => clearInterval(timeId)
  },[])
  const handleNext =() => {
   dispatch({ type: "NEXT_QUESTION" })
  }
  const handleSubmit =() => {
    dispatch({ type: "NEXT_QUESTION" })
    dispatch({ type: "COUNT_TIME", payload: time})
  }
  return (
    <>
      <div className='prompt' >
        <Header index={index} length={lengthQuestion} time={time} />
        <Divide />
        <Questions />
        { index === lengthQuestion - 1 
        ? <Button text='Submit' handleSubmit={handleSubmit} />
        : <Button text='Next' handleNext={handleNext} />
        }
       
      </div>
    </>
  )
}

