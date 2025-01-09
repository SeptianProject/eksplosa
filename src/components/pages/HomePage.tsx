import AboutLayout from "../layouts/home/AboutLayout"
import HeroLayout from "../layouts/home/HeroLayout"
import LanguageLayout from "../layouts/home/LanguageLayout"
import ExploreLayout from "../layouts/home/ExploreLayout"
import OvalBackgroundElement from "../elements/OvalBackgroundElement"
import CloudElement from "../elements/CloudElement"
import Footer from "../layouts/Footer"
import Navbar from "../layouts/Navbar"

const HomePage = () => {
     return (
          <>
               <Navbar />
               <section className="py-32 md:py-48" >
                    <HeroLayout />
                    <AboutLayout />
                    <LanguageLayout />
                    <ExploreLayout />
                    {/* Quotes */}
                    <div className="relative mt-24 px-6 w-full md:px-16 md:mt-40 h-full">
                         <div className="absolute inset-0 flex flex-col justify-center 
                    text-center px-8 md:px-80 gap-y-5">
                              <h5 className="text-white text-[15px] font-semibold md:tracking-wide md:text-2xl ">
                                   "Melestarikan bahasa daerah adalah menjaga warisan berharga bagi anak cucu."
                              </h5>
                              <h6 className="text-white text-xs font-light">
                                   Anies Baswedan <br /> (Mantan menteri Pendidikan dan Kebudayaan)
                              </h6>
                         </div>
                         <CloudElement className='absolute top-20 -right-5 md:-top-5 md:right-60' />
                         <CloudElement className='absolute -top-5 left-20 md:top-10 md:left-20' />
                         <CloudElement className='absolute -bottom-10 right-60 md:-bottom-5 md:right-20' />
                         <OvalBackgroundElement />
                    </div>
               </section>
               <Footer />
          </>
     )
}

export default HomePage