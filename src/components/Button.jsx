import React from 'react'
export default function Button({ text, handleNext, handleSubmit }) {
  return (
    <div className='w-full flex justify-end mt-5 px-3'>
      <button
        className="blue_btn"
        onClick={() => {
          !handleSubmit ? handleNext() : handleSubmit()
        }}
      >
      {text}
      </button>
    </div>

  )
}
