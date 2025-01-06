import { IoIosArrowRoundForward } from "react-icons/io"
import { areaData, assets } from "../../assets"
import ListCardInformation from "../layouts/ListCardInformation"
import { MdHandshake } from "react-icons/md"

const HomePage = () => {
     const textHead = 'Utamakan Bahasa Indonesia, Kuasai Bahasa Asing, Lestarikan'
     const textSpan = 'Bahasa Daerah.'
     const paragraph = 'Setiap kata yang kita pelihara adalah langkah kecil untuk melestarikan kebudayaan yang kaya. Setiap bahasa yang kita jaga, adalah kekuatan untuk masa depan yang lebih harmonis dan penuh penghargaan.'
     const exploreParagraph = 'Pelajari lebih lanjut tentang Eksplosa, platform yang menghubungkan Anda dengan kekayaan bahasa dan budaya Indonesia. Bergabunglah bersama ribuan pengguna aktif yang turut serta dalam menjaga warisan budaya untuk generasi mendatang!'


     return (
          <section className="">
               {/* Hero */}
               <div className="relative mt-16 min-h-[150vh]">
                    <div className="pl-14 max-w-[55rem] space-y-5">
                         <h1 className="text-5xl tracking-wide leading-[1.20] font-medium">{textHead} <span className="font-bold">{textSpan}</span></h1>
                         <p className="tracking-wide pb-2">{paragraph}</p>
                         <button className="text-white flex items-center bg-primary w-fit pl-8 pr-4 py-1 rounded-lg">
                              Jelajahi Sekarang
                              <IoIosArrowRoundForward className="text-white size-9 ml-2" />
                         </button>
                    </div>
                    <img src={assets.heroImage} alt="HeroImage"
                         className="object-cover absolute top-0 pointer-events-none"
                    />
               </div>
               {/* About */}
               <div className="mt-16 min-h-screen px-40">
                    <div className="flex flex-col relative items-center justify-center gap-y-12">
                         <h2 className="text-3xl max-w-md font-medium text-center z-10">
                              Kenapa kamu harus memilih <span className="font-bold">Eksplosa?</span>
                         </h2>
                         <ListCardInformation />
                         <div className="absolute bg-primary w-full h-80 inset-0 top-80">
                              <div className="flex items-center justify-center h-full gap-x-10">
                                   <img src={assets.batikWhite} alt="" className='size-40 object-contain' />
                                   <img src={assets.batikWhite} alt="" className='size-40 object-contain' />
                                   <img src={assets.batikWhite} alt="" className='size-40 object-contain' />
                                   <img src={assets.batikWhite} alt="" className='size-40 object-contain' />
                                   <img src={assets.batikWhite} alt="" className='size-40 object-contain' />
                              </div>
                         </div>
                    </div>
               </div>
               {/* Language */}
               <div className="mt-40 py-20 min-h-[80vh] bg-primary relative">
                    <div className="px-40 flex flex-col items-center justify-center gap-y-10">
                         <div>
                              <h2 className="text-3xl text-white font-bold">
                                   Bahasa Daerah Terpopuler
                              </h2>
                              <h5 className="text-sm text-white/80">
                                   Temukan keunikan di setiap bahasa daerah di Indonesia.
                              </h5>
                         </div>
                         <div className="flex items-center justify-center gap-x-7 w-full h-full">
                              {areaData.map((item, index) => (
                                   <div key={index} className="bg-white rounded-tr-2xl rounded-b-2xl w-full h-60 shadow-xl shadow-black/30">
                                        <img src={item.image} alt="" />
                                        <div className="flex items-start justify-center gap-x-2 w-full h-full">
                                             <div className="bg-secondary/20 rounded-full size-5 flex items-center justify-center">
                                                  <span className="text-secondary">{index}</span>
                                             </div>
                                             <h3 className="text-secondary font-medium">{item.title}</h3>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
                    <img src={assets.batikWhite} alt="" className='size-56 object-contain absolute top-10 left-20' />
                    <img src={assets.batikWhite} alt="" className='size-56 object-contain absolute top-0 right-52' />
                    <img src={assets.batikWhite} alt="" className='size-56 object-contain absolute bottom-0 -left-10' />
                    <img src={assets.batikWhite} alt="" className='size-56 object-contain absolute bottom-5 right-5' />
               </div>
               {/* Eksplor */}
               <div className="mt-40 flex items-start justify-center px-14 gap-x-24">
                    <div className="w-1/2 space-y-5">
                         <h1 className="text-[40px] font-medium leading-normal">Pelajari Lebih Lanjut Tentang <span className="font-bold">Eksplosa!</span></h1>
                         <p className="max-w-[30rem]">{exploreParagraph}</p>
                         <button className="text-white flex items-center bg-primary w-fit pl-8 pr-4 py-1 rounded-lg">
                              Bergabung Sekarang
                              <MdHandshake className="text-white size-9 ml-2" />
                         </button>
                    </div>
                    {/* video */}
                    <div className="bg-primary w-1/2 h-[22rem] relative">
                    </div>
               </div>
               {/* Quotes */}
               <div className="mt-40 px-16">
                    <div className="bg-primary w-full h-96 relative">
                         <div className="px-40 flex items-center justify-center h-full">
                              <h1 className="text-white text-3xl font-medium text-center">
                                   "Bahasa adalah jendela dunia, dan setiap bahasa adalah jembatan untuk mengenal dunia yang lebih luas."
                              </h1>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default HomePage