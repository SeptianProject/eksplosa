import React from 'react'

interface HamburgerItemProps {
     isActive: boolean
     className: string
}

const HamburgerItem: React.FC<HamburgerItemProps> = React.memo(({ className, isActive }) => {
     return (
          <div className={`w-6 h-[3px] bg-primary rounded-full 
               transition-all duration-500 ${className} 
               ${isActive ? 'absolute bg-primary' : ''}`} />
     )
})

export default HamburgerItem