import React from 'react'
import { IconType } from 'react-icons'

interface BadgeButtonProps {
     isNumber: boolean
     isActive?: boolean
     number?: number
     onClick?: () => void
     icon?: IconType
     className?: string
}

const BadgeButton: React.FC<BadgeButtonProps> = ({
     isNumber,
     number,
     isActive,
     className,
     onClick,
     icon: Icon
}) => {
     return (
          <button
               type='button'
               onClick={isNumber ? onClick : () => window.history.back()}
               className={`${className} text-primary rounded-md p-1 flex items-center 
                    justify-center hover:bg-primary/30 transition-colors duration-300
               ${isActive ? 'bg-primary/30' : 'bg-blueAccent'}`}>
               {isNumber ? number : Icon && <Icon className='size-7 text-primary' />}
          </button>
     )
}

export default BadgeButton