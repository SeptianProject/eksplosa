import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hook'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { initializeUi } from '../redux/slices/uiSlice'

const useUi = () => {
     const dispatch = useAppDispatch()
     const screenSize = useSelector((state: RootState) => state.ui.screenSize)

     useEffect(() => {
          dispatch(initializeUi())
     }, [dispatch])

     return {
          screenSize
     }
}

export default useUi