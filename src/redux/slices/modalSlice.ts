import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ModalType, QuizModalVariant } from "../../types"

interface ModalState {
     isOpen: boolean,
     modalType: ModalType | null,
     variant: QuizModalVariant | null,
     currentIndex: number,
     shouldProgress: boolean
}

const initialState: ModalState = {
     isOpen: false,
     modalType: null,
     variant: null,
     currentIndex: 0,
     shouldProgress: false
}

const modalSlice = createSlice({
     name: 'modal',
     initialState,
     reducers: {
          showModal: (state, action: PayloadAction<{
               type: ModalType
               variant?: QuizModalVariant
          }>) => {
               state.isOpen = true
               state.modalType = action.payload.type
               state.variant = action.payload.variant || null
          },
          hideModal: (state) => {
               state.isOpen = false
               if (state.modalType === 'quiz') {
                    state.currentIndex = 0
               }
               state.modalType = null
               state.variant = null
          },
          progressModal: (state) => {
               if (state.modalType === 'map') {
                    state.currentIndex += 1
               }
               state.shouldProgress = true
          },
          resetProgress: (state) => {
               state.shouldProgress = false
          }
     }
})

export const { showModal, hideModal, progressModal, resetProgress } = modalSlice.actions
export default modalSlice.reducer