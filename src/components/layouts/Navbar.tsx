import React from "react"
import { assets } from "../../assets"
import useUi from "../../hooks/useUi"
import HamburgerMenu from "../fragments/HamburgerMenu"
import NavItems from "../fragments/NavItems"

const Navbar = () => {
     const [hamburgerActive, setHamburgerActive] = React.useState(false)
     const [scroll, setScroll] = React.useState(false)
     const { screenSize } = useUi()

     const handleHamburgerActive = () => {
          setHamburgerActive(!hamburgerActive)
     }

     React.useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY >= 1) {
                    setScroll(true)
                    setHamburgerActive(false)
               } else {
                    setScroll(false)
               }
          }

          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     return (
          <nav className={`fixed top-0 px-6 py-2 md:px-14 md:py-5 bg-white shadow-md 
               z-40 transition-all duration-300 ease-in-out w-full
          ${scroll ? 'shadow-black/20' : 'shadow-none'}`}>
               <div className="flex items-center md:items-end justify-between -z-10">
                    <div className=''>
                         <img src={assets.logo} alt="Logo" className="scale-90 z-50" />
                    </div>
                    <NavItems hamburgerActive={hamburgerActive} />
                    {screenSize === 'mobile' &&
                         <HamburgerMenu
                              isActive={hamburgerActive}
                              handleActive={handleHamburgerActive} />}
               </div>
          </nav>
     )
}

export default Navbar