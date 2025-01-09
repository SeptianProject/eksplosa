import { navItems } from '../../assets'
import { Link } from "react-router"
import Button from "../elements/Button"
import React from 'react'

interface NavItemsProps {
     hamburgerActive?: boolean
}

const NavItems: React.FC<NavItemsProps> = ({ hamburgerActive }) => {
     return (
          <div className={`flex items-center py-3 rounded-b-[3rem] gap-x-9 gap-y-4 flex-col w-full
          fixed top-16 left-1/2 -translate-x-1/2 bg-primary md:py-0 md:rounded-none
          md:flex-row md:static md:bg-transparent md:translate-x-0 md:w-auto 
          transition-all duration-300
          ${hamburgerActive ? 'translate-y-0 opacity-100 -z-10'
                    : 'opacity-0 -translate-y-44 md:translate-y-0 md:opacity-100'}`}>
               <ul className='flex flex-col items-center justify-center gap-y-3 gap-x-9 md:flex-row'>
                    {navItems.map((item, index) => (
                         <Link key={index} to={item.path}
                              className="text-white md:text-[#2D2D2D] font-semibold text-sm font-poppins">
                              {item.title}
                         </Link>
                    ))}
               </ul>
               <Button
                    title="Masuk"
                    onClick={() => { }}
               />
          </div>
     )
}

export default NavItems