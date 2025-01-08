import { navItems } from '../../assets'
import { Link } from "react-router"
import Button from "../elements/Button"

const NavItems = () => {

     return (
          <div className="md:flex items-center gap-x-9 hidden">
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
     )
}

export default NavItems