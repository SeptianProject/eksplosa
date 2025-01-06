import React from 'react'

interface ButtonProps {
     title: string
     onClick: () => void
     type?: HTMLButtonElement['type']
     className?: string
}

const Button: React.FC<ButtonProps> = React.memo(({
     title,
     onClick,
     type = 'button',
     className
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               className={`${className} text-white bg-primary rounded-lg py-2 px-6 
                    `}>
               {title}
          </button>
     )
})

export default Button