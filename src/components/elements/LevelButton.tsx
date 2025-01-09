import React from "react"

interface LevelButtonProps {
     level: string
     title: string
     isActive?: boolean
     onClick?: () => void
}

const LevelButton: React.FC<LevelButtonProps> = ({
     level,
     title,
     isActive,
     onClick
}) => {
     return (
          <div onClick={onClick}
               className="flex items-center gap-x-2 w-fit cursor-pointer">
               <h5 className={`${isActive ? 'bg-primary' : 'bg-graySurface'}
                    rounded-full size-11 text-white text-sm font-semibold
                    flex items-center justify-center`}>
                    {level}
               </h5>
               <h5 className="text-sm font-semibold max-w-[12rem]">
                    {title}
               </h5>
          </div>
     )
}

export default LevelButton