import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { nextQuestion, setAnswer, setSelectedWords } from '../../../redux/slices/quizSlice'
import { showModal } from '../../../redux/slices/modalSlice'
import { RootState } from '../../../redux/store'
import React from 'react'
import { QUIZ_LEVELS } from '../../../assets/constant'

const QuizQuestion = () => {
     const dispatch = useAppDispatch()
     const { currentQuestion,
          selectedWords,
          selectedLevel,
          isQuizCompleted
     } = useAppSelector((state: RootState) => state.quiz)

     React.useEffect(() => {
          if (isQuizCompleted) {
               const currentLevelIndex = QUIZ_LEVELS.findIndex(level => level.level === selectedLevel)
               if (currentLevelIndex < QUIZ_LEVELS.length - 1) {
                    setTimeout(() => {
                         dispatch(showModal({
                              type: 'quiz',
                              variant: 'success'
                         }))
                    }, 500);
               }
          }
     }, [isQuizCompleted, selectedLevel, dispatch])

     const checkAnswer = (submittedWords: string[]): boolean => {
          if (!currentQuestion) return false
          if (submittedWords.length !== currentQuestion.correctAnswer.length) return false

          return submittedWords.every((word, index) => word === currentQuestion.correctAnswer[index])

     }

     const handleWordSelect = (word: string) => {
          if (selectedWords.includes(word)) {
               dispatch(setSelectedWords(selectedWords.filter(w => w !== word)))
          } else {
               const newSelectedWords = [...selectedWords, word]
               dispatch(setSelectedWords(newSelectedWords))

               if (newSelectedWords.length === currentQuestion?.correctAnswer.length) {
                    const isCorrect = checkAnswer(newSelectedWords)
                    dispatch(setAnswer(newSelectedWords.join(' ')))

                    setTimeout(() => {
                         dispatch(showModal({
                              type: 'quiz',
                              variant: isCorrect ? 'success' : 'failure'
                         }))
                    }, 500);

                    if (isCorrect) {
                         setTimeout(() => {
                              dispatch(nextQuestion())
                         }, 500);
                    }
                    setTimeout(() => {
                         dispatch(setSelectedWords([]))
                    }, 500);
               }
          }
     }

     const handleReset = (option: string) => {
          if (selectedWords.includes(option)) {
               dispatch(setSelectedWords([]))
          }
     }

     if (!currentQuestion) return null

     return (
          <div className="w-full px-20">
               <div className='text-center space-y-2'>
                    <p className='font-medium text-darkText/80'>
                         #{currentQuestion.level} - Percakapan sehari hari
                    </p>
                    <h1 className='text-4xl font-bold'>{currentQuestion.question}</h1>
               </div>
               <div className="border-y mt-20 mb-14 min-h-[10rem] flex items-center justify-center border-primary">
                    <div className="flex flex-wrap gap-2 items-center justify-center max-w-2xl">
                         {selectedWords.map((word, index) => (
                              <button
                                   key={index}
                                   onClick={() => handleReset(word)}
                                   className="bg-primary text-white w-32 py-4 rounded-md font-semibold" >
                                   {word}
                              </button>
                         ))}
                    </div>
               </div>
               <div className="flex items-center justify-center">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                         {currentQuestion.options.map((option, index) => (
                              <button
                                   key={index}
                                   onClick={() => handleWordSelect(option)}
                                   className={`px-10 py-5 rounded-md font-semibold font-poppins transition-colors duration-300
                                        ${selectedWords.includes(option)
                                             ? 'hidden'
                                             : 'bg-primary/20 hover:bg-primary/30 text-primary'}`}>
                                   {option}
                              </button>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default QuizQuestion