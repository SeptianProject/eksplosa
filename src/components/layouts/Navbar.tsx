import React from "react"
import { assets } from "../../assets"
import useUi from "../../hooks/useUi"
import HamburgerMenu from "../fragments/HamburgerMenu"
import NavItems from "../fragments/NavItems"

const Navbar = () => {
     const [hamburgerActive, setHamburgerActive] = React.useState(false)
     const { screenSize } = useUi()

     return (
          <nav className='top-0 flex items-center md:items-end justify-between w-full 
          px-6 py-2 md:px-14 md:py-5 bg-white shadow-md shadow-black/20'>
               <div className=''>
                    <img src={assets.logo} alt="Logo" className="scale-90" />
               </div>
               <NavItems />
               {screenSize === 'mobile' &&
                    <HamburgerMenu
                         isActive={hamburgerActive}
                         handleActive={() => setHamburgerActive(!hamburgerActive)} />}
          </nav>
     )
}

export default Navbar