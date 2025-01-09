import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { QUIZ_LEVELS } from "../../assets/constant"
import { QuizQuestion } from "../../types"

interface QuizState {
     selectedLevel: string
     currentQuestion: QuizQuestion | null
     answer: string
     currentQuestionIndex: number
     isQuizCompleted: boolean
     score: number
     totalQuestions: number
     selectedWords: string[]
}

const initialState: QuizState = {
     selectedLevel: '1A',
     currentQuestion: QUIZ_LEVELS[0].questions[0],
     answer: '',
     currentQuestionIndex: 0,
     isQuizCompleted: false,
     score: 0,
     totalQuestions: QUIZ_LEVELS[0].questions.length,
     selectedWords: []
}

const quizSlice = createSlice({
     name: 'quiz',
     initialState,
     reducers: {
          setSelectedLevel: (state, action: PayloadAction<string>) => {
               state.selectedLevel = action.payload
               const level = QUIZ_LEVELS.find(l => l.level === action.payload)
               if (level && level.questions.length > 0) {
                    state.currentQuestion = level.questions[0]
                    state.currentQuestionIndex = 0
                    state.totalQuestions = level.questions.length
                    state.isQuizCompleted = false
                    state.score = 0
               }
          },
          setAnswer: (state, action: PayloadAction<string>) => {
               state.answer = action.payload
          },
          setSelectedWords: (state, action: PayloadAction<string[]>) => {
               state.selectedWords = action.payload
          },
          nextQuestion: (state) => {
               const level = QUIZ_LEVELS.find(l => l.level === state.selectedLevel)
               if (level) {
                    const isCorrect = state.answer === state.currentQuestion?.correctAnswer.join(' ')
                    if (isCorrect) {
                         state.score += 1
                    }

                    const nextIndex = state.currentQuestionIndex + 1
                    if (nextIndex < level.questions.length) {
                         state.currentQuestion = level.questions[nextIndex]
                         state.currentQuestionIndex = nextIndex
                    } else {
                         state.isQuizCompleted = true
                    }
                    state.answer = ''
                    state.selectedWords = []
               }
          },
          completeLevel: (state) => {
               const currentLevelIndex = QUIZ_LEVELS.findIndex(level => level.level === state.selectedLevel)
               if (currentLevelIndex < QUIZ_LEVELS.length - 1) {
                    state.selectedLevel = QUIZ_LEVELS[currentLevelIndex + 1].level
                    state.currentQuestion = QUIZ_LEVELS[currentLevelIndex + 1].questions[0]
                    state.currentQuestionIndex = 0
                    state.isQuizCompleted = false
                    state.score = 0
               }
          },
          retryQuiz: (state) => {
               const level = QUIZ_LEVELS.find(l => l.level === state.selectedLevel)
               if (level && level.questions.length > 0) {
                    state.currentQuestion = level.questions[0]
                    state.answer = ''
                    state.isQuizCompleted = false
                    state.score = 0
                    state.selectedWords = []
               }
          },
          resetQuiz: (state) => {
               state.answer = ''
               state.isQuizCompleted = false
               state.score = 0
               state.currentQuestionIndex = 0
               state.selectedWords = []
          }
     }
})

export const {
     setSelectedLevel,
     setAnswer,
     resetQuiz,
     nextQuestion,
     retryQuiz,
     completeLevel,
     setSelectedWords
} = quizSlice.actions
export default quizSlice.reducer