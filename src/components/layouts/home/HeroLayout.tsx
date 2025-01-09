import { IoIosArrowRoundForward } from 'react-icons/io'
import { assets } from '../../../assets'

const HeroLayout = () => {
     const textHead = 'Utamakan Bahasa Indonesia, Kuasai Bahasa Asing, Lestarikan'
     const textSpan = 'Bahasa Daerah.'
     const paragraph = 'Setiap kata yang kita pelihara adalah langkah kecil untuk melestarikan kebudayaan yang kaya. Setiap bahasa yang kita jaga, adalah kekuatan untuk masa depan yang lebih harmonis dan penuh penghargaan.'


     return (
          <div className="relative min-h-[28rem] xs:min-h-[32rem] lg:min-h-[150vh]">
               <div className="px-6 md:pl-14 md:max-w-[55rem] space-y-3 md:space-y-5">
                    <h1 className="text-xl xs:text-2xl md:text-4xl lg:text-5xl tracking-wide 
                    leading-[1.20] font-medium">
                         {textHead} <span className="font-bold">{textSpan}</span>
                    </h1>
                    <p className="tracking-wide text-[10px] xs:text-[12px] md:text-base pb-2">{paragraph}</p>
                    <button className="text-white flex items-center bg-primary w-fit 
                    pl-6 pr-2 py-2 rounded-lg text-sm xs:text-base xs:pl-8 xs:pr-4">
                         Jelajahi Sekarang
                         <IoIosArrowRoundForward className="text-white size-7 xs:size-9 ml-2" />
                    </button>
               </div>
               <img src={assets.heroImage} alt="HeroImage"
                    className="object-cover absolute bottom-0 lg:-top-20 pointer-events-none"
               />
          </div>
     )
}

export default HeroLayout