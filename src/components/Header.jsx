import React from 'react'
import { Clock } from '../assets/icon/Clock'
import { useQuizContext } from '../context/quiz';
export default function Header({ length, index, time }) {
  const { state } = useQuizContext();
  let minute = state.showReview ? Math.floor(state.countTime / 60) : Math.floor(time / 60);
  let updSecond = state.showReview ? state.countTime - (minute * 60) : time - (minute * 60);
  
  return (
    <div className='flex justify-between items-center my-2 mx-3'>
      <div className='font-satoshi'>{index + 1} of {length} question</div>
      <div className='flex justify-evenly items-center  bg-blue-100/90 px-3 mt-1.5 rounded-xl'>
        <Clock width='2em' height='2em' className='text-blue-500' />
        <p className='mx-2'>{`${minute} : ${updSecond}`}</p>
      </div>
    </div>
  )
}
