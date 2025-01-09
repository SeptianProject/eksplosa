import Wrapper from "./Wrapper"
import LevelButton from "../elements/LevelButton";
import { modalDatas } from "../../assets";
import ModalLayout from "../layouts/ModalLayout";
import QuizQuestion from "../layouts/quiz/QuizQuestion";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { hideModal } from "../../redux/slices/modalSlice";
import { QUIZ_LEVELS } from "../../constant";
import { retryQuiz, setSelectedLevel } from "../../redux/slices/quizSlice";
import BadgeButton from "../elements/BadgeButton";

const QuizPage = () => {
     const dispatch = useAppDispatch()
     const { selectedLevel } = useAppSelector((state: RootState) => state.quiz)
     const { isOpen, variant } = useAppSelector((state: RootState) => state.modal)

     const models = [1, 2, 3, 4, 5]

     // const handleQuizCompleted = () => {
     //      const isCorrect = answer === currentQuestion?.correctAnswer
     //      dispatch(showModal({
     //           type: 'quiz',
     //           variant: isCorrect ? 'success' : 'failure'
     //      }))
     //      if (isCorrect) {
     //           dispatch(nextQuestion())
     //      }
     // }

     const handleModalAction = () => {
          if (variant === 'success') {
               dispatch(hideModal())
          } else {
               dispatch(retryQuiz())
               dispatch(hideModal())
          }
     }

     return (
          <Wrapper className="flex items-center">
               {isOpen && variant && (
                    <ModalLayout
                         image={modalDatas.quizPage[variant === 'success' ? 0 : 1].image}
                         title={modalDatas.quizPage[variant === 'success' ? 0 : 1].title}
                         description={modalDatas.quizPage[variant === 'success' ? 0 : 1].description}
                         isOpen={isOpen}
                         onAction={handleModalAction}
                    />
               )}
               <QuizQuestion />
               <div className="w-1/3 border-l-8 h-full px-5 min-h-screen space-y-10 pt-20">
                    <div className="text-center space-y-0">
                         <h1 className="text-3xl font-bold">Level Belajar</h1>
                         <p className="font-medium text-sm text-darkText/80">
                              Tingkatkan Skill-mu di Setiap Level!
                         </p>
                    </div>
                    <div className="flex flex-col gap-y-5">
                         {QUIZ_LEVELS.map((level, index) => (
                              <LevelButton key={index}
                                   level={level.level}
                                   title={level.title}
                                   isActive={level.level === selectedLevel}
                                   onClick={() => dispatch(setSelectedLevel(level.level))}
                              />
                         ))}
                    </div>
                    <div className="border-t border-primary">
                         <div className="flex items-center justify-center gap-x-2 pt-3">
                              {models.map((number, index) => (
                                   <BadgeButton key={index} isNumber number={number}
                                        className="size-10" />
                              ))}
                         </div>
                    </div>
               </div>
          </Wrapper>
     )
}

export default QuizPage