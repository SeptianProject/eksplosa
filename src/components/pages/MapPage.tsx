import React from 'react'
import ModalLayout from '../layouts/ModalLayout'
import { modalDatas } from '../../assets'
import WrapperPage from './Wrapper'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { RootState } from '../../redux/store'
import { showModal } from '../../redux/slices/modalSlice'

const MapPage = () => {
     const dispatch = useAppDispatch()
     const { isOpen, currentIndex } = useAppSelector((state: RootState) => state.modal)

     React.useEffect(() => {
          const timer = setTimeout(() => {
               dispatch(showModal({ type: 'map' }))
          }, 500);

          return () => clearTimeout(timer)
     }, [dispatch])

     const currentModalData = modalDatas.mapPage[currentIndex]

     return (
          <WrapperPage>
               {currentModalData && (
                    <ModalLayout
                         image={currentModalData.image}
                         title={currentModalData.title}
                         description={currentModalData.description}
                         isOpen={isOpen}
                    />
               )}
               <div className='text-center space-y-2'>
                    <h1 className='text-4xl font-bold'>Peta Bahasa Daerah.</h1>
                    <p className='font-medium text-darkText/80'>
                         Jelajahi berbagai bahasa daerah yang tersebar di seluruh wilayah Indonesia!
                    </p>
               </div>
               {/* map */}
               <div className=''>
                    <iframe
                         src="https://www.google.com/maps/d/u/0/embed?mid=1JjT9GKZ4d1j4c7J3Hq6a4l7i7vQ"
                         width="100%"
                         height="480"
                         style={{ border: 0 }}
                         allowFullScreen
                         loading="lazy"
                    />
               </div>
          </WrapperPage>
     )
}

export default MapPage