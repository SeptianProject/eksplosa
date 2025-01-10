import React from 'react'
import WrapperPage from './Wrapper'
import { useAppDispatch } from '../../redux/hook'
import { showModal } from '../../redux/slices/modalSlice'
import Button from '../elements/Button'

const MapPage = () => {
     const dispatch = useAppDispatch()
     const languageData = ['Jawa', 'Sunda', 'Madura', 'Bali', 'Sumatera']

     React.useEffect(() => {
          const timer = setTimeout(() => {
               dispatch(showModal({ type: 'map' }))
          }, 500);

          return () => clearTimeout(timer)
     }, [dispatch])

     return (
          <WrapperPage>
               <div className='text-center space-y-2 pt-40'>
                    <h1 className='text-4xl font-bold'>Peta Bahasa Daerah.</h1>
                    <p className='font-medium text-darkText/80'>
                         Jelajahi berbagai bahasa daerah yang tersebar di seluruh wilayah Indonesia!
                    </p>
               </div>
               {/* map */}
               <div className=''>
                    <div className='flex items-center justify-center gap-x-4 pt-20'>
                         {languageData.map((language, index) => (
                              <Button
                                   key={index}
                                   title={language}
                                   onClick={() => { }}
                              />
                         ))}
                    </div>
               </div>
          </WrapperPage>
     )
}

export default MapPage