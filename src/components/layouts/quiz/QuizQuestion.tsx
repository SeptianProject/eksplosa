import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { setAnswer } from '../../../redux/slices/quizSlice'
import { showModal } from '../../../redux/slices/modalSlice'
import { RootState } from '../../../redux/store'

const QuizQuestion = () => {
     const dispatch = useAppDispatch()
     const { currentQuestion, answer } = useAppSelector((state: RootState) => state.quiz)

     const handleAnswerSubmit = (value: string) => {
          dispatch(setAnswer(value))

          if (currentQuestion && value === currentQuestion.correctAnswer) {
               dispatch(showModal({
                    type: 'quiz',
                    variant: 'success'
               }))
          } else {
               dispatch(showModal({
                    type: 'quiz',
                    variant: 'failure'
               }))
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
               <div className="border-y mt-20 mb-14 py-10 min-h-[60px] flex items-center justify-center border-primary">
                    <div className="w-60 h-16 flex items-center justify-center">
                         {answer && (
                              <p className='text-center text-2xl font-bold'>{answer}</p>
                         )}
                    </div>
               </div>
               <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-x-5 w-full">
                         {currentQuestion.options.map((option, index) => (
                              <button key={index}
                                   onClick={() => handleAnswerSubmit(option)}
                                   className={`px-10 py-5 rounded-md font-semibold font-poppins transition-colors duration-300
                                        ${answer === option
                                             ? 'bg-primary text-white'
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