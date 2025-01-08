import { assets, footerItems } from "../../assets"
import FooterItems from "../fragments/FooterItems"

const Footer = () => {
     return (
          <footer className="mt-40 md:mt-60 w-full px-6 space-y-5 pb-10 md:px-16 md:h-80">
               <div className="flex flex-col gap-y-10 items-start pb-6 md:pb-10
               border-b border-darkText md:flex-row md:gap-x-24">
                    <div>
                         <img src={assets.logo} alt="" className="w-44 md:w-40" />
                    </div>
                    <div className="flex gap-x-20">
                         <FooterItems isContact={false} footerItems={footerItems.pages} />
                         <FooterItems footerItems={footerItems.contact} />
                    </div>
               </div>
               <h5 className="text-sm font-light">©2025 Pixel Team Copyright</h5>
          </footer>
     )
}

export default Footer