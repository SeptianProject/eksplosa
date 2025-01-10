import Wrapper from "./Wrapper"
import LevelButton from "../elements/LevelButton";
import QuizQuestion from "../layouts/quiz/QuizQuestion";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { showModal } from "../../redux/slices/modalSlice";
import { QUIZ_LEVELS } from "../../assets/constant";
import { setSelectedLevel } from "../../redux/slices/quizSlice";
import BadgeButton from "../elements/BadgeButton";
import React from "react";

const QuizPage = () => {
     const dispatch = useAppDispatch()
     const { selectedLevel, isQuizCompleted } = useAppSelector((state: RootState) => state.quiz)
     const [levelModel, setLevelModel] = React.useState<string>('1')
     const models = [1, 2, 3, 4, 5]

     const handleSelectLevelModel = (level: string) => {
          setLevelModel(level)
     }

     const handleNextLevel = (level: string) => {
          if (isQuizCompleted) {
               const currentIndexLevel = QUIZ_LEVELS.findIndex(level => level.level === selectedLevel)
               if (currentIndexLevel < QUIZ_LEVELS.length - 1) {
                    dispatch(setSelectedLevel(level))
               }
          }
          dispatch(showModal({ type: 'quiz', variant: 'info' }))
     }

     return (
          <Wrapper className="flex items-center">
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
                                   onClick={() => handleNextLevel(level.level)}
                              />
                         ))}
                    </div>
                    <div className="border-t border-primary">
                         <div className="flex items-center justify-center gap-x-2 pt-3">
                              {models.map((number, index) => (
                                   <BadgeButton
                                        key={index}
                                        isNumber
                                        number={number}
                                        onClick={() => handleSelectLevelModel(number.toString())}
                                        isActive={levelModel === number.toString()}
                                        className="size-10" />
                              ))}
                         </div>
                    </div>
               </div>
          </Wrapper>
     )
}

export default QuizPage