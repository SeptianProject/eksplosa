import React from 'react'
import { assets } from '../../assets'

export interface CardInformationProps {
     number: number
     title: string
     titleSpan?: string
     description: string
     isFeatured?: boolean
}

const CardInformation: React.FC<CardInformationProps> = ({
     number,
     title,
     titleSpan,
     description,
     isFeatured
}) => {
     return (
          <div className='relative bg-white !border-[0.2px] border-graySurface/50 
          w-full h-80 rounded-3xl px-10 py-12 shadow-md overflow-hidden'>
               <div className='space-y-3'>
                    <div className='bg-blueAccent rounded-md size-14 flex items-center justify-center'>
                         <h1 className='text-2xl text-primary font-semibold text-center'>{number}</h1>
                    </div>
                    <h1 className='text-3xl font-semibold text-primary'>
                         {title}
                         <span className='text-darkText ml-2'>{titleSpan}</span>
                    </h1>
                    <p className='text-sm max-w-sm tracking-wide '>{description}</p>
                    {isFeatured ? <h5 className='text-primary font-medium text-sm'>Coba Fitur&gt;&gt;</h5> : null}
               </div>
               <img src={assets.batikBlue} alt="" className='absolute right-5 top-0 size-40 object-contain' />
               <img src={assets.batikBlue} alt="" className='absolute -right-10 -bottom-10 size-40 object-contain' />
          </div>
     )
}

export default CardInformation