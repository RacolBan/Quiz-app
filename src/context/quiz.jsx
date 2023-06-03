import React, { createContext, useContext, useReducer } from "react";
import { shuffleAnswers } from "../helpers";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: [],
  showResults: false,
  correctAnswersCount: 0,
  countTime: 0,
  isStart: false,
  showReview: false,
  answersChosen: [],
  hasRestart: false,
  reviewAnswers: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH": {
      return {
        ...state,
        questions: action.payload
      }
    }
    case "ANSWERS": {
      const answers = state.questions
        ? shuffleAnswers(state.questions[0])
        : {}
      return {
        ...state,
        answers,
        reviewAnswers: [...state.reviewAnswers, answers]
      }
    }
    case "IS_START": {
      const isStart = !state.isStart
      return {
        ...state,
        isStart
      }
    }
    case "IS_REVIEW": {
      return {
        ...state,
        showReview: !state.showReview,
        currentQuestionIndex: 0
      }
    }
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
          state.questions[state.currentQuestionIndex].correct_answer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
        answersChosen: [...state.answersChosen, action.payload]
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
        reviewAnswers: [...state.reviewAnswers, answers ]
      };
    }
    case "NEXT_REVIEW": {
      const showReview =
      state.currentQuestionIndex === state.questions.length - 1;
    const currentQuestionIndex = showReview
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex,
        showReview: !showReview
      }
    }

    case "COUNT_TIME": {
      return {
        ...state,
        countTime: action.payload,
      }
    }
    case "RESTART": {
      return {
        ...initialState,
        hasRestart: !state.hasRestart
      }
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  return context
};