import React from 'react'
import ModalOverlay from '../../elements/ModalOverlay'
import { AuthModalProps } from '../../../types'
import { BiX } from 'react-icons/bi'
import { assets } from '../../../assets'

const AuthModal: React.FC<AuthModalProps> = ({
     title,
     description,
     isOpen,
     onClose,
}) => {

     return (
          <>
               <ModalOverlay isOpen={isOpen} onClose={onClose} />
               <div className={`fixed h-[28rem] w-[38rem] bg-white top-1/2 left-1/2 transform 
                    -translate-y-1/2 -translate-x-1/2 rounded-2xl transition-all duration-300 ease-in-out
                    ${isOpen ? 'scale-100 z-50' : 'scale-0 z-0'}`}>
                    <BiX onClick={onClose}
                         className='cursor-pointer absolute top-5 right-5 size-9 text-darkText' />
                    <div className="flex flex-col items-center justify-center gap-y-4 py-20 px-16">
                         <div className="text-center mb-4">
                              <h1 className="text-4xl font-bold">{title}</h1>
                              <p className="text-sm text-darkText/80 font-medium">{description}</p>
                         </div>
                         <div className="flex flex-col gap-y-4">
                              <div className="cursor-pointer text-darkText/80 font-semibold font-epilogue 
                              flex items-center gap-x-3 bg-white shadow-lg py-4 pl-4 pr-12 rounded-md">
                                   <img src={assets.googleIcon} className="size-12" />
                                   <span>Masuk dengan akun Google</span>
                              </div>
                              <div className="cursor-pointer text-white font-semibold font-epilogue 
                              flex items-center gap-x-3 bg-[#5A85B5] shadow-lg py-4 pl-4 pr-12 rounded-md">
                                   <img src={assets.facebookIcon} className="size-12" />
                                   <span>Masuk dengan akun Facebook</span>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default AuthModal