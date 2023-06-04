import { useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import { useQuizContext } from './context/quiz.jsx';
import Review from './components/Review';
function App() {
  const { state, dispatch } = useQuizContext();
  const handleStart = (e) => {
    e.preventDefault();
    dispatch({type:"IS_START"})
  };
  useEffect(() => {
    const quizArr = async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await response.json();
      dispatch({ type: 'FETCH', payload: data.results })
      dispatch({ type: 'ANSWERS' })
    }
    quizArr();
  }, [state.hasRestart])
  const questions = state.questions;
  
  const minute = Math.floor(state.countTime / 60);
  const updSecond = state.countTime - (minute * 60);
  return (
    <>
      <div className='w-full h-screen flex-center'>
        {state.showResults && !state.showReview &&(
          <div className="results">
            <div className="font-bold text-xl">Congratulations!</div>
            <div className="flex flex-col justify-center items-center">
              <div>You have completed the quiz.</div>
              <div className='text-center'>
                You've got <span className='text-blue-600 font-semibold'>{state.correctAnswersCount}</span>  of &nbsp;
                <span className='text-blue-600 font-semibold'>{state.questions.length}</span> in {minute ? `${minute} minute ${updSecond} seconds` : `${updSecond} seconds` }
              </div>
             
            </div>
            <div
              onClick={() => dispatch({ type: "RESTART" })}
              className="btn cursor-pointer bg-blue-500 text-white mt-6 py-1.5 px-4 "
            >
              Restart
            </div>
            <div
              onClick={() => dispatch({ type: "IS_REVIEW" })}
              className="btn cursor-pointer bg-rose-600 text-white mt-1 py-1.5 px-4"
            >
              Review 
            </div>
          </div>
        )}
        {state.showResults && state.showReview &&(
          <>
            <Review />
          </>
        )}
        {!state.showResults && (
          <>
            {
              state.isStart && questions.length > 0
                ? <Quiz />
                : <div>
                  <button onClick={handleStart} disabled={questions.length === 0} className='white_btn'>Start</button>
                </div>
            }
          </>
        )}
      </div>
    </>
  )
}

export default App
