import { assets, navItems } from "../../assets"
import { Link } from "react-router"
import Button from "../elements/Button"

const Navbar = () => {
     return (
          <nav className='top-0 flex items-end justify-between w-full px-14 py-5'>
               <div className=''>
                    <img src={assets.logo} alt="" />
               </div>
               <div className="flex items-center gap-x-9">
                    <ul className='flex items-center justify-center gap-x-9'>
                         {navItems.map((item, index) => (
                              <Link key={index} to={item.path}
                                   className="text-[#2D2D2D] font-semibold text-sm font-poppins">
                                   {item.title}
                              </Link>
                         ))}
                    </ul>
                    <Button
                         title="Masuk"
                         onClick={() => { }}
                    />
               </div>
          </nav>
     )
}

export default Navbar