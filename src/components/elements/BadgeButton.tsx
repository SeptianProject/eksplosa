import React from 'react'
import { IconType } from 'react-icons'

interface BadgeButtonProps {
     isNumber: boolean
     number?: number
     onClick?: () => void
     icon?: IconType
     className?: string
}

const BadgeButton: React.FC<BadgeButtonProps> = ({
     isNumber,
     number,
     onClick,
     className,
     icon: Icon
}) => {
     return (
          <button
               type='button'
               onClick={onClick}
               className={`${className} bg-blueAccent text-primary rounded-md p-1 
               flex items-center justify-center hover:bg-primary/30 transition-colors duration-300`}>
               {isNumber ? number : Icon && <Icon className='size-7 text-primary' />}
          </button>
     )
}

export default BadgeButton