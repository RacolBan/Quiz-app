
const BoxAnswer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct" : "";
  const wrongAnswerClass = isWrongAnswer ? "incorrect" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <button
      key={index}
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => { onSelectAnswer(answerText) }}
    >
      {answerText}
    </button>
  );
};

export default BoxAnswer;