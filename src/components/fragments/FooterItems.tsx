import React from 'react'
import { Link } from "react-router"

interface FooterItemsProps {
     isContact?: boolean
     footerItems: {
          title: string
          path?: string
     }[]
}

const FooterItems: React.FC<FooterItemsProps> = ({
     isContact = true,
     footerItems
}) => {
     return (
          <div className="flex flex-col gap-y-5 md:gap-y-4">
               <h5 className="text-base font-bold">
                    {isContact ? 'Hubungi Kami' : 'Eksplosa'}
               </h5>
               <div className="flex flex-col gap-y-3 md:gap-y-4">
                    {footerItems.map((item, index) => (
                         <Link key={index} to={item.path ?? ''}
                              className="text-[12px] text-darkText/90 md:text-base">
                              {item.title}
                         </Link>
                    ))}
               </div>
          </div>
     )
}

export default FooterItems