import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

interface ModalLayoutProps {
     image: string,
     title: string,
     description: string
     isOpen?: boolean,
     onClose?: () => void,
     onNext?: () => void,
     isLastModal?: boolean,
     isQuizModal?: boolean
}

const ModalLayout: React.FC<ModalLayoutProps> = ({
     image,
     title,
     description,
     isOpen,
     onClose,
     onNext,
     isLastModal,
     isQuizModal
}) => {
     return (
          <>
               <div onClick={onClose}
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
               <div className={`fixed h-[28rem] w-[38rem] bg-white top-1/2 left-1/2 transform 
                    -translate-y-1/2 -translate-x-1/2 rounded-2xl transition-all duration-300 ease-in-out
                    ${isOpen ? 'scale-100' : 'scale-0'}`}>
                    <div className='flex flex-col items-center justify-center gap-y-4 py-4 px-10'>
                         <img alt={title}
                              src={image}
                              className='w-64 mr-10' />
                         <div className='text-center mb-4'>
                              <h1 className='text-3xl font-bold'>
                                   {title}
                              </h1>
                              <p className='text-sm text-darkText/80 font-medium'>
                                   {description}
                              </p>
                         </div>
                         <div className={`${isQuizModal ? 'flex items-center justify-center gap-x-5' : ''}`}>
                              {isQuizModal &&
                                   <button
                                        onClick={onClose}
                                        className="text-white flex items-center justify-center bg-danger 
                                        py-2 w-40 rounded-lg text-sm xs:text-base">
                                        Keluar
                                   </button>
                              }
                              <button
                                   onClick={onNext}
                                   className={`text-white flex items-center bg-primary w-fit rounded-lg text-sm xs:text-base
                                   ${isQuizModal ? 'py-2 w-40 justify-center' : 'xs:pl-8 xs:pr-4 pl-6 pr-2 py-1'}`}>
                                   {isLastModal && isQuizModal ? 'Ulangi Kuis' : isLastModal && isQuizModal === false ? 'Oke, Paham' : 'Selanjutnya'}
                                   {isQuizModal ? null : <IoIosArrowRoundForward className="text-white size-7 xs:size-9 ml-2" />}
                              </button>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default ModalLayout