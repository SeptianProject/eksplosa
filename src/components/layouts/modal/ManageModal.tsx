
import AuthModal from './AuthModal'
import ContentModal from './ContentModal'
import { modalDatas } from '../../../assets'
import { RootState } from '../../../redux/store'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { hideModal, progressModal } from '../../../redux/slices/modalSlice'
import { completeLevel, retryQuiz } from '../../../redux/slices/quizSlice'
import useUi from '../../../hooks/useUi'

const ModalManager = () => {
     const { screenSize } = useUi()
     const isMobile = screenSize === 'mobile'
     const dispatch = useAppDispatch()
     const { isQuizCompleted } = useAppSelector((state: RootState) => state.quiz)
     const { isOpen, modalType, variant, currentIndex } = useAppSelector((state: RootState) => state.modal)

     const modalDataMap = modalDatas.mapPage[currentIndex]
     const modalDataQuiz = modalDatas.quizPage[variant === 'success' ? 0 : variant === 'info' ? 2 : 1]

     const handleClose = () => {
          dispatch(hideModal())
     }

     const handleModalAction = () => {
          if (modalType === 'quiz' && variant === 'success') {
               if (isQuizCompleted) {
                    dispatch(completeLevel())
               }
               dispatch(hideModal())
          } else if (modalType === 'map') { // && modalDataMap
               if (currentIndex === modalDatas.mapPage.length - 1) {
                    dispatch(hideModal())
               }
               dispatch(progressModal())
          } else {
               dispatch(retryQuiz())
               dispatch(hideModal())
          }
     }

     if (!isOpen) return null

     if (modalType === 'auth') {
          return (
               <AuthModal
                    title={modalDatas.auth.title}
                    description={modalDatas.auth.description}
                    isOpen={isOpen}
                    onClose={handleClose}
               />
          )
     }

     return (
          <ContentModal
               isOpen={isOpen}
               onClose={handleClose}
               onAction={handleModalAction}
               title={modalType === 'map' ? modalDataMap?.title : modalDataQuiz?.title}
               description={modalType === 'map' && isMobile ? modalDataMap?.description[1]
                    : modalType === 'quiz' ? modalDataQuiz?.description[0] : modalDataMap?.description[0]}
               image={modalType === 'map' ? modalDataMap?.image : modalDataQuiz?.image}
          />
     )
}

export default ModalManager