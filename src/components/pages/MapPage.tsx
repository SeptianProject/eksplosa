import { IoIosArrowBack } from 'react-icons/io'
import ModalLayout from '../layouts/ModalLayout'
import { modalDatas } from '../../assets'
import React from 'react'

const MapPage = () => {
     const [currentModalIndex, setCurrentModalIndex] = React.useState<number>(0)
     const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

     React.useEffect(() => {
          const timer = setTimeout(() => {
               setIsModalOpen(true)
          }, 500);

          return () => clearTimeout(timer)
     }, [])

     const handleNext = () => {
          if (currentModalIndex < modalDatas.mapPage.length - 1) {
               setIsModalOpen(false)

               setTimeout(() => {
                    setCurrentModalIndex(prev => prev + 1)
                    setIsModalOpen(true)
               }, 500);
          } else {
               setIsModalOpen(false)
          }
     }

     const handleClose = () => {
          setIsModalOpen(false)
     }

     return (
          <section className='relative pt-10 min-h-screen'>
               {modalDatas.mapPage.map((modalData, index) => (
                    <ModalLayout
                         key={index}
                         isQuizModal={false}
                         image={modalData.image}
                         title={modalData.title}
                         description={modalData.description}
                         isOpen={isModalOpen && currentModalIndex === index}
                         onClose={handleClose}
                         onNext={handleNext}
                         isLastModal={index === modalDatas.mapPage.length - 1}
                    />
               ))}
               <button
                    type='button'
                    onClick={() => window.history.back()}
                    className='absolute top-10 left-20 bg-blueAccent rounded-md p-1'>
                    <IoIosArrowBack className='size-7 text-primary' />
               </button>
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
          </section>
     )
}

export default MapPage