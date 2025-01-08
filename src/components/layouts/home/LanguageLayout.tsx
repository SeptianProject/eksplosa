import { languageData } from '../../../assets'
import CloudElement from '../../elements/CloudElement'
import CardLanguage from '../../fragments/CardLanguage'
import 'swiper/swiper-bundle.css'

const LanguageLayout = () => {

     return (
          <div className="mt-24 lg:mt-40 min-h-[25rem] py-5 lg:min-h-[80vh] lg:py-20 bg-primary relative">
               <div className="px-6 lg:px-40 flex flex-col items-center justify-center gap-y-10">
                    <div className='text-center'>
                         <h2 className="text-xl md:text-3xl text-white font-bold">
                              Bahasa Daerah Terpopuler
                         </h2>
                         <h5 className="text-[12px] md:text-sm text-white/80">
                              Temukan keunikan di setiap bahasa daerah di Indonesia.
                         </h5>
                    </div>
                    <CardLanguage languageData={languageData} />
               </div>
               <CloudElement className='absolute top-0 -left-10 md:top-10 md:left-20' />
               <CloudElement className='absolute top-80 -right-10 md:top-0 md:right-52' />
               <CloudElement className='absolute bottom-60 left-60 md:bottom-0 md:-left-10' />
               <CloudElement className='absolute bottom-0 right-60 md:bottom-5 md:right-5' />
          </div>
     )
}

export default LanguageLayout