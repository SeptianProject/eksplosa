import { MdHandshake } from 'react-icons/md'
import { assets } from '../../../assets'

const ExploreLayout = () => {
     const exploreParagraph = 'Pelajari lebih lanjut tentang Eksplosa, platform yang menghubungkan Anda dengan kekayaan bahasa dan budaya Indonesia. Bergabunglah bersama ribuan pengguna aktif yang turut serta dalam menjaga warisan budaya untuk generasi mendatang!'

     return (
          <div className="mt-20 gap-x-24 flex flex-col px-6 gap-y-10
          md:px-14 md:flex-row md:mt-40 md:items-start md:justify-center">
               <div className="space-y-3 md:w-1/2 md:space-y-5">
                    <h1 className="text-xl md:text-[40px] font-medium leading-normal">
                         Pelajari Lebih Lanjut Tentang <span className="font-bold">Eksplosa!</span>
                    </h1>
                    <p className="text-sm lg:max-w-[30rem]">{exploreParagraph}</p>
                    <button className="text-white text-sm flex items-center bg-primary w-fit 
                    pl-8 pr-4 py-3 rounded-lg md:py-2 md:text-base">
                         Bergabung Sekarang
                         <MdHandshake className="text-white size-7 md:size-9 ml-2" />
                    </button>
               </div>
               {/* video */}
               <div className="bg-primary w-full h-[14rem] lg:w-1/2 lg:h-[22rem] relative">
                    {/* sementara */}
                    <img src={assets.video} alt="" className='size-full' />
               </div>
          </div>
     )
}

export default ExploreLayout