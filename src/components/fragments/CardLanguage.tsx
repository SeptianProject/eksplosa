import React from "react";
import useUi from "../../hooks/useUi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface LanguageItem {
     image: string;
     title: string;
}

interface CardLanguageProps {
     languageData: LanguageItem[]
}

const CardLanguage: React.FC<CardLanguageProps> = ({ languageData }) => {
     const { screenSize } = useUi()
     const isMobile = screenSize === 'mobile'

     const CardContent = ({ item, index }: { item: { image: string; title: string }, index: number }) => (
          <>
               <img src={item.image} alt="" />
               <div className="flex items-center md:items-start justify-center gap-x-2 w-full h-full">
                    <div className="bg-secondary/20 rounded-full size-5 flex items-center justify-center">
                         <span className="text-secondary text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-secondary font-medium text-sm">{item.title}</h3>
               </div>
          </>
     )

     if (isMobile) {
          return (
               <Swiper
                    grabCursor
                    slidesPerView={2}
                    spaceBetween={15}
                    className="w-full"     >
                    {languageData.map((item, index) => (
                         <SwiperSlide key={`${item.title}-${index}`}
                              className="bg-white rounded-tr-2xl rounded-b-2xl w-full pt-2 pb-6 
                              md:h-60 shadow-xl md:shadow-black/30">
                              <CardContent item={item} index={index} />
                         </SwiperSlide>
                    ))}
               </Swiper>
          );
     } else {
          return (
               <div className="lg:flex items-center justify-center gap-x-7 w-full h-full">
                    {languageData.map((item, index) => (
                         <div key={`${item.title}-${index}`}
                              className="bg-white rounded-tr-2xl rounded-b-2xl w-full pt-2 pb-6 
                              md:h-60 shadow-xl md:shadow-black/30">
                              <CardContent item={item} index={index} />
                         </div>
                    ))}
               </div>
          )
     }
}

export default CardLanguage