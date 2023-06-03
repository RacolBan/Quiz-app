import Header from './Header';
import { useQuizContext } from '../context/quiz';
const Divide = () => {
  return (
    <hr className='mx-3 border-t-[0.1px] border-gray-800 hover:opacity-80'></hr>
  )
};
export default function Review() {
  const { state, dispatch } = useQuizContext();
  const indexQuestion = state.currentQuestionIndex
  const lengthQuestion = state.questions.length
  
  const answersChosen = state.answersChosen;
  const handleNext = () => {
    dispatch({ type: "NEXT_REVIEW" })
  }
  const currentQuestion = state.questions[indexQuestion]
  const answers = state.reviewAnswers[indexQuestion]
  return (
    <>
      <div className='prompt' >
        <Header index={indexQuestion} length={lengthQuestion} />
        <Divide />
        <div className=' mt-5 mx-3'>
          <h3 className='mb-6 font-semibold text-gray-600 hyphens-auto'>{currentQuestion.question}</h3>
          {
            answers && answers.map((answer, index) => {
              const isCorrectAnswer = answersChosen[indexQuestion] && answer === currentQuestion.correct_answer;
              const isWrongAnswer =
                answersChosen[indexQuestion] === answer && answersChosen[indexQuestion] !== currentQuestion.correct_answer;
              const correctAnswerClass = isCorrectAnswer ? "correct" : "";
              const wrongAnswerClass = isWrongAnswer ? "incorrect" : "";
              const disabledClass = answersChosen[indexQuestion] ? "disabled-answer" : "";
              return (
                <button
                  key={index}
                  className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
                >
                  {answer}
                </button>
              )
            }
            )
          }
        </div>
        <div className='w-full flex justify-end mt-5 px-3'>
          <button
            className="blue_btn"
            onClick={() => {
              handleNext()
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

