import React from "react"
import { ContentModalProps } from "../../../types"
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import { RootState } from "../../../redux/store"
import { modalDatas } from "../../../assets"
import { hideModal } from "../../../redux/slices/modalSlice"
import { IoIosArrowRoundForward } from "react-icons/io"
import ModalOverlay from "../../elements/ModalOverlay"

const ContentModal: React.FC<ContentModalProps> = ({
     isOpen,
     onClose,
     title,
     description,
     image,
     onAction
}) => {
     const dispatch = useAppDispatch()
     const { modalType, variant, currentIndex } = useAppSelector((state: RootState) => state.modal)

     const handleAction = () => {
          if (onAction) {
               onAction()
          } else {
               dispatch(hideModal())
          }
     }

     const getButtonText = () => {
          if (modalType === 'quiz') {
               return variant === 'success' ? 'Selanjutnya' : variant === 'info' ? 'Baiklah' : 'Ulangi Kuis'
          }

          return currentIndex === modalDatas.mapPage.length - 1 ? 'Oke, Paham' : 'Selanjutnya'
     }

     return (
          <>
               <ModalOverlay isOpen={isOpen} onClose={onClose} />
               <div className={`fixed w-full py-10 bg-white top-1/2 left-1/2 transform 
                    -translate-y-1/2 -translate-x-1/2 rounded-2xl md:h-[28rem] md:w-[38rem] md:py-2 
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'scale-90 md:scale-100 z-50' : 'scale-0 z-0'}`}>
                    <div className="flex flex-col items-center justify-center gap-y-4 px-5 md:px-10">
                         <img alt={title} src={image} className="w-52 md:w-64 mr-10" />
                         <div className="text-center mb-3 space-y-5">
                              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                              <p className="text-sm text-darkText/80 font-medium">{description}</p>
                         </div>
                         <div className={`${modalType === 'quiz' ? 'flex items-center justify-center gap-x-5' : ''}`}>
                              {modalType === 'quiz' && variant === 'failure' && (
                                   <button
                                        onClick={onClose}
                                        className="text-white flex items-center justify-center bg-danger 
                                        py-3 w-40 px-8 rounded-lg text-sm xs:text-base">
                                        Keluar
                                   </button>
                              )}
                              <button
                                   onClick={handleAction}
                                   className={`text-white flex items-center bg-primary 
                                        rounded-lg text-sm xs:text-base
                                        ${modalType === 'quiz' ? 'py-3 w-40 justify-center'
                                             : 'pl-8 pr-4 py-2 w-fit'}`}>
                                   {getButtonText()}
                                   {modalType !== 'quiz' && (
                                        <IoIosArrowRoundForward className="text-white size-7 xs:size-9 ml-2" />
                                   )}
                              </button>
                         </div>
                    </div>
               </div >
          </>

     )
}

export default ContentModal