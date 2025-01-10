import React from "react"
import { assets, navItems } from "../../assets"
import useUi from "../../hooks/useUi"
import HamburgerMenu from "../fragments/HamburgerMenu"
import { useAppDispatch } from "../../redux/hook"
import { showModal } from "../../redux/slices/modalSlice"
import { Link } from "react-router-dom"
import Button from "../elements/Button"

const Navbar = () => {
     const [hamburgerActive, setHamburgerActive] = React.useState(false)
     const [scroll, setScroll] = React.useState(false)
     const { screenSize } = useUi()
     const dispatch = useAppDispatch()

     const handleHamburgerActive = () => {
          setHamburgerActive(!hamburgerActive)
     }

     React.useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY >= 10) {
                    setScroll(true)
                    setHamburgerActive(false)
               } else {
                    setScroll(false)
               }
          }

          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     const handleModalOpen = () => {
          dispatch(showModal({
               type: 'auth'
          }))
          console.log('Modal Opened')
     }

     return (
          <nav className={`fixed top-0 h-20 w-full bg-white shadow-md z-40 
          transition-all duration-300
          ${scroll ? 'shadow-black/20' : 'shadow-none'}`}>
               <div className="flex flex-col items-center gap-y-0 md:flex-row md:justify-between md:px-14 md:py-4">
                    <div className="flex items-center justify-between w-full px-6 py-4 z-10 
                    bg-white md:p-0 md:w-auto md:bg-transparent">
                         <img src={assets.logo} alt="Logo" className="scale-90 z-50" />
                         {screenSize === 'mobile' &&
                              <HamburgerMenu
                                   isActive={hamburgerActive}
                                   handleActive={handleHamburgerActive} />}
                    </div>
                    <div className={`w-full bg-white flex flex-col items-center 
                    transition-all duration-500 ease-in-out md:flex-row md:bg-transparent 
                    md:gap-x-10 md:w-auto
                         ${hamburgerActive ? 'translate-y-0' : '-translate-y-72 md:translate-y-0'}`}>
                         <ul className='flex flex-col items-center w-full md:flex-row md:gap-x-10 md:w-auto'>
                              {navItems.map((item, index) => (
                                   <Link
                                        key={index}
                                        to={item.path}
                                        className="text-[#2D2D2D] font-semibold w-full text-center
                                                  border-t border-primary py-4 text-sm font-poppins
                                                  md:border-none md:py-0 md:w-auto">
                                        {item.title}
                                   </Link>
                              ))}
                         </ul>
                         <Button
                              title="Masuk"
                              onClick={handleModalOpen}
                              className="w-full py-4 rounded-2xl md:w-auto md:px-8 md:py-[10px] md:rounded-lg"
                         />
                    </div>
               </div>
          </nav>
     )
}

export default Navbar