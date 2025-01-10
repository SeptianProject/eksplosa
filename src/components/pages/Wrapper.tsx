import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import BadgeButton from '../elements/BadgeButton'

interface WrapperProps {
     children: React.ReactNode
     className?: string
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
     return (
          <section className='relative lg:min-h-screen'>
               <BadgeButton
                    isNumber={false}
                    icon={IoIosArrowBack}
                    className='absolute top-10 left-20'
               />
               <div className={className}>
                    {children}
               </div>
          </section>
     )
}

export default Wrapper