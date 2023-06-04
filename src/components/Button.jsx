import React from 'react'
import { useQuizContext } from '../context/quiz'
export default function Button({ text, handleNext, handleSubmit }) {
  const {state}  = useQuizContext();
  return (
    <div className='w-full flex justify-end mt-5 px-3'>
      <button
        className="blue_btn"
        onClick={() => {
          !handleSubmit ? handleNext() : handleSubmit()
        }}
        disabled={state.currentAnswer ? false : true}
      >
      {text}
      </button>
    </div>

  )
}
