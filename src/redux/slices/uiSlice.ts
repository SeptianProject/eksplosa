import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "../store"

interface UiState {
     screenSize: 'mobile' | 'tablet' | 'desktop'
}

const getInitialScreenSize = (): 'mobile' | 'tablet' | 'desktop' => {
     if (typeof window === 'undefined') return 'desktop'

     const width = window.innerWidth
     if (width < 768) return 'mobile'
     if (width < 1024) return 'tablet'

     return 'desktop'
}

const initialState: UiState = {
     screenSize: getInitialScreenSize()
}

const uiSlice = createSlice({
     name: 'ui',
     initialState,
     reducers: {
          setScreenSize(state, action: PayloadAction<'mobile' | 'tablet' | 'desktop'>) {
               state.screenSize = action.payload
          }
     }
})

export const { setScreenSize } = uiSlice.actions

export const initializeUi = (): AppThunk => (dispatch) => {
     const handleResize = () => {
          const width = window.innerWidth
          let newSize: 'mobile' | 'tablet' | 'desktop'

          if (width < 768) newSize = 'mobile'
          else if (width < 1024) newSize = 'tablet'
          else newSize = 'desktop'

          dispatch(setScreenSize(newSize))
     }
     window.addEventListener('resize', handleResize)
}

export default uiSlice.reducer